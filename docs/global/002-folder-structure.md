# ADR-002 – Folder Structure

## Context
Define folder structure for backend and frontend.

## Decision
**Backend:**
src/
├─ modules/
├─ config/
├─ middlewares/
├─ utils/
├─ app.ts
└─ server.ts

**Frontend:**
src/
├─ components/
├─ pages/
├─ services/
├─ styles/
└─ App.tsx

## Justification
- Modularization
- Future scalability
- Separation of responsibilities

## Consequences
- ✅ Clean and organized code
- ❌ Requires discipline to avoid mixing responsibilities

---

# ADR-002 – Organização das pastas (PT)

## Contexto
Definir estrutura de pastas para backend e frontend.

## Decisão
**Backend:**
src/
├─ modules/
├─ config/
├─ middlewares/
├─ utils/
├─ app.ts
└─ server.ts

**Frontend:**
src/
├─ components/
├─ pages/
├─ services/
├─ styles/
└─ App.tsx

## Justificativa
- Modularidade
- Escalabilidade futura
- Separação de responsabilidades

## Consequências
- ✅ Código limpo e organizado
- ❌ Precisa disciplina para não misturar responsabilidades