# ArchAtlas Prototype App

This is the first clickable React prototype for ArchAtlas.

It is intentionally fake-data driven. The goal is to test the product experience before building the real scanner, Git integration, or AI layer.

## What it shows

- Welcome screen
- Local scan progress
- Scan summary
- Software Atlas system map
- Views-first Explorer
- Collapsible Insights panel
- Project insights
- Class insights
- Method path view
- Change Impact view
- Evidence labels
- Source locations

## Fake data

The prototype reads from:

```text
../fake-data.json
```

The fake project is:

```text
OrderFlow
```

## Run locally

From this folder:

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Current limitations

- No real Roslyn scanner
- No real Git integration
- No real editor integration
- No AI summaries
- No persisted state
- Atlas layout is a static first mockup, not a real graph renderer yet

## Prototype goal

The prototype should answer:

> Can a developer understand the system, follow a method path, and understand what changed?
