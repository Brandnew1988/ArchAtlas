# ArchAtlas Documentation

This folder contains product, UX, technical, business, and decision documentation for ArchAtlas.

## Current product thesis

> ArchAtlas helps developers understand software architecture, method paths, and architecture drift in an AI-assisted development workflow.

The product should feel like a local-first software atlas that developers can install, open, and use to navigate a codebase.

## Documentation structure

```text
docs/
  00-Vision/
  01-Product/
  02-UX/
  03-Architecture/
  04-Technology/
  05-Business/
  06-Marketing/
  07-Decisions/
  08-Roadmap/
```

## Key documents

### Vision and product

- [`vision.md`](vision.md)
- [`product.md`](product.md)
- [`mvp.md`](mvp.md)
- [`open-questions.md`](open-questions.md)
- [`01-Product/personas.md`](01-Product/personas.md)

### UX

- [`02-UX/user-experience.md`](02-UX/user-experience.md)
- [`02-UX/user-journeys.md`](02-UX/user-journeys.md)

### Technology

- [`technical-design.md`](technical-design.md)
- [`stack.md`](stack.md)
- [`language-adapters.md`](language-adapters.md)
- [`architecture-rules.md`](architecture-rules.md)

### Decisions

- [`07-Decisions/ADR-0001-desktop-first.md`](07-Decisions/ADR-0001-desktop-first.md)
- [`07-Decisions/ADR-0002-technology-stack.md`](07-Decisions/ADR-0002-technology-stack.md)

### Roadmap

- [`roadmap.md`](roadmap.md)
- [`08-Roadmap/first-prototype.md`](08-Roadmap/first-prototype.md)

## Current accepted decisions

1. ArchAtlas is desktop-first.
2. Source-code analysis should be local-first.
3. The UI should be web-ready.
4. The initial stack is Tauri + React + TypeScript + .NET.
5. The first language adapter should be C# using Roslyn.
6. The architecture should remain language-agnostic.

## Next recommended documents

- `02-UX/wireframes.md`
- `02-UX/interaction-model.md`
- `03-Architecture/repository-structure.md`
- `04-Technology/prototype-setup.md`
- `05-Business/validation-plan.md`
- `06-Marketing/landing-page.md`
