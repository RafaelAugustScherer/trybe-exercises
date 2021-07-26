# Git | GitHub | GitLab | BitBucket

Git is the program whose function is to manage software version;

GitHub, GitLab & BitBucket are platforms to share, publish and colaborate on Git repositories.

---

# Branches

`branch master` - Main version, More stable

`branch` - Separated version from master; New features

`local branch*` - Selected branch locally

---

# Commands

## Init Commands

```bash
git init # Start a new repository in current dir
git add . # Sync all files in the current folder to repository
git remote add origin [repoURL] # Link local repository to one already created remotely
git commit -m "First commit" # First commit of git synced files
git push -u origin master # Push committed files to remote repository

git clone [repoURL] # Clone remote repository to current local folder
```

---

## Help Commands

```bash
git status # Status of local branch compared to repo
git fetch # Compare local repo to remote repo commits/changes
git branch # List all repo branches
git log # All git commits and its properties executed up to that moment
```

---

## Edit Commands

```bash
# Easily done in the terminal interface
git add [path] # Add file | dir to local branch
git rm [path] # Remove file | dir from local branch
git rm --cached [path] # Remove file | dir not yet commited from local branch
git checkout [CommitID]~1 [path] # Restore file previously deleted

git branch [name] # Create new branch
git commit [msg] # Update code in local branch
git push # Upload the code to a repository branch

# Recommended to do in GitHub's graphic interface
git checkout [branch] # Change local branch
git merge [branch] # Join local branch to another spec. branch
```

---

## Sync Commands

```bash
git push # Sync all commits locally made to remote repo
git pull # Sync all commits remotely made to local repo

git cherry-pick [commitID] # Share commits between branches
```

# Git Ignore

The file `.gitignore` contains a list of all files and directories that must be ignored when `git commit` is executed. To create it, just execute the following:

```bash
touch .gitignore
git add .gitignore 
```

**Tip**: Use **[this](https://www.toptal.com/developers/gitignore)** website to create a sample `.gitingore` based on the editor you are using. It automatically adds specific editor **config** and **dump** files to the list.

---

# Pull Requests

The Pull Requests are detailed merge processes made to document every change made in the branch, explain how the changes are helpful, fix conflicts between branches, receive feedback and possible fixes during the process. All of this allows for a safe and well documented process to add new features to the project.

Pull Requests can be created through the repository interface when there is a divergency between the `master` branch and the alternative branches.