# ADR-003 – MongoDB Choice

## Context
It was necessary to choose the database. Options considered were MySQL, PostgreSQL, and MongoDB.

## Decision
We chose **MongoDB** as the main database.

## Justification
- Flexible structure (JSON-like documents)
- Ideal for student and tuition records, which vary by date
- Good compatibility with Node.js

## Consequences
- ✅ Easy data modeling
- ✅ Flexible for future features
- ❌ Requires attention to maintain data consistency

---

# ADR-003 – Escolha do MongoDB (PT)

## Contexto
Era necessário escolher o banco de dados. Consideramos MySQL, PostgreSQL e MongoDB.

## Decisão
Escolhemos **MongoDB** como banco de dados principal.

## Justificativa
- Estrutura flexível (documentos JSON-like)
- Ideal para registros de alunos e mensalidades, que podem variar por data
- Boa compatibilidade com Node.js

## Consequências
- ✅ Facilidade de modelagem de dados
- ✅ Flexível para futuras funcionalidades
- ❌ Requer atenção para manter consistência de dados
