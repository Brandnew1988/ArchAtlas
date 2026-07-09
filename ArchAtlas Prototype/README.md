# ArchAtlas Prototype

This folder contains early UX prototype material for ArchAtlas.

The goal is to test the product experience before building the full analyzer and desktop app.

## Prototype goal

The prototype should answer:

> Does ArchAtlas feel like a useful way to understand a software system?

The prototype can use fake data at first. The purpose is to test the experience, navigation, layout, and information hierarchy.

## Current product direction

ArchAtlas should feel like:

> Google Maps over your codebase.

The main product surface is the **Software Atlas**. Explorer and Insights support the atlas, but the map is the hero.

## Prototype principles

- The map is the hero.
- Start with overview, then reveal detail.
- Avoid information overload.
- Classes are important, but only at the right zoom level.
- Method paths should feel alive, like a highlighted route.
- Insights should explain context, not just show metadata.
- AI is a layer, not the product.
- Source code stays local.
- Dark mode first.

## Files

- [`mockups.md`](mockups.md) — first low-fidelity wireframes.
- Future: `fake-data.md`
- Future: `interaction-notes.md`
- Future: `prototype-tasks.md`

## Prototype phases

### Phase 1: Static mockups

Create low-fidelity screens in Markdown to agree on layout and flow.

### Phase 2: Clickable fake UI

Build a React prototype using fake graph data.

### Phase 3: Technical spike

Connect the UI to a simple generated graph JSON file.

### Phase 4: Real analyzer integration

Connect the UI to the .NET/Roslyn analyzer.
