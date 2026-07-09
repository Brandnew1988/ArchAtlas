# Technical Design Outline

## Design principle

ArchAtlas should be built as a language-agnostic architecture engine with pluggable language adapters.

The core product should not depend directly on C#, TypeScript, Java, or any other specific language. Language-specific analyzers should translate source code into a common graph model.

## High-level architecture

```text
Source Code
   |
   v
Language Adapter
   |
   v
ArchAtlas Graph Model
   |
   +--> Rules Engine
   +--> Diff Engine
   +--> Path Explorer
   +--> Diagram Renderer
   +--> Reports / PR Comments
```

## Main components

### 1. CLI / Runner

Responsible for:

- Accepting repository path.
- Loading configuration.
- Running analyzers.
- Writing graph snapshots.
- Running comparison.
- Producing reports.

Example commands:

```bash
archatlas scan ./src
archatlas diff --base main --head feature/my-ai-change
archatlas report --format json
```

### 2. Language adapters

Responsible for translating language-specific code into the common graph model.

Example adapters:

- CSharpAdapter
- TypeScriptAdapter
- JavaAdapter
- PythonAdapter

Each adapter should output the same generic model:

- Modules
- Types
- Methods/functions
- Dependencies
- Calls
- References
- External resources where possible

### 3. Graph model

The graph model is the heart of ArchAtlas.

Core concepts:

```text
Node
  - Id
  - Name
  - Type
  - Language
  - Source location
  - Metadata

Edge
  - Source node id
  - Target node id
  - Relationship type
  - Metadata
```

Possible node types:

- Repository
- Solution
- Project
- Module
- Namespace
- Class
- Interface
- Method
- Function
- ExternalDependency
- Database
- Queue
- Storage
- ApiEndpoint

Possible edge types:

- Contains
- References
- Implements
- Inherits
- Calls
- PublishesTo
- ReadsFrom
- WritesTo
- DependsOn

### 4. Rules engine

Responsible for checking whether the graph violates the intended architecture.

Example rule types:

- Layer rule
- Dependency rule
- Namespace rule
- Project reference rule
- Method call rule
- External resource access rule

Example rule:

```yaml
rules:
  - id: no-domain-to-infrastructure
    type: dependency
    from: "*.Domain"
    to: "*.Infrastructure"
    allowed: false
```

### 5. Diff engine

Responsible for comparing two graph snapshots.

Should detect:

- Added nodes
- Removed nodes
- Added edges
- Removed edges
- Changed metadata
- New rule violations
- Resolved rule violations
- Changed method paths

### 6. Path explorer

Responsible for tracing and highlighting paths through the graph.

Example:

```text
Input: OrderFunction.Run
Output:
OrderFunction.Run
  -> OrderHandler.Handle
  -> OrderValidator.Validate
  -> OrderRepository.Save
  -> ServiceBusPublisher.Publish
```

Path explorer should support:

- Direct calls
- Transitive calls
- Path depth limit
- Filtering by node type
- Highlighting changed nodes/edges
- Highlighting rule violations along a path

### 7. Renderer / UI

Responsible for making the graph understandable.

Possible UI choices:

- Local web app
- VS Code extension
- Web dashboard

A local web app may be the best first implementation because it keeps the analyzer independent from IDE-specific APIs.

## Suggested repository structure

```text
src/
  ArchAtlas.Cli/
  ArchAtlas.Core/
  ArchAtlas.Adapters.CSharp/
  ArchAtlas.Rules/
  ArchAtlas.Diff/
  ArchAtlas.Web/

tests/
  ArchAtlas.Core.Tests/
  ArchAtlas.Adapters.CSharp.Tests/
  ArchAtlas.Rules.Tests/
  ArchAtlas.Diff.Tests/

docs/
```

## First technical milestone

The first technical milestone should be:

> Scan a small C# solution and output a graph JSON file containing projects, classes, methods, and method-call relationships.

Example output:

```json
{
  "nodes": [
    { "id": "method:OrderFunction.Run", "type": "Method", "name": "Run" },
    { "id": "method:OrderHandler.Handle", "type": "Method", "name": "Handle" }
  ],
  "edges": [
    { "source": "method:OrderFunction.Run", "target": "method:OrderHandler.Handle", "type": "Calls" }
  ]
}
```
