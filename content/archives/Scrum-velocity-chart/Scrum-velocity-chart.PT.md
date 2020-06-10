---
title: Como usar a sprint velocity em seus times
date: "2019-07-10T22:40:32.169Z"
template: "post"
draft: true
slug: "/posts/scrum-team-velocity-chart/"
category: "Agile"
lang: "pt"
tags:
  - "Agile"
  - "Scrum"
description: "Esse artigo descreve como eu utilizo o parâmetro de Sprint Velocity no planejamento de Sprints"
---

## Resumo

* Sprint velocity não é o santo graal, mas sim um bom indicador
* A velocidade da equipe deve ser calculada em média, pessimista e optimista
* Os dados podem ser usados no Sprint Planning e para previsões do projeto
* Criei um template excel (foi mal, em inglês) que pode ser [baixado nesse link](#excel-gift)

## Contexto

Várias vezes eu pesquisei por termos como:

* Como planificar a sprint usando Sprint Velocity
* Como adaptar a Sprint Velocity quando há mudanças na equipe
* Como estabilizar Sprint Velocity incluindo férias, impedimentos, etc...

No final das contas, o que eu estava realmente procurando era um número mágico. Algo que previsse o imprevisível e que pudesse ser utilizado em equações matemáticas e gráficos bonitos.

![Eu tentando adaptar a Sprint Velocity quando alguém saia de férias](https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif)

## E por quê não usar a capacidade to time?

Eram esses os termos de pesquisa corretos? Talvez as minhas habilidades com o Google estavam um pouco enferrujadas...

Alguns dirão que você não deve planificar sua sprint a partir da sua Sprint Velocity, mas sim com a capacidade total do seu time para a próxima iteração. A idéia consiste em acordar previamente com a equipe quais serão os dias de trabalho que cada membro terá durante a sprint. Somasse todos os dias de todos os membros e essa é a capacidade to time. Assim você estima a quantidade de trabalho em horas para ter uma idéia do que planificar para próxima iteração.

Eu nunca entendi muito bem esse argumento devido a duas falhas principais nele. A primeira delas é que se você seguir esse tipo de plano, você precisa considerar que uma pessoa A produz a mesma quantidade de trabalho, no mesmo espaço de tempo, que uma pessoa B. Isso é dificilmente verdade, considerando que há diferentes níveis de expertise entre os membros da equipe (a pessoa A pode estar mais ou menos confortável fazendo uma determinada tarefa que outros). A segunda falha é que, mesmo se você tiver a mesma expertise em toda a equipe, você terá que estimar cada tarefa em termos de tempo. Isso é um baita problema visto que continuamos com a mesma imprevisibilidade. Como levar em consideração a parte desconhecida da US? Como prever o imprevisível?

## Velocity não é um número mágico tampouco

Como o nome diz, isso é imprevisível. Não dá para prever com 100% de confiança. Nada vai mudar isso, mesmo se você estimar todas as User Stories em pontos e calcular a velocidade do time baseado nas X sprints passadas. Fazer isso vai, no entanto, te dar um indicador. Dados que você poderá analisar, ao lado de outros dados (como a capacidade do time na próxima sprint). A partir dessa análise o time pode, então, construir um fator de confiança no que dá e o que não dá para entregar.

Uma boa analogia é o sinal da reserva do tanque de gasolina no painel do carro. Se você não conhece muito bem o veículo (talvez seja a primeira vez dirigindo ele), se essa luz se acende você fica meio desconfortável, querendo parar já no primeiro posto para reabastecer. Quando você conhece bem o carro, você já dirigiu por algum tempo, você sabe que mesmo se a luz se acende, ainda daá para continuar mais um pouco até que fique sem combustível.

O carro é como o seu time. O sinal da reserva, a velocity da equipe. No inicio, quando a equipe e jovem ainda, você tenta manter o plano o mais próximo possível da velocity. O tempo passa, a experiencia no time aumenta e ele começa a ter uma ideia melhor do que pode ser entregue na próxima iteração. Os membros começam a considerar nao somente a velocity da equipe, mas também o fato que o João ou a Maria não vão estar presentes na próxima semana, ou que há uma certa incerteza nas próximas tarefas do backlog, por exemplo.

![Quando a sprint backlog começa a crescer próximo da Velocity da equipe](/media/scrum-velocity/low-gas-tank.jpg)

## Como eu calculo a velocity

Agora que nós consideramos a Velocity como o que ela realmente é - um indicador - podemos calcular um dado útil. Um monte de artigos na internet e na literatura em geral dizem que você deve apenas olhar para as X sprints passadas (normalmente 3) e calcular a média dos pontos (Story Points) finalizados. Tomamos como exemplo uma equipe A entregou os seguintes pontos nas ùltimas sprints:

* Sprint N-3: 65 pontos
* Sprint N-2: 40 pontos
* Sprint N-1: 15 pontos

A velocity da equipe A é, então, para a Sprint N, seria 40 pontos. Você estaria confortável em planificar a sprint N com 45 pontos (afinal, são só 5 pontos a mais que a velocity da equipe) ? E se fossem exatamente 40 pontos ? Difícil né ?

Vamos considerar agora uma equipe B:

* Sprint N-3: 41 pontos
* Sprint N-2: 40 pontos
* Sprint N-1: 39 pontos

A equipe B tem também 40 pontos como velocity também. Você estaria confortável a planificar 45 pontos ? E 40 ? Não é a mesma coisa não ? Mesmo se as duas velocities são iguais, as confianças que os números refletem não são as mesmas, visto que os dados coletados nas três sprints dispersas de forma diferente. A equipe B parece mais constante em torno dos 40 pontos, enquanto a equipe A dispersa.
Para quantificar a situação, o desvio padrão serve bem.

O desvio padrão é calculado da seguinte forma:

![Fórmula do desvio padrão](/media/scrum-velocity/std-formula.png)

Onde:

* ``X`` são os valores observados (amostras)
* ``X barra`` é a média das amostras
* ``n`` é quantidade de amostras.

O desvio padrão dos pontos entregues pela equipe A e B, são:

* Equipe A ~= ``20.4124``
* Equipe B ~= ``0.8615``

Assumindo que os dados seguem uma distribuição normal ([mais sobre isso aqui](https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_normal)), se você partir da média e aumentar o espectro pelo valor nominal do desvio padrão (para mais e para menos), você cobre ``68.27%`` de todos os pontos da amostra. Você poderia aumentar o espectro ainda mais, considerando o dobro do desvio, e chegar a uma cobertura de ``95.45%`` da distribuição. Por razões empíricas, eu não recomendo para esse exercício.

![Distribuição normal](/media/scrum-velocity/normal-distribution.png)

O que eu faço normalmente é normalizar o desvio para o próximo inteiro e criar o que eu chamo de velocity pessimista e otimista. A primeira, calculada subtraindo o desvio da média (nosso limite inferior). É o cenário onde temos mais incertezas, pedidos de suporte, problemas imprevisíveis, etc. A outra, a otimista, é quando sentimos que o trabalho está fluindo, poucos pedidos de suporte, as revisões de código acontecem naturalmente. No exemplo, temos:

![Comparação entre velocity otimista e pessimista](/media/scrum-velocity/optimistic-pessimistic-example.png)

## Como planificar usando a velocity

Agora que temos os limites superior e inferior da velocity da sua equipe, você pode user essa informação em duas situações

### Durante o Sprint Planning

No Sprint Planning, a equipe se reúne e analisa o Product Backlog tendo a média da velocity em mente (digamos 40 pontos). Seguindo a ordem de prioridade dada pelo Product Owner, a soma de todos os tempos pode ficar entre os limites inferior e superior (digamos que 37 e 45 respectivamente). Se tivéssemos apenas a média, seria mais difícil ter um bom fator de confiança.

During the Sprint Planning, the team gets together and, knowing their average velocity of 40 points, looks at the product backlog. Folowing the priority set by the Product Owner, the sum of the most important tasks points can be either 37 or 45 points. By only having the average, it's hard to get a good confidence factor.

## <a name="excel-gift"></a>Conclusão

![](/media/scrum-velocity/excel-file-icon.png)
[Baixar](/media/scrum-velocity/team-velocity.xlsx)