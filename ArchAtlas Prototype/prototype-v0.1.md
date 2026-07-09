# ArchAtlas Prototype v0.1

## Purpose

The first clickable prototype should test whether ArchAtlas feels useful as a system-understanding tool.

The prototype does not need real scanning, real Git integration, or AI.

It should use fake data to test the core experience:

> Can a developer understand the system, follow a method path, and understand what changed?

## Prototype scope

Version 0.1 should include:

1. Welcome
2. Scan Progress
3. Scan Summary
4. System Map
5. Project Insights
6. Class Insights
7. Method Path
8. Change Impact

## Out of scope for v0.1

- Real Roslyn scanner
- Real Git integration
- AI summaries
- Login/account system
- Cloud sync
- Settings
- Rules editor
- Multi-language support
- Real editor integration

## Fake project

The prototype should use a fake C# backend system called:

```text
OrderFlow
```

## Projects

```text
OrderFlow.Api
OrderFlow.Application
OrderFlow.Domain
OrderFlow.Infrastructure
OrderFlow.Messaging
```

## Architecture idea

```text
API
  -> Application
    -> Domain
    -> Infrastructure
    -> Messaging
```

## Main method path

```text
ImportOrderFunction.Run()
  -> ImportOrderHandler.Handle()
  -> OrderValidator.Validate()
  -> OrderRepository.Save()
  -> OrderPublishedPublisher.Publish()
```

## External systems

```text
SQL Server
Azure Service Bus
External Order API
```

## Example classes

### OrderFlow.Api

```text
ImportOrderFunction
OrderController
```

### OrderFlow.Application

```text
ImportOrderHandler
CancelOrderHandler
OrderValidator
OrderService
```

### OrderFlow.Domain

```text
Order
OrderLine
OrderStatus
CustomerReference
```

### OrderFlow.Infrastructure

```text
OrderRepository
OrderDbContext
ExternalOrderClient
```

### OrderFlow.Messaging

```text
OrderPublishedPublisher
OrderImportedMessage
```

## Example source locations

```text
src/OrderFlow.Api/ImportOrderFunction.cs
src/OrderFlow.Application/Orders/ImportOrderHandler.cs
src/OrderFlow.Application/Orders/OrderValidator.cs
src/OrderFlow.Infrastructure/Orders/OrderRepository.cs
src/OrderFlow.Messaging/OrderPublishedPublisher.cs
```

## Main prototype flow

```text
Welcome
  -> Open Repository
    -> Scan Progress
      -> Scan Summary
        -> Explore Atlas
          -> Select Application project
            -> Select ImportOrderHandler class
              -> View ImportOrder method path
                -> Open Change Impact
```

## Scan Summary fake data

```text
Repository: OrderFlow

Projects: 5
Namespaces: 18
Classes: 42
Methods: 184

Architecture checks:
4 passed
1 warning

External systems:
SQL Server
Azure Service Bus
External Order API
```

## System Map fake data

```text
OrderFlow.Api
  -> OrderFlow.Application

OrderFlow.Application
  -> OrderFlow.Domain
  -> OrderFlow.Infrastructure
  -> OrderFlow.Messaging

OrderFlow.Infrastructure
  -> SQL Server
  -> External Order API

OrderFlow.Messaging
  -> Azure Service Bus
```

## Class Insights example

```text
ImportOrderHandler

Purpose
Unknown

Part of
Order Import Flow
Derived from graph

Calls
OrderValidator
OrderRepository
OrderPublishedPublisher
Verified from code

Source
src/OrderFlow.Application/Orders/ImportOrderHandler.cs
Line 24
Verified from code

[ Open in editor ] [ Copy path ]
```

## Method Path example

```text
Order Import Flow
Derived from graph

1. ImportOrderFunction.Run()
2. ImportOrderHandler.Handle()
3. OrderValidator.Validate()
4. OrderRepository.Save()
5. OrderPublishedPublisher.Publish()

Touches
SQL Server
Azure Service Bus

Warnings
1
```

## Change Impact example

The prototype should show a fake branch comparison:

```text
Compared to: main

Changed
5 files
3 classes
6 methods
1 dependency

Affected path
Order Import Flow

Warning
Application now depends directly on Messaging publisher.

Look at
src/OrderFlow.Application/Orders/ImportOrderHandler.cs
src/OrderFlow.Messaging/OrderPublishedPublisher.cs
src/OrderFlow.Infrastructure/Orders/OrderRepository.cs
```

## Change Impact map behavior

Changed nodes should be visually highlighted on the Software Atlas.

Example changed nodes:

```text
ImportOrderHandler
OrderRepository
OrderPublishedPublisher
Azure Service Bus
```

Affected edges:

```text
ImportOrderHandler -> OrderRepository
ImportOrderHandler -> OrderPublishedPublisher
OrderPublishedPublisher -> Azure Service Bus
```

## Evidence labels

The prototype should include evidence labels, not confidence percentages.

Use:

```text
Verified from code
Derived from graph
Suggested by AI
Unknown
```

For v0.1, most data should be either:

```text
Verified from code
Derived from graph
Unknown
```

AI should not be required.

## Success criteria

The prototype is successful if a developer can understand within a few minutes:

- What kind of system OrderFlow is.
- Which projects depend on each other.
- Where the order import flow starts and ends.
- Which files/classes are relevant.
- What changed in the fake branch comparison.
- Where they would inspect the code in VS Code, Rider, or Visual Studio.
