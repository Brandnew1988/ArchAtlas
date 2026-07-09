# Language Adapter Strategy

## Goal

ArchAtlas should support multiple programming languages over time without making the core product language-specific.

The right approach is:

> One common graph model, multiple language adapters.

## Why this matters

The product idea is strongest if it can eventually support different technology stacks.

Many real teams use more than one language:

- C# backend + TypeScript frontend
- Java services + JavaScript frontend
- Python data jobs + API layer
- Infrastructure-as-code alongside application code

If ArchAtlas is built only around one language concept, it becomes harder to expand later.

## Adapter responsibility

Each language adapter should analyze source code and convert it into the ArchAtlas graph model.

The adapter should understand language-specific syntax, but the output should be generic.

Example:

```text
C# method       -> Method node
TypeScript fn   -> Function node
Java method     -> Method node
Python function -> Function node
```

## Common output model

Each adapter should produce:

- Nodes
- Edges
- Source locations
- Metadata
- Confidence level where needed

Some languages are easier to analyze than others. For example, C# and Java are more statically analyzable than Python or JavaScript.

## Suggested adapter interface

Example concept:

```csharp
public interface ILanguageAnalyzer
{
    Task<ProjectGraph> AnalyzeAsync(AnalysisContext context);
}
```

Where `ProjectGraph` contains language-neutral nodes and edges.

## Recommended language order

### 1. C#

Best first adapter.

Reasons:

- Strong Roslyn tooling.
- Good static typing.
- Good fit with enterprise systems.
- Strong fit with founder experience.

### 2. TypeScript

Strong second adapter.

Reasons:

- Very common in modern frontend/backend development.
- Often paired with C# or Java backends.
- Relevant for AI-assisted coding workflows.

### 3. Java

Good enterprise expansion.

Reasons:

- Large enterprise usage.
- Strong static typing.
- Similar architectural concerns to C#.

### 4. Python

Important but harder.

Reasons:

- Common in AI/data/backend workflows.
- Dynamic behavior makes precise analysis more difficult.
- May require confidence levels and best-effort analysis.

## Handling dynamic languages

For dynamic languages, ArchAtlas should be honest about uncertainty.

Example:

```text
Possible call detected with medium confidence.
```

This is better than pretending the graph is perfect.

## Infrastructure adapters

Later, ArchAtlas could also support infrastructure and cloud definitions.

Possible adapters:

- Bicep
- Terraform
- Kubernetes YAML
- Docker Compose
- GitHub Actions
- Azure DevOps pipelines

These would allow ArchAtlas to connect code structure with runtime components.

Example:

```text
Azure Function method -> Service Bus queue -> Worker handler -> Cosmos DB container
```

## Key principle

Do not let the first adapter define the entire product.

The C# adapter can prove the idea, but the core model should stay language-agnostic from the beginning.
