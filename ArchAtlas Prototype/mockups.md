# First Prototype Mockups

These are low-fidelity wireframes for the first ArchAtlas prototype.

They are intentionally rough. The goal is to test the product flow and core experience before designing polished screens.

## Product direction

ArchAtlas should feel like:

> A map for your codebase.

The **Software Atlas** is the hero. Explorer and Insights are supporting panels.

## Mockup 1: Welcome / start screen

### Goal

Give the user a clear first action and communicate the product promise.

```text
+--------------------------------------------------------------------------------+
|                                                                                |
|                                  ArchAtlas                                     |
|                                                                                |
|                         A map for your codebase.                               |
|                                                                                |
|     Understand software systems from architecture overview to method-level     |
|                                    paths.                                      |
|                                                                                |
|                              [ Open Repository ]                               |
|                                                                                |
|                     Your source code never leaves your machine.                |
|                                                                                |
|                                                                                |
|   Recent Projects                                                              |
|                                                                                |
|   ┌──────────────────────────────┐  ┌──────────────────────────────┐           |
|   │ IntegrationPlatform          │  │ OrderFlow                    │           |
|   │ Last scanned: Today          │  │ Last scanned: Yesterday      │           |
|   │ 18 projects · 934 classes    │  │ 5 projects · 214 classes     │           |
|   └──────────────────────────────┘  └──────────────────────────────┘           |
|                                                                                |
|   ┌──────────────────────────────┐                                             |
|   │ NASA                         │                                             |
|   │ Last scanned: 4 days ago     │                                             |
|   │ 42 projects · 3,502 classes  │                                             |
|   └──────────────────────────────┘                                             |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Notes

- Dark mode first.
- No clutter.
- The main action is `Open Repository`.
- Recent projects should make returning to a repo feel fast.
- Privacy promise is visible immediately.
- Avoid using third-party trademarked names in product copy.

## Mockup 2: Repository scanning

### Goal

Show that ArchAtlas is working locally and explain what it is doing.

```text
+--------------------------------------------------------------------------------+
| ArchAtlas                                                                      |
|                                                                                |
|                         Building Software Atlas                                |
|                                                                                |
|                         IntegrationPlatform                                    |
|                                                                                |
|      ✓ Reading repository                                                      |
|      ✓ Finding solution and projects                                           |
|      ✓ Parsing C# code                                                         |
|      ✓ Building architecture graph                                             |
|      ▸ Finding method paths                                                    |
|      ○ Detecting dependencies                                                  |
|      ○ Checking architecture rules                                             |
|                                                                                |
|      █████████████████████████████░░░░░░░░░░░░░░░░░░░                         |
|                                                                                |
|      Source code is analyzed locally. Nothing is uploaded.                     |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Notes

- The scan should feel understandable, not like a black box.
- Progress text should reinforce trust.
- This screen can later show elapsed time, files scanned, or errors.

## Mockup 3: Scan summary

### Goal

Give the user a quick understanding before opening the full atlas.

```text
+--------------------------------------------------------------------------------+
| ArchAtlas                                                         IntegrationPlatform |
|                                                                                |
|                              Scan Complete                                     |
|                                                                                |
|   Repository overview                                                          |
|                                                                                |
|   Projects                 18                                                  |
|   Namespaces               142                                                 |
|   Classes                  934                                                 |
|   Methods                  4,872                                               |
|                                                                                |
|   Architecture checks                                                          |
|                                                                                |
|   ✓ 21 rules passed                                                            |
|   ⚠ 2 warnings                                                                 |
|                                                                                |
|   External systems detected                                                    |
|                                                                                |
|   • Azure Service Bus                                                          |
|   • SQL Server                                                                 |
|   • REST APIs                                                                  |
|                                                                                |
|                              [ Explore Atlas ]                                 |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Notes

- This is a bridge between scanning and map exploration.
- It teaches the user something before the atlas opens.
- It should not become a dashboard.
- The primary next action is `Explore Atlas`.

## Mockup 4: Main atlas view — system level

### Goal

Make the map the hero while still offering structure and context.

```text
+--------------------------------------------------------------------------------+
| ArchAtlas   IntegrationPlatform                          Search: Ctrl+K        |
+--------------------------------------------------------------------------------+
| Menu | Explorer                    | Software Atlas                | Insights  |
|------|-----------------------------|-------------------------------|-----------|
|      | Views                       |                               | Selected  |
|      |                             |            ○ API              |           |
|      |   • System Map ◀ active     |              │                | Solution  |
|      |   • Method Paths            |              ▼                |           |
|      |   • Rules                   |       ○ Application           | Purpose   |
|      |   • AI Changes              |              │                | System    |
|      |                             |              ▼                | overview  |
|      | ▾ Projects                  |          ○ Domain             |           |
|      |   • API                     |              │                | Contains  |
|      |   • Application             |              ▼                | 18 projects|
|      |   • Domain                  |    ○ Infrastructure           | 934 classes|
|      |   • Infrastructure          |              │                |           |
|      |                             |              ▼                | Warnings  |
|      |                             |        ○ SQL Server           | ⚠ 2       |
|      |                             |                               |           |
+--------------------------------------------------------------------------------+
```

### Notes

- The map is the center and should take most of the space.
- Explorer is navigation, not the main product.
- Views are shown before Projects because the user first chooses how to understand the system.
- Insights explains the selected element.
- Search should be available globally.

## Mockup 5: Main atlas view — project selected

### Goal

Show that selecting a node explains its role in the system.

```text
+--------------------------------------------------------------------------------+
| ArchAtlas   IntegrationPlatform                          Search: Ctrl+K        |
+--------------------------------------------------------------------------------+
| Menu | Explorer                    | Software Atlas                | Insights  |
|------|-----------------------------|-------------------------------|-----------|
|      | Views                       |                               | Application|
|      |                             |            ○ API              |           |
|      |   • System Map ◀ active     |              │                | Purpose   |
|      |   • Method Paths            |              ▼                | Coordinates|
|      |   • Rules                   |       ◎ Application           | business  |
|      |   • AI Changes              |          /       \            | flows     |
|      |                             |         ▼         ▼           |           |
|      | ▾ Projects                  |   ○ Domain     ○ Messaging    | Used by   |
|      |   • API                     |         │                     | API       |
|      |   • Application  ◀ selected |         ▼                     | Worker    |
|      |   • Domain                  |  ○ Infrastructure             |           |
|      |   • Infrastructure          |                               | Depends on|
|      |                             |                               | Domain    |
|      | ▾ Application               |                               | Messaging |
|      |   • Handlers                |                               |           |
|      |   • Validators              |                               |           |
|      |   • Services                |                               |           |
+--------------------------------------------------------------------------------+
```

### Notes

- Insights should not only show metadata.
- It should explain purpose, usage, relationships, and risk.
- Purpose may be deterministic, inferred, or AI-assisted later.
- If purpose is unknown, the UI should say so honestly.

## Mockup 6: Class selected — Insights first, metadata second

### Goal

Show class-level understanding without becoming a property grid.

```text
+--------------------------------------------------------------------------------+
| ArchAtlas   IntegrationPlatform                          Search: Ctrl+K        |
+--------------------------------------------------------------------------------+
| Menu | Explorer                    | Software Atlas                | Insights  |
|------|-----------------------------|-------------------------------|-----------|
|      | Application                 |                               | OrderHandler|
|      |                             |        ○ ImportOrderHandler   |           |
|      | ▾ Handlers                  |              │                | Purpose   |
|      |   • ImportOrderHandler ◀    |              ▼                | Coordinates|
|      |   • CancelOrderHandler      |       ◎ OrderHandler          | order     |
|      |                             |        /     |      \         | processing|
|      | ▾ Validators                |       ▼      ▼       ▼        |           |
|      |   • OrderValidator          | Validator Repository Publisher| Part of   |
|      |                             |                               | Order     |
|      | ▾ Services                  |                               | Import    |
|      |   • OrderService            |                               | Flow      |
|      |                             |                               |           |
|      |                             |                               | Calls     |
|      |                             |                               | Validator |
|      |                             |                               | Repository|
|      |                             |                               | Publisher |
|      |                             |                               |           |
|      |                             |                               | Data      |
|      |                             |                               | Confidence|
|      |                             |                               | Mixed     |
+--------------------------------------------------------------------------------+
```

### Notes

- The class is shown in context.
- Insights explains purpose and role.
- It should also show confidence/source when the purpose is inferred.
- Metadata like method count should be secondary.

## Mockup 7: Method path highlight

### Goal

Make method path exploration feel alive, like route navigation.

```text
+--------------------------------------------------------------------------------+
| ArchAtlas   IntegrationPlatform                          Search: Ctrl+K        |
+--------------------------------------------------------------------------------+
| Menu | Explorer                    | Software Atlas                | Insights  |
|------|-----------------------------|-------------------------------|-----------|
|      | Method Paths                |                               | Path      |
|      |                             |   1 ◎ Run()                   |           |
|      | ▾ Order Import             |       │                       | Order     |
|      |   • Run() ◀ selected        |       ▼                       | Import    |
|      |   • Handle()               |   2 ◎ Handle()                |           |
|      |   • Validate()             |       │                       | Steps     |
|      |   • Save()                 |       ▼                       | 5         |
|      |   • Publish()              |   3 ◎ Validate()              |           |
|      |                             |       │                       | Touches   |
|      |                             |       ▼                       | SQL Server|
|      |                             |   4 ◎ Save() ───────► SQL     | ServiceBus|
|      |                             |       │                       |           |
|      |                             |       ▼                       | Warnings  |
|      |                             |   5 ◎ Publish() ───► Queue    | None      |
|      |                             |                               |           |
+--------------------------------------------------------------------------------+
```

### Notes

- The path should animate/highlight when selected.
- It should feel like a route through the system.
- The Insights panel explains path length, touched systems, and warnings.

## Mockup 8: Architecture warning

### Goal

Warnings should explain why something matters.

```text
+--------------------------------------------------------------------------------+
| ArchAtlas   IntegrationPlatform                          Search: Ctrl+K        |
+--------------------------------------------------------------------------------+
| Menu | Explorer                    | Software Atlas                | Insights  |
|------|-----------------------------|-------------------------------|-----------|
|      | Rules                       |                               | Warning   |
|      |                             |   ○ API                       |           |
|      | ⚠ API direct repository     |     │                         | API calls |
|      |   call                      |     ▼                         | Repository|
|      |                             |   ⚠ Repository                | directly  |
|      | ▾ Rule violations           |     │                         |           |
|      |   • API -> Repository       |     ▼                         | Path      |
|      |                             |   ○ SQL Server                | Run()     |
|      |                             |                               | -> Save() |
|      |                             |                               |           |
|      |                             |                               | Why it    |
|      |                             |                               | matters   |
|      |                             |                               | API should|
|      |                             |                               | go through|
|      |                             |                               | Application|
|      |                             |                               | layer.    |
+--------------------------------------------------------------------------------+
```

### Notes

- Warnings should be actionable.
- The map should show where the issue occurs.
- Insights should explain the rule and why it matters.

## Mockup 9: AI changes layer

### Goal

Show AI as an overlay, not the whole product.

```text
+--------------------------------------------------------------------------------+
| ArchAtlas   IntegrationPlatform                          Search: Ctrl+K        |
+--------------------------------------------------------------------------------+
| Menu | Explorer                    | Software Atlas                | Insights  |
|------|-----------------------------|-------------------------------|-----------|
|      | Views                       |                               | AI Impact |
|      |                             |            ○ API              |           |
|      |   • System Map              |              │                | Compared  |
|      |   • Method Paths            |              ▼                | to main   |
|      |   • Rules                   |       ◎ Application           |           |
|      |   • AI Changes ◀ active     |          /       \            | Changed   |
|      |                             |         ▼         ▼           | 17 files  |
|      | AI Summary                  |   ○ Domain     ◉ Messaging    |           |
|      |                             |         │                     | Impact    |
|      | 2 new dependencies          |         ▼                     | 2 deps    |
|      | 1 rule violation            |  ◉ Infrastructure             | 1 warning |
|      | 3 affected paths            |                               | 3 paths   |
|      |                             |                               |           |
+--------------------------------------------------------------------------------+
```

### Notes

- AI Changes is a layer on the atlas.
- The map remains the hero.
- The product should work without this view.

## Key open questions after first mockups

1. Should scan summary be mandatory, or should the atlas open directly?
2. Should Insights be collapsible?
3. Should the left Explorer show files ever, or only logical architecture objects?
4. How should confidence be shown without making the UI noisy?
5. Should the first prototype include AI Changes, or only System Map + Method Paths + Warnings?
6. Should warnings appear as badges on nodes or only as a separate overlay?
7. How much animation is useful before it becomes distracting?

## Current recommended prototype flow

```text
Welcome
  -> Open Repository
    -> Scan Progress
      -> Scan Summary
        -> Explore Atlas
          -> Select Project
            -> Select Class
              -> Highlight Method Path
                -> Show Warning
                  -> Toggle AI Changes Layer
```
