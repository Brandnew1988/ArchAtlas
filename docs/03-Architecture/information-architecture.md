# Information Architecture

## Purpose

This document defines the core objects and navigation levels in ArchAtlas.

The goal is to create a model that supports both high-level system understanding and detailed code exploration without overwhelming the user.

## Core principle

ArchAtlas should not force users to start at the class level.

Classes are important, but they should appear when the user drills down into the system.

The product should support multiple levels of understanding:

```text
System understanding
  -> Architecture understanding
    -> Component understanding
      -> Code structure understanding
        -> Class and method understanding
```

## Primary hierarchy

Recommended first information hierarchy:

```text
Workspace
  -> Repository
    -> Branch / Scan
      -> Solution / Root
        -> Project / Package
          -> Namespace / Module
            -> Class / Type / Interface
              -> Method / Function
```

## Supporting concepts

In addition to the hierarchy, ArchAtlas should model relationships and overlays.

```text
Relationships
  -> Contains
  -> References
  -> Implements
  -> Inherits
  -> Calls
  -> Depends on
  -> Reads from
  -> Writes to
  -> Publishes to

Overlays
  -> Architecture rules
  -> Rule violations
  -> Method paths
  -> Changed nodes
  -> Changed dependencies
  -> AI-assisted changes
  -> External resources
```

## Main objects

### Workspace

Represents the local ArchAtlas environment.

May contain:

- Recent repositories
- Settings
- Global preferences
- Local cache

### Repository

Represents a local code repository opened by the user.

May contain:

- Branches
- Scans
- Solutions/projects
- Configuration
- Architecture rules

### Scan

Represents a snapshot of the repository at a point in time.

May contain:

- Graph snapshot
- Rule results
- Analysis metadata
- Changed elements if compared to another scan

### Solution / Root

Represents the top-level analyzed structure.

For C#, this may be a solution. For other languages, it may be a workspace, package root, monorepo root, or similar.

### Project / Package

Represents a logical build or package unit.

Examples:

- C# project
- TypeScript package
- Java module
- Python package

### Namespace / Module

Represents a logical grouping inside a project.

This level helps reduce information overload by grouping classes/types.

### Class / Type / Interface

Represents concrete code structure.

This level is important when the user wants to understand implementation details.

Classes should be shown in a useful, filtered way rather than all at once.

### Method / Function

Represents behavior and execution paths.

This level powers one of the most important product interactions:

> Click a method and highlight the path through the code.

## View levels

### Level 1: System map

Purpose:

- Understand the big picture.
- Avoid information overload.

Shows:

- Repository/root
- Projects/modules
- High-level dependencies
- Important warnings

Does not show:

- Every class
- Every method
- Every dependency edge

### Level 2: Project/module map

Purpose:

- Understand a selected area.

Shows:

- Namespaces/modules
- Important classes/interfaces
- Local dependencies
- Rule violations in the selected area

### Level 3: Class/type view

Purpose:

- Understand implementation structure.

Shows:

- Methods
- Constructor dependencies
- Implemented interfaces
- Called services/classes
- Incoming/outgoing references

### Level 4: Method path view

Purpose:

- Understand behavior and flow.

Shows:

- Selected method
- Direct calls
- Transitive calls
- External systems touched
- Rule violations along path
- Changed nodes/edges if in diff mode

## Why classes still matter

Classes remain important because developers often need to understand how a system is implemented.

When working in a real codebase, developers need to know:

- Which class owns the behavior?
- Which interfaces are involved?
- Which methods are called?
- Which dependencies are injected?
- Where should a change be made?

However, classes should not be the first thing ArchAtlas floods the user with.

The user should reach classes naturally by drilling down from the system map.

## Anti-pattern: giant class diagram

ArchAtlas should avoid becoming a tool that opens with thousands of nodes.

A giant class diagram creates information overload and fails the product's main purpose.

Bad first view:

```text
1,200 classes and 8,000 relationships shown at once.
```

Better first view:

```text
6 projects, 14 modules, 3 architecture warnings, and a clear path to drill down.
```

## Search model

Search should cut across the hierarchy.

A user should be able to search for:

- Project
- Namespace
- Class
- Interface
- Method
- Rule
- Warning
- Dependency
- Path

Recommended UX:

```text
Ctrl+K / Cmd+K command palette
```

## Overlay model

The same map should support different overlays.

Possible overlays:

- Structure
- Dependencies
- Method paths
- Architecture rules
- AI changes
- Git diff impact
- External systems

This means AI should not be a separate product area. It should be a layer that can be applied to the atlas.

## First MVP model

For the first prototype, the model can be simplified:

```text
Repository
  -> Project
    -> Class
      -> Method

Edges:
  -> Contains
  -> Calls
  -> DependsOn

Overlays:
  -> MethodPath
  -> RuleViolation
```

This gives enough structure to prove the experience without overbuilding the model.
