# ADR-006 – Folder Structure

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

makefile
Copiar código

**Frontend:**
src/
├─ components/
├─ pages/
├─ services/
├─ styles/
└─ App.tsx

yaml
Copiar código

## Justification
- Modularization
- Future scalability
- Separation of responsibilities

## Consequences
- ✅ Clean and organized code
- ❌ Requires discipline to avoid mixing responsibilities

---

# ADR-006 – Organização das pastas (PT)

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

makefile
Copiar código

**Frontend:**
src/
├─ components/
├─ pages/
├─ services/
├─ styles/
└─ App.tsx

markdown
Copiar código

## Justificativa
- Modularidade
- Escalabilidade futura
- Separação de responsabilidades

## Consequências
- ✅ Código limpo e organizado
- ❌ Precisa disciplina para não misturar responsabilidades