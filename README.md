# codex-mac-ui

Reusable Codex/macOS UI automation and visual proof tooling for desktop app audits.

This repository captures the reusable method behind reliable app UI/UX proof work:

- step-by-step screenshot audits
- visual readiness versus control readiness
- Accessibility/System Events/window diagnostics
- startup dialog and crash-report pane handling
- screenshot and video walkthrough evidence
- claim-boundary reporting
- honest blocked-state classification

The toolkit is intentionally generic. It does not contain Inspire product code, private generated artifacts, local screenshots, or app-specific product claims.

## Start Here

Read [SKILLS.md](SKILLS.md) for the Codex skill instructions. The skill defines when to use this repo, the evidence hierarchy, standard artifact layout, dialog safety policy, classification vocabulary, and final report format.

## Artifact Philosophy

The central rule is: show, do not assume.

Every important UI action should produce a timestamped artifact bundle under:

```text
test-artifacts/<test-name>/<timestamp>/
```

Generated artifacts are ignored by default. Commit harnesses, templates, schemas, and docs; do not commit private screenshots or videos unless a repo explicitly intends to store public-safe demo media.

## Safety Warning

The default policy is non-destructive:

- do not delete user projects, templates, libraries, or broad caches
- do not reset app preferences or macOS permissions without explicit approval
- do not dismiss unknown dialogs
- do not submit crash reports automatically
- do not stage generated artifacts by default

## Current Status

This is a scaffold for a reusable Mac UI proof toolkit. The scripts are safe placeholders with `--help` output and TODOs. They are intended to become small reusable utilities for screenshot capture, contact sheets, window diagnostics, app readiness checks, and workflow video walkthroughs.

## Validation

```bash
npm run check
npm test
```
