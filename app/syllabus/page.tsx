import { SyllabusModule } from './components/Syllybus';

const syllabusData = [
  {
    index: "01",
    title: "Git Fundamentals & Setup",
    link : "git-fundamentals",
    description: "Establish the environment and understand the 'why' behind version control.",
    tags: ["Environment", "CLI Basics"],
    commands: ["mkdir project-x", "cd project-x", "git config --global user.name"],
    icon: "terminal",
    objectives: ["Mastery of shell navigation", "Global configuration management", "Understanding the motivation for Git"]
  },
  {
    index: "02",
    title: "Core Git Workflow",
    description: "The bread and butter of your daily engineering lifecycle. Confident tracking and undoing.",
    tags: ["Tracking", "Versioning"],
    commands: ["git add .", "git commit -m 'feat: init'", "git status"],
    icon: "history",
    milestone: "Build a local artifact repository with full version history and selective ignore rules."
  },
  {
    index: "03",
    title: "Branching & Collaboration",
    description: "Parallel development. Scaling your work without breaking the foundation.",
    tags: ["Parallelism", "Merging"],
    commands: ["git checkout -b dev", "git merge main", "git branch -D old"],
    icon: "account_tree",
    strategy: "Learn to manage technical debt and isolate features. We cover Fast-forward merges and manual conflict resolution."
  },
  {
    index: "04",
    title: "Remote Repositories",
    description: "Connecting to the cloud. Working like a real-world developer with teams across the globe.",
    tags: ["GitHub", "Open Source"],
    commands: ["git remote add origin", "git push -u origin", "git pull upstream"],
    icon: "cloud_sync",
    remotes: [
      { name: "Forking", icon: "fork_right", desc: "Clone & Contribute" },
      { name: "Pull Requests", icon: "reviews", desc: "Code Review Culture" },
      { name: "Upstream", icon: "sync", desc: "Staying in Sync" }
    ]
  }
];

export default function SyllabusPage() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-black">
      <main className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="max-w-4xl mb-20 relative animate-fade-up">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <h1 className="text-6xl md:text-7xl font-headline font-bold tracking-tighter mb-4">Program Syllabus</h1>
          <p className="text-on-surface-variant text-xl max-w-2xl font-light">Architect your future. A comprehensive journey through the digital foundations.</p>
        </header>

        <div className="space-y-12 max-w-6xl relative">
          <div className="absolute left-7.75 top-4 bottom-4 w-px bg-linear-to-b from-primary/50 via-outline-variant/20 to-transparent hidden md:block"></div>
          
          {syllabusData.map((module, idx) => (
            <SyllabusModule key={module.index} {...module} delay={`${idx * 0.15}s`} />
          ))}
        </div>
      </main>
    </div>
  );
}