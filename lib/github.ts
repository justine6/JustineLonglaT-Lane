// lib/github.ts
import "server-only";

const OWNER = "justine6";
const REPO = "JustineLonglaT-Lane";

type RepoApi = {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  subscribers_count: number;
  pushed_at: string;
  default_branch: string;
};

type CommitApi = {
  sha: string;
  html_url: string;
};

export async function getRepoStats() {
  const token = process.env.GITHUB_TOKEN;

  // Token is recommended, but repo is public so it can still work without it (rate limits lower).
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  // 1) Repo metadata
  const repoRes = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}`, {
    headers,
    next: { revalidate: 3600 }, // refresh hourly
  });

  if (!repoRes.ok) throw new Error(`GitHub repo fetch failed: ${repoRes.status}`);
  const repo: RepoApi = await repoRes.json();

  // 2) Latest commit on default branch
  const commitRes = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/commits/${repo.default_branch}`,
    { headers, next: { revalidate: 3600 } }
  );

  let latestCommitSha = "";
  let latestCommitUrl = "";
  if (commitRes.ok) {
    const commit: CommitApi = await commitRes.json();
    latestCommitSha = commit.sha;
    latestCommitUrl = commit.html_url;
  }

  return {
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    openIssues: repo.open_issues_count,
    watchers: repo.subscribers_count, // ✅ true “watchers”
    pushedAt: repo.pushed_at,
    defaultBranch: repo.default_branch,
    latestCommitSha,
    latestCommitUrl,
  };
}
