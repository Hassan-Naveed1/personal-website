# Personal Website — Terminal Command Sheet

**Environment:** Windows, VS Code, PowerShell, Node.js, TypeScript and Git

## 1. Check installed tools

```powershell
node --version                 # Shows the installed Node.js version
npm.cmd --version              # Shows the installed npm version
npx.cmd tsc --version          # Shows the installed TypeScript compiler version
```

## 2. Set up the Node.js project

```powershell
npm.cmd init -y                # Creates package.json with default project information
npm.cmd install --save-dev typescript  # Installs TypeScript as a development dependency
npx.cmd tsc --init             # Generates the TypeScript configuration file tsconfig.json
```

## 3. Compile and run TypeScript

```powershell
npx.cmd tsc                    # Compiles TypeScript files using tsconfig.json
node .\dist\index.js           # Runs the compiled JavaScript file
npm.cmd run build              # Runs the project's build script defined in package.json
npm.cmd start                  # Runs the project's start script defined in package.json
```

## 4. Check Git status and ignored folders

```powershell
git status                     # Shows the current branch, staged changes and untracked files
git check-ignore node_modules/ dist/  # Checks whether Git ignores these folders
```

## 5. Stage and commit changes

```powershell
git add .gitignore package.json package-lock.json tsconfig.json src/  # Stages the project setup files
git commit -m "Set up Node.js and TypeScript"  # Saves staged changes as a local commit
```

## 6. Push changes to GitHub

```powershell
git push                       # Uploads local commits to the configured remote repository
```

## Quick reference

- **Node.js** runs JavaScript code.
- **npm** manages project packages and scripts.
- **npx** runs locally installed command-line tools.
- **TypeScript compiler (`tsc`)** compiles TypeScript into JavaScript.
- **Git** tracks changes and creates commits.
- **GitHub** hosts your remote repository.

### Important notes

- In PowerShell, use `npm.cmd` and `npx.cmd` if the `.ps1` versions are blocked by your execution policy.
- Run `npx.cmd tsc` after changing TypeScript code before running the generated JavaScript.
- `git commit` saves changes locally; `git push` sends committed changes to GitHub.
- `node_modules/` and `dist/` are ignored by Git through `.gitignore`.
