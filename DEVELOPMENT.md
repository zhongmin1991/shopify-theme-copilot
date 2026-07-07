# DEVELOPMENT

## Development Philosophy

This project follows a simple engineering workflow:

Official Documentation → Experiment → Service → Command → AI Agent

Before integrating any third-party SDK into the project:

1. Read the official documentation.
2. Create a minimal working example in `src/experiments/`.
3. Verify the example locally.
4. Refactor the verified code into `src/services/`.
5. Expose the functionality through `src/commands/`.

## Directory Responsibilities

* `src/commands/` — CLI entry points.
* `src/services/` — Business logic and integrations.
* `src/experiments/` — SDK experiments and smoke tests.
* `src/utils/` — Shared helper functions.
* `src/types/` — Shared TypeScript types.
* `docs/` — Project documentation.

## Development Checklist

Before every commit:

* Run `pnpm check`
* Ensure GitHub Actions passes
* Keep experiments separate from production code
* Prefer official documentation over third-party tutorials

## Commit Strategy

Each Sprint should produce:

* One working feature
* One green CI run
* One clear Git commit

## Coding Principles

* Keep modules focused on a single responsibility.
* Separate CLI from business logic.
* Prefer composition over duplication.
* Avoid experimental code inside `src/services/`.

## Long-term Goal

Build a maintainable AI-powered Shopify Theme Performance Copilot that can evolve into multiple specialized agents.

## Experiment Rules

1. Every new SDK starts in src/experiments/.
2. Experiments should be minimal and independent.
3. Production code must never depend on experiment files.
4. After verification, move reusable logic into src/services/.
5. Remove obsolete experiments regularly.