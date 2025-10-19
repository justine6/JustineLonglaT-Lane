[CmdletBinding()]
param(
  [string]$FromTag,
  [string]$ToTag,
  [switch]$DryRun,
  [switch]$Open
)

$ErrorActionPreference = "Stop"

function Ensure-Git { git --version *>$null }
function RepoRoot { (git rev-parse --show-toplevel).Trim() }
function FetchTags { git fetch --tags *>$null }
function DeployTags { git tag --list "deploy-*" --sort=-creatordate }
function RemoteWeb {
  $u = (git config --get remote.origin.url).Trim()
  if ($u -match "github\.com[:/](?<org>[^/]+)/(?<repo>[^\.]+)") { "https://github.com/$($matches.org)/$($matches.repo)" }
}

function GroupCommits([string]$From,[string]$To){
  $lines = git log --no-merges --pretty="%h %s" "$From..$To"
  $bins = @{feat=@();fix=@();chore=@();docs=@();refactor=@();perf=@();test=@();build=@();ci=@();revert=@();other=@()}
  foreach($l in $lines){ if(-not $l){continue}
    $sha,$msg = $l.Split(' ',2)
    $k = switch -Regex ($msg){
      '^feat(\(|:)'     {'feat'}
      '^fix(\(|:)'      {'fix'}
      '^chore(\(|:)'    {'chore'}
      '^docs(\(|:)'     {'docs'}
      '^refactor(\(|:)' {'refactor'}
      '^perf(\(|:)'     {'perf'}
      '^test(\(|:)'     {'test'}
      '^build(\(|:)'    {'build'}
      '^ci(\(|:)'       {'ci'}
      '^revert(\(|:)'   {'revert'}
      default           {'other'}
    }
    $bins[$k] += [pscustomobject]@{Sha=$sha;Msg=$msg}
  }
  $bins
}

function FormatGroup([string]$Title,$Items,[string]$Web){
  if(-not $Items -or $Items.Count -eq 0){ return "" }
  $sb=[System.Text.StringBuilder]::new()
  $null=$sb.AppendLine("### $Title")
  foreach($i in $Items){
    $pr = ($i.Msg | Select-String -Pattern '(?<=#)\d+' -AllMatches).Matches.Value | Select-Object -First 1
    $shaLink = if($Web){"[$($i.Sha)]($Web/commit/$($i.Sha))"}else{$i.Sha}
    $msg = if($Web -and $pr){ $i.Msg -replace "#$pr","[#$pr]($Web/pull/$pr)" } else { $i.Msg }
    $null=$sb.AppendLine("* $shaLink — $msg")
  }
  $null=$sb.AppendLine()
  $sb.ToString()
}

Ensure-Git
Set-Location (RepoRoot)
FetchTags

$tags = DeployTags
if(-not $ToTag){ $ToTag = $tags | Select-Object -First 1 }
if(-not $FromTag){ $FromTag = $tags | Select-Object -Skip 1 -First 1 }
if(-not $FromTag -or -not $ToTag){ throw "Could not resolve FromTag/ToTag. Found:`n$($tags -join "`n")" }

$web = RemoteWeb
$groups = GroupCommits $FromTag $ToTag
$today = Get-Date -Format 'yyyy-MM-dd'
$header = "## $ToTag — $today"

$body = @()
$body += $header
$body += ""
$body += FormatGroup "Features"          $groups.feat     $web
$body += FormatGroup "Fixes"             $groups.fix      $web
$body += FormatGroup "Refactors"         $groups.refactor $web
$body += FormatGroup "Performance"       $groups.perf     $web
$body += FormatGroup "Docs"              $groups.docs     $web
$body += FormatGroup "Tests / CI / Build" (@($groups.test + $groups.ci + $groups.build)) $web
$body += FormatGroup "Chores"            $groups.chore    $web
$body += FormatGroup "Reverts"           $groups.revert   $web
$body += FormatGroup "Other"             $groups.other    $web
$note = (($body -join "`n").TrimEnd() + "`n")

$changelog = Join-Path (RepoRoot) "CHANGELOG.md"
$release = Join-Path (RepoRoot) "ReleaseNotes.md"

# ReleaseNotes.md (overwrite)
Set-Content -Path $release -Value ($note + "`n") -Encoding UTF8

# Prepend to CHANGELOG.md
if(Test-Path $changelog){
  $existing = Get-Content $changelog -Raw
  Set-Content -Path $changelog -Value ($note + "`n`n" + $existing.Trim()) -Encoding UTF8
}else{
  Set-Content -Path $changelog -Value ($note + "`n") -Encoding UTF8
}

Write-Host "Generated ReleaseNotes.md and updated CHANGELOG.md" -ForegroundColor Green
