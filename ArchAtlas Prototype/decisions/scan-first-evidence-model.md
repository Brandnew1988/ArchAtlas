# Scan-first Evidence Model

## Decision

ArchAtlas should be scan-first and graph-first.

The core product must work without AI.

AI can be added later as an optional explanation layer, but it should not be required for scanning, mapping, rules, method paths, or core system understanding.

## Product direction

Recommended model:

```text
Code scan first
  -> Graph analysis second
    -> AI explanation third
```

## Why

ArchAtlas should be trusted by developers.

The tool should primarily understand the system by analyzing the actual codebase:

- Projects
- Project references
- Namespaces
- Classes
- Interfaces
- Methods
- Constructor dependencies
- Method calls
- Inheritance
- Implementations
- External dependencies
- Source files
- Line numbers

This keeps the product:

- Faster
- Cheaper to run
- More deterministic
- Easier to debug
- Better aligned with local-first privacy
- Less dependent on tokens
- More trustworthy for technical users

## Data categories

### 1. Verified from code

Information directly found by the scanner.

Examples:

- A project exists.
- A class exists.
- A method exists.
- A project references another project.
- A class implements an interface.
- A constructor injects a dependency.
- A method calls another method.
- A source file and line number exist.

UI label:

```text
Verified from code
```

This should be treated as the strongest evidence level.

### 2. Derived from graph

Information derived by ArchAtlas from its graph model.

Examples:

- A method path touches SQL Server.
- A class is used by both API and Worker.
- A project depends on Infrastructure.
- A class is central in multiple paths.
- A rule violation exists.
- A flow crosses multiple architectural boundaries.

UI label:

```text
Derived from graph
```

This is still ArchAtlas logic, not AI.

### 3. Suggested by AI

Optional explanation or summarization.

Examples:

- Purpose summaries.
- Risk explanations.
- Plain-language impact summaries.
- Suggested refactors.
- Human-readable descriptions of complex flows.

UI label:

```text
Suggested by AI
```

AI-generated insight should always be labelled clearly.

### 4. Unknown

When ArchAtlas cannot determine something honestly.

Example:

```text
Purpose
Unknown

ArchAtlas has not classified this class yet.
```

The product should not invent meaning.

## UI recommendation

Use evidence/source labels instead of artificial confidence percentages.

Avoid:

```text
Confidence: 78%
```

Prefer:

```text
Verified from code
Derived from graph
Suggested by AI
Unknown
```

Reason:

Developers usually care more about where information comes from than a confidence percentage.

## Example Insights panel

```text
OrderHandler

Purpose
Unknown

Part of
Order Import Flow
Derived from graph

Calls
OrderValidator
OrderRepository
MessagePublisher
Verified from code

Source
src/OrderFlow.Application/Orders/OrderHandler.cs
Line 42
Verified from code
```

## Product rule

ArchAtlas should never pretend that a summary or interpretation is verified unless it can prove it from code or graph analysis.

## Impact on first prototype

The first React prototype should not require AI.

It should focus on:

- System Map
- Project selection
- Class selection
- Method Path highlight
- Rule warning
- Source location
- Evidence labels

AI Changes can be included as a later optional overlay, not as a dependency for the first prototype.
