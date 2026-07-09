# Git Change Impact

## Decision

ArchAtlas should not focus only on `AI Changes`.

The product should help developers understand what changed in the system after any code change, regardless of whether the change was made by:

- A developer
- An AI coding assistant
- A refactor
- A pull request
- A branch merge
- A commit series

The feature should be framed as **Change Impact** or **Git Changes**, not only as AI changes.

## Product framing

ArchAtlas works together with Git to answer:

> What changed, and what does that mean for the system?

Traditional Git tools show changed files and changed lines.

ArchAtlas should show changed architecture, changed paths, changed dependencies, changed rules, and affected parts of the system.

## Why

The core value is not that AI changed the code.

The core value is that modern development produces changes quickly, and developers need to understand the system impact before merging, releasing, or continuing work.

AI makes this more urgent, but the problem also exists with human-made code changes.

## Recommended naming

Prefer:

```text
Change Impact
Git Changes
Impact View
Branch Impact
PR Impact
```

Avoid making the main feature name:

```text
AI Changes
```

AI can be a filter, label, or optional explanation source, but not the main concept.

## Core workflow

Recommended flow:

```text
Open repository
  -> Scan current branch
    -> Compare with main / selected branch / previous scan
      -> Show changed nodes and edges on the Software Atlas
        -> Show affected method paths
          -> Show rule warnings
            -> Show source locations to inspect
```

## What ArchAtlas should detect

### From Git

- Changed files
- Added files
- Deleted files
- Renamed files
- Changed lines
- Branch comparison
- Commit comparison
- Pull request comparison later

### From code scan

- Changed projects
- Changed classes
- Changed methods
- Changed dependencies
- Changed method calls
- Changed external system usage
- Changed rule results

### From graph analysis

- New or removed architecture relationships
- New or removed method paths
- Affected upstream/downstream nodes
- New central dependencies
- Changed risk areas
- Violated architecture rules

## Example Insight

```text
Change Impact

Compared to: main

Changed
17 files
6 classes
14 methods
2 dependencies

Affected paths
3 method paths

Warnings
1 architecture rule violation

Look at
src/OrderFlow.Api/ImportOrderFunction.cs
src/OrderFlow.Application/Orders/OrderHandler.cs
src/OrderFlow.Infrastructure/Orders/OrderRepository.cs
```

## Relationship to AI

AI can still be useful later.

Examples:

- Summarize the impact in plain language.
- Explain why a changed dependency matters.
- Suggest files to review first.
- Explain a risky path.

But the first-level result should come from Git, code scan, and graph analysis.

## UI recommendation

Rename the prototype view from `AI Changes` to one of:

```text
Change Impact
Git Changes
Impact
```

Recommended first choice:

```text
Change Impact
```

This better matches the product purpose and avoids making the feature feel limited to AI-generated code.

## Impact on first prototype

The first prototype should include a simple Change Impact view if possible.

It does not need real Git integration yet.

Fake data is enough to test the UX:

- Changed nodes highlighted on the atlas
- Changed files listed in Insights
- Affected paths shown
- One architecture warning shown
- Source locations available

The purpose is to test whether the user can understand what changed and where to inspect code next.
