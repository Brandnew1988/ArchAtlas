# ArchAtlas

ArchAtlas is an early-stage product idea for helping developers understand, visualize, and protect software architecture in an AI-assisted development workflow.

AI tools can now create and modify large amounts of code very quickly. The challenge is no longer only writing code. The challenge is understanding what changed, how it affects the system, and whether the codebase is drifting away from the intended architecture.

ArchAtlas aims to make software architecture visible by mapping code structure, components, dependencies, and method-level execution paths. The product should help developers and teams answer questions like:

- What does this codebase look like structurally?
- Which components, classes, methods, and dependencies are connected?
- What execution path does this method follow?
- What did an AI-assisted change actually affect?
- Did this change break our intended architecture rules?
- Are we slowly drifting away from the structure we want?

## Current product direction

The strongest product angle is not just diagramming. The stronger angle is:

> Understand what AI really changed, and whether the change still fits your architecture.

Diagrams are the interface. Architecture understanding is the value.

## Core idea

ArchAtlas should provide multiple levels of architectural visibility:

1. **System and component overview**  
   Show the larger components and resources involved in the solution.

2. **Code structure overview**  
   Show modules, projects, classes, interfaces, methods, and dependencies.

3. **Method/path explorer**  
   Allow a user to select a method and highlight the path through the code.

4. **Architecture drift detection**  
   Compare the current structure against intended rules and highlight when AI or manual changes introduce unwanted dependencies or shortcuts.

5. **Diff-aware architecture review**  
   Translate code changes into architectural impact instead of only showing file and line diffs.

## MVP direction

The first version should be small enough to build, but designed with a larger product vision in mind.

Recommended MVP:

- Start with one strong language adapter, likely C#.
- Design the core engine as language-agnostic.
- Build a graph model that can later support TypeScript, Java, Python, and other languages.
- Visualize projects, classes, methods, and method calls.
- Support simple architecture rules.
- Compare before/after changes and show architectural impact.

## Documentation

See the `docs/` folder:

- [`docs/vision.md`](docs/vision.md)
- [`docs/product.md`](docs/product.md)
- [`docs/mvp.md`](docs/mvp.md)
- [`docs/roadmap.md`](docs/roadmap.md)
- [`docs/technical-design.md`](docs/technical-design.md)
- [`docs/language-adapters.md`](docs/language-adapters.md)
- [`docs/architecture-rules.md`](docs/architecture-rules.md)
- [`docs/open-questions.md`](docs/open-questions.md)

## Status

This repository is currently in the product-definition and early planning phase.
