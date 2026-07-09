# Architecture Rules

## Purpose

Architecture rules are a core part of ArchAtlas.

The product should not only show diagrams. It should help teams protect the structure they want.

A diagram can show what exists. Rules can show whether what exists is acceptable.

## Core idea

Teams should be able to describe intended architecture rules, and ArchAtlas should detect when code changes violate those rules.

Example:

```text
Functions must not call repositories directly.
Domain must not reference Infrastructure.
UI must not call database clients.
Only Application services may publish messages.
```

## Why rules matter for AI-assisted development

AI tools often generate code that works locally but takes shortcuts.

Examples:

- Calling a repository directly from an API endpoint.
- Adding a new dependency instead of using an existing abstraction.
- Mixing business logic into infrastructure code.
- Creating circular dependencies.
- Bypassing existing handlers or services.

These changes may compile and pass tests, but still weaken the architecture.

ArchAtlas should help detect this drift.

## Possible rule categories

### 1. Layer rules

Define allowed dependencies between architecture layers.

Example:

```text
API -> Application -> Domain
Application -> Infrastructure
Domain -> no outward dependencies
```

### 2. Project reference rules

Define which projects may reference each other.

Example:

```text
MyApp.Domain must not reference MyApp.Infrastructure.
MyApp.Api may reference MyApp.Application.
MyApp.Api must not reference MyApp.Persistence.
```

### 3. Namespace rules

Define rules based on namespaces or module names.

Example:

```text
*.Domain.* must not reference *.Infrastructure.*
*.Controllers.* must not call *.Repositories.*
```

### 4. Method call rules

Define forbidden or required call patterns.

Example:

```text
Controller methods must call handlers, not repositories.
Message handlers must validate input before saving data.
```

### 5. External dependency rules

Define who may access external systems.

Example:

```text
Only Infrastructure may call external APIs.
Only Persistence may write to databases.
Only Messaging may publish to queues.
```

### 6. Circular dependency rules

Detect circular dependencies between projects, modules, or classes.

## Example configuration

Possible `archatlas.yml`:

```yaml
architecture:
  layers:
    - name: Api
      match: "*.Api"
    - name: Application
      match: "*.Application"
    - name: Domain
      match: "*.Domain"
    - name: Infrastructure
      match: "*.Infrastructure"

rules:
  - id: api-must-not-call-repositories
    description: "API layer must not call repositories directly."
    type: dependency
    from: "*.Api"
    to: "*.Repositories"
    allowed: false

  - id: domain-must-not-reference-infrastructure
    description: "Domain must not reference infrastructure."
    type: dependency
    from: "*.Domain"
    to: "*.Infrastructure"
    allowed: false

  - id: only-application-may-publish-messages
    description: "Only Application layer may publish messages."
    type: external-access
    resource: "MessageBus"
    allowedFrom: "*.Application"
```

## Rule output

A rule violation should be shown with enough context to be useful.

Example:

```text
Rule violation: api-must-not-call-repositories

OrderFunction.Run calls OrderRepository.Save directly.

Path:
OrderFunction.Run
  -> OrderRepository.Save

Why it matters:
API/Function code should go through the Application layer to preserve validation, business flow, and testability.
```

## Important product principle

Rules should be helpful, not annoying.

The product should avoid becoming noisy. Rule violations should be:

- Clear
- Actionable
- Connected to code paths
- Connected to architectural intent
- Easy to suppress or configure when needed

## MVP rule scope

The MVP should start with simple rules:

- Project/namespace dependency restrictions.
- Direct method call restrictions.
- Circular dependency detection.

More advanced semantic rules can come later.
