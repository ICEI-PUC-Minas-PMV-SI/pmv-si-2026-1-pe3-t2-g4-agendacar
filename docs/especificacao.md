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

O diagrama de casos de uso apresenta, de forma visual, as funcionalidades oferecidas pelo sistema a partir da perspectiva dos atores envolvidos. Além de descrever as funcionalidades, também evidencia as interações entre usuários (como cliente e prestador de serviços) e o sistema, permitindo compreender os principais objetivos e serviços disponíveis, bem como os limites do sistema.

#### Figura 1: Diagrama de Casos de Uso do Sistema

<img width="1141" height="548" alt="diagrama_casos_de_uso" src="https://github.com/user-attachments/assets/78b49fae-24f9-487f-ae94-39bb2f3b97bd" /> <br>


**Obs**.: Para manter a clareza visual do diagrama, nem todas as relações de «include» foram explicitamente representadas. Entretanto, essas dependências estão devidamente descritas nas pré-condições dos respectivos casos de uso, garantindo a consistência da modelagem.

### 3.4.2 Descrições de Casos de Uso

#### Cadastrar usuário (CSU-01)

Sumário: Para ter acesso ao sistema, o usuário acessa a tela de cadastro, escolhe seu perfil (cliente ou prestador de serviços) e preenche um formulário com as informações solicitadas.

Ator Primário: Usuário (cliente ou prestador de serviços)

Ator Secundário: Não se aplica

Pré-condições: O usuário deve preencher todos os campos obrigatórios e aceitar o termo de uso.

Fluxo Principal:

1)	O usuário acessa a página inicial do sistema e seleciona a opção ‘Cadastre-se’.
2)	O usuário define seu perfil, escolhendo entre as opções ‘Cliente’ e ‘Prestador de serviços’, o caso de uso é direcionado aos fluxos alternativos e então retorna ao fluxo principal.
3)	Uma vez preenchidos todos os campos obrigatórios, o sistema valida as informações preenchidas pelo usuário
4)	Se todas as informações estiverem de acordo com as regras de validação, o sistema solicita que o usuário aceite os termos de uso. Caso contrário, o sistema sinaliza inconsistência nas informações preenchidas.
5)	O usuário aceita os termos de uso e confirma o cadastro.
6)	O sistema cria o usuário, informa que o cadastro foi realizado com sucesso e retorna para a tela inicial.

Fluxo Alternativo (etapa 2):
1)	Ao escolher a opção ‘Cliente’, o usuário é direcionado para o formulário específico desse perfil.
2)	O usuário preenche todos os campos obrigatórios solicitados pelo sistema e o caso de uso retorna à etapa 3 do fluxo principal.

Fluxo Alternativo (etapa 2):
1)	Ao escolher a opção ‘Prestador de serviços’, o usuário é direcionado para o formulário específico desse perfil.
2)	O usuário preenche todos os campos obrigatórios solicitados pelo sistema e o caso de uso retorna à etapa 3 do fluxo principal.

Fluxo alternativo (etapa 4):
1)	Se os dados preenchidos forem inválidos, o sistema informa os campos a serem corrigidos e o caso de uso retorna à etapa 4 do fluxo principal.
2)	Caso já exista um cadastro utilizando os dados informados (CPF/CNPJ ou e-mail), o sistema informa essa inconsistência e retorna à etapa 4 do fluxo principal.

Pós-condições: Uma vez que todas as informações foram validadas e o termo de uso foi aceito, o usuário é cadastrado com sucesso e pode utilizar as funcionalidades do sistema.

----

#### Realizar login (CSU-02)

Sumário: Uma vez cadastrado, o usuário pode, a qualquer momento, realizar login no sistema utilizando o e-mail e senha. 

Ator Primário: Usuário (cliente ou prestador de serviços)

Ator Secundário: Não se aplica

Pré-condições: O usuário deve informar e-mail e senha válidos para acessar o sistema.

Fluxo Principal:

1)	O usuário acessa a tela de login, onde informa e-mail e senha.
2)	O sistema verifica se o e-mail e senha informados estão corretos.
3)	Caso e-mail e senha estejam corretos, o sistema volta à tela inicial e permite acesso às funcionalidades. Caso contrário, o usuário recebe um alerta de que os dados informados estão incorretos e os campos ficam novamente disponíveis para preencher.

Fluxo Alternativo (etapa 3):
1)	Ao ser alertado que os dados informados estão incorretos, o usuário informa e-mail e senha novamente.
2)	Se estiverem corretos, o sistema volta à tela inicial e permite acesso às funcionalidades. Caso estejam errados, o caso de uso permanece na etapa 3 do fluxo principal.

Fluxo Alternativo (etapa 3):
1)	Ao ser alertado que os dados informados estão incorretos, o usuário seleciona a opção ‘Esqueci minha senha’.
2)	Um link para cadastrar novamente a senha é enviado ao e-mail cadastrado.
3)	Após cadastrar uma nova senha, o usuário volta ao início do fluxo principal.

Pós-condições: Para cadastrar uma nova senha, o usuário deve ter acesso ao e-mail cadastrado no sistema.

----

#### Gerenciar cadastro (CSU-03)

Sumário: A qualquer momento, o usuário (cliente ou prestador) pode alterar seus dados cadastrais no sistema.

Ator Primário: Usuário (cliente ou prestador de serviços)

Ator Secundário: Não se aplica

Pré-condições: O usuário deve estar logado no sistema.

Fluxo Principal:

1)	O usuário realiza login utilizando e-mail e senha.
2)	A partir de um botão na tela inicial, o usuário acessa a tela ‘Alterar dados cadastrais’.
3)	O sistema abre o formulário de dados cadastrais específico do perfil de usuário.
4)	O usuário altera as informações desejadas e o sistema realiza a validação.
5)	Se todas as informações estiverem de acordo com as regras de validação, o sistema grava os dados alterados no cadastro do usuário. Caso contrário, o sistema sinaliza a inconsistência nas informações preenchidas e permanece na etapa 4)
6)	O sistema sinaliza que os dados cadastrais foram alterados com sucesso.

Fluxo Alternativo (etapa 5):
1)	Se os dados preenchidos forem inválidos, o sistema informa os campos a serem corrigidos e o caso de uso retorna à etapa 4 do fluxo principal.
2)	Caso o usuário tente alterar CPF/CNPJ ou e-mail e já exista um cadastro utilizando os valores informados, o sistema acusa a inconsistência e retorna à etapa 4 do fluxo principal.

Pós-condições: Tendo sido validadas todas as informações, os dados cadastrais do usuário são alterados com sucesso.

----

#### Gerenciar agenda (prestador de serviços) (CSU-04)

Sumário: A qualquer momento, o prestador de serviços pode cadastrar e editar as informações sobre sua disponibilidade de agenda para atendimento aos clientes.

Ator Primário: Prestador de serviços

Ator Secundário: Não se aplica

Pré-condições: O prestador de serviços deve estar logado no sistema.

Fluxo Principal:

1)	O prestador realiza login utilizando e-mail e senha.
2)	A partir de um botão na tela inicial, o prestador acessa a tela ‘Gerenciar agenda’
3)	O sistema exibe um formulário com informações sobre dias e horários de atendimento.
4)	O prestador define os horários de acordo com sua disponibilidade ou interesse.
5)	O sistema restringe o calendário e as vagas disponíveis de acordo com as informações do formulário.
6)	O sistema salva as configurações de agenda.

Pós-condições: A disponibilidade de agendamentos do prestador é atualizada para novas solicitações de clientes.

----

#### Gerenciar catálogo (prestador de serviços) (CSU-05)

Sumário: A qualquer momento, o prestador de serviços pode cadastrar e editar as informações sobre os produtos e serviços que oferece aos clientes.

Ator Primário: Prestador de serviços

Ator Secundário: Não se aplica

Pré-condições: O prestador de serviços deve estar logado no sistema.

Fluxo Principal:

1)	O prestador realiza login utilizando e-mail e senha.
2)	A partir de um botão na tela inicial, o prestador acessa a tela ‘Gerenciar produtos e serviços’
3)	O sistema exibe as opções ‘Cadastrar produto/serviço’, ‘Alterar produto/serviço’ e ‘Excluir produto/serviço’.
4)	O sistema valida os dados cadastrados ou alterados pelo prestador.
5)	Se todas as informações estiverem de acordo com as regras de validação, o sistema grava os dados cadastrados/alterados no catálogo do prestador. Caso contrário, o sistema sinaliza a inconsistência nas informações preenchidas e permanece na etapa 3)
6)	O sistema sinaliza que o produto/serviço foi cadastrado, alterado ou excluído com sucesso.

Fluxo Alternativo (etapa 3):
1)	Se o prestador selecionar a opção ‘Cadastrar produto/serviço’, o sistema abre um formulário padrão e pergunta ao prestador se deseja cadastrar um produto ou serviço.
2)	A partir da escolha entre cadastrar produto ou serviço, o formulário libera os campos pertinentes a cada uma das categorias.
3)	O prestador preenche os dados solicitados pelo sistema, confirma o cadastro e o caso de uso retorna à etapa 4 do fluxo principal.

Fluxo Alternativo (etapa 3):
1)	Se o prestador selecionar a opção ‘Alterar produto/serviço’, o sistema exibe os produtos e serviços cadastrados pelo prestador e pede que selecione aquele que deseja alterar.
2)	Uma vez escolhido o produto/serviço a alterar, o sistema abre o respectivo formulário com as informações preenchidas anteriormente.
3)	O prestador altera os dados desejados, confirma a alteração e o caso de uso retorna à etapa 4 do fluxo principal.

Fluxo Alternativo (etapa 3):
1)	Se o prestador selecionar a opção ‘Excluir produto/serviço’, o sistema exibe os produtos e serviços cadastrados pelo prestador e pede que selecione aquele que deseja excluir.
2)	Uma vez escolhido o produto/serviço a ser excluído, o sistema pede que o prestador confirme a exclusão.
3)	O prestador confirma a exclusão e o caso de uso retorna à etapa 6 do fluxo principal.

Pós-condições: Tendo sido validadas as informações, o catálogo do prestador é atualizado com sucesso.

----

#### Filtrar prestadores (cliente) (CSU-06)

Sumário: Uma vez logado no sistema, o cliente pode buscar na lista de prestadores aqueles que mais se adequam à sua necessidade, podendo filtrar por categoria, localização e avaliação.

Ator Primário: Cliente

Ator Secundário: Prestador de serviços

Pré-condições: O cliente precisa estar logado no sistema.

Fluxo Principal:

1)	O cliente realiza login utilizando e-mail e senha.
2)	A partir da tela inicial, o cliente seleciona a opção ‘Buscar prestadores’.
3)	O sistema abre uma tela com a lista de prestadores e acima dela apresenta as opções de filtro.
4)	O cliente seleciona os filtros desejados e seleciona buscar.
5)	O sistema exibe os prestadores de acordo com os parâmetros de busca informados.
6)	Caso deseje, o cliente pode selecionar a opção ‘Limpar filtros’.

Pós-condições: A partir da lista, esteja filtrada ou não, o cliente pode selecionar o prestador que desejar.

----

#### Informar demanda ao prestador (CSU-07)

Sumário: Antes de realizar um agendamento, o cliente pode encaminhar uma mensagem ao prestador informando brevemente sobre sua demanda, a fim de verificar se ele possui capacidade para atendê-lo.

Ator Primário: Cliente

Ator Secundário: Prestador de serviços

Pré-condições: O cliente deve estar logado no sistema.

Fluxo Principal:

1)	O cliente realiza login utilizando e-mail e senha.
2)	Após filtrar e selecionar o prestador de seu interesse, o cliente seleciona na tela do prestador a opção ‘Enviar mensagem ao prestador’.
3)	O sistema abre um formulário onde o cliente pode descrever brevemente sua demanda.
4)	Após o envio, o sistema notifica o prestador sobre a mensagem e solicita uma resposta ao cliente.
5)	As mensagens enviadas pelo cliente ficam registradas no sistema e encaminhadas em cópia para o e-mail.

Pós-condições: O cliente precisa aguardar um prazo de 48 horas para enviar nova mensagem a um mesmo prestador.

----

#### Enviar orçamento (CSU-08)

Sumário: O prestador de serviços pode, após um agendamento realizado pelo cliente, enviar um orçamento do serviço a ser realizado.

Ator Primário: Prestador de serviços

Ator Secundário: Cliente

Pré-condições:

*	O prestador de serviços deve estar logado no sistema.
*	Deve existir um agendamento registrado pelo cliente que receberá o orçamento.

Fluxo Principal:

1)	O prestador realiza login utilizando e-mail e senha.
2)	A partir de um botão na tela inicial, o prestador acessa a tela ‘Meus agendamentos’.
3)	O prestador seleciona o agendamento para o qual deseja enviar o orçamento.
4)	O sistema exibe um formulário para preenchimento das informações.
5)	O prestador preenche as informações solicitadas e confirma o envio.
6)	O sistema envia o orçamento para o cliente.

Fluxo Alternativo (etapa 5):
1)	Caso existam campos obrigatórios não preenchidos, o sistema sinaliza ao prestador.
2)	O caso de uso retorna à etapa 4 do fluxo principal.

Pós-condições: O sistema salva os dados de orçamento cadastrados pelo prestador e encaminha ao cliente.

----

#### Aprovar orçamento (CSU-09)

Sumário: O cliente pode, após um orçamento enviado pelo prestador de serviço, aprovar ou resusar o orçamento do serviço a ser realizado.

Ator Primário: Cliente

Ator Secundário: Prestador de serviços

Pré-condições:

*	O cliente deve estar logado no sistema.
*	Deve existir um orçamento registrado pelo prestador de serviço.

Fluxo Principal:

1)	O cliente realiza login utilizando e-mail e senha.
2)	O sistema notifica o cliente que existe um orçamento aguardando aprovação.
3)	Através da notificação o cliente acessa a tela 'Aprovação de Orçamento'.
4)	O sistema exibe os dados do orçamento cadastrado pelo prestador de serviços.
5)	O cliente aprova o orçamento.
6)	O sistema envia a aprovação para o prestador de serviços.

Fluxo Alternativo (etapa 5):
1)	Caso o cliente recuse o orçamento.
2)	O sistema solicita ao cliente o motivo da recusa do orçamento.
3)	O cliente preenche o campo de motivação da resuca do orçamento.
4)	O sistema envia a recusa junto com o motivo para o prestador de serviço.

Pós-condições: O sistema atualiza o status do orçamento aprovado ou recusado pelo cliente, em caso de recusa também salva o motivo da recusa.

----

#### Solicitar agendamento (CSU-10)

Sumário: O cliente filtra e seleciona um prestador no sistema e solicita o agendamento na data e horário de seu interesse.

Ator Primário: Cliente

Ator Secundário: Prestador de serviços

Pré-condições: O cliente deve estar logado no sistema.

Fluxo Principal:

1)	O cliente filtra e seleciona um prestador no sistema.
2)	O sistema apresenta o catálogo de produtos e serviços do prestador escolhido, juntamente com as opções ‘escolher outro prestador’ e ‘solicitar agendamento’.
3)	Após a escolha da opção ‘solicitar agendamento’, o sistema apresenta um calendário com datas/horários disponibilizados pelo prestador.
4)	O cliente seleciona a data/horário de seu interesse e o sistema apresenta as opções ‘confirmar solicitação’ e ‘escolher outra data/horário’.
5)	Uma vez confirmada a solicitação, o cliente recebe um e-mail com a confirmação do agendamento.

Fluxo Alternativo (etapa 2):
1)	Caso o cliente selecione a opção ‘escolher outro prestador’, o caso de uso retorna à etapa 1 do fluxo principal.
2)	Caso o cliente selecione a opção ‘solicitar agendamento, o caso de uso segue para a etapa 3 do fluxo principal.

Fluxo Alternativo (etapa 4):
1)	Se o cliente selecionar a opção ‘escolher outra data/horário’, o sistema retorna à etapa 3 do fluxo principal.
2)	Se o cliente selecionar a opção ‘confirmar solicitação, o caso de uso segue para a etapa 5 do fluxo principal.

Pós-condições: O prestador recebe a solicitação do cliente e escolhe aceitar ou recusar, gerenciando dessa forma seus agendamentos.

----

#### Alterar/cancelar agendamento (CSU-11)

Sumário: A qualquer momento, o usuário (cliente ou prestador) pode alterar ou cancelar os agendamentos realizados/recebidos no sistema.

Ator Primário: Usuário (cliente ou prestador de serviços)

Ator Secundário: Não se aplica

Pré-condições: O usuário deve estar logado no sistema.

Fluxo Principal:

1)	O usuário realiza login utilizando e-mail e senha.
2)	A partir de um botão na tela inicial, o usuário acessa a tela ‘Gerenciar agendamentos’.
3)	O sistema exibe a relação de agendamentos do usuário e pede que o usuário selecione aquele que deseja alterar/cancelar.
4)	Uma vez selecionado o agendamento, o sistema exibe um formulário solicitando nova data/horário e a opção de cancelar o agendamento.
5)	O sistema sinaliza que o agendamento foi cancelado com sucesso.
6)	O sistema sinaliza que o agendamento está pendente de aceite pela outra parte envolvida.
   * Caso o usuário seja do tipo cliente, o fluxo segue para a etapa 1 do caso de uso CSU-10, onde o prestador decide sobre a solicitação de agendamento do cliente.
   * Caso o usuário seja do tipo prestador de serviços, o fluxo segue para a etapa 5 do caso de uso CSU-10, onde o sistema encaminha ao cliente, por e-mail, a sugestão de data/horário feita pelo prestador.

Fluxo Alternativo (etapa 4):
1)	Se o usuário optar por cancelar o agendamento, o sistema pede uma confirmação.
2)	Após confirmar o cancelamento, o sistema notifica por e-mail o outro usuário envolvido que o agendamento foi cancelado e o fluxo segue para a etapa 5 do fluxo principal.

Fluxo Alternativo (etapa 4):
1)	Se o usuário optar por alterar a data/horário, o sistema pede uma confirmação.
2)	Após confirmar a alteração de data/horário o fluxo segue para a etapa 6 do fluxo principal

Pós-condições: O usuário envolvido no agendamento é sinalizado sobre o cancelamento ou alteração da data/horário pela outra parte.

----

#### Gerenciar solicitação de agendamento (prestador de serviços) (CSU-12)

Sumário: O prestador recebe as solicitações de agendamentos dos clientes, podendo aceitar, recusar ou propor uma nova data/horário para realizar o atendimento

Ator Primário: Prestador de serviços

Ator Secundário: Cliente

Pré-condições: O prestador de serviços deve estar logado no sistema.

Fluxo Principal:

1)	O prestador de serviços recebe uma solicitação de agendamento no sistema.
2)	O sistema apresenta as opções ‘aceitar’, ‘recusar’ e ‘propor uma nova data/horário’.
3)	O agendamento é confirmado e o sistema encaminha um e-mail de confirmação ao cliente.
4)	O agendamento é cancelado e o sistema encaminha um e-mail de cancelamento ao cliente.
5)	O sistema encaminha ao cliente, por e-mail, a sugestão de data/horário feita pelo prestador.

Fluxo Alternativo (etapa 2):
1)	Caso o prestador escolha a opção ‘aceitar’, o agendamento é confirmado e o caso de uso segue para a etapa 3 do fluxo principal.
2)	Caso o prestador escolha a opção ‘recusar’, o agendamento é cancelado e o caso de uso segue para a etapa 4 do fluxo principal.

Fluxo Alternativo (etapa 2):
1)	Se o prestador escolher a opção ‘propor nova data/horário’, o sistema apresenta um calendário.
2)	O prestador de serviços define uma data/horário para sugerir ao cliente e o caso de uso segue para a etapa 5 do fluxo principal.
3)	O sistema encaminha ao cliente, por e-mail, a sugestão de data/horário feita pelo prestador, e o caso de uso segue para a etapa XXX do fluxo principal.

Pós-condições: O sistema informa ao prestador que um percentual de recusas elevado influencia negativamente na sua avaliação.

----

#### Avaliar prestador (CSU-13)

Sumário: Após a realização de um serviço, o cliente registra uma nota e um comentário sobre a experiência do atendimento realizado pelo prestador, contribuindo para o ranking de avaliação dos prestadores no sistema.

Ator Primário: Cliente

Ator Secundário: Prestador de serviços

Pré-condições: O atendimento deve ter sido realizado pelo prestador e o status do agendamento ser ‘Concluído’ no sistema.

Fluxo Principal:

1)	O prestador sinaliza no sistema que o serviço foi realizado.
2)	O sistema notifica o cliente sobre a conclusão do serviço e solicita uma avaliação.
3)	No formulário de avaliação, o cliente pontua o prestador de 1 a 5 estrelas, podendo acrescentar um comentário sobre o atendimento.
4)	O cliente confirma a avaliação.
5)	O sistema valida as informações, salva os dados da avaliação e atualiza a pontuação média do prestador em tempo real.

Pós-condições: O prestador recebe uma notificação de que foi avaliado pelo cliente. As avaliações dos prestadores ficam disponíveis para os demais clientes.

----

#### Visualizar relatórios (CSU-14)

Sumário: Permite que o prestador de serviços visualize relatórios dos agendamentos realizados, a fim de auxiliar na análise e tomada de decisões relacionadas ao seu negócio.

Ator Primário: Prestador de serviços

Ator Secundário: Não se aplica. 

Pré-condições: 

*	O prestador de serviços deve estar logado no sistema.
*	Deve existir pelo menos um agendamento registrado para o prestador.

Fluxo Principal:

1)	O prestador de serviços acessa o sistema
2)	O prestador realiza login e seleciona a opção ‘Relatórios’.
3)	Na tela de ‘Relatórios’, o sistema exibe opções de filtro (tipo de serviço, status do agendamento, período).
4)	O prestador seleciona os filtros de seu interesse ou não seleciona nenhum filtro.
5)	O sistema busca as informações na base de dados, gera o relatório e exibe em uma tela de visualização.

Fluxo Alternativo (etapa 3):
1)	Se o prestador selecionar os filtros de seu interesse, a busca fica restrita aos parâmetros solicitados e segue para a etapa 4 do fluxo principal.
2)	Se o prestador não selecionar nenhum filtro, a busca resulta em todos os agendamentos já registrados para o prestador e segue para a etapa 4 do fluxo principal.

Fluxo Alternativo (etapa 5):
1)	Caso não existam dados disponíveis para os filtros selecionados ou o prestador ainda não tenha recebido agendamentos, o sistema informa que não há dados para exibição.

Pós-condições: O prestador pode exportar ou imprimir o relatório exibido na tela de visualização.

----

#### Alterar tema (CSU-15)

Sumário: A qualquer momento, na tela inicial do sistema, o usuário (cliente ou prestador) pode alterar o tema da aplicação entre claro ou escuro.

Ator Primário: Usuário (cliente ou prestador de serviços)

Ator Secundário: Não se aplica

Pré-condições: O usuário precisa estar logado.

Fluxo Principal:

1)	O usuário realiza login utilizando e-mail e senha.
2)	Na tela inicial, um botão permite realizar a troca do tema para claro (default) ou escuro.
3)	O usuário seleciona o tema de sua preferência.
4)	O sistema persiste a escolha do usuário em todas as sessões.

Pós-condições: O tema será mantido até que o usuário realize uma nova alteração.

### 3.4.3 Diagrama de Classes 

A Figura 2 apresenta o diagrama de classes do sistema AgendaCar. A estrutura é centralizada na classe _Usuario_, da qual derivam por herança as especializações _Cliente_ e _Prestador_. O _Prestador_ possui composição com _Agenda_ e _ItemCatalogo_, refletindo que esses elementos fazem parte intrínseca do seu perfil no sistema. O _Agendamento_ conecta _Cliente_ e _Prestador_, registrando a solicitação de serviço e o ciclo de vida do atendimento, da confirmação à conclusão. A partir de um agendamento concluído, o _Cliente_ pode registrar uma _Avaliacao_, influenciando a reputação do _Prestador_ na plataforma. O fluxo de orçamento é representado pelas classes _Orcamento_ e _ItemCatalogoOrcamento_, este sendo derivado por herança da classe _ItemCatalogo_, que detalham a proposta enviada ao cliente, e pela _OrdemDeServico_, gerada quando o orçamento é aprovado e o serviço é formalmente autorizado.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/img/DiagramaDeClasses.png?raw=true)

### 3.4.4 Descrição das Classes

| # | Nome | Descrição |
|---|------|-----------|
| 1 | Usuario | Classe base que centraliza os dados e comportamentos comuns a todos os usuários do sistema, como autenticação, gerenciamento de cadastro e preferência de tema. |
| 2 | Cliente | Especialização de Usuario que representa o proprietário de veículo. Responsável por buscar prestadores, solicitar agendamentos, solicitar orçamentos e avaliar os serviços recebidos. |
| 3 | Prestador | Especialização de Usuario que representa o estabelecimento automotivo. Responsável por gerenciar sua agenda, catálogo de serviços e produtos, solicitações de agendamento, orçamentos e relatórios. |
| 4 | Agenda | Registra a disponibilidade do prestador, definindo os dias, horários de atendimento e a quantidade de vagas simultâneas disponíveis para agendamento. |
| 5 | Agendamento | Representa a solicitação de serviço feita pelo cliente a um prestador, registrando data, horário, placa do veículo, descrição da demanda e o status atual do atendimento. |
| 6 | ItemCatalogo | Representa os serviços e produtos oferecidos pelo prestador, contendo nome, descrição, preço, tipo (serviço ou produto) e situação (ativo/inativo). |
| 7 | Avaliacao | Registra a experiência do cliente após a conclusão de um atendimento, por meio de uma nota e um comentário opcional, impactando a reputação do prestador na plataforma. |
| 8 | Orcamento | Representa a proposta de valor enviada pelo prestador ao cliente para um determinado agendamento, contendo descrição dos serviços, valor total e status de aprovação. |
| 9 | ItemCatalogoOrcamento | Especialização de ItemCatalogo que representa cada item individualmente dentro de um orçamento, com nome, tipo, descrição, preço unitário, quantidade e valor total, compondo o detalhamento da proposta enviada ao cliente. |
| 10 | OrdemDeServico | Documento gerado a partir de um orçamento aprovado, formalizando a execução do serviço com descrição, valor, responsável, datas de início e fim e status de andamento. |



