#!/usr/bin/env node

const help = `capture-screenshot

Intended purpose:
  Capture a timestamped macOS screenshot into a proof artifact directory.

Current status:
  Placeholder. No screenshot is captured yet.

Future options:
  --output <path>
  --label <name>
  --window <app-or-window-name>
`;

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(help);
  process.exit(0);
}

console.log('capture-screenshot placeholder: no action taken. Run with --help for intended usage.');
