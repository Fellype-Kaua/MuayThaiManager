# ADR-002 – Modular Architecture

## Context
We needed to define how to organize the backend code: either centralized (routes/, controllers/, models/) or modularized (each feature in its own folder with its route, controller, and model).

## Decision
We decided to use a **modular architecture**, creating a `modules/` folder in the backend, with each module containing its own route, controller, and model.

## Justification
- Better scalability as the project grows
- Easier maintenance and debugging
- Demonstrates good architectural practices for the portfolio

## Consequences
- ✅ Project remains organized even with future growth
- ❌ Initially introduces more folders compared to a centralized structure

---

# ADR-002 – Organização em Módulos (PT)

## Contexto
Precisávamos decidir como organizar o código do backend: centralizado (routes/, controllers/, models/) ou modularizado (cada funcionalidade em sua própria pasta com rota, controller e model).

## Decisão
Optamos por uma **arquitetura modular**, criando uma pasta `modules/` no backend, cada módulo com sua própria rota, controller e model.

## Justificativa
- Melhor escalabilidade à medida que o projeto cresce
- Facilita manutenção e depuração
- Demonstra boas práticas de arquitetura para portfólio

## Consequências
- ✅ Projeto organizado mesmo com crescimento futuro
- ❌ Inicialmente mais pastas que em uma estrutura centralizada
