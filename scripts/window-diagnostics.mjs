#!/usr/bin/env node

const help = `window-diagnostics

Intended purpose:
  Inspect macOS windows through safe mechanisms such as CGWindow metadata,
  Accessibility/System Events, and screenshot-visible evidence.

Current status:
  Placeholder. No app inspection is performed yet.

Future options:
  --app <name>
  --json
  --screenshot <path>
`;

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(help);
  process.exit(0);
}

console.log('window-diagnostics placeholder: no action taken. Run with --help for intended usage.');
