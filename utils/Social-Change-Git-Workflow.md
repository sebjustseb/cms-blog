# Social Change Git Workflow

## 1. Create a New Branch
Always basing from the "develop" branch create your new branch

```bash
# Create and switch to a new branch
git checkout -b feature/my-feature
Replace feature/my-feature with a branch name that makes sense for your task.
```
## 2. Make and Commit Changes
Now you can make changes to your code and commit them.

```bash
# Make changes to your files
# ...

# Stage the changes
git add .

# Commit the changes with a descriptive message
git commit -m "Add feature: Implement something awesome"
Repeat the process for all the changes you want to make in this branch.
```

## 3. Push the Branch
Push the branch to the remote repository.

```bash
git push origin feature/my-feature
```

## 4. Create a Pull Request
Select the branch you just pushed (feature/my-feature) as the "compare" branch.
Choose the base branch (develop) as "base" to which you want to merge your changes.
Review the changes and provide a descriptive title and comment.
Click "Create Pull Request"

## 5. Review and Collaborate
One team member must review the PR.

## 6. Merge the Pull Request
Once your changes are reviewed and approved, you can merge the pull request. This integrates your changes into the base branch (develop in this case).

## 7. Delete the Branch
After your changes are merged, it's a good practice to delete the feature branch both locally and remotely.

