# Roadmap

This roadmap is intentionally early and should evolve as the product direction becomes clearer.

## Phase 0: Product clarity

Goal: Define the problem, users, MVP, and technical direction.

Tasks:

- Define product vision.
- Define MVP scope.
- Define target users.
- Define core graph model.
- Define first language adapter.
- Define open questions.
- Create early mockups or sketches.

Success criteria:

- The product can be explained clearly in one minute.
- The MVP can be built without needing to solve every future feature.
- The first demo scenario is clear.

## Phase 1: Local analyzer prototype

Goal: Prove that code can be scanned and converted into a useful graph.

Tasks:

- Build repository/solution scanner.
- Build C# analyzer using Roslyn.
- Extract projects, classes, interfaces, and methods.
- Extract method calls where possible.
- Store result in an internal graph model.
- Export graph as JSON.

Success criteria:

- A real C# project can be scanned.
- Output contains meaningful structure.
- Method relationships can be inspected.

## Phase 2: Visual graph prototype

Goal: Make the graph understandable visually.

Tasks:

- Build basic UI.
- Render projects/classes/methods as nodes.
- Render relationships as edges.
- Support filtering.
- Support node click/details panel.
- Support method path highlighting.

Success criteria:

- A developer can visually understand a small-to-medium codebase.
- A method path can be selected and highlighted.

## Phase 3: Architecture rules prototype

Goal: Detect basic architecture drift.

Tasks:

- Define rule format.
- Implement simple dependency rules.
- Detect rule violations.
- Show violations in the graph.
- Show violations in a list/report.

Example rules:

```text
Domain must not reference Infrastructure.
API must not call Repository directly.
Only Application may publish messages.
```

Success criteria:

- The system can detect simple architecture violations.
- Violations are understandable and actionable.

## Phase 4: Diff-aware architecture review

Goal: Show architectural impact between two code states.

Tasks:

- Compare graph snapshots.
- Highlight added nodes.
- Highlight removed nodes.
- Highlight changed dependencies.
- Highlight changed method paths.
- Produce an architecture impact summary.

Success criteria:

- A developer can understand what a change affected structurally.
- AI-assisted code changes can be reviewed at architecture level.

## Phase 5: Developer workflow integration

Goal: Put ArchAtlas where developers already work.

Possible integrations:

- VS Code extension.
- GitHub pull request checks.
- Azure DevOps pull request checks.
- CLI command.
- Local web dashboard.

Recommended first integration:

> CLI + local web dashboard, then VS Code or GitHub integration.

Reason:

- CLI is flexible.
- Local dashboard is easier to build than a full IDE extension.
- GitHub/PR integration becomes easier once the analyzer and output format are stable.

## Phase 6: Multi-language expansion

Goal: Prove the adapter model by adding a second language.

Recommended second language:

- TypeScript

Reason:

- Large modern usage.
- Common in AI-assisted development.
- Many teams use C# backend + TypeScript frontend.

Later languages:

- Java
- Python
- Go

## Phase 7: Commercial product exploration

Goal: Test whether users will pay.

Tasks:

- Create landing page.
- Create demo video.
- Talk to 10-20 developers/tech leads.
- Offer early access.
- Test pricing assumptions.
- Identify strongest buyer segment.

Success criteria:

- Users ask to try it.
- Teams say they would use it in PR review.
- At least some users show willingness to pay.
