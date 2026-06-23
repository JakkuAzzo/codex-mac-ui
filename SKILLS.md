# App UI/UX Automation & Visual Proof Skill

## Purpose

This skill helps Codex automate and assess desktop app workflows through visual evidence, step-by-step screenshots, accessibility and window inspection, honest blocker classification, and claim-safe reporting.

It is for proving what happened on screen, what automation could control, where a workflow blocked, and what the evidence does or does not support.

## When to Use This Skill

Use this skill when a task involves:

- desktop apps
- DAWs
- plugins
- native app windows
- UI/UX walkthroughs
- automation through Accessibility or System Events
- screenshot or video evidence
- app startup dialogs
- crash report panes
- blocked UI states
- visual proof requirements
- comparing what a human sees versus what automation can control

## Core Principles

1. Show, do not assume.
2. Screenshot every important step.
3. Separate visual readiness from control readiness.
4. Separate live app evidence from fixture/mock evidence.
5. Never fake successful states.
6. Block honestly when evidence is insufficient.
7. Prefer exact artifact paths and machine-readable summaries.
8. Do not claim product capability from visual evidence alone.
9. Handle known dialogs safely; block unknown dialogs.
10. Preserve user data and avoid destructive resets without explicit approval.

## Evidence Hierarchy

1. Manual observation
2. Screenshot-only evidence
3. Accessibility/System Events evidence
4. App/API evidence
5. Backend/API route evidence
6. Live app + backend + visual proof
7. Full end-to-end proof

Higher levels support stronger claims. Lower levels still matter, but they must not be overclaimed. For example, a visible plugin editor does not prove backend state reflection, and a screenshot walkthrough does not prove a live workflow recording.

## Standard Artifact Structure

Use:

```text
test-artifacts/<test-name>/<timestamp>/
```

Required files:

- `summary.json`
- `step-results.json`
- `timeline.json`
- `window-observations.json`
- `control-path-evidence.json`
- `ux-observations.json`
- `claim-boundaries.json`
- `README.md`
- `contact-sheet.png`

Screenshots go under `screenshots/`. Use numbered filenames with step numbers and state labels.

## Step-by-Step UI Audit Pattern

Use this flow:

1. Before launch
2. After launch request
3. Process detected
4. Startup dialog or main window
5. Startup dialog handled
6. Main window visible
7. Control path identified
8. Target object inserted/located
9. Editor/detail panel visible
10. Backend/app state prepared
11. State refresh/action attempted
12. Final state

For each step, record:

- action attempted
- screenshot
- visual observation
- control observation
- result
- reason
- next recommended action

## Visual Readiness vs Control Readiness

Visual readiness means the app or window is visible in a screenshot or window list.

Control readiness means automation can reliably interact with it through an app API, Accessibility, keyboard/frontmost control, a local helper, or an app-specific bridge.

In the Inspire/Ableton case, Ableton was visibly open. System Events and AX were weak. AbletonJS was usable. The correct classification was not "Ableton invisible"; it was "visible with AbletonJS as best control path."

## Known Dialog Handling

Only dismiss known safe dialogs.

Always screenshot before and after. Record visible text and button text. Do not dismiss unknown dialogs.

Examples:

- Restore previous set: click a safe negative option such as `No` or `Don't Restore`.
- Crash report pane: close it or choose a safe non-submitting option.
- Save dialog on teardown: choose a safe non-saving option only for disposable sessions.
- Unknown modal: block and screenshot.

## Startup and Teardown Policy

- start clean where possible
- check stale processes
- avoid forced kill unless explicitly part of bounded cleanup
- prefer app-native quit
- handle save dialogs safely only for disposable sessions
- confirm ports and processes are clean after run

## Control Path Discovery

Try and record:

- Accessibility/System Events
- keyboard/frontmost
- app-specific API
- local helper
- backend/API
- visual-only fallback

Classify the best control path:

- `accessibility`
- `system-events`
- `keyboard-frontmost`
- `app-api`
- `helper`
- `visual-only`
- `blocked`

## Fixture/Mock/Live Distinction

- Fixture/mock: simulated or controlled state, not live product behavior.
- Controlled renderer: real UI surface with injected test state.
- Live app: real app or plugin inside a real host.
- Screenshot walkthrough: generated visual narrative from proof artifacts, not a live recording.
- Live recording: actual screen capture of a workflow as it runs.

Every artifact must label which type it is.

## Result Classifications

Standard:

- `pass`
- `pass-with-warnings`
- `blocked`
- `failed`

Specific patterns:

- `<host>-visible-not-controllable`
- `<host>-control-path-available`
- `<app>-startup-dialog-handled`
- `<app>-unknown-dialog-blocked`
- `<app>-crash-report-pane-detected`
- `<app>-crash-report-pane-dismissed`
- `<plugin>-editor-visible`
- `<plugin>-state-not-reflected`
- `<workflow>-blocked-unproven`

## Claim Boundaries

Every artifact must state what it does not prove.

Examples:

- visual capture does not prove backend state reflection
- plugin editor visibility does not prove workflow completion
- screenshot walkthrough does not prove live workflow
- exact subset proof does not prove full reconstruction
- one host proof does not prove another host

## UX Assessment Checklist

Assess:

- visible title/status
- action labels
- next-step guidance
- warnings
- blocked/failed recovery
- proof badges
- progress indicators
- whether terminal logs are needed
- whether the user can understand state without developer context

## Button and Label Review Rules

Prefer:

- `Send Current Revision` over `Push`
- `Get Latest Revision` over `Pull`
- `Ask Helper to Build Session` over `Request Host Materialisation`
- `Rebuild Supported Session` over `Reconstruct Session` until full reconstruction is proven
- `Review Differences` over `Resolve Conflict`
- avoid `Sync` unless bidirectional sync is proven

## Video/Walkthrough Rules

Require:

- title cards
- warnings
- capture method label
- live versus screenshot walkthrough distinction
- no fake success
- blocked workflows shown as blocked only

## Safety Rules

Do not:

- delete user projects
- reset app preferences
- clear broad caches
- modify user templates/libraries
- dismiss unknown dialogs
- submit crash reports automatically
- stage generated artifacts by default
- weaken claim guards

Explicit approval is required for:

- destructive resets
- deleting cache folders
- changing app preferences
- modifying user projects
- installing/removing plugins outside known test paths

## Standard Validation Checklist

- syntax checks
- target test command
- claim/product guard if present
- roadmap/contract guard if present
- full verify if present
- `git diff --check`
- `git diff --cached --check`

## Standard Final Report Format

Codex should always report:

- changed files
- artifact path
- result classification
- screenshots/contact sheet
- what worked
- what blocked
- what is proven
- what is not proven
- validation summary
- dirty/untracked state
- process/port cleanup

## Case Study: Inspire Ableton Issue

Initial misclassification: Ableton was treated as not visible.

Corrected finding: Ableton was visually visible, but AX/System Events were weak. AbletonJS was the best control path. Backend readiness was required before insertion. Startup and teardown dialogs polluted runs. A crash report pane also polluted UI state after a crash. Step screenshots revealed the true issues.

## Case Study: Inspire Logic Issue

Logic AU installed and validated. The plugin editor was visible. Lifecycle state reflection was not proven. Editor heartbeat telemetry was not emitted. A safe runbook/cache rescan did not resolve the issue. The conclusion was a live host/editor telemetry issue, not proof of product failure. A standalone plugin editor became the stable proof surface.

## Reusable Codex Prompt Template

Create a step-by-step UI/UX visual audit harness for [APP/WORKFLOW]. Capture screenshots after every important action, separate visual readiness from control readiness, classify blocked states honestly, generate summary/contact sheet/claim-boundaries artifacts, and avoid claiming product capability from visual evidence alone.
