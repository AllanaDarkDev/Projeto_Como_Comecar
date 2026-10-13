DOCUMENTAÇÃO DO PROJETO
COMO COMEÇAR?
Um guia personalizado para jovens que querem começar na tecnologia
Maratona: DevImpacto — Codificando soluções para a Educação, Saúde e Meio Ambiente
Eixo: Educação
Área: Tecnologia e Educação
Tecnologias utilizadas: HTML, CSS e JavaScript
Tipo de projeto: Sistema Web / MVP

Equipe:
Allana Dark Silva Moura
Sofia Chagas Andrade
Pedro do Nascimento

 Nome do projeto

Como Começar?

 Descrição resumida

O “Como Começar?”é um sistema web desenvolvido com o objetivo de auxiliar jovens estudantes que possuem interesse em iniciar seus estudos na área de tecnologia, mas encontram dificuldades para descobrir quais cursos são mais adequados ao seu perfil.

A proposta consiste em reunir informações sobre cursos gratuitos de tecnologia disponíveis em diferentes plataformas e utilizar informações básicas fornecidas pelo estudante para identificar oportunidades compatíveis.

O usuário informa sua idade, escolaridade e carga horária desejada. A partir dessas informações, o sistema compara o perfil do estudante com os requisitos dos cursos cadastrados e apresenta apenas as opções consideradas compatíveis.

Dessa maneira, o projeto busca transformar uma pesquisa que normalmente exigiria acessar diversas plataformas em uma experiência mais simples, rápida e direcionada.

 PROBLEMÁTICA

Muitos jovens possuem interesse em estudar tecnologia, porém não sabem identificar quais cursos são adequados para seu momento escolar, sua idade e o tempo disponível para os estudos.

Embora existam diversas oportunidades gratuitas, as informações estão espalhadas por diferentes plataformas e apresentam requisitos distintos.

Como consequência, o estudante pode:

encontrar cursos para os quais ainda não possui idade suficiente;
escolher cursos incompatíveis com sua escolaridade;
encontrar cursos cuja carga horária não corresponde ao seu tempo disponível;
sentir dificuldade para comparar diferentes oportunidades;
desistir da busca por não saber qual opção escolher.

 Justificativa

O projeto é relevante porque o acesso à informação não significa necessariamente facilidade de acesso às oportunidades.

Existem diversos cursos gratuitos de tecnologia disponíveis na internet, mas o estudante precisa saber onde procurar e como identificar quais oportunidades são adequadas ao seu perfil.

Para um jovem que está tendo seu primeiro contato com a área de tecnologia, a grande quantidade de opções pode gerar mais dúvidas do que respostas.

O “Como Começar?” busca reduzir essa barreira inicial.

Em vez de apresentar uma grande lista de cursos sem organização, o sistema utiliza critérios básicos para realizar uma seleção inicial.

Assim, o projeto não pretende escolher definitivamente uma carreira para o estudante, mas sim ajudá-lo a encontrar possíveis primeiros caminhos.

A proposta também está relacionada ao eixo de Educação, pois utiliza a tecnologia como ferramenta para facilitar o acesso a oportunidades de aprendizagem.

 Público-Alvo

O público-alvo principal do projeto é composto por:

Jovens estudantes interessados em iniciar seus estudos na área de tecnologia.

O sistema foi pensado principalmente para estudantes que:

possuem interesse em tecnologia;
ainda não possuem experiência na área;
não sabem quais cursos procurar;
procuram oportunidades gratuitas;
precisam considerar sua idade e escolaridade;
possuem uma quantidade limitada de tempo para estudar.
O projeto também pode ser útil para professores, escolas, projetos sociais e instituições que desejem apresentar oportunidades de formação tecnológica aos estudantes.

 SOLUÇÃO PROPOSTA

A solução consiste no desenvolvimento de um sistema web capaz de reunir cursos gratuitos de tecnologia e realizar uma filtragem de acordo com o perfil informado pelo estudante.

O sistema funciona a partir de três informações principais:

Idade
Escolaridade
Carga horária desejada
Após preencher o formulário, o usuário solicita que o sistema encontre cursos compatíveis.

O JavaScript percorre os cursos cadastrados e verifica se cada oportunidade atende aos critérios definidos.

Os cursos compatíveis são apresentados na tela em formato de cards.

Cada card apresenta informações como:

nome do curso;
plataforma responsável;
idade mínima;
escolaridade;
carga horária;
botão para acessar o curso.

 FUNCIONALIDADES DO SISTEMA

O sistema apresenta um formulário para que o estudante informe seus dados básicos.

Dados solicitados:
Idade:
Campo destinado à idade do estudante.

Escolaridade:
Permite identificar o nível escolar atual do usuário.

Carga horária desejada:
Permite indicar aproximadamente quanto tempo o estudante pretende dedicar ao curso.

Exemplo:

Conte um pouco sobre você. Sua idade: [ 16 ] Escolaridade: [ Ensino Médio Incompleto ] Carga horária desejada: [ 20 horas ] 

 FUNCIONALIDADE FUTURA: ÁREA DE INTERESSE

Como evolução do projeto, poderá ser acrescentado um quarto filtro:

Qual área mais interessa a você?
Desenvolvimento Web
Programação
Inteligência Artificial
Informática
Ainda não sei
Essa funcionalidade permitiria aumentar o nível de personalização dos resultados.

Entretanto, ela deve ser considerada uma segunda prioridade.

 ORGANIZAÇÃO DOS DADOS

Para facilitar o funcionamento do sistema, os cursos são armazenados em uma estrutura padronizada.

Cada curso possui informações que podem ser utilizadas pelo sistema durante a filtragem.

Exemplo:

const cursos = [
    {
        nome: "Desenvolvimento de Sistemas Web: CSS e HTML",
        plataforma: "FGV",
        link: "https://cursosgratuitos.fgv.br/curso/desenvolvimento-de-sistemas-web-css-e-html",
        idadeMin: 18,
        escolaridade: "medio",
        cargaMin: 10,
        cargaMax: 20
    },

    {
        nome: "Crie um site simples usando HTML, CSS e JavaScript",
        plataforma: "Escola Virtual",
        link: "https://www.ev.org.br/cursos/crie-um-site-simples-usando-html-css-e-javascript",
        idadeMin: 16,
        escolaridade: "livre",
        cargaMin: 10,
        cargaMax: null
    },

    {
        nome: "Linguagem de Programação Python - Básico",
        plataforma: "Escola Virtual",
        link: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico",
        idadeMin: 16,
        escolaridade: "medioincompleto",
        cargaMin: 10,
        cargaMax: 20
    }
];
A padronização facilita a manutenção do projeto e permite que novos cursos sejam adicionados posteriormente sem necessidade de modificar toda a lógica do sistema.

 LÓGICA DE FILTRAGEM

A principal funcionalidade do projeto é a filtragem dos cursos.

O processo ocorre da seguinte maneira:

DADOS DO USUÁRIO
       ↓
    IDADE
       ↓
 ESCOLARIDADE
       ↓
 CARGA HORÁRIA
       ↓
 PERCORRER CURSOS
       ↓
VERIFICAR IDADE
       ↓
VERIFICAR ESCOLARIDADE
       ↓
VERIFICAR CARGA HORÁRIA
       ↓
CURSO COMPATÍVEL?
    ↙         ↘
  SIM         NÃO
   ↓           ↓
ADICIONAR    IGNORAR
RESULTADO     CURSO
   ↓
CONTINUAR
   ↓
MOSTRAR RESULTADOS

 Exemplo:
Supondo que um estudante informe:

idade: 16 anos;
escolaridade: Ensino Médio Incompleto;
carga horária desejada: 20 horas.
O sistema percorre os cursos cadastrados.

Para cada curso, são realizadas verificações.

Verificação da idade
O sistema verifica se:

idade do usuário >= idade mínima do curso
Caso a condição seja verdadeira, o curso continua sendo analisado.

Verificação da escolaridade
O sistema verifica se a escolaridade do estudante atende ao requisito definido para o curso.

Verificação da carga horária
O sistema verifica se a carga horária desejada pelo estudante é compatível com a duração cadastrada para o curso.

Somente depois de passar pelas verificações o curso é apresentado como resultado.

 
 RESULTADOS

Os resultados não são apresentados apenas como uma lista de links.

Cada oportunidade é apresentado em um card visual.

Exemplo:

┌─────────────────────────────────────────┐
│ Linguagem de Programação Python        │
│ Básico                                  │
│                                         │
│ Escola Virtual                          │
│                                         │
│ 👤 Idade mínima: 1 anos                │
│ 🎓 Ensino Médio Incompleto              │
│ ⏱ 10 a 20 horas                         │
│                                         │
│             [ ACESSAR CURSO ]           │
└─────────────────────────────────────────┘
Essa organização permite que o usuário compreenda rapidamente por que determinado curso apareceu entre os resultados.

 MENSAGENS DO SISTEMA

Após a filtragem, o sistema deverá apresentar uma mensagem indicando a quantidade de oportunidades encontradas.

Exemplo:

Encontramos 3 cursos para você!
Essa informação contribui para a sensação de personalização e permite que o estudante saiba imediatamente se existem várias opções ou poucas oportunidades compatíveis.

 ESTRUTURA DO SITE

A estrutura inicial do site será composta pelas seguintes áreas:

┌─────────────────────────────────────────────┐
│              COMO COMEÇAR?                  │
│                                             │
│ Um guia para jovens que querem começar      │
│ seus estudos em Tecnologia.                 │
└─────────────────────────────────────────────┘

INÍCIO | SAIBA MAIS | CURSOS | DÚVIDAS


             POR ONDE COMEÇAR?

Você quer estudar tecnologia, mas não sabe
qual curso combina com você?

Conte um pouco sobre você:

Idade
[             ]

Escolaridade
[             ]

Carga horária
[             ]

[ ENCONTRAR MEUS CURSOS ]


             ↓ RESULTADO ↓


            CURSOS PARA VOCÊ

┌──────────────────────┐
│ Curso de Python      │
│ Escola Virtual       │
│ 10–20 horas          │
│ 16+                  │
│ [ACESSAR]            │
└──────────────────────┘


             DÚVIDAS?

Entre em contato...
 TECNOLOGIAS UTILIZADAS

 HTML

O HTML será responsável pela estrutura da aplicação.

Será utilizado para construir:

cabeçalho;
menu de navegação;
títulos;
textos;
formulário;
campos de entrada;
botões;
área de resultados;
cards;
seção de dúvidas;
rodapé.

 CSS

O CSS será utilizado para desenvolver a identidade visual e melhorar a experiência do usuário.

Será responsável por:

cores;
tipografia;
espaçamentos;
tamanhos;
alinhamento;
organização dos cards;
botões;
responsividade;
hierarquia visual.
A interface deverá ser simples e intuitiva, considerando que o público-alvo pode possuir pouca familiaridade com plataformas de cursos.

 JavaScript

O JavaScript será responsável pela parte lógica e interativa do sistema.

Será utilizado para:

capturar os dados do formulário;
armazenar os cursos;
percorrer o array;
verificar os requisitos;
realizar a filtragem;
criar os cards dinamicamente;
atualizar a quantidade de resultados;
apresentar mensagens;
manipular o DOM.

 ARQUITETURA SIMPLIFICADA

O funcionamento pode ser dividido em três partes principais:

HTML
 ↓
ESTRUTURA DA PÁGINA
 ↓
CSS
 ↓
INTERFACE E IDENTIDADE VISUAL
 ↓
JAVASCRIPT
 ↓
LÓGICA + FILTRAGEM + RESULTADOS
Os dados dos cursos ficam armazenados no JavaScript em uma estrutura padronizada.

O usuário interage com o HTML.

O JavaScript recebe as informações e realiza os cálculos necessários.

Por fim, os resultados são inseridos dinamicamente na página.

 FLUXOGRAMA

                    INÍCIO
                       ↓
              Usuário acessa o site
                       ↓
              Preenche o formulário
                       ↓
                Capturar idade
                       ↓
             Capturar escolaridade
                       ↓
           Capturar carga horária
                       ↓
             Percorrer cursos
                       ↓
              Verificar requisitos
                       ↓
               Curso compatível?
                 ↙           ↘
               SIM           NÃO
                ↓             ↓
       Adicionar resultado   Ignorar curso
                ↓             ↓
                └──────┬──────┘
                       ↓
               Continuar análise
                       ↓
               Mostrar resultados
                       ↓
                      FIM

 EXPERIÊNCIA DO USUÁRIO

A experiência do usuário é um dos pontos importantes do projeto.

O sistema evita excesso de informações e apresenta apenas os elementos necessários para que o estudante encontre uma oportunidade.

O fluxo esperado é:

Etapa 1 — Conhecer o projeto
O usuário acessa a página inicial e entende que o objetivo é ajudá-lo a encontrar cursos gratuitos de tecnologia.

Etapa 2 — Informar o perfil
O usuário fornece:

idade;
escolaridade;
carga horária.
Etapa 3 — Solicitar recomendações
O usuário clica em:

ENCONTRAR MEUS CURSOS

Etapa 4 — Visualizar resultados
O sistema apresenta os cursos compatíveis.

Etapa 5 — Acessar o curso
O usuário seleciona uma oportunidade e é direcionado à plataforma responsável pelo curso.

 ACESSIBILIDADE E USABILIDADE
Mesmo sendo um MVP, o projeto deve considerar princípios básicos de acessibilidade e usabilidade.

Entre as práticas recomendadas estão:

utilizar textos claros;
manter bom contraste entre texto e fundo;
utilizar botões identificáveis;
evitar excesso de elementos visuais;
manter uma hierarquia clara de informações;
utilizar campos de formulário com identificação;
garantir que o site possa ser utilizado em telas menores;
apresentar mensagens claras quando não houver resultados.
Esses cuidados são importantes porque o público do projeto possui diferentes níveis de familiaridade com tecnologia.

 TESTE DE USABILIDADE

O teste de usabilidade tem como objetivo verificar se estudantes conseguem utilizar o sistema sem receber explicações detalhadas.

 Metodologia

Foram convidados estudantes para utilizar o protótipo.

Cada participante deveria imaginar que desejava iniciar seus estudos na área de tecnologia.

Foi solicitado que utilizasse o sistema para encontrar um curso compatível com seu perfil.

Durante o teste, foram observados:

compreensão da proposta;
facilidade de preenchimento do formulário;
compreensão dos filtros;
facilidade para interpretar os resultados;
compreensão das informações apresentadas nos cards;
facilidade para acessar o curso indicado.

 DIVISÃO DA EQUIPE

Pedro — Desenvolvimento
Responsabilidades:

estrutura HTML;
criação do formulário;
organização dos dados dos cursos;
estrutura inicial das páginas.

Allana Dark — Programação
Responsabilidades:

estrutura do Javascript;
desenvolvimento do array de cursos;
lógica de filtragem;
validação dos dados;
manipulação do DOM;
geração dinâmica dos resultados.

Sofia — Interface e validação
Responsabilidades:

desenvolvimento do CSS;
identidade visual;
organização dos cards;
testes de usabilidade;
documentação;
apoio na apresentação do projeto.
Observação: essa divisão deve ser adaptada às atividades que realmente foram executadas por cada integrante.

 USO DE INTELIGÊNCIA ARTIFICIAL

A IA auxiliou a equipe em atividades como:

esclarecimento de dúvidas sobre HTML;
esclarecimento de dúvidas sobre CSS;
explicações sobre JavaScript;
discussão de possibilidades de implementação;
revisão de textos;
identificação de possíveis problemas no código;
organização da documentação.

 LIMITAÇÕES DO MVP

O “Como Começar?” representa uma primeira versão funcional da solução, mas ainda possui algumas limitações.

os cursos são cadastrados manualmente;
as informações dos cursos não são atualizadas automaticamente;
não existe sistema de login;
não existe histórico de cursos pesquisados;
os filtros são limitados aos critérios definidos no MVP;
determinadas idades e cargas horárias não possuem uma
variedade boa de cursos.


 IMPACTO ESPERADO

O principal impacto esperado é facilitar o acesso de jovens a oportunidades gratuitas de formação em tecnologia. O projeto busca diminuir a distância entre:
"Tenho interesse em tecnologia"

e

"Encontrei um curso adequado para começar."

A solução pode contribuir para:

facilitar o primeiro contato com tecnologia;
estimular a educação tecnológica;
apresentar oportunidades gratuitas;
incentivar a continuidade dos estudos;
reduzir a dificuldade de escolha entre diferentes cursos.

 MVP

A primeira versão do nosso projeto foca nas funcionalidades essenciais.

Essas são:

página inicial;
explicação da proposta;
formulário;
campo de idade;
campo de escolaridade;
campo de carga horária;
array de cursos;
lógica de filtragem;
apresentação dos resultados;
cards de cursos;
botão para acessar o curso;
interface responsiva.

 RESUMO DO PROJETO

Nome: Como Começar?

Problema: Jovens interessados em tecnologia possuem dificuldade para identificar cursos adequados ao seu perfil.

Público-alvo: Jovens estudantes interessados em iniciar estudos na área de tecnologia.

Solução: Sistema web que reúne cursos gratuitos e filtra oportunidades com base na idade, escolaridade e carga horária desejada.

Tecnologias: HTML, CSS e JavaScript.

Principal funcionalidade: Filtragem de cursos compatíveis com o perfil do estudante.

MVP: Formulário + filtros + catálogo de cursos + resultados personalizados.
