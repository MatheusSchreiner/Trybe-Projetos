### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do
Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto Restaurant Orders!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Campanha de publicidade, implemente um método chamado analyze_log no módulo src/analyze_log.py que gere informações de uma lanchonete.](#1---campanha-de-publicidade-implemente-um-método-chamado-analyze_log-no-módulo-srcanalyze_logpy-que-gere-informações-de-uma-lanchonete)
    - [2 - Análises contínuas, implemente a classe TrackOrders que gere informações contínuas de uma lanchonete.](#2---análises-contínuas-implemente-a-classe-trackorders-que-gere-informações-contínuas-de-uma-lanchonete)
    
    `Requisitos bônus:`
    - [3 - Controle de estoque](#3---controle-de-estoque)
    - [4 - Estoque pode acabar](#4---estoque-pode-acabar)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

---

## Habilidades

- Trabalhar com Hash map e Dict

- Trabalhar com Set

---

## Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório. Este _Pull Request_ deverá conter os arquivos do diretório `src` devidamente preenchidos de acordo com as instruções, que conterão seu código `Python` e seus testes, respectivamente.

### ⚠️ É importante que seus arquivos tenham exatamente os nomes definidos dentro do diretório src! ⚠️

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

A lanchonete Pão na Chapa, atualmente, possui um sistema de faturamento dos pedidos dos clientes, que salva o nome da pessoa, o pedido realizado, e dia do atendimento (dia da semana). O projeto consiste em ajudar a lanchonete a melhorar esse sistema para que ele possibilite extração de relatórios e, num segundo momento, a controlar seu estoque.

O projeto está estruturado em duas etapas obrigatórias, e a tarefa bônus, também em duas etapas, totalizando 4 requisitos. Foque nas etapas obrigatórias e com o mesmo cuidado que teria com um cliente real: código limpo, com boa manutenção e legibilidade.

---

## Data de Entrega

  - Será `1` dia de projeto.
  - Data de entrega para avaliação final do projeto: `04/02/2022 - 14:00h`.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório

- `git clone git@github.com:tryber/sd-010-b-restaurant-orders.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `sd-010-b-restaurant-orders`

2. Crie o ambiente virtual para o projeto

- `python3 -m venv .venv && source .venv/bin/activate`

3. Instale as dependências

- `python3 -m pip install -r dev-requirements.txt`

4. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-github-nome-do-projeto`
  - Exemplo: `git checkout -b exemplo-project-name`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _exemplo_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _exemplo/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto project-name'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin exemplo-project-name`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-010-b-restaurant-orders/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a página de _Pull Requests_ do repositório e confira que o seu _Pull Request_ está criado

---

### Durante o desenvolvimento

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

## Como desenvolver

**Estrutura do repositório**

- No diretório `src/` você vai encontrar os arquivos onde devem ser implementadas todas as classes e métodos que você considerar importantes para resolver cada etapa do projeto;

- No diretório `data/` você vai encontrar os arquivos de _log_ que deverão ser utilizados em cada etapa;

- Os testes devem ser implementados nos arquivos do diretório `tests/`.

## Testes

Para executar os testes, lembre-se de primeiro **criar e ativar o ambiente virtual**, além de também instalar as dependências do projeto. Isso pode ser feito através dos comandos:

```bash
$ python3 -m venv .venv

$ source .venv/bin/activate

$ python3 -m pip install -r dev-requirements.txt
```

**Instalação de dependências**

O arquivo `dev-requirements.txt` contém todos as dependências que serão utilizadas no projeto

Se quiser saber mais sobre a instalação de dependências com `pip`, veja esse [artigo.](https://medium.com/python-pandemonium/better-python-dependency-and-package-management-b5d8ea29dff1)

## Rodando os testes localmente

Para verificar se o seu projeto está correto basta executar o seguinte comando:

```bash
$ python3 -m pytest
```

## Linter

Para verificar se você está seguindo o guia de estilo do Python corretamente, execute o comando:

```bash
$ python3 -m flake8
```
---

## Requisitos obrigatórios:

### 1 - Campanha de publicidade, implemente um método chamado `analyze_log` no módulo `src/analyze_log.py` que gere informações de uma lanchonete.

A lanchonete quer promover ações de marketing e, para isso, a agência de publicidade precisa exatamente das informações abaixo:

- Qual o prato mais pedido por 'maria'?

- Quantas vezes 'arnaldo' pediu 'hamburguer'?

- Quais pratos 'joao' nunca pediu?

- Quais dias 'joao' nunca foi na lanchonete?

#### Dados

O atual sistema guarda os `logs` de todos os pedidos feitos em um arquivo _csv_, contendo o formato `cliente, pedido, dia`, um por linha e sem nome das colunas (a primeira linha já é um pedido).

O `log` a ser utilizado é o arquivo `data/orders_1.csv`. Todas as informações são _strings_ com letras minúsculas. O histórico contém pedidos feitos em todos os dias da semana que a lanchonete abre, e de todos os pratos que a lanchonete oferece. Ou seja, é possível saber o cardápio e agenda completos. Os dias da semana estão no formato `"...-feira", "sabado" ou "domingo"`, e não nos interessa informações sobre os dias que a lanchonete não abre.

#### Implementação

No arquivo `analyze_log.py`, escreva uma função que responda às seguintes perguntas abaixo:

- Qual o prato mais pedido por 'maria'?

- Quantas vezes 'arnaldo' pediu 'hamburguer'?

- Quais pratos 'joao' nunca pediu?

- Quais dias 'joao' nunca foi na lanchonete?

A função não retornará nada! A função deve apenas salvar as respostas no arquivo `data/mkt_campaign.txt`, na mesma ordem que acima.

**Assinatura da função:**

```python
def analyze_log(path_to_file):
    # Código vem aqui
```

**Saída correta:**

```
hamburguer
1
{'pizza', 'coxinha', 'misto-quente'}
{'sabado', 'segunda-feira'}
```

> A ordem dos pedidos, bem como dos dias não precisa ser exatamente a apresentada no exemplo

- No arquivo analyze_log.py deve estar implementada a função `def analyze_log(path_to_file)`;

- A função deve realizar a leitura do `log` e salvar em um arquivo `txt` as informações solicitadas;

- Utilização correta de `Dict/Set`, vistos no módulo;

- Código legível e modularizado, quando for o caso.

##### As seguintes verificações serão feitas:

- 1.1 - Será validado se, ao executar o método `analyze_log`, os dados são preenchidos de forma correta no arquivo `data/mkt_campaign.txt`

- 1.2 - Será validado se, ao executar o método `analyze_log` com um arquivo inexistente, o método retorna um erro `FileNotFoundError` com a mensagem de erro adequada.

- 1.3 - Será validado se, ao executar o método `analyze_log` com uma extensão inválida, o método retorna um erro

### 2 - Análises contínuas, implemente a classe `TrackOrders` que gere informações contínuas de uma lanchonete.

A campanha de marketing foi um sucesso! A gerência agora deseja um sistema que mantenha um registro contínuo dessas informações. Mais especificamente, desejam que o sistema permita a extração das seguintes informações a qualquer momento:

- Prato favorito por cliente;

- Quanto de cada prato cada cliente já pediu;

- Pratos nunca pedidos por cada cliente;

- Dia mais movimentado;

- Dia menos movimentado.

Para isso, você deverá implementar uma classe que entregue as informações acima.

#### Implementação

**Arquivos**

- O arquivo `track_orders.py` é onde você implementará a classe `TrackOrders`.

- O arquivo `src/main.py` é apenas auxiliar e faz a leitura do arquivo `csv` especificado e envia a informação de cada pedido para as classes `TrackOrders` e para a classe `InventoryControl`, ao mesmo tempo. Não se preocupe ainda com o arquivo `inventory_control.py` (classe InventoryControl), pois ele é necessário apenas para a realização dos requisitos bônus.

- Ainda no arquivo `src/main.py`, após a leitura completa do arquivo `csv`, algumas informações são impressas na tela para que você observe o comportamento das classes.


**Teste o comportamento do arquivo `main.py`**

Abra o arquivo `main.py` e complete a variável _path_ com `data/orders_1.csv`. Rode o arquivo `main.py`. Cinco linhas de `None` devem ser impressas. Isso acontece, porque as funções não estão devidamente implementadas ainda.

**Implemente a solução**

No arquivo `track_orders.py`, implemente a classe `TrackOrders`, contendo, **no mínimo**, os métodos abaixo:

```python
class TrackOrders:
    # aqui deve expor a quantidade de estoque 
    def __len__(self):
      pass

    def add_new_order(self, costumer, order, day):
        pass

    def get_most_ordered_dish_per_costumer(self, costumer):
        pass

    def get_dish_quantity_per_costumer(self, costumer, order):
        pass

    def get_never_ordered_per_costumer(self, costumer):
        pass

    def get_busiest_day(self):
        pass

    def get_least_busy_day(self):
        pass
```

> Você é livre para criar os atributos e métodos necessários. Lembre-se de criar uma classe legível e bem modularizada. Lembre-se também de não incorrer em otimização prematura. Ou seja, não implemente funcionalidades que ainda não são necessárias, nem coloque atributos do tipo "vai que um dia precisa". Sempre rode o arquivo `main.py` para verificar o comportamento da sua classe.

- Classe `TrackOrders` implementada;

- A classe está devidamente modularizada;

- Os métodos fazem uso das técnicas de `Dict` e `Set` vistos no módulo;

- Os métodos atingem complexidade ótima (geralmente `O(1)` ou `O(n)`, em alguns métodos que usam `Set`).

##### As seguintes verificações serão feitas:

- 2.1 - Será validado se, ao instanciar a classe `TrackOrders` pela primeira vez, o método `len()` retorna a quantidade de pedidos igual a zero.

- 2.2 - Será validado se, ao executar o método `add_new_order`, o método registra um pedido na instância.

- 2.3 - Será validado se, ao executar `get_most_ordered_dish_per_costumer`, o método retorna o prato mais pedido.

- 2.4 - Será validado se, ao executar `get_never_ordered_per_costumer`, o método retorna o conjunto de pratos que a pessoa nunca pediu.

- 2.5 - Será validado se, ao executar `get_days_never_visited_per_costumer`, o método retorna o conjunto de dias que a pessoa nunca visitou.

- 2.6 - Será validado se, ao executar o método `get_busiest_day`, o método retorna o dia mais movimentado.

- 2.7 - Será validado se, ao executar o método `get_least_busy_day`, o método retorna o dia menos movimentado.

---

## Requisitos bônus:

### 3 - Controle de estoque

Atualmente o controle de estoque de ingredientes é feito no caderninho. Ao final da semana, uma pessoa conta quantas unidades, de cada ingrediente, ainda restam no estoque e anota quantos precisam ser comprados, para completar o estoque mínimo de cada ingrediente.

A lanchonete deseja automatizar esse controle: no final da semana, a gerência irá imprimir uma lista de compras com as respectivas quantidades.

#### Dados

O `log` a ser utilizado ainda é o arquivo `data/orders_1.csv`. É garantido que os pedidos da semana não irão zerar nenhum dos estoques.

#### Implementação

No arquivo `inventory_control.py` você deve implementar a classe `InventoryControl` que retorna a lista de compras da semana, a partir da informação de cada. É importante que a lista seja atualizada a cada pedido, e não apenas ao final de semana, pois a gerência quer a liberdade de imprimir a lista de compras a qualquer momento.

A estrutura básica da classe está demonstrada abaixo e já contém as informações dos ingredientes, bem como o estoque mínimo de cada um. O método `get_quantities_to_buy` deve retornar um `Dict` que mapeia o ingrediente para a quantidade a ser comprada:

```python
class InventoryControl:
    INGREDIENTS = {
        'hamburguer': ['pao', 'carne', 'queijo'],
        'pizza': ['massa', 'queijo', 'molho', 'tomate'],
        'queijo-quente': ['pao', 'queijo', 'queijo'],
        'misto-quente': ['pao', 'queijo', 'presunto'],
        'bauru': ['pao', 'queijo', 'presunto', 'tomate'],
        'coxinha': ['massa', 'frango'],
    }
    MINIMUM_INVENTORY = {
        'pao': 50,
        'carne': 50,
        'queijo': 100,
        'molho': 50,
        'presunto': 50,
        'massa': 50,
        'frango': 50,
    }

    def __init__(self):
        pass

    def add_new_order(self, costumer, order, day):
        pass

    def get_quantities_to_buy(self):
        pass
```

- Classe `InventoryControl` implementada;

- A classe está devidamente modularizada;

- Garanta que todos os ingredientes e pratos foram testados;

* Dicas:

- Os métodos devem fazer uso das técnicas de `Dict` e `Set` vistos no módulo;

- Os métodos atingem complexidade ótima (geralmente `O(1)` ou `O(n)`, em alguns métodos que usam `Set`).

##### As seguintes verificações serão feitas:

- 3.1 - Será validado se, ao executar o método `get_quantities_to_buy`, o método retorna a quantidade de ingredientes que precisam ser comprados.

- 3.2 - Será validado se, ao executar o método `get_quantities_to_buy` para todos os hambúrgueres, o método retorna a quantidade de ingredientes que precisam ser comprados.

- 3.3 - Será validado se, ao executar o método `get_quantities_to_buy` para receitas diferentes, o método retorna a quantidade de ingredientes que precisam ser comprados.

### 4 - Estoque pode acabar

As campanhas de marketing tiveram sucesso novamente, e atraíram muitas novas pessoas clientes para a lanchonete. Se antes os estoques mínimos eram sempre suficientes para uma semana, agora não são mais...

Suponha os seguintes estoques:

```md
- Pao: 1;

- Queijo: 5;

- Presunto: 3.
```

Se uma pessoa pedir um misto-quente, será possível atendê-la. Porém o pão irá acabar. Se a próxima pessoa pedir hamburguer, não será possível atendê-la. Sua missão é implementar um código que, caso algum ingrediente acabe, todos os pratos que usam aquele ingrediente devem ser imediatamente removidos do cardápio eletrônico, evitando gerar frustração em clientes.

#### Dados

O `log` a ser utilizado agora é o arquivo `data/orders_2.csv`. Se quiser testar pelo arquivo `main.py`, não se esqueça de alterar a variável `path`.

#### Implementação

> Você fez commit do requisito `3 - Controle de estoque`? Se não, faça, pois agora você vai alterar o seu código!

Implemente um novo método na classe `InventoryControl` que retorne um conjunto com todos os pratos disponíveis, ou seja, que ainda tem ingredientes suficientes.

**Assinatura da função:**

```python
def get_available_dishes():
    # retorno: um conjunto de pratos que ainda têm ingredientes disponíveis
```

Altere o arquivo `main.py`:

- Caso o prato que a pessoa solicitou não esteja disponível, não registre o pedido na execução do método `add_new_order`.

- Novo método, `get_available_dishes`, implementado e funcionando corretamente.

- Alteração na `main.py` produzindo o efeito esperado.

- As classes/métodos estão devidamente modularizadas;

- Os métodos fazem uso das técnicas de `Dict` e `Set` vistos no módulo;

##### As seguintes verificações serão feitas:

- 4.1 - Será validado se, ao executar o método `add_new_order` para um pedido com prato que não possui ingredientes suficientes em estoque, o método retorna `False` sem registrar o pedido.

- 4.2 - Será validado se, ao executar o método `get_available_dishes`, o método retorna todos os pratos que possuem ingredientes suficientes para seu preparo.

- 4.3 - Será validado se, ao executar o método `get_available_dishes`, o método não retorna os pratos cujos ingredientes não sejam suficientes para seu preparo.

---

## Depois de terminar o desenvolvimento

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-010-b`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo **Lint** estão resolvidas! ⚠

---

### Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://bit.ly/3ta7hA0)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
>>>>>>> a/Matheus-Rubi-Restaurant-Orders
