# 4. PROJETO DO DESIGN DE INTERAÇÃO

## 4.1 Personas

![Persona - Pedro Paulo](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/Persona-Pedro-Paulo.jpg) 

![Persona - Nathalia](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/persona-nathalia-enfermeira.jpg)

![Persona - Rafael Costa](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/image.png)

![Persona - Lucas Ferreira](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/PersonaLucasFerreira.png)

![persona patricia](https://github.com/user-attachments/assets/478056ba-5026-4bcc-9b71-69349d44c7fc)


## 4.2 Mapa de Empatia
Mapa da Empatia é um material utilizado para conhecer melhor o seu cliente. A partir do mapa da empatia é possível detalhar a personalidade do cliente e compreendê-la melhor. O objetivo é obter um nível mais profundo de compreensão de uma persona. A seguir um exemplo de template que pode ser usado para o mapa de empatia. Para cada persona deverá ser apresentado o seu respectivo mapa de empatia. Sugere-se a utilização do template apresentado em https://www.rdstation.com/blog/marketing/mapa-da-empatia/.

![Mapa de empatia - Pedro Paulo](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/Mapa-de-empatia-Paulo.jpeg)

![Mapa de empatia - Nathalia](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/mapa-empatia-nathalia-enfermeira.png)

![Mapa de empatia - Rafael Costa](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/rafael-costa0.png)

![Mapa de empatia - Lucas Ferreira](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/MapaEmpatiaLucasFerreira.png)

<img width="4705" height="4921" alt="Mapa de empatia - Patricia" src="https://github.com/user-attachments/assets/835683b6-c642-437f-9630-ccae508c6e8d" />


## 4.3 Protótipos das Interfaces
Apresente nesta seção os protótipos de alta fidelidade do sistema proposto. A fidelidade do protótipo refere-se ao nível de detalhes e funcionalidades incorporadas a ele. Assim, um protótipo de alta fidelidade é uma representação interativa do produto, baseada no computador ou em dispositivos móveis. Esse protótipo já apresenta maior semelhança com o design final em termos de detalhes e funcionalidades. No desenvolvimento dos protótipos, devem ser considerados os princípios gestálticos, as recomendações ergonômicas e as regras de design (como as 8 regras de ouro). É importante descrever no texto do relatório como os princípios gestálticos e as regras de ouro foram seguidas no projeto das interfaces. Nesta etapa deve-se dar uma ênfase na implementação do software de modo que possam ser realizados os testes com usuários na etapa seguinte.

### 4.3.1 Login

#### 4.3.1.1 Objetivo da tela

A tela apresenta um formulário de autenticação contendo os campos de e-mail e senha, destinados para usuário já cadastrados anteriormente no sistema.
Ao clicar no botão "Entrar", o sistema valida as credencias informadas. Caso os dados sejam válidos, o usuário é autenticado e redirecionado para o ambiente interno.
A interface também disponibiliza a opção "Manter conectado?", que permite que a sessão do usuário seja preservada, evitando a necessidade de um novo login em acessos futuros.
Além disso, está disponível o link "Ainda não se cadastrou? Cadastre-se" que redireciona o usuário para a tela de cadastro.

#### 4.3.1.2 Princípios Gestálticos

**Proximidade, Região comum e Boa continuidade:** Os campos de e-mail e senha estão posicionados próximos e dentro do mesmo container, fazendo referência a único grupo funcional relacionado à autenticação. O checkbox "Manter conectado" e o botão "Entrar" aparecem logo abaixo, passando a sensação de sequência natural das ações do usuário.

**Similaridade:** Os campos compartilham o mesmo estilo visual, facilitando o reconhecimento de sua função pelo usuário.

#### 4.3.1.3 Recomendações Ergonômicas

**Feedback imediato:** Os campos e botões são destacados quando focados.

**Localização do usuário:** A tela deixa claro em que ponto o usuário se encontra no sistema.

**Legibilidade:** Os textos tem tamanho, espaçamento e contraste com o fundo, o que proporciona boa legibilidade.

**Agrupamento/Distinção de Itens:** Os itens semelhantes estão agrupados e devidamente diferenciados dos demais elementos da interface.

#### 4.3.1.4 Regras de Ouro

**Perseguir a Consistência:** A interface segue padrões visuais.

**Feedbacks Informativos:** Os campos e botões são destacados quando focados.

**Fornecer Controle de Iniciativa do Usuário:** O usuário tem liberdade para concluir ações de autenticação ou navegar entre as telas.

**Carga de Memória de Trabalho:** Por seguir padrões e fluxos intuitivos a memorização não se torna necessária por parte do usuário.

![Tela de Login](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/Tela%20de%20Login.png)

### 4.3.2 Tela Inicial (Homepage)

#### 4.3.2.1 Objetivo da tela

A tela inicial (homepage) tem como objetivo atrair e orientar o usuário na utilização do sistema. Ela possui um campo de busca rápida, possibilitando ao usuário encontrar serviços automotivos de forma simples. Além disso, ela contém um fluxo explicativo ("Como funciona?"), que orienta o uso da plataforma tanto para clientes quanto para prestadores de serviços.

#### 4.3.2.2 Princípios Gestálticos

**Proximidade**: Os blocos como funciona, tanto para clientes quanto para profissional, estão agrupados e mesmo separados estão próximos, os passos dentro de cada bloco estão bem organizados.

**Similaridade**: Botões laranja seguem o mesmo padrão. Os ícones circulares dos passos têm o mesmo estilo e tipografia consistente.

**Boa Continuidade (alinhamento)**: O passo a passo segue um fluxo que guia o usuário naturalmente.

#### 4.3.2.3 Recomendações Ergonômicas

**Legibilidade**: Contraste adequado e fontes legíveis.

**Condução**: O fluxo explicativo ("Como funciona?") orienta o usuário, proporcionando rápido aprendizado e facilidade na utilização.

**Agrupamento/Distinção de itens**: Os campos semelhantes estão agrupados e diferenciados.

#### 4.3.2.4 Regras de Ouro

**Perseguir a consistência**: A interface possui padrões visuais.

**Fornecer Feedbacks Informativos**: O Botão buscar sugere uma ação clara e o passo a passo mostra o que acontece depois.

**Reduzir a Carga de Memória de Trabalho**: O fluxo explicativo ("Como funciona?") explica tudo na tela, não é necessário lembrar etapas.

![Tela inicial (homepage)](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/src/img/Design/Homepage.png)




### 4.3.3 Telas de Cadastro (Usuário / Serviços)

#### 4.3.2.1 Objetivo da tela

A tela de cadastro de usuário tem por finalidade permitir que qualquer usuário, seja ele cliente ou prestador(a) de serviços insira suas informações no sistema para acessar as funcionalidades que exigem login (solicitar orçamentos, realizar agendamentos e avaliar prestadores).

Por sua vez, a tela de cadastro de serviços é disponibilizada apenas para prestadores, onde podem inserir informações que irão compor seu catálogo de serviços junto ao sistema, ficando disponíveis para que os clientes possam conhecer o prestador antes de solicitar orçamento ou agendar atendimentos.

#### 4.3.2.2 Princípios Gestálticos

**Proximidade**: Na tela de cadastro de usuário, a caixa de seleção centralizada na parte superior do formulário conduz o novo usuário a selecionar seu perfil (cliente ou prestador(a) de serviços). Abaixo, os campos de formulário apresentam junto às caixas de texto um título exibindo a informação solicitada. Ainda no centro da página, uma lista com botões selecionáveis sugere ao usuário os tipos de serviços que ele busca ou oferece. Na tela de cadastro de serviços, disponível apenas para prestadores, as caixas de texto centralizadas na página exibem títulos para demonstrar quais informações devem ser preenchidas. Em ambas as telas, os elementos foram dispostos próximos, cercados por linhas delimitadores, denotando um aspecto de formulário estruturado.

**Similaridade**: Os botões dispostos no cabeçalho da página seguem o padrão de cores definido no layout, e o corpo da página apresenta fundo claro, com tipografia em bom contraste no formulário, facilitando a visualização.

**Boa Continuidade (alinhamento)**: Os campos de formulário seguem uma sequencia lógica, conduzindo o preenchimento das informações necessárias.

#### 4.3.2.3 Recomendações Ergonômicas

**Legibilidade**: Contraste adequado e fontes legíveis.

**Condução**: O fluxo de informações solicitadas segue uma lógica orientada ao usuário, proporcionando rápido aprendizado e clareza no preenchimento.

**Agrupamento/Distinção de itens**: Os campos semelhantes estão agrupados e diferenciados.

#### 4.3.2.4 Regras de Ouro

**Perseguir a consistência**: A interface possui padrões visuais.

**Fornecer Feedbacks Informativos**: As caixas de texto dos formulários apresentam títulos que descrevem quais informações devem ser preenchidas respectivamente. Um pré-texto inserido dentro das caixas também demonstra o formato esperado para a informação.

**Reduzir a Carga de Memória de Trabalho**: Os títulos sobre as caixas de texto combinados com o pré-texto inserido nas caixas facilitam a compreensão e reduz a carga de trabalho em identificar o que deve ser preenchido pelo usuário.

<img width="1129" height="801" alt="tela_cadastro_usuarios" src="https://github.com/user-attachments/assets/fbed3bb8-85dd-4bd5-ba2d-e6c9e839840a" />


<img width="1128" height="803" alt="tela_cadastro_servicos" src="https://github.com/user-attachments/assets/9459ef65-733b-4fb2-b4a4-6de1180ba61c" />




### 4.3.4 Tela de Agendamento de Serviço (Cliente)

**4.3.4.1 Objetivo da tela**

A tela de agendamento de serviço tem por finalidade permitir que o usuário (cliente) finalize a reserva de um serviço automotivo pré-selecionado, escolhendo o dia e o horário disponíveis que melhor lhe convêm. Ela consolida as informações sobre o prestador e o serviço, guiando o usuário através de um fluxo sequencial para confirmar o atendimento na data desejada.

**4.3.4.2 Princípios Gestálticos**

**Proximidade**: As informações cruciais sobre o serviço selecionado e o prestador estão agrupadas em um único painel centralizado, cercado por uma borda, formando uma unidade visual distinta. Os cartões que representam os dias da semana estão dispostos em uma linha horizontal contínua, denotando que pertencem à mesma categoria de escolha. Da mesma forma, os botões de horário estão agrupados em sua própria seção, indicando uma relação direta entre eles. O botão final de confirmação está posicionado logo após as seções de escolha, indicando o próximo passo lógico.

**Similaridade**: O padrão de seleção é consistente: tanto para o dia escolhido ("Ter 05 Mai") quanto para o horário ("09:00"), o item selecionado adquire uma borda laranja e texto laranja, distinguindo-o dos demais. Os botões de categoria no menu lateral esquerdo seguem um padrão visual unificado (fundo laranja, ícone branco). Os links institucionais no rodapé do menu lateral seguem o mesmo padrão tipográfico.

**Boa Continuidade (alinhamento)**: O layout central segue uma sequência lógica e numerada (1. Escolha o dia, 2. Escolha o horário), conduzindo as escolhas de informações de forma fluida. Os elementos centrais (painel de resumo, lista de dias, grade de horários, botão de confirmação) estão alinhados verticalmente, facilitando a varredura visual e a compreensão do fluxo.

**4.3.4.3 Recomendações Ergonômicas**

**Legibilidade**: A interface apresenta um contraste adequado, com texto preto sobre fundo branco e texto branco sobre fundo laranja. As fontes utilizadas são legíveis e de tamanho apropriado para a leitura, tanto para os títulos quanto para os detalhes dos cartões.

**Condução**: O fluxo de agendamento é estruturado em passos numerados e claros (1 e 2), proporcionando uma rápida compreensão do que o usuário deve fazer em seguida. A presença de um grande botão "Confirmar agendamento" no final guia o usuário para a conclusão do processo. As setas de navegação nos dias oferecem uma condução clara para explorar mais opções.

**Agrupamento/Distinção de itens**: Os campos semelhantes estão agrupados em seções lógicas: informações do serviço, escolha da data, escolha do horário. O menu lateral também agrupa as categorias de serviços de forma distinta. A área de agendamento é claramente diferenciada dos menus de navegação e do rodapé.

**Feedback**: A interface fornece feedback visual imediato ao usuário ao selecionar um dia ou horário, alterando a cor da borda para laranja. O resumo do serviço na parte superior serve como feedback de confirmação das escolhas anteriores.

**4.3.3.4 Regras de Ouro**

**Perseguir a consistência**: A interface possui padrões visuais consistentes, como o esquema de cores (azul e laranja), o estilo dos botões e o padrão de seleção com borda laranja usado para dias e horários. Os títulos das etapas (1., 2.) mantêm o mesmo estilo. Os links e botões de navegação seguem um padrão reconhecível.

**Fornecer Feedbacks Informativos**: A numeração das etapas informa o usuário sobre o processo de agendamento. A mudança de cor para laranja nos itens selecionados fornece feedback imediato da seleção do usuário. O painel de resumo na parte superior confirma as informações do serviço e do prestador antes da confirmação final.

**Reduzir a Carga de Memória de Trabalho**: O painel de resumo do serviço na parte superior mantém as informações contextuais (nome do serviço, prestador, localização) visíveis durante todo o processo de agendamento, evitando que o usuário precise se lembrar de telas anteriores. O fluxo numerado e a exibição clara de opções de data e hora em grade reduzem o esforço cognitivo para navegar e fazer escolhas.

<img width="1180" height="835" alt="image" src="https://github.com/user-attachments/assets/11cb6ff0-4408-4f5c-bcb0-e79dc9b12e4c" />





### 4.3.5 Tela de Gerenciamento de Agendamentos (Prestador de serviços)

**4.3.5.1 Objetivo da tela**

A tela de gerenciamento das solicitações de agendamento tem por finalidade permitir que o prestador de serviços visualize e gerencia as solicitações de agendamento realizadas pelos clientes.

**4.3.5.2 Princípios Gestálticos**

**Proximidade**: Trata-se de um calendário centralizado na página, em que cada dia do mês apresenta os agendamentos solicitados, com horário e serviço a ser realizado, respectivamente, seguindo um processo lógico.

**Similaridade**: O padrão de apresentação dos dias, horários e serviços é consistente e segue a paleta de cores da página para diferenciar os agendamentos confirmados daqueles a confirmar.

**Boa Continuidade (alinhamento)**: O layout central segue uma sequência lógica, conduzindo a visualização de forma fluida. O calendário segue um padrão de alinhamento familiar a padrões de calendários de modo geral, facilitando a leitura visual e a compreensão do fluxo.

**4.3.5.3 Recomendações Ergonômicas**

**Legibilidade**: A interface apresenta um contraste adequado, com texto preto sobre fundo branco e texto branco sobre fundo laranja. As fontes utilizadas são legíveis e de tamanho apropriado para a leitura, tanto para os títulos quanto para os detalhes dos cartões.

**Condução**: O formato de calendário proporciona uma rápida compreensão do que o usuário precisa saber. As setas de navegação nos meses oferecem uma condução clara para explorar mais opções.

**Agrupamento/Distinção de itens**: Os campos semelhantes estão agrupados em seções lógicas: agendamentos confirmados, agendamentos a confirmar, horários e serviços agendados. A área de agendamento é claramente delimitada no centro da página.

**Feedback**: A interface fornece feedback visual imediato ao usuário ao demonstrar o calendário de forma ampla. O resumo de horário e serviço delimitados no quadro do dia servem como feedback de visualização dos agendamentos.

**4.3.5.4 Regras de Ouro**

**Perseguir a consistência**: A interface possui padrões visuais consistentes, como o esquema de cores (azul e laranja), sendo o estilo do calendário e o padrão de confirmação dos dias e horários na cor laranja.

**Fornecer Feedbacks Informativos**: A disposição dos dias e lista dos horários informam ao usuário sobre os agendamentos solicitados. A mudança de cor para laranja preenchido nos agendamentos confirmados fornece feedback imediato dos atendimentos a serem realizados.

**Reduzir a Carga de Memória de Trabalho**: O calendário centralizado na página, a disposição dos dias e horários, bem como a legenda dos agendamentos confirmados apresentam um padrão de simples leitura, reduzem o esforço cognitivo para interpretar as informações apresentadas.

<img width="1175" height="827" alt="tela_agenda_prestador" src="https://github.com/user-attachments/assets/23643e3f-0f3c-4a15-97f7-429fba3adb6a" />

### 4.3.6 Tela de Catálogo de Prestadores

**4.3.6.1 Objetivo da tela**

O objetivo dessa tela é listas os prestadores de serviços com base na busca feita pelo usuário. Os dados de cada prestador ficam separadas em um card.

**4.3.6.2 Princípios Gestálticos**

**Similaridade**: O padrão dos cards separam bem os dados de pretadores diferentes.

**Proximidade:** Os dados de cada prestador ficam próximas entre si, evitando que cause confusão com os dados de prestadores diferentes.

#### 4.3.6.3 Recomendações Ergonômicas

**Legibilidade**: Contraste adequado e fontes legíveis.

**Agrupamento/Distinção de itens**: Os cards com dados dos prestadores agrupam os dados de cada um e também demarca evitando que se misturem.

#### 4.3.6.4 Regras de Ouro

**Perseguir a consistência**: A interface possui padrões visuais.

**Fornecer Feedbacks Informativos**: Os botões de "Agende um serviço" e "Solicite um orçamento" recebem um efeito ao passar o mouse.

**Reduzir a Carga de Memória de Trabalho**: Os cards separam bem as informações evitando o esforço para identificar cada prestador.

<img width="1440" height="1024" alt="Catálogo de Prestadores" src="https://github.com/user-attachments/assets/3fbf1dc3-9850-4f1c-ae07-971b6eb10dc1" />

### 4.3.7 Tela de Solicitação de Orçamento

**4.3.7.1 Objetivo da tela**

O objetivo dessa tela é permitir que o usuário descreva o serviço automotivo desejado e envie uma solicitação de orçamento para um prestador de serviços de forma prática. A interface facilita o preenchimento das informações necessárias, oferecendo campos claros e uma estrutura visual intuitiva.

**4.3.7.2 Princípios Gestálticos**

**Proximidade**:  Os elementos da tela foram agrupados próximos uns dos outros.

**Similaridade**: Existe repetição de cores, formatos e estilos.

**Boa continuidade**: O formulário segue um fluxo linear, conduzindo naturalmente o olhar do usuário.

**Região comum**: Os elementos relacionados estão dentro de áreas delimitadas.

**4.3.7.3 Recomendações Ergonômicas**

**Condução**: A interface conduz o usuário e informa através de mensagens.

**Legibilidade**: A interface possui boa legibilidade e contraste adequado.

**Agrupamento/Distinção de Itens**: As informações estão bem divididas em menu lateral, informações do prestador de serviços e formulário principal.

**4.3.7.4 Regras de Ouro**

**Perseguir a Consistência**: A tela mantém um padrão visual.

**Reduzir a Carga de Memória de Trabalho**: Os campos possuem texto explicativo, que ajuda o usuário a entender e preencher os campos corretamente.

**Fornecer Feedbacks Informativos**: Botões com indicações claras de acões.

**Fornecer Prevenção de Erros e Forma Simples de Corrigi-los**: A interface ajuda na prevenção de erros por separar os campos e possuir organização lógica do formulário.

<img width="1206" height="856" alt="Solicitação de orçamento" src="https://github.com/user-attachments/assets/cec5930c-9f4d-4762-aa60-14d5846855d7" />





## 4.4 Testes com Protótipos
Esta seção apresenta os testes realizados com usuários utilizando os protótipos de alta fidelidade desenvolvidos na seção anterior. O objetivo é avaliar a usabilidade, a clareza das informações e a adequação do design às necessidades do público-alvo do projeto.

[Relatorio_de_Testes_com_Usuario - Usuario 6.pdf](https://github.com/user-attachments/files/27567509/Relatorio_de_Testes_com_Usuario.-.Usuario.6.pdf)

[Relatório_de_Testes_com_Usuário_Prestador01.pdf](https://github.com/user-attachments/files/27574402/Relatorio_de_Testes_com_Usuario_Prestador01.pdf)

[Relatório de Testes com Usuário Cliente 2.pdf](https://github.com/user-attachments/files/27572818/Relatorio.de.Testes.com.Usuario.Cliente.2.pdf)

[Relatório de Testes com Usuário-Tiago Nocce.pdf](https://drive.google.com/file/d/1tkNIsWnrZerrIkdAS5YeAyMcd_mfYnT9/view?usp=sharing)

[Relatório de Testes com Usuário Cliente-Anderson.pdf](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/docs/pdf/Relatório_de_Testes_com_Usuário-Cliente-Anderson.pdf)

[Relatório de Testes com Usuário Cliente - Ricardo Morais.pdf](https://github.com/user-attachments/files/27575310/Relatorio.de.Testes.com.Usuario.Cliente.-.Ricardo.Morais.pdf)

Nova rodada de testes:

[Relatório de Testes com Usuário Prestador 2.1.pdf](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/docs/pdf/Relat%C3%B3rio_de_Testes_com_Usu%C3%A1rio_Prestador_2.1.pdf)

[Relatório de Testes com Usuário Cliente-Kayhene.pdf](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/docs/pdf/Relat%C3%B3rio_de_Testes_com_Cliente_Kayhene.pdf)

[Relatorio_de_Testes_com_Usuario Cliente - avaliador Agner.pdf](https://github.com/user-attachments/files/28669898/Relatorio_de_Testes_com_Usuario.Cliente.-.avaliador.Agner.pdf)

[Relatório de Testes com Usuário Cliente-Anderson.pdf](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/docs/pdf/Relatorio_Teste_Usuario_Cliente-IMSS-Anderson.pdf)


## 4.5 Avaliação Heurística

[Avaliação Heurística - Matheus Alencar.pdf](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/docs/pdf/Avalia%C3%A7%C3%A3o_heur%C3%ADstica_Matheus_Alencar.pdf)

[Avaliação Heurística - Kayhene.pdf](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/docs/pdf/Relat%C3%B3rio%20da%20Avalia%C3%A7%C3%A3o%20heur%C3%ADstica-Kayhene.pdf)

[Relatório da Avaliação heurística - Cliente - avaliador Agner.pdf](https://github.com/user-attachments/files/28670519/Relatorio.da.Avaliacao.heuristica.-.Cliente.-.avaliador.Agner.pdf)

[Avaliação Heurística - Anderson.pdf](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2026-1-pe3-t2-g4-agendacar/blob/main/docs/pdf/Avaliação_Heurística-Anderson.pdf)
