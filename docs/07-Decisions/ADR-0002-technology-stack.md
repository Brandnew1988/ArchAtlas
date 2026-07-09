# ADR-0002: Initial technology stack

## Status

Accepted

## Context

ArchAtlas needs three major technical capabilities:

1. A local installable desktop experience.
2. A strong local code analysis engine.
3. A rich interactive graph UI that can later be reused for web.

The product should support multiple operating systems and eventually multiple programming languages.

## Decision

The initial technology stack will be:

```text
Desktop shell: Tauri
UI: React + TypeScript
Graph UI: React Flow first, evaluate Cytoscape.js if needed
Analyzer/core: .NET
First language adapter: C# with Roslyn
Data exchange: JSON graph snapshots
```

## Reasoning

### Tauri

Tauri supports a lightweight cross-platform desktop app while allowing the UI to be built using web technologies.

### React + TypeScript

React and TypeScript are strong choices for building an interactive graph-based UI. The UI can later be reused in a web dashboard.

### .NET

.NET is cross-platform and a strong fit for CLI tools, local services, and code analysis. It also fits the founder's experience.

### Roslyn

Roslyn gives strong support for analyzing C# code, including symbols, references, classes, methods, and method calls.

## Consequences

### Positive

- Desktop app can be installable and cross-platform.
- UI can be reused later for web/SaaS.
- .NET analyzer can run locally, in CLI, and later in CI/CD.
- C# adapter can be strong from the beginning.
- Product remains open to future language adapters.

### Negative

- Tauri introduces Rust/toolchain considerations.
- Communication between desktop shell and .NET analyzer must be designed carefully.
- React graph performance must be tested with larger codebases.
- Multi-language support still requires separate adapters.

## Open follow-up decisions

- Should the .NET analyzer run as a CLI process or a long-running local service?
- Should graph snapshots be stored as JSON files, SQLite, or another local format?
- Should React Flow remain the graph library after prototype testing?
- Should the first prototype use real scanned data or fake graph data?
