# App UI Step Audit

An app UI step audit is a timestamped visual proof bundle that records each important action and its observable result.

## Standard Flow

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

## Artifact Structure

```text
test-artifacts/<test-name>/<timestamp>/
  summary.json
  step-results.json
  timeline.json
  window-observations.json
  control-path-evidence.json
  ux-observations.json
  claim-boundaries.json
  README.md
  contact-sheet.png
  screenshots/
```

## Step Result Fields

- `stepId`
- `label`
- `actionAttempted`
- `screenshotPath`
- `visualObservation`
- `controlObservation`
- `result`
- `reason`
- `recommendedNextAction`

## Result Classifications

- `pass`
- `pass-with-warnings`
- `blocked`
- `failed`

Specific classifications should name the real blocker, such as `visible-not-controllable`, `startup-dialog-handled`, `unknown-dialog-blocked`, or `state-not-reflected`.
