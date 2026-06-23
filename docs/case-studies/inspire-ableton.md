# Case Study: Inspire Ableton

## Initial Misclassification

Early audits risked treating Ableton as not visible when the real issue was more specific.

## Corrected Finding

Ableton was visually visible. System Events and Accessibility were weak for reliable main-window control. AbletonJS was usable and became the best control path.

## Lessons

- visual readiness and control readiness must be recorded separately
- backend readiness must be checked before helper/plugin insertion steps
- startup recovery dialogs can pollute app state
- teardown save dialogs must be handled safely for disposable sessions
- crash report panes can make a visible app misleading for screenshot and insertion audits
- step screenshots reveal where the workflow actually breaks

## Correct Classification Pattern

Use classifications like:

- `ableton-main-window-visible-not-controllable`
- `ableton-js-control-path-available`
- `ableton-startup-dialog-handled`
- `ableton-crash-report-pane-detected`
- `ableton-crash-report-pane-dismissed`
- `ableton-plugin-state-not-reflected`
