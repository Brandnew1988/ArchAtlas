# User Experience Vision

## Core UX idea

ArchAtlas should feel like navigating a living software atlas.

It should not feel like opening a static UML diagram or reading a generated report. The user should feel that they can explore the codebase like a map:

```text
Solution
  -> Project
    -> Module / Namespace
      -> Class
        -> Method
          -> Execution path
```

The product experience should support discovery, orientation, and understanding.

## First-time experience

The first screen should be simple and focused.

```text
+--------------------------------------+
|              ArchAtlas               |
|                                      |
|          Open Repository             |
|                                      |
|     Your source code stays local.    |
+--------------------------------------+
```

The first promise should be clear:

> Open a repository and understand its architecture.

The privacy promise should also be visible:

> Your source code stays local.

## First scan experience

After selecting a repository, the user should see clear progress.

Example:

```text
Analyzing repository...

✓ Reading solution and projects
✓ Parsing code
✓ Building architecture graph
✓ Finding method paths
✓ Detecting dependencies
✓ Checking architecture rules
```

This makes the product feel active and trustworthy. It should not feel like a black box.

## First wow moment

The first wow moment should happen immediately after the first scan.

The user should see a high-level map of the solution.

Example:

```text
                Solution

        API        Application
         |              |
         |            Domain
         |              |
      Infrastructure ---+
```

This should not be overwhelming. The first view should show orientation, not every detail.

## Navigation model

The product should support progressive disclosure.

The user starts with the big picture and can zoom into details.

### Level 1: Solution map

Shows:

- Projects
- Main modules
- High-level dependencies
- Architecture warnings

### Level 2: Project/module map

Shows:

- Namespaces
- Classes
- Interfaces
- Local dependencies

### Level 3: Class view

Shows:

- Methods
- Constructor dependencies
- Implemented interfaces
- Called classes/services

### Level 4: Method path view

Shows:

- Selected method
- Direct calls
- Transitive calls
- External resources touched
- Rule violations along the path

## Method path interaction

A key interaction should be:

> Click a method and highlight the path through the code.

Example:

```text
OrderFunction.Run()
  -> OrderHandler.Handle()
  -> OrderValidator.Validate()
  -> OrderRepository.Save()
  -> ServiceBusPublisher.Publish()
```

The path should be visual and interactive, not only a text list.

## AI-change review experience

When reviewing AI-assisted changes, ArchAtlas should translate code changes into architectural meaning.

Instead of only showing:

```text
17 files changed
```

ArchAtlas should show:

```text
Architecture impact

- 2 new dependencies
- 1 new direct repository call
- 3 affected method paths
- 1 architecture rule violation
```

The product should help the developer answer:

> Did the AI change the structure of the system in a way I did not intend?

## Warning design

Warnings should be connected to intent and context.

Bad warning:

```text
Dependency violation.
```

Good warning:

```text
API calls Repository directly.

Path:
OrderFunction.Run()
  -> OrderRepository.Save()

Why it matters:
API code should go through the Application layer so validation, business flow, and testability stay consistent.
```

## UX principles

1. **Start simple**  
   The first view should orient the user, not overwhelm them.

2. **Progressive detail**  
   Let the user zoom from system to method.

3. **Explain impact**  
   Do not only show that something changed. Explain what the change means.

4. **Local-first trust**  
   Make it clear that source code stays local.

5. **Interactive over static**  
   The value is exploration, not exported diagrams.

6. **Warnings must be actionable**  
   Every warning should explain where, why, and what path is involved.

7. **The product should feel calm**  
   Avoid noisy dashboards and overwhelming graphs.

## Product feeling

ArchAtlas should feel like:

- Google Maps for a codebase.
- GitKraken for architecture exploration.
- Docker Desktop for local developer tooling.
- A guided codebase explorer, not a report generator.

## Open UX questions

- Should the first screen show recent repositories?
- Should the graph open automatically after scan, or should there be a scan summary first?
- Should warnings be shown directly on the map or in a side panel?
- How much detail should be visible before the graph becomes overwhelming?
- Should method path view be a separate mode or part of the main map?
- Should AI-change review be part of MVP or a second milestone?
