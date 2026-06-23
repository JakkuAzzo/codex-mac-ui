# Principles

## Show, Do Not Assume

Every important app state should be backed by a screenshot, window observation, app/API response, or machine-readable artifact. A log line alone is not enough when the question is visual.

## Visual Readiness vs Control Readiness

Visual readiness means a human can see the app or window. Control readiness means automation can interact with it reliably.

These are separate facts. A visible app can still be inaccessible through AX/System Events, and a controllable backend can still fail to produce visible UI state.

## Evidence Hierarchy

1. Manual observation
2. Screenshot-only evidence
3. Accessibility/System Events evidence
4. App/API evidence
5. Backend/API route evidence
6. Live app + backend + visual proof
7. Full end-to-end proof

Do not use lower-level evidence to claim higher-level behavior.

## Claim Boundaries

Every artifact must say what it proves and what it does not prove. Visual proof is valuable, but visual proof alone does not prove product capability, exactness, persistence, or reconstruction.
