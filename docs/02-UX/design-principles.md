# Design Principles

## Product purpose

ArchAtlas exists to help developers understand software systems.

It is not only a code browser, class diagram generator, or AI wrapper. It should help users understand how a system is structured, how its parts connect, and how changes affect the architecture.

## Mental model

The primary mental model is:

> Google Maps over our code.

The product should feel like:

> Google Maps meets JetBrains Rider.

That means:

- Map-like exploration.
- Calm and professional developer-tool experience.
- Strong search and navigation.
- Progressive detail.
- Clear relationships.
- No information overload.

## 1. Help developers understand software systems

Every feature should support understanding.

Good questions to ask:

- Does this help the user understand the system faster?
- Does this explain a relationship, flow, or consequence?
- Does this reduce uncertainty?

If a feature only adds visual complexity without increasing understanding, it should be avoided.

## 2. Overview before detail

The first view should orient the user.

The user should first see the shape of the system, not every class, method, and dependency.

The product should start broad and allow the user to zoom in.

## 3. Progressive disclosure

Information overload is a product failure.

ArchAtlas should not show everything at once.

Instead, it should reveal detail based on context and zoom level:

```text
Solution
  -> Project
    -> Namespace / Module
      -> Class
        -> Method
          -> Execution path
```

A large codebase may contain thousands of classes, but the user should only see what is useful at the current level of exploration.

## 4. Classes matter, but they are not the whole system

Classes are still important when a developer needs to understand the details of a codebase.

When drilling down into a project, the user must be able to understand:

- Classes
- Interfaces
- Methods
- Dependencies
- Method calls
- Responsibilities

However, ArchAtlas should avoid making the entire product feel like a giant class diagram.

Classes should appear at the right zoom level, when the user is ready for that detail.

## 5. Everything should be explorable

Important objects should be clickable and inspectable.

Examples:

- Project
- Namespace
- Class
- Interface
- Method
- Dependency
- Rule violation
- Method path
- External resource

Clicking should reveal context, not just metadata.

## 6. Every click should increase understanding

A click should answer a question or reveal useful context.

Examples:

- What is this?
- Who depends on this?
- What does this call?
- What path does this method follow?
- Why is this warning shown?
- What changed here?

## 7. Method paths should feel alive

Method path exploration is a signature interaction.

The preferred interaction is animation/highlighting, similar to a route being highlighted on a map.

A user should be able to click a method and see the path light up through the system.

Example:

```text
OrderFunction.Run()
  -> OrderHandler.Handle()
  -> OrderValidator.Validate()
  -> OrderRepository.Save()
  -> ServiceBusPublisher.Publish()
```

This should feel like following a route, not reading a static list.

## 8. Explain, do not only visualize

A visual warning is not enough.

ArchAtlas should explain why something matters.

Bad warning:

```text
Dependency violation.
```

Good warning:

```text
API calls Repository directly.

Path:
OrderFunction.Run()
  -> OrderRepository.Save()

Why it matters:
API code should go through the Application layer to preserve validation, business flow, and testability.
```

## 9. AI is a layer, not the product

ArchAtlas should be valuable even without AI.

AI-assisted development increases the need for the product, but the core value is software understanding.

AI-related features should be layered on top of the architecture map, method paths, rules, and impact analysis.

## 10. Local-first trust

The user should feel safe opening private repositories.

The product should clearly communicate:

> Your source code stays local.

This should influence UX, architecture, and marketing.

## 11. Dark mode first

Dark mode should be treated as first-class.

The first visual direction should lean toward a calm dark developer-tool experience, inspired by tools like GitKraken, but without copying them.

Light mode should be supported later if it makes sense, but dark mode is the primary design target.

## 12. Calm over busy

The UI should feel focused and calm.

Avoid:

- Too many panels.
- Too many colors.
- Too many warnings at once.
- Dense enterprise-dashboard feeling.
- Static UML-diagram feeling.

Prefer:

- Focused exploration.
- Good spacing.
- Clear hierarchy.
- Soft visual emphasis.
- Actionable warnings.

## 13. Hybrid navigation

The preferred layout is hybrid:

```text
Explorer | Software Atlas | Details
```

- Explorer gives structure and navigation.
- Software Atlas gives visual understanding.
- Details gives focused context for the selected object.

This combines the strengths of IDE navigation and map-based exploration.

## 14. Search should be universal

Search should be a primary navigation tool.

Recommended direction:

```text
Ctrl+K / Cmd+K command palette
```

Search should eventually support:

- Projects
- Namespaces
- Classes
- Methods
- Rules
- Paths
- Dependencies
- Warnings

## Product identity summary

ArchAtlas should be:

- A software atlas.
- A system understanding tool.
- A calm developer tool.
- A local-first architecture explorer.
- A product where diagrams are interactive maps, not static documentation.

## Product identity sentence

> ArchAtlas is Google Maps over your codebase, helping developers understand software systems from architecture overview down to method-level paths.
