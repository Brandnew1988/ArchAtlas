# Open Questions

This document captures questions that should be answered before or during the first prototype phase.

## 1. First customer segment

Who is the first real target customer?

Possible answers:

- Individual developers
- Small teams
- Enterprise teams
- Tech leads and architects
- Consultants
- Agencies

Current assumption:

> Small to medium development teams using AI-assisted coding tools.

Question:

> Is this the best first segment, or should the first version target individual developers first?

## 2. First user workflow

Where should ArchAtlas fit into the development workflow first?

Options:

- Local CLI
- Local web dashboard
- VS Code extension
- Visual Studio extension
- GitHub pull request app
- Azure DevOps extension
- CI/CD check

Current assumption:

> Start with CLI + local web dashboard, then move toward IDE and PR integrations.

Question:

> Is a local developer workflow the best MVP, or is PR review the stronger first use case?

## 3. Killer feature

Which feature should be the first feature users remember?

Options:

- Automatic architecture diagrams
- Method/path explorer
- Architecture drift detection
- AI-change impact summary
- Rule violation detection

Current assumption:

> The strongest feature is architecture impact review for AI-assisted changes, supported by diagrams and method path highlighting.

Question:

> Should the first demo focus on method path exploration or AI architecture drift?

## 4. How much AI should ArchAtlas use?

Options:

1. No AI in the product at first. Only deterministic analysis.
2. AI-generated summaries based on deterministic graph data.
3. AI-assisted rule suggestions.
4. AI-assisted architecture explanations.

Current assumption:

> Deterministic graph first, AI summaries later.

Reason:

The product should be trusted. It should not become another AI guessing layer unless the underlying graph data is solid.

## 5. Cloud and infrastructure support

Should cloud components be part of the MVP?

Options:

- No cloud support in MVP.
- Azure-only support in MVP.
- Cloud-neutral abstractions.
- Infrastructure adapters later.

Current assumption:

> Code structure first. Azure/Bicep support later.

Question:

> Is Azure component visibility important enough to include in the first demo?

## 6. Multi-language strategy

How broad should the first version be?

Options:

- C# only
- C# first, language-agnostic design
- C# + TypeScript from the beginning
- Multiple languages from the beginning

Current assumption:

> C# first, language-agnostic design.

Question:

> Is it more important to prove depth in one language or breadth across multiple languages?

## 7. Product packaging

What should ArchAtlas become commercially?

Options:

- Open-source core + paid cloud/team features
- Paid developer tool
- SaaS dashboard
- Enterprise architecture review platform
- GitHub Marketplace app
- Consulting-led product

Current assumption:

> Start as a developer tool, later expand into team/PR/SaaS features.

## 8. Pricing hypothesis

Possible pricing models:

- Free for local/open-source use
- Paid individual license
- Team subscription
- Per repository
- Per developer seat
- Enterprise plan

Current assumption:

> Free or low-cost individual version, paid team features.

Question:

> Would teams pay for architecture drift detection during PR review?

## 9. Name and branding

ArchAtlas is a strong name because it suggests:

- Architecture
- Mapping
- Overview
- Navigation

Question:

> Should the brand focus more on architecture maps or AI architecture review?

Possible taglines:

- Understand what AI really changed.
- Keep AI-generated code aligned with your architecture.
- Git diff shows lines. ArchAtlas shows impact.
- Architecture maps for AI-assisted development.

## 10. Validation plan

Before building too much, the idea should be tested with real users.

Questions for developers/tech leads:

- Do you use AI coding tools?
- Have AI-generated changes made your code harder to understand?
- Do you struggle to see architectural impact in pull requests?
- Would method path highlighting help you review code?
- Would architecture rule violations in PRs be useful?
- What tools do you currently use for architecture overview?
- Would you pay for this personally or would your team/company pay?

Goal:

> Talk to 10-20 developers or tech leads before investing too much time in implementation.
