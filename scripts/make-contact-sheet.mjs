#!/usr/bin/env node

const help = `make-contact-sheet

Intended purpose:
  Build a labelled contact sheet from numbered screenshots in an artifact directory.

Current status:
  Placeholder. No images are read or written yet.

Future options:
  --screenshots <dir>
  --output <path>
  --title <text>
`;

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(help);
  process.exit(0);
}

console.log('make-contact-sheet placeholder: no action taken. Run with --help for intended usage.');
