import { useState } from 'react';

export type Commit = { hash: string; msg: string; branch: string };

export const useGit = () => {
  const [isInit, setIsInit] = useState(false);
  const [branch, setBranch] = useState('main');
  const [branches, setBranches] = useState(['main']);
  const [staged, setStaged] = useState<string[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const files = ['index.html', 'styles.css', 'app.js'];

  const execute = (val: string) => {
    const parts = val.trim().split(/\s+/);
    const cmd = parts[0];
    const sub = parts[1];
    const args = parts.slice(2);

    // 1. Non-Git Commands
    if (cmd === 'help') {
      return { 
        res: "Commands: git init, git add ., git commit -m 'msg', git branch [name], git checkout [name], clear", 
        type: 'info' 
      };
    }

    if (cmd !== 'git') {
      return { res: `command not found: ${cmd}`, type: 'error' };
    }

    // 2. Git Safety Check
    if (!isInit && sub !== 'init') {
      return { res: "fatal: not a git repository (or any of the parent directories): .git", type: 'error' };
    }

    // 3. Git Subcommands
    switch (sub) {
      case 'init':
        if (isInit) return { res: "Reinitialized existing Git repository.", type: 'info' };
        setIsInit(true);
        return { res: "Initialized empty Git repository.", type: 'success', action: 'INIT' };

      case 'add':
        if (args[0] === '.' || args[0] === '-A') {
          setStaged([...files]);
          return { res: "Files added to staging area.", type: 'success', action: 'ADD' };
        }
        return { res: "usage: git add <filepattern>", type: 'error' };

      case 'commit':
        if (staged.length === 0) {
          return { res: "nothing to commit, working tree clean", type: 'info' };
        }
        // Extract message between quotes
        const msgMatch = val.match(/'([^']+)'/) || val.match(/"([^"]+)"/);
        const msg = msgMatch ? msgMatch[1] : "Update";
        const hash = Math.random().toString(16).substring(2, 8);
        
        const newCommit = { hash, msg, branch };
        setCommits([newCommit, ...commits]);
        setStaged([]);
        return { 
          res: `[${branch} ${hash}] ${msg}`, 
          type: 'success', 
          action: 'COMMIT',
          data: newCommit 
        };

      case 'branch':
        if (!args[0]) {
          return { res: branches.map(b => b === branch ? `* ${b}` : `  ${b}`).join('\n'), type: 'info' };
        }
        const newBranch = args[0];
        if (branches.includes(newBranch)) return { res: `fatal: a branch named '${newBranch}' already exists`, type: 'error' };
        setBranches([...branches, newBranch]);
        return { res: `Branch '${newBranch}' created.`, type: 'success', action: 'BRANCH_CREATE' };

      case 'checkout':
        const target = args[0];
        if (!branches.includes(target)) return { res: `error: pathspec '${target}' did not match any file(s) known to git`, type: 'error' };
        setBranch(target);
        return { res: `Switched to branch '${target}'`, type: 'success', action: 'CHECKOUT' };

      case 'status':
        let status = `On branch ${branch}\n`;
        if (staged.length > 0) {
          status += `Changes to be committed:\n  (use "git restore --staged <file>..." to unstage)\n`;
          status += staged.map(f => `        new file:   ${f}`).join('\n');
        } else {
          status += "nothing to commit, working tree clean";
        }
        return { res: status, type: 'info' };
      
      case 'merge':
        const targetBranch = args[0];
        
        // 1. Validation
        if (!targetBranch) return { res: "fatal: specify a branch to merge", type: "error" };
        if (targetBranch === branch) return { res: "Already up to date.", type: "info" };
        if (!branches.includes(targetBranch)) {
          return { res: `merge: ${targetBranch} - not something we can merge`, type: "error" };
        }

        // 2. Identify commits for both branches
        const currentCommits = commits.filter(c => c.branch === branch);
        const targetCommits = commits.filter(c => c.branch === targetBranch);

        if (targetCommits.length === 0) return { res: "Already up to date.", type: "info" };

        // 3. Simple Merge Logic: Bring target commits into current branch
        // Note: In a real Git environment, this creates a "Merge Commit" 
        // or fast-forwards. Here, we'll simulate the "bringing over" of commits.
        
        const existingHashes = new Set(currentCommits.map(c => c.hash));
        const commitsToMerge = targetCommits
          .filter(c => !existingHashes.has(c.hash))
          .map(c => ({ ...c, branch })); // Re-tag them to the current branch

        if (commitsToMerge.length === 0) {
          return { res: "Already up to date.", type: "info" };
        }

        // Create a specific Merge Commit (The "Three-Way" simulation)
        const mergeHash = Math.random().toString(16).substring(2, 8);
        const mergeCommit: Commit = { 
          hash: mergeHash, 
          msg: `Merge branch '${targetBranch}' into ${branch}`, 
          branch 
        };

        setCommits([mergeCommit, ...commitsToMerge, ...commits]);
        
        return { 
          res: `Updating ${currentCommits[0]?.hash || 'initial'}..${targetCommits[0].hash}\nFast-forward\nMerged ${commitsToMerge.length} commits.`, 
          type: 'success', 
          action: 'MERGE' 
        };

      default:
        return { res: `git: '${sub}' is not a git command. See 'help'.`, type: 'error' };
    }
  };

  return { isInit, branch, branches, staged, commits, files, execute };
};