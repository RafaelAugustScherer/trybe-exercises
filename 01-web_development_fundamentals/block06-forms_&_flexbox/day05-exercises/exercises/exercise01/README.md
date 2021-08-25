# Parte 1 - Criar uma página para uma tela pequena

Antes de começar, copie o template HTML e CSS abaixo, e salve em seus respectivos arquivos:

- exercise1.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Media Query Exercise 1</title>
    <link rel="stylesheet" href="exercise1.css" />
  </head>
  <body>
    <header>
      <h1>Media Query Demo</h1>
    </header>
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
        ipsum quae veritatis in nihil laudantium labore beatae nulla laborum
        rem. Error, molestiae eaque quod placeat at. Labore architecto minus
        accusantium.
      </p>
    </section>
    <main>
      <h2>Box Columns</h2>
      <figure>
        <img
          src="http://placekitten.com/452/450?image=12"
          alt="Placeholder kitteh"
        />
        <figcaption>Place Kittens are great</figcaption>
      </figure>
      <figure>
        <img
          src="http://placekitten.com/452/450?image=5"
          alt="Placeholder kitteh"
        />
        <figcaption>Place Kittens are great</figcaption>
      </figure>
      <figure>
        <img
          src="http://placekitten.com/452/450?image=1"
          alt="Placeholder kitteh"
        />
        <figcaption>Place Kittens are great</figcaption>
      </figure>
      <figure>
        <img
          src="http://placekitten.com/452/450?image=9"
          alt="Placeholder kitteh"
        />
        <figcaption>Place Kittens are great</figcaption>
      </figure>
      <figure>
        <img
          src="http://placekitten.com/452/450?image=6"
          alt="Placeholder kitteh"
        />
        <figcaption>Place Kittens are great</figcaption>
      </figure>
    </main>
  </body>
</html>
```

- exercise1.css

```css
body {
}
h1 {
}
h2 {
}

img {
  max-width: 100%;
}

figure {
  margin: 0;
}
```

Agora você vai ajustar o CSS para melhorar a visualização da página.
Realize as seguintes tarefas:
1 - Faça o tamanho da fonte ser maior;
2 - Faça o tamanho da fonte dos elementos h1 ser menor;
3 - Aumente o espaçamento entre as figuras;
4 - Adicione um pouco de margin na página.
5 - Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px) . Esse será o primeiro breakpoint do layout . Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;
6 - Crie uma media query no seu arquivo CSS , usando a dimensão em pixels que você guardou como o min-width do teste da media query . Dentro desse breakpoint , adicione os seguintes ajustes:
Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito) ;
Ajuste o tamanho da fonte;
Ajuste as margens da página;
Faça as imagens serem mostradas em duas colunas.
7 - Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint .
8 - Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px) , e realize os seguintes ajustes dentro do breakpoint :
Altere a cor de fundo;
Ajuste o tamanho da fonte;
Ajuste as margens da página;
Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.
