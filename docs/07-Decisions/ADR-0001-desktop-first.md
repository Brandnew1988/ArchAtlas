# ADR-0001: Desktop-first strategy

## Status

Accepted

## Context

ArchAtlas needs to scan and analyze source code. Source code is sensitive, especially for companies and enterprise teams.

A cloud-first product would require users to upload code or connect private repositories to a remote service. This could create adoption friction and trust issues.

The product should also feel like a daily developer tool that can be installed and used locally.

## Decision

ArchAtlas will be designed as a desktop-first product.

The first product experience should be:

1. Install ArchAtlas.
2. Open the desktop app.
3. Select a local repository.
4. Scan locally.
5. Explore architecture maps, method paths, and warnings.

A web/SaaS product may come later, but it should not be required for the first useful version.

## Consequences

### Positive

- Lower trust barrier.
- Strong privacy story.
- Source code can stay local.
- Better fit for developer workflows.
- Can work with local repositories before cloud integrations exist.
- Can later integrate with CLI, CI/CD, GitHub, and Azure DevOps.

### Negative

- Desktop packaging adds complexity.
- Cross-platform testing is needed.
- Team collaboration features may require cloud later.
- Auto-update and distribution need to be solved.

## Product promise

A key product promise should be:

> Your source code never leaves your machine.
