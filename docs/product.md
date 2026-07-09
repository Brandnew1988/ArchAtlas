# Product Definition

## One-line description

ArchAtlas helps developers understand code architecture, execution paths, and architecture drift when working with AI-assisted code changes.

## Elevator pitch

AI can change thousands of lines of code quickly. ArchAtlas helps developers understand what those changes actually mean by visualizing code structure, components, dependencies, method paths, and architecture-rule violations.

## Core user problem

Developers and teams often lose overview when a codebase grows or when AI tools make broad changes.

Existing tools are good at showing:

- Files changed
- Lines changed
- Test results
- Build status
- Static code warnings

But they are weaker at showing:

- Architecture impact
- Dependency impact
- Execution path changes
- Layering violations
- Code structure drift over time

## Primary users

Potential early users:

1. **Individual developers**  
   Developers using AI tools who want to understand what changed.

2. **Small development teams**  
   Teams that need shared architecture visibility without heavy enterprise tooling.

3. **Tech leads and architects**  
   People responsible for keeping codebases maintainable and aligned with intended architecture.

4. **Consultants**  
   Consultants who need to understand unfamiliar codebases quickly.

## Initial target segment

The recommended first target segment is:

> Small to medium development teams using AI-assisted coding and working on codebases large enough that architecture overview matters.

This segment is likely better than pure enterprise for the first version because:

- They can adopt faster.
- They feel the pain earlier.
- They may not have heavy internal architecture tooling.
- They are more likely to try a new tool.

## Product layers

### 1. System/component overview

Show high-level components involved in a solution.

Examples:

- APIs
- Azure Functions
- Workers
- Message queues
- Databases
- Storage
- External APIs
- Shared libraries

### 2. Code structure overview

Show how the codebase is structured.

Examples:

- Solutions
- Projects
- Modules
- Namespaces
- Classes
- Interfaces
- Methods
- Dependencies

### 3. Method/path explorer

Allow a user to select a method and highlight the path through the code.

Example:

```text
OrderFunction.Run()
  -> OrderHandler.Handle()
  -> OrderValidator.Validate()
  -> OrderRepository.Save()
  -> ServiceBusPublisher.Publish()
```

This should help answer:

- What happens when this method runs?
- Which services does it touch?
- Which dependencies are involved?
- Which methods were changed in this path?

### 4. Architecture rules

Allow teams to define intended architecture rules.

Examples:

```text
Domain must not reference Infrastructure.
Functions must not call Repositories directly.
UI must not call Database directly.
Only Application may publish to MessageBus.
```

ArchAtlas should highlight violations and show where they were introduced.

### 5. AI-aware architecture review

When AI changes code, ArchAtlas should help answer:

- What changed structurally?
- Which flows are affected?
- Were new dependencies introduced?
- Were architecture rules broken?
- Did the AI take a shortcut that weakens the system?

## Product principle

The product should avoid becoming a generic diagram tool.

The product should focus on:

> Meaning, impact, and architectural control.

## Possible product tagline ideas

- Understand what AI really changed.
- Keep AI-generated code aligned with your architecture.
- Architecture maps for AI-assisted development.
- See the path. Spot the drift. Protect the architecture.
- Git diff shows lines. ArchAtlas shows impact.
