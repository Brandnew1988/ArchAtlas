# First Prototype Plan

## Prototype goal

The first prototype should prove the product experience before building the full analyzer.

The goal is not to build the final product. The goal is to answer:

> Does the ArchAtlas navigation experience feel useful and compelling?

## Prototype principle

Build the first prototype with fake or simplified data if needed.

A realistic user experience is more important than full technical correctness in the earliest prototype.

## Prototype scope

### Screen 1: Welcome / Open Repository

Purpose:

- Establish product identity.
- Make the local-first promise clear.
- Let user open a repository.

Content:

```text
ArchAtlas

Open Repository

Your source code stays local.
```

### Screen 2: Scan progress

Purpose:

- Show that ArchAtlas is analyzing the repository.
- Build trust.
- Make the process understandable.

Steps:

```text
Reading solution and projects
Parsing code
Building architecture graph
Finding method paths
Detecting dependencies
Checking architecture rules
```

### Screen 3: Architecture map

Purpose:

- Show the first wow moment.
- Give a clear overview of the codebase.

Initial map should show:

- Solution
- Projects/modules
- High-level dependencies
- Warning badges if rules are broken

### Screen 4: Drill-down navigation

Purpose:

- Show that this is an atlas, not a static diagram.

User can drill down:

```text
Solution -> Project -> Class -> Method
```

### Screen 5: Method path explorer

Purpose:

- Show the strongest early product interaction.

User selects a method and sees a highlighted path:

```text
OrderFunction.Run()
  -> OrderHandler.Handle()
  -> OrderValidator.Validate()
  -> OrderRepository.Save()
  -> ServiceBusPublisher.Publish()
```

### Screen 6: Architecture warning

Purpose:

- Show that ArchAtlas explains architecture drift.

Example warning:

```text
API calls Repository directly.

Path:
OrderFunction.Run()
  -> OrderRepository.Save()

Why it matters:
API code should go through the Application layer.
```

### Screen 7: Architecture impact summary

Purpose:

- Show the AI-assisted review direction.

Example:

```text
Architecture impact

2 new dependencies
1 new direct repository call
3 affected method paths
1 architecture rule violation
```

## Suggested fake demo codebase

The prototype can use a fake system called `OrderFlow`.

Projects:

```text
OrderFlow.Api
OrderFlow.Application
OrderFlow.Domain
OrderFlow.Infrastructure
OrderFlow.Shared
```

Important flow:

```text
OrderFunction.Run
  -> ImportOrderHandler.Handle
  -> OrderValidator.Validate
  -> OrderRepository.Save
  -> OrderEventsPublisher.Publish
```

Architecture rule violation:

```text
OrderFunction.Run -> OrderRepository.Save
```

Expected warning:

```text
API must not call Repository directly.
```

## Prototype success criteria

The prototype is successful if a developer can look at it and say:

- "I understand what this product does."
- "I would use this to explore a codebase."
- "The method path explorer is useful."
- "The architecture warning is clearer than a normal static analysis warning."
- "This would help me review AI-generated changes."

## What not to build yet

Do not build these in the first prototype:

- Authentication
- Cloud sync
- Real billing
- Full GitHub integration
- Full C# analyzer
- Multi-language support
- Perfect graph layout
- Enterprise configuration

## Recommended next step

Create a clickable or coded UI prototype using fake graph data.

Recommended approach:

```text
Tauri optional at first
React + TypeScript first
Fake graph JSON
React Flow visualization
```

This makes it possible to test the product feeling before building the full analyzer.
