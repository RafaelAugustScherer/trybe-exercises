# Block 2 - Git & GitHub

# Git | GitHub | GitLab | BitBucket

Git is the program whose function is to manage software version;

GitHub, GitLab & BitBucket are platforms to share, publish and colaborate on Git repositories.

# Branches

`branch master` - Main version, More stable

`branch` - Separated version from master; New features

`local branch*` - Selected branch locally

# Commands

```bash
#Init Cmds
git init # Start a new repository in current dir
git add

# List Cmds
git branch # List all repo branches
git status # Status of local branch compared to repo
git log # All git commands executed up to that moment

# Modify Cmds
git add [path] # Add file | dir to local branch
git rm [path] # Remove file | dir from local branch
git rm --cached [path] # Remove file | dir not yet commited from local branch
git branch [name] # Create new branch
git commit [msg] # Update code in local branch
git push # Upload the code to a repository branch

# Recommended to do in GitHub's graphic interface
git checkout [branch] # Change local branch
git merge [branch] # Join local branch to another spec. branch
```