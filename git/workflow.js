git init
// git projects have three parts
    // working directory
    // staging area
    // repository
// tracked files are self explanetory
// untracked files means it hasn't been added yet
git add . // moves files into staging area
git commit -m 'message' // moves files to local repository
git push origin master // commits files to online repository

git diff filename // check differences between file in working area vs staging area

git log // returns list of all previous commits

// the commit you are currently on is the HEAD commit
git show HEAD // returns same as git log but for the last commit
git checkout HEAD filename // will restore the file in your working directory to look exactly as it did when you last made a commit.
git reset HEAD filename // reset a file in the staging area to be the same as the HEAD commit

git reset commit_SHA // uses the first 7 characters of a commits hash
git reset '5d69206' // HEAD is now set to that commit & the commits that came after that are gone
// for visual go to this link, 7/8 https://www.codecademy.com/courses/learn-git/lessons/git-backtracking/exercises/reset-review?action=resume_content_item

git branch // tells you what branch you're on
git branch new_branch // to make a new branch (does NOT move you to that branch)
git checkout branch_name // to switch branches

git merge branch_name // be on master branch, this will merge to master
git branch -d branch_name // to delete a branch after merging

git remote -v // returns origin (both fetch and push)
git fetch // compares your cloned version to the origin
git merge origin/master // makes your working copy up to date with repository master

// The workflow for Git collaborations typically follows this order:
// 1. Fetch and merge changes from the remote
// 2. Create a branch to work on a new project feature
// 3. Develop the feature on your branch and commit your work
// 4. Fetch and merge from the remote again (in case new commits were made while you were working)
// 5. Push your branch up to the remote for review
