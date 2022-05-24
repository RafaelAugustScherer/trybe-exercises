# Agora, a prática!

### Antes de iniciar os exerícios

Com as ferramentas apresentadas na aula de hoje, você vai construir uma API que usa Mongoose e aplica princípios de Orientação a Objetos e SOLID. Faça os exercícios com isso em mente, para um melhor aprendizado!
Para os nossos exercícios vamos utilizar uma base de dados com algumas informações sobre as copas do mundo, de 1986 até a de 2018. Execute o comando abaixo no console do MongoDB para usar o novo banco que vamos alimentar:
```
use world_cups;
```

Depois, execute o comando abaixo para inserir os dados que preparamos para a realização desses exercícios:
Script para inserir os dados no banco:
```js
  db.tournaments.insertMany([
    {
      year: 2018,
      hostCountry: "Russia",
      champions: "France",
      runnerUp: "Croatia",
      editionGoals: 169,
      editionStrikers: [
        "Harry Kane"
      ],
      bestPlayer: "Luka Modric",
      bestGoalkeeper: "Thibaut Courtois",
      bestYoungPlayer: "Kylian Mbappe",
    },
    {
      year: 2014,
      hostCountry: "Brazil",
      champions: "Germany",
      runnerUp: "Argentina",
      editionGoals: 171,
      editionStrikers: [
        "James Rodriguez"
      ],
      bestPlayer: "Lionel Messi",
      bestGoalkeeper: "Manuel Neuer",
      bestYoungPlayer: "Paul Pogba",
    },
    {
      year: 2010,
      hostCountry: "South Africa",
      champions: "Spain",
      runnerUp: "Netherlands",
      editionGoals: 145,
      editionStrikers: [
        "Thomas Muller",
        "David Villa",
        "Wesley Sneijder",
        "Diego Forlan"
      ],
      bestPlayer: "Diego Forlan",
      bestGoalkeeper: "Iker Casillas",
      bestYoungPlayer: "Thomas Muller",
    },
    {
      year: 2006,
      hostCountry: "Germany",
      champions: "Italy",
      runnerUp: "France",
      editionGoals: 147,
      editionStrikers: [
        "Miroslav Klose"
      ],
      bestPlayer: "Zinedine Zidane",
      bestGoalkeeper: "Gianluigi Buffon",
      bestYoungPlayer: "Lukas Podolski",
    },
    {
      year: 2002,
      hostCountry: "South Korea & Japan",
      champions: "Brazil",
      runnerUp: "Germany",
      editionGoals: 161,
      editionStrikers: [
        "Ronaldo"
      ],
      bestPlayer: "Oliver Kahn",
      bestGoalkeeper: "Oliver Kahn",
      bestYoungPlayer: "Landon Donovan",
    },
    {
      year: 1998,
      hostCountry: "France",
      champions: "France",
      runnerUp: "Brazil",
      editionGoals: 171,
      editionStrikers: [
        "Davon Suker"
      ],
      bestPlayer: "Ronaldo",
      bestGoalkeeper: "Fabien Barthez",
      bestYoungPlayer: "Michael Owen",
    },
    {
      year: 1994,
      hostCountry: "United States",
      champions: "Brazil",
      runnerUp: "Italy",
      editionGoals: 141,
      editionStrikers: [
        "Hristo Stoichkov",
        "Oleg Salenko"
      ],
      bestPlayer: "Romário",
      bestGoalkeeper: "Michel Preud'homme",
      bestYoungPlayer: "Marc Overmars",
    },
    {
      year: 1990,
      hostCountry: "Italy",
      champions: "Germany",
      runnerUp: "Argentina",
      editionStrikers: [
        "Salvatore Schillaci"
      ],
      bestPlayer: "Salvatore Schillaci",
      bestYoungPlayer: "Robert Prosinecki",
    },
    {
      year: 1986,
      hostCountry: "Mexico",
      champions: "Argentina",
      runnerUp: "Germany",
      editionStrikers: [
        "Gary Lineker"
      ],
      bestPlayer: "Diego Maradona",
      bestYoungPlayer: "Enzo Scifo",
    },
  ]);
```

O objetivo desse exercício é praticar o que vimos na aula de hoje, criando uma API utilizando conceitos de Programação Orientada a Objetos (POO), TypeScript, e Express. O exercício vai te guiar passo-a-passo na criação da API.

- Exercício 1: Crie a conexão com seu banco de dados, chamando a função com as devidas informações.

- Exercício 2: Crie o Schema do Mongoose que irá representar um dos documentos com as informações da copa.

- Exercício 3: Com o Model criado, podemos começar a fazer requisições para o nosso banco de dados. Crie um endpoint que retornará todas as edições de copas do mundo cadastradas no banco.
- Exercício 4: Crie um endpoint que retornará os dados referentes a uma edição específica de copa do mundo, de acordo com seu ano. Se não for encontrada nenhuma copa, envie uma mensagem de erro com o código 404, informando que naquele ano não teve copa do mundo.
- Exercício 5: Infelizmente nossa base de dados só possui dados das copas a partir de 1986. Você pode nos ajudar a ampliar esse registro? Crie um endpoint para registrar uma nova edição de copa do mundo.
- Exercício 6: Crie um endpoint para atualizar os dados referentes à uma edição já cadastrada no banco.
- Exercício 7: Crie um endpoint para apagar uma edição de copa do mundo da história! Brincando com a rivalidade futebolística entre Brasil x Argentina, apague a edição que a Argentina foi campeã!