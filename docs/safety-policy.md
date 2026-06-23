# Safety Policy

This toolkit defaults to non-destructive UI automation.

## Forbidden by Default

- deleting user projects
- deleting user templates
- deleting user libraries
- clearing broad or unknown cache folders
- resetting app preferences
- resetting macOS Accessibility permissions
- dismissing unknown dialogs
- submitting crash reports automatically
- staging generated artifacts by default

## Explicit Approval Required

Ask for explicit approval before:

- destructive resets
- deleting verified cache paths
- changing app preferences
- modifying user projects
- installing or removing plugins outside known test paths

## Dialog Policy

Known safe dialogs may be handled only when their text and safe button are identified. Screenshot before and after. Unknown dialogs must block the run and produce evidence.

## Teardown Policy

Prefer app-native quit. Avoid forced kill unless it is part of a bounded cleanup path and is recorded. For disposable sessions only, safe non-saving teardown can click `Don't Save`.
