#!/usr/bin/env node

const help = `app-readiness-check

Intended purpose:
  Classify app readiness as visual-ready, control-ready, both, or blocked.

Current status:
  Placeholder. No processes or windows are inspected yet.

Future options:
  --app <name>
  --expect-process <name>
  --artifact-dir <path>
`;

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(help);
  process.exit(0);
}

console.log('app-readiness-check placeholder: no action taken. Run with --help for intended usage.');
