# User Journeys

## Journey 1: First repository scan

### Goal

A developer wants to understand a repository quickly.

### Flow

1. User opens ArchAtlas.
2. User clicks **Open Repository**.
3. User selects a local repository folder.
4. ArchAtlas scans the code locally.
5. User sees a high-level architecture map.
6. User clicks a project or module.
7. User explores classes and dependencies.
8. User saves the repository as a recent project.

### Success moment

The user thinks:

> I understand the shape of this codebase faster than I would from the file tree alone.

## Journey 2: Explore a method path

### Goal

A developer wants to understand what happens when a method runs.

### Flow

1. User opens a scanned repository.
2. User searches for a class or method.
3. User selects a method.
4. ArchAtlas highlights direct calls.
5. User expands the path to show transitive calls.
6. User sees external systems touched by the path.
7. User identifies where business logic, persistence, and messaging happen.

### Success moment

The user thinks:

> I can follow the flow without jumping between 15 files manually.

## Journey 3: Review AI-assisted changes

### Goal

A developer wants to check whether AI-generated changes affected the architecture.

### Flow

1. User has a branch with AI-assisted changes.
2. User opens ArchAtlas.
3. User selects compare mode.
4. User compares current branch against main.
5. ArchAtlas builds graph snapshots for both states.
6. ArchAtlas shows architectural impact.
7. User sees added dependencies, changed paths, and new rule violations.
8. User clicks a changed path to inspect details.

### Success moment

The user thinks:

> Git showed me files. ArchAtlas showed me impact.

## Journey 4: Define architecture rules

### Goal

A tech lead wants ArchAtlas to detect architecture drift.

### Flow

1. User opens repository settings.
2. User creates or edits `archatlas.yml`.
3. User defines layers and dependency rules.
4. User runs a scan.
5. ArchAtlas shows current violations.
6. User decides which violations are acceptable technical debt and which should be fixed.
7. Future scans highlight new violations separately.

### Success moment

The user thinks:

> We can now see when the codebase moves away from the structure we want.

## Journey 5: Onboard a new developer

### Goal

A new developer wants to understand an unfamiliar codebase.

### Flow

1. New developer clones repository.
2. New developer opens it in ArchAtlas.
3. ArchAtlas scans the repository.
4. Developer starts at the solution map.
5. Developer follows key flows.
6. Developer reads architecture warnings and explanations.
7. Developer understands where to make changes safely.

### Success moment

The developer thinks:

> This gives me the overview I normally need a senior developer to explain.

## Journey 6: Consultant codebase discovery

### Goal

A consultant needs to understand a client's system quickly.

### Flow

1. Consultant receives access to a repository.
2. Consultant scans the repository locally.
3. Consultant identifies major components and dependencies.
4. Consultant finds architecture risks.
5. Consultant exports or shares an architecture impact summary.

### Success moment

The consultant thinks:

> I can understand and explain this system faster.

## MVP journey priority

Recommended MVP priority:

1. First repository scan
2. Explore a method path
3. Basic architecture rules
4. Review AI-assisted changes

The first two journeys prove the product experience. The next two prove the commercial value.
