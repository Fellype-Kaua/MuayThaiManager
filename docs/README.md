# 🧭 Architecture Decision Records (ADR)

This folder contains all **Architecture Decision Records** (ADRs) for the project.  
Each ADR documents an important architectural or technological decision made during development, helping maintain clarity, traceability, and consistency across the backend and frontend.

---

## 📚 Purpose

ADRs (Architecture Decision Records) are concise documents that explain **what**, **why**, and **how** architectural decisions were made.

Each ADR includes:
- **Context:** the situation or problem faced.
- **Decision:** the chosen solution.
- **Justification:** why this choice was made.
- **Consequences:** what comes with this decision (pros and cons).

They serve as a living history of the project’s evolution.

---

## 🏗️ Folder Structure

docs/
├─ prd.md
└─ adr/
├─ backend/
├─ frontend/
└─ global/

yaml
Copiar código

---

## ⚙️ Backend ADRs

| Nº | Decision | File |
|----|-----------|------|
| 001 | Backend Choice | [001-backend-choice.md](backend/001-backend-choice.md) |
| 002 | Modular Architecture | [002-modular-architecture.md](backend/002-modular-architecture.md) |
| 003 | MongoDB Choice | [003-mongodb-choice.md](backend/003-mongodb-choice.md) |

---

## 🎨 Frontend ADRs

| Nº | Decision | File |
|----|-----------|------|
| 001 | SCSS Modules Choice | [001-scss-modules.md](frontend/001-scss-modules.md) |
| 002 | Axios Choice | [002-axios.md](frontend/002-axios.md) |
| 003 | No Next.js Choice | [003-no-nextjs.md](frontend/003-no-nextjs.md) |

---

## 🌍 Global ADRs

| Nº | Decision | File |
|----|-----------|------|
| 001 | Naming Conventions | [001-naming-conventions.md](global/001-naming-conventions.md) |
| 002 | Folder Structure | [002-folder-structure.md](global/002-folder-structure.md) |
| 003 | Project Patterns | [003-project-patterns.md](global/003-project-patterns.md) |
| 004 | Commit Convention | [004-commit-convention.md](global/004-commit-convention.md) |

---

## 🧩 Contribution Guidelines

When new decisions are made, add a new ADR file following the pattern:

**Naming:**
<category>/<3-digit-number>-<decision-title>.md

shell
Copiar código

**Template:**
```markdown
# ADR-00X – Decision Title

## Context
Describe the problem or need that led to this decision.

## Decision
Describe the chosen approach or technology.

## Justification
Explain why this choice was made (pros, rationale).

## Consequences
List the outcomes (pros ✅ / cons ❌).