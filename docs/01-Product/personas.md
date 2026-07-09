# Personas

## Persona 1: The AI-assisted developer

### Profile

A developer who uses tools like GitHub Copilot, ChatGPT, Claude, Cursor, or similar AI coding assistants.

### Goals

- Ship features faster.
- Understand AI-generated changes.
- Avoid blindly accepting code.
- Keep the codebase maintainable.

### Pain points

- AI can change too many files at once.
- Git diff shows lines, not meaning.
- It is hard to see if AI introduced shortcuts.
- Large changes require manual navigation across many files.

### What ArchAtlas gives them

- Visual overview of what changed structurally.
- Method path highlighting.
- Architecture warnings.
- Confidence when reviewing AI-generated changes.

### Key message

> Understand what AI really changed.

## Persona 2: The tech lead / architect

### Profile

A senior developer, tech lead, or architect responsible for the long-term structure of a codebase.

### Goals

- Keep architecture understandable.
- Prevent architecture drift.
- Help team members follow agreed patterns.
- Review pull requests faster.
- Onboard developers faster.

### Pain points

- Architecture knowledge often lives in people's heads.
- Developers unintentionally bypass intended layers.
- Code reviews focus on details and miss structural impact.
- Diagrams are usually outdated.

### What ArchAtlas gives them

- Living architecture map.
- Configurable rules.
- Drift detection.
- Changed path overview.
- Better conversations during code review.

### Key message

> Keep your codebase aligned with the architecture you intended.

## Persona 3: The new team member

### Profile

A developer joining a new team or working in an unfamiliar repository.

### Goals

- Understand the codebase quickly.
- Know where to make changes.
- Avoid breaking architecture patterns.
- Follow important flows through the system.

### Pain points

- File trees do not explain architecture.
- Existing diagrams are often missing or outdated.
- It takes time to know which classes and methods matter.
- Asking senior developers for overview takes time.

### What ArchAtlas gives them

- High-level solution map.
- Drill-down into projects, classes, and methods.
- Method path exploration.
- Architecture explanations.

### Key message

> Get oriented in an unfamiliar codebase faster.

## Persona 4: The consultant

### Profile

A consultant or external developer who needs to understand a client's codebase quickly.

### Goals

- Build system understanding quickly.
- Identify risks and dependencies.
- Explain architecture to stakeholders.
- Find where changes should be made.

### Pain points

- Limited time with unfamiliar systems.
- Documentation may be stale.
- Architecture issues are hard to explain without visuals.
- Client systems may be sensitive, so cloud upload is not acceptable.

### What ArchAtlas gives them

- Local-first codebase analysis.
- Architecture maps.
- Rule violations and risk areas.
- Exportable summaries later.

### Key message

> Understand and explain a codebase faster, without uploading source code.

## Recommended first persona

The recommended first persona is:

> The AI-assisted developer who is also responsible for keeping code quality and architecture under control.

This persona is strong because the pain is immediate and growing.

However, the strongest paying customer may later be:

> The tech lead / architect responsible for team-wide architecture consistency.
