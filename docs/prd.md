📄 Product Requirements Document (PRD) – Muay Thai Manager

Project: Muay Thai Manager
Start Date: 28/09/2025
Status: MVP

1. Project Objective

Muay Thai Manager is a web system designed to manage students and monthly payments for a Muay Thai gym.

The system allows:

Registering and controlling each student's payments
Applying one-time discounts

Viewing payment status and monthly revenue

Sending automated WhatsApp reminders to students who haven’t paid

The goal is to simplify the instructor’s financial management, saving time and avoiding missed payments.

2. Target Audience

Muay Thai and martial arts instructors or gym managers

Small gyms still using manual control (spreadsheets or notebooks)

3. Features

3.1 MVP Features
| Feature                  | Description                                                     | Notes                                                |
| ------------------------ | --------------------------------------------------------------- | ---------------------------------------------------- |
| Student Registration     | Register name, email, phone number, start date, and monthly fee | No fixed discount field here                         |
| Monthly Fee Registration | Automatically generate monthly fees from student’s start date   | One-time discount applies only for the current month |
| Apply One-Time Discount  | Insert discounts in % or fixed R\$ for the current month        | Must recalculate final monthly fee                   |
| Payment Status           | Display which students have paid or not                         | Simple table view                                    |
| WhatsApp Reminder        | Generate personalized WhatsApp message link per student         | Includes student name and due date                   |
| /health Route            | Endpoint to verify if the server is running                     | For monitoring and debugging                         |


3.2 Future Features
Student access to view payment history

Attendance tracking for classes

Automatic alerts for promotions

Dashboard with advanced financial metrics

4. Business Rules

Each student has their own due date based on registration date.

Discounts apply only for the current month (non-recurring).

WhatsApp reminders do not change payment status — only assist communication.

5. Technology Stack
| Layer         | Technology                        | Justification                         |
| ------------- | --------------------------------- | ------------------------------------- |
| Frontend      | React + TypeScript + SCSS Modules | Flexible, modular, maintainable       |
| Backend       | Node.js + TypeScript + Express    | Scalable and easy MongoDB integration |
| Database      | MongoDB                           | Flexible JSON-like structure          |
| Communication | WhatsApp API (via link)           | Simple and effective reminder system  |

6. MVP Scope

Included:

Student registration

Monthly fee registration and visualization

Apply one-time discounts

Send WhatsApp reminders

/health test route

Not Included:

Student access portal

Advanced dashboard

Attendance tracking

7. Acceptance Criteria

Monthly fees created correctly from student’s start date

Discounts immediately affect final monthly fee

Payment status updates correctly

WhatsApp links include student name and due date

Server responds correctly to /health route

8. Notes

Initial project for internal instructor use (no public deployment yet)

Modular architecture adopted from the start for scalability

ADR + PRD documentation stored in repo for decision tracking



-----------------------------------------(PT/BR)-----------------------------------------

📄 Documento de Requisitos do Produto (PRD) – Muay Thai Manager

Projeto: Muay Thai Manager
Data de Início: 28/09/2025
Status: MVP

1. Objetivo do Projeto

O Muay Thai Manager é um sistema web para gerenciamento de alunos e mensalidades de uma academia de Muay Thai.

O sistema permite:

Registrar e controlar mensalidades de cada aluno

Aplicar descontos pontuais

Visualizar status de pagamento e faturamento mensal

Enviar lembretes automáticos via WhatsApp para alunos que ainda não pagaram

O objetivo é facilitar a gestão financeira do professor, economizando tempo e evitando esquecimentos.

2. Público-Alvo

Professores e gestores de academias de Muay Thai ou artes marciais

Pequenas academias que ainda fazem controle manual (planilhas ou cadernos)

3. Funcionalidades

3.1 Funcionalidades do MVP
| Funcionalidade             | Descrição                                                         | Observações                                           |
| -------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
| Cadastro de alunos         | Registrar nome, e-mail, telefone, data de início e mensalidade    | Não incluir desconto fixo aqui                        |
| Registro de mensalidade    | Gerar mensalidade automática a partir da data de entrada do aluno | Relacionar desconto pontual apenas para o mês vigente |
| Aplicar desconto pontual   | Permitir inserir desconto em % ou valor em R\$ no mês atual       | Deve recalcular o valor final da mensalidade          |
| Status de pagamento        | Mostrar quais alunos pagaram e quais não pagaram                  | Visualização em tabela simples                        |
| Envio de lembrete WhatsApp | Botão para gerar link de mensagem automática para cada aluno      | Mensagem personalizada com nome e data de vencimento  |
| Rota /health               | Teste para verificar se servidor está rodando                     | Só para monitoramento e debugging                     |

3.2 Funcionalidades Futuras
Acesso dos alunos para verificar mensalidade e histórico

Marcar presença nos treinos

Alertas automáticos para graduações

Dashboard com métricas avançadas de faturamento

4. Regras de Negócio

Cada aluno possui data própria de pagamento, baseada no dia de cadastro.

Descontos pontuais aplicáveis apenas ao mês vigente.

O envio de lembrete não altera status de mensalidade, apenas facilita comunicação.

5. Stack Tecnológica
| Camada         | Tecnologia                        | Justificativa                              |
| -------------- | --------------------------------- | ------------------------------------------ |
| Frontend       | React + TypeScript + SCSS Modules | Flexibilidade e estilo modular             |
| Backend        | Node.js + TypeScript + Express    | Escalável, fácil integração com MongoDB    |
| Banco de Dados | MongoDB                           | Estrutura flexível para registros variados |
| Comunicação    | WhatsApp API (via link)           | Simples e eficiente para lembretes         |

6. Escopo do MVP

Inclui:

Cadastro de alunos

Registro e visualização de mensalidades

Aplicação de descontos pontuais

Envio de lembretes via WhatsApp

Rota /health de teste

Não inclui:

Acesso dos alunos

Dashboard avançado

Sistema de presença

7. Critérios de Aceitação

Mensalidades criadas corretamente com base na data de início do aluno

Descontos aplicados refletem no valor final imediatamente

Status de pagamento atualizado corretamente

Links de WhatsApp incluem nome e data de vencimento

Servidor responde corretamente na rota /health

8. Observações

Projeto inicial é para uso interno, sem necessidade de deploy público ainda

Estrutura modular desde o início para permitir escalabilidade

Documentação (ADR + PRD) será mantida no repositório