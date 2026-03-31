# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento
O objetivo deste documento é especificar as necessidades de prestadores de serviços automotivos e seus clientes que deverão ser atendidas pelo sistema proposto, denominado AgendaCar.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado AgendaCar. O sistema consiste em uma plataforma digital cujo objetivo é facilitar a conexão entre clientes e prestadores de serviços automotivos, permitindo a busca por serviços, a visualização de prestadores disponíveis e o agendamento de atendimentos de forma online. O sistema possibilitará o cadastro e gerenciamento de usuários e prestadores de serviços, o controle de disponibilidade de horários, a realização de agendamentos e a avaliação de serviços prestados.

### 3.2.2 Missão do produto
Otimizar a organização dos atendimentos de prestadores de serviços automotivos e melhorar a experiência dos clientes por meio de um sistema que facilite a busca e o agendamento de serviços.

### 3.2.3 Limites do produto
O AgendaCar não irá abranger funcionalidades relacionadas ao controle de estoque e de gestão financeira dos prestadores de serviços, como controle de receitas, despesas ou emissão de relatórios financeiros. O foco do sistema será a realização de agendamentos de serviços e a intermediação entre clientes e prestadores.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Praticidade na busca por serviços automotivos |	Essencial |
|2	| Facilidade no gerenciamento de agendamentos	| Essencial | 
|3 | Acesso a informações detalhadas sobre prestadores e serviços | Essencial | 
|4 | Facilidade na contratação de serviços | Essencial | 
|5	| Organização dos agendamentos realizados	| Essencial | 
|6	| Maior transparência por meio de avaliações de usuários	| Desejável |
|7	| Melhoria na comunicação com os clientes	| Desejável | 



## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição | Prioridade |
|--------------------|------------------------------------|----------------------------------------|------------|
| RF1 | Usuário realiza o login |	O usuário deve realizar login utilizando e-mail e senha. | Essencial |
| RF2 |	Usuário gerencia seu cadastro	| O usuário, seja cliente ou prestador, deve manutenir seus dados cadastrais no sistema. | Essencial |
| RF3	| Cliente filtra prestadores |	O cliente pode filtrar prestadores por categoria, localização e avaliação. | Essencial |
| RF4	| Cliente agenda a prestação de serviços |	O cliente deve agendar a prestação de serviços no sistema. | Essencial |
| RF5	| Prestador gerencia sua agenda |	O prestador deve gerenciar sua disponibilidade e quantidade de vagas na agenda. | Essencial |
| RF6	| Prestador gerencia seus serviços e produtos |	O prestador deve catalogar no sistema seus serviços e produtos oferecidos. | Essencial |
| RF7	| Usuário gerencia seus agendamentos |	O usuário, seja cliente ou prestador, pode alterar/cancelar seus agendamentos. | Essencial |
| RF8	| Cliente avalia prestadores |	O cliente pode avaliar os prestadores de serviços. | Desejável |
| RF9	| Prestador emite relatórios |	O prestador pode emitir relatórios de agendamentos para subsidiar análises de negócios. | Desejável |
| RF10	| Cliente informa demanda ao prestador |	O cliente pode informar sua demanda antes do agendamento para verificar se o prestador é capaz de atendê-la. | Opcional |
| RF11	| Prestador envia o orçamento |	O prestador de serviços pode enviar orçamentos e solicitar a aprovação do cliente. | Opcional |
| RF12	| Usuário altera tema do sistema |	O usuário poderá alterar o tema escuro ou claro no sistema. | Opcional |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | A interface se adapta a diferentes dispositivos sem perda das principais funcionalidades. |
| RNF2 | As principais funcionalidades devem ser acessíveis em até 5 cliques a partir da tela inicial. |
| RNF3 |	O sistema deve suportar um aumento de 50% no volume de requisições por segundo em relação à média dos últimos 30 dias. |
| RNF4 |	O sistema permanece disponível 24/7, com disponibilidade mínima de 99,0% ao mês, exceto em manutenções programadas. |
| RNF5 |	Os carregamentos entre páginas e módulos ocorrem em até 3 segundos, em condições normais de uso. |
| RNF6 |	O sistema trata dados pessoais em conformidade com a LGPD, garantindo coleta, uso e armazenamento adequados. |

### 3.3.3 Usuários 

| Ator | Descrição |
|-----------------|---------------------------------------|
| Prestador de serviços |	O prestador de serviços será o usuário responsável por gerenciar as solicitações de agendamentos dos clientes, podendo aceitar ou recusar de acordo com seu interesse. Também será responsável por catalogar no sistema os produtos e serviços oferecidos em seu estabelecimento. |
| Cliente |	Caberá ao usuário cliente selecionar no sistema o prestador de seu interesse e solicitar o agendamento dos serviços. Além disso, será de sua responsabilidade avaliar os prestadores após a realização do atendimento. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, o cliente poderá realizar a busca por prestadores e solicitar agendamentos de serviços, enquanto o prestador de serviços terá a responsabilidade de gerenciar as solicitações recebidas, podendo aceitar, recusar ou propor novos horários. Além disso, o sistema permite que o cliente realize a avaliação técnica e de atendimento após a conclusão do serviço, garantindo a transparência e a confiabilidade da plataforma para ambos os usuários.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![CSU](../img/csu.png)
 
### 3.4.2 Descrições de Casos de Uso

#### Solicitar Agendamento (CSU-01)

Sumário: O cliente escolhe um prestador no sistema e solicita o agendamento na data e horário de seu interesse, podendo descrever brevemente sua necessidade.

Ator Primário: Cliente

Ator Secundário: Prestador

Pré-condições: O cliente deve estar logado no sistema.

Fluxo Principal:

1) 	O cliente escolhe um prestador no sistema.
2) 	O sistema apresenta o catálogo de produtos e serviços do prestador escolhido, juntamente com as opções ‘escolher outro prestador’ e ‘solicitar agendamento’.
3) 	Caso o cliente selecione a opção ‘escolher outro prestador’, o caso de uso retorna à etapa 1; caso contrário, o caso de uso segue o fluxo.
4) 	Após a escolha da opção ‘solicitar agendamento’, o sistema apresenta um calendário com datas/horários disponibilizados pelo prestador.
5) 	O cliente seleciona a data/horário de seu interesse e o sistema apresenta as opções ‘confirmar solicitação’ e ‘escolher outra data/horário’.
6) 	Caso o cliente selecione a opção ‘escolher outra data/horário’, o caso de uso retorna à etapa 4; caso contrário, a solicitação é confirmada e o caso de uso é concluído. <br>

Pós-condições: O prestador recebe a solicitação do cliente e escolhe aceitar ou recusar, gerenciando dessa forma seus agendamentos.

#### Gerenciar agendamentos (CSU-02)

Sumário: O prestador recebe as solicitações dos clientes com informações de data/horário e uma breve descrição da demanda, podendo aceitar, recusar ou propor uma nova data/horário para realizar o atendimento.

Ator Primário: Prestador

Ator Secundário: Cliente

Pré-condições: O prestador deve estar logado no sistema.

Fluxo Principal:

1) 	O prestador recebe uma solicitação de agendamento no sistema.
2) 	O sistema apresenta as opções ‘aceitar’, ‘recusar’ e ‘propor uma nova data/horário’.
3) 	Se o prestador escolher a opção ‘aceitar’, o agendamento é confirmado e o caso de uso é concluído.
4) 	Se o prestador escolher a opção ‘recusar’, o agendamento é cancelado, o cliente é informado sobre a recusa e o caso de uso é concluído.
5) 	Se o prestador escolher a opção ‘propor uma nova data/horário’, o sistema apresenta um calendário com datas/horários.
6) 	O prestador informa a data/horário de sua disponibilidade, o sistema envia a proposta ao cliente e o caso de uso é concluído. <br>

Fluxo Alternativo (etapa 2):

1) 	O prestador não responde à solicitação do cliente e não sugere uma nova data/horário.
2) 	Após 24h da abertura da solicitação, o sistema recusa automaticamente e informa ao cliente que o prestador não respondeu.
3) 	O sistema apresenta ao cliente as opções ‘solicitar novamente ao mesmo prestador’ e ‘solicitar a outro prestador’.
4) 	Caso o cliente selecione ‘solicitar novamente ao mesmo prestador’, o caso de uso retorna à etapa 4 do CSU-01 (Solicitar agendamento).
5) 	Caso o cliente selecione ‘solicitar a outro prestador’, o caso de uso retorna ao início do CSU-01 (Solicitar agendamento). <br>

Pós-condições: O sistema informa ao prestador que ter um percentual de recusas elevado influencia na sua avaliação.

#### Avaliar Prestador (CSU-03)

Sumário: O cliente registra uma nota e um comentário sobre a experiência do serviço realizado, contribuindo para o ranking de confiabilidade do prestador no sistema.  

Ator Primário: Cliente  

Ator Secundário: Prestador  

Pré-condições: O agendamento deve estar com o status "Concluído" no sistema.

Fluxo Principal:
1. O sistema envia uma notificação ao cliente informando que o serviço foi finalizado e solicita uma avaliação.
2. O cliente acessa a área de "Meus Agendamentos" e seleciona o serviço concluído.
3. O sistema apresenta uma tela com escala de 1 a 5 estrelas e um campo de texto para comentários.
4. O cliente preenche a pontuação, escreve o comentário (opcional) e seleciona a opção "Enviar Avaliação".
5. O sistema valida as informações, salva a avaliação e atualiza a média aritmética do prestador em tempo real.
6. O caso de uso é concluído.

Pós-condições: A avaliação torna-se visível no perfil público do prestador para outros usuários. Além do prestador receber uma notificação informando que recebeu uma nova avaliação (sem permissão para editá-la ou excluí-la).

#### Cadastrar usuário (CSU-04)

Sumário: O usuário cadastra suas informações para que possa utilizar o sistema, definindo se é do tipo cliente ou prestador de serviço.

Ator Primário: Usuário (Cliente/Prestador)

Fluxo Principal:
1. O usuário acessa a tela de cadastro.
2. O usuário preenche as informações necessárias para cadastro.
3. O usuário seleciona o tipo de cadastro:
   - Cliente.
   - Prestador de Serviço. 
4. O usuário confima o cadastro.
6. O sistema valida as informações do cadastro.
7. O sistema cria a conta.
8. O sistema confirma o cadastro.

Fluxo Alternativo (etapa 6)

a. Os dados são inválidos:
   1. O sistema informa ao usuário que os dados estão inválidos.
   2. O sistema retorna ao passo 2 do fluxo principal.
  
b. E-mail já cadastrado:
   1. O sistema informa que o e-mail já está sendo usado.
   2. O sistema retorna ao passo 2 do fluxo principal.
  
Pós-condições: O usuário é cadastrado com sucesso com o tipo definido corretamente.

#### Editar usuário (CSU-05)

Sumário: O usuário edita suas informações cadastrais.

Ator Primário: Usuário (Cliente/Prestador)

Pré-condições: O usuário deve estar logado no sistema.

Fluxo Principal:
1. O usuário acessa a tela de edição.
2. O sistema exibe o formulário de edição com as informações atualmente cadastradas.
3. O usuário altera as informações desejadas.
4. O usuário confima a edição.
5. O sistema valida as informações de edição.
6. O sistema salva as novas informações.
7. O sistema confirma a edição.

Fluxo Alternativo (etapa 6)

a. Os dados são inválidos:
   1. O sistema informa ao usuário que os dados estão inválidos.
   2. O sistema retorna ao passo 2 do fluxo principal.

Pós-condições: As informações do usuário são alteradas com sucesso de acordo com o formulário submetido.

#### Gerenciamento da agenda e Gerenciamento de serviços e produtos (CSU-06 e CSU-07)

**Fluxo Principal – Autenticação:**

1. O usuário acessa a tela de login.
2. O usuário informa suas credenciais de acesso.
3. O sistema valida as credenciais.
4. O sistema autentica o usuário.

---

**Fluxo Principal – Cliente:**

1. O cliente acessa a plataforma após login.
2. O cliente acessa o catálogo de serviços/produtos.
3. O cliente visualiza os serviços/produtos disponíveis.

---

**Fluxo Principal – Prestador:**

1. O prestador acessa a plataforma após login.
2. O prestador acessa o painel de gerenciamento.
3. O prestador seleciona a área desejada:

   * Gerenciamento de Agenda.
   * Gerenciamento de Catálogo.

---

**Fluxo Principal – Gerenciamento de Agenda (CSU-06):**

1. O prestador acessa o painel de agenda.
2. O sistema exibe as opções de gerenciamento.
3. O prestador define horários de atendimento.
4. O prestador bloqueia datas específicas.
5. O prestador ajusta a quantidade de vagas simultâneas.
6. O sistema salva as configurações.

---

**Fluxo Principal – Gerenciamento de Catálogo (CSU-07):**

1. O prestador acessa o catálogo para gerenciamento.
2. O sistema exibe os itens cadastrados.
3. O prestador escolhe uma ação:

   * Cadastrar novo serviço/produto.
   * Atualizar descrições e preços.
   * Inativar/remover serviço ou produto.
4. O sistema processa a ação selecionada.
5. O sistema atualiza o catálogo.

---

**Fluxo Alternativo:**

1. Dados inválidos:

   1. O sistema informa que os dados são inválidos.
   2. O sistema retorna ao passo anterior.

2. Falha ao salvar alterações:

   1. O sistema informa erro ao salvar.
   2. O sistema permite nova tentativa.
  
#### Visualizar Relatórios (CSU-08)

Sumário: Permite que o prestador de serviços visualize relatórios dos agendamentos realizados, a fim de auxiliar na análise e tomada de decisões relacionadas ao seu negócio.

Ator Primário: Prestador de serviços.

Pré-condições: 
 * O prestador de serviços deve estar cadastrado e logado no sistema.
 * Devem existir agendamentos registrados no sistema.

Fluxo Principal:
1. O prestador de serviços acessa o sistema.
2. O prestador de serviços realiza login.
3. O prestador de serviços seleciona a opção "Relatórios".
4. O sistema exibe opções de filtros (tipo de serviço, período).
5. O prestador de serviços seleciona os filtros desejados.
6. O sistema gera e exibe o relatório solicitado.

Fluxo Alternativo (etapa 6)

a. Não existem dados disponíveis:
   1. No passo 6, caso não existam dados para o filtro selecionado o sistema informa que não há dados para exibição.

Pós-condições: O relatório é exibido ao prestador de serviços.

#### Enviar Orçamento (CSU-09)

Sumário: Permite que o prestador de serviços envie o orçamento do serviço para o cliente.

Ator Primário: Prestador de serviços.

Pré-condições: 
 * O prestador de serviços deve estar cadastrado e logado no sistema.
 * Devem existir agendamentos registrados no sistema.

Fluxo Principal:
1. O prestador de serviços acessa os agendamentos.
2. O prestador de seleciona o agendamento no qual deseja enviar o orçamento.
3. O prestador de serviços seleciona a opção "Enviar orçamento".
4. O sistema exibe o formulário para preenchimento das informações do orçamento.
5. O prestador de serviços preenche os campos com dados do orçamento.
6. O prestador de serviços clica em "Enviar".
7. O sistema envia o orçamento para o cliente.

Fluxo Alternativo (etapa 6)

a. Campos não preenchidos:
   1. O sistema informa que os dados são obrigatórios.
   2. O sistema retorna ao passo 4.

Pós-condições: O sistema salva o orçamento e envia para o cliente passando a permitir a aprovação.


---

**Pós-condições:**
O usuário acessa o sistema com sucesso e executa as funcionalidades conforme seu perfil (cliente ou prestador).
<img width="1363" height="972" alt="image" src="https://github.com/user-attachments/assets/e5881b4e-aed8-43f7-b550-0c11870a9e19" />



### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/abc7591a-b46f-4ea2-b8f0-c116b60eb24e)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
