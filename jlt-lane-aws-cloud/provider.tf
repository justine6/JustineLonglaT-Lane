terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "jlt-lane-terraform-state"
    key            = "env/dev/network-foundation.tfstate"
    region         = "us-east-1"
    dynamodb_table = "jlt-lane-terraform-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = var.aws_region
}