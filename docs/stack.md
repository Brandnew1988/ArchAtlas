# Technology Stack

## Product direction

ArchAtlas should be built as a **desktop-first developer tool** with a web-ready architecture.

The product should feel like an installable desktop app, similar to tools like GitKraken, Docker Desktop, Postman, or VS Code. A developer should be able to install it, open it, select a repository, scan it locally, and immediately explore the architecture.

At the same time, the UI and core engine should be designed so they can later support a web dashboard, team features, and pull request integrations.

## Core principle

> Local-first analysis. Web-ready UI. Cloud optional later.

This is important because source code is sensitive. Many teams and companies will not want to upload their code to a cloud service just to generate architecture diagrams.

A strong product promise could be:

> Your source code never leaves your machine.

## Recommended stack

## Desktop app

Recommended choice:

```text
Tauri + React + TypeScript
```

Why Tauri:

- Lightweight compared to Electron.
- Cross-platform support.
- Good fit for installable desktop apps.
- Can host a modern web UI.
- Keeps the door open for reusing the UI in a future web app.

Alternative:

```text
Electron + React + TypeScript
```

Electron may be faster to get started with and has a larger ecosystem, but it is heavier. Tauri is likely the better long-term choice if the goal is a polished, lightweight developer tool.

## Frontend/UI

Recommended choice:

```text
React + TypeScript
```

Recommended graph/diagram libraries to evaluate:

- React Flow
- Cytoscape.js
- D3.js

Initial preference:

```text
React Flow
```

Why:

- Good developer experience.
- Built for node/edge style editors.
- Suitable for interactive architecture maps.
- Easier to build with than raw D3 for an MVP.

## Analyzer/core engine

Recommended choice:

```text
.NET
```

Main projects:

```text
ArchAtlas.Core
ArchAtlas.Cli
ArchAtlas.Adapters.CSharp
ArchAtlas.Rules
ArchAtlas.Diff
```

Why .NET:

- Cross-platform: Windows, macOS, Linux, Docker, CI agents.
- Strong fit with the founder's experience.
- Excellent C# analysis support through Roslyn.
- Good for building CLI tools and local services.
- Can later run in CI/CD and PR workflows.

## First language adapter

Recommended first adapter:

```text
C# using Roslyn
```

Reason:

C# gives the best chance of building a strong first prototype because Roslyn can provide reliable information about projects, classes, methods, symbols, references, and method calls.

Important:

The product should not become C#-only. The architecture should be language-agnostic from the start.

## Future language adapters

Planned adapter order:

1. C#
2. TypeScript
3. Java
4. Python

The core model should allow all adapters to output the same generic graph concepts:

- Project
- Module
- Namespace
- Class/type
- Method/function
- Dependency
- Method call
- External resource

## Suggested repository structure

```text
apps/
  desktop/              # Tauri desktop app
  web/                  # Future shared web dashboard, optional later

src/
  ArchAtlas.Cli/        # Local CLI runner
  ArchAtlas.Core/       # Graph model and shared domain logic
  ArchAtlas.Adapters.CSharp/
  ArchAtlas.Rules/
  ArchAtlas.Diff/

tests/
  ArchAtlas.Core.Tests/
  ArchAtlas.Adapters.CSharp.Tests/
  ArchAtlas.Rules.Tests/
  ArchAtlas.Diff.Tests/

docs/
```

## Runtime model

The desktop app should call the local .NET analyzer.

Possible model:

```text
ArchAtlas Desktop App
  |
  | selects repository folder
  v
.NET Analyzer / CLI
  |
  | scans code locally
  v
Graph JSON snapshot
  |
  v
React UI renders architecture map, method paths, and rule violations
```

## First user experience

The first version should feel simple:

1. Install ArchAtlas.
2. Open app.
3. Select repository folder.
4. Click **Scan**.
5. See architecture map.
6. Click a class or method.
7. Highlight method path.
8. See architecture warnings.

## Atlas interaction idea

The UI should feel like navigating an atlas or map, not just looking at a static diagram.

Concept:

```text
Solution
  -> Project
    -> Namespace / Module
      -> Class
        -> Method
          -> Execution path
```

The user should be able to zoom from high-level architecture into method-level detail.

This fits the name ArchAtlas:

> An atlas is not just a picture. It is something you navigate.

## Future web direction

A web/SaaS version can come later, but it should not be the first dependency for the product to work.

Possible future web features:

- Team dashboards
- Shared architecture rules
- Pull request history
- Architecture drift over time
- GitHub/Azure DevOps integration
- Organization-level reporting
- Collaboration and comments

The local desktop product should still remain valuable without cloud features.

## Recommended decision

The recommended stack is:

```text
Desktop shell: Tauri
UI: React + TypeScript
Graph UI: React Flow first, evaluate Cytoscape.js if needed
Analyzer/core: .NET
First adapter: C# with Roslyn
Data exchange: JSON graph snapshots
Future integrations: CLI, GitHub, Azure DevOps, VS Code
```

## Why this direction is strong

This stack supports the product strategy:

- Easy installable desktop app.
- Local source-code scanning.
- Cross-platform support.
- Strong C# MVP.
- Multi-language architecture later.
- Reusable UI for future web version.
- Clear enterprise-friendly privacy story.
