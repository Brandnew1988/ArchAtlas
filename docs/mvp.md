# MVP Plan

## MVP goal

The MVP should prove that ArchAtlas can turn code structure into useful architecture understanding.

The first version does not need to solve every language, every cloud platform, or every IDE integration. It needs to prove one core thing:

> A developer can understand code structure, method paths, and architecture impact faster with ArchAtlas than with normal IDE navigation and Git diffs alone.

## MVP positioning

The MVP should be described as:

> A language-agnostic architecture engine, starting with one strong language adapter.

This keeps the long-term product vision multi-language while avoiding the risk of building too broadly too early.

## Recommended first adapter

The recommended first language adapter is **C#**.

Reasons:

- Strong static analysis support through Roslyn.
- Good fit with the founder's experience.
- Common in enterprise and integration-heavy systems.
- Easier to extract reliable class, method, reference, and call data than in highly dynamic languages.

The product should not be designed as a C#-only product. C# should be the first proof point.

## MVP scope

### Must have

1. **Scan a repository or solution**
   - Read a codebase.
   - Extract projects, classes, interfaces, methods, and dependencies.

2. **Build a graph model**
   - Store code entities as graph nodes.
   - Store dependencies, calls, references, and ownership as graph edges.

3. **Show code structure diagram**
   - Visualize projects, classes, and relationships.
   - Allow filtering by project/module/namespace.

4. **Show method/path explorer**
   - Select a method.
   - Show methods it calls.
   - Highlight the path through the code.

5. **Show basic architecture rule violations**
   - Allow simple rules.
   - Detect obvious dependency/layer violations.

6. **Show changed architecture impact**
   - Compare a base state and current state.
   - Highlight added/removed dependencies and changed paths.

### Should have

1. **Simple UI for exploring the graph**
   - Zoom and pan.
   - Click a node to inspect details.
   - Highlight related nodes.

2. **AI-change summary**
   - Summarize what changed structurally.
   - Example: "2 new dependencies, 1 new direct repository call, 3 affected method paths."

3. **Config file**
   - Allow teams to describe intended architecture.
   - Example: `archatlas.yml` or `archatlas.json`.

### Could have

1. **Azure component detection**
   - Detect Azure Functions, Service Bus, Storage, Cosmos DB, etc.
   - Parse Bicep or configuration files.

2. **GitHub PR integration**
   - Add architecture review comments to pull requests.

3. **VS Code extension**
   - Run the local analyzer and display the graph inside the editor.

## Non-goals for MVP

The MVP should not try to do all of this immediately:

- Support every programming language.
- Replace full static analysis tools.
- Replace observability tools.
- Generate perfect UML diagrams.
- Understand every runtime behavior.
- Support every cloud provider.
- Become a full enterprise governance platform.

## Example MVP user flow

1. Developer opens a repository.
2. ArchAtlas scans the code.
3. Developer sees a graph of projects/classes/methods.
4. Developer clicks a method.
5. ArchAtlas highlights the execution path through the code.
6. Developer runs comparison against previous commit.
7. ArchAtlas shows newly added dependencies and changed paths.
8. ArchAtlas flags one architecture rule violation.

## MVP success criteria

The MVP is successful if early users say:

- "I understand this codebase faster with this."
- "This would help me review AI-generated changes."
- "This would help us avoid architecture drift."
- "I would use this during PR reviews."

## First demo scenario

A strong demo could show an AI-assisted code change where Git only shows file diffs, while ArchAtlas shows:

```text
Architecture impact:

- New dependency: Api -> Infrastructure.Repository
- New call path: OrderFunction.Run -> OrderRepository.Save
- Rule violation: Function must not call Repository directly
- Affected flow: Order import flow
```

This demo should make the value obvious in less than two minutes.
