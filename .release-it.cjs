module.exports = {
  hooks: {
    "before:init": ["pnpm check", "pnpm build"],
  },
  git: {
    requireBranch: "main",
    requireCommits: true,
    requireCleanWorkingDir: true,
    commitMessage: "🚀 Release v${version}",
    commitArgs: ["--no-verify", "-S"],
    tagArgs: ["-s"],
  },
  github: {
    release: true,
    releaseName: "Release v${version}",
  },
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      ignoreRecommendedBump: true,
      infile: "CHANGELOG.md",
      preset: {
        name: "conventionalcommits",
        types: [
          { type: "feat", section: "Feature Updates", hidden: false },
          { type: "fix", section: "Bug Fixes", hidden: false },
          {
            type: "refactor",
            section: "Code Refactors",
            hidden: false,
          },
          {
            type: "docs",
            section: "Documentation Changes",
            hidden: false,
          },
          {
            type: "chore",
            section: "Maintanance Updates",
            hidden: false,
          },
          { type: "build", section: "Build Updates", hidden: false },
          { type: "test", section: "Test Updates", hidden: false },
          { type: "style", section: "Other Changes", hidden: false },
          {
            type: "perf",
            section: "Performance Improvements",
            hidden: false,
          },
          { type: "ci", section: "CI Changes", hidden: false },
          { type: "revert", section: "Updates Reverted", hidden: false },
        ],
      },
    },
  },
};
