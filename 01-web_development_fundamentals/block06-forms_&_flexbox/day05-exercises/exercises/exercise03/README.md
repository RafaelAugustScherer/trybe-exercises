# Parte 3 - Criando layouts para dispositivos móveis e para impressão

Antes de começar, copie o template HTML e CSS abaixo, e salve em seus respectivos arquivos:

- exercise3.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kitten Kare</title>
  <link rel="stylesheet" href="exercise3.css" />
</head>
<body>

  <div id="container">
    <header id="header">
      <h1>
        Kitten Kare
      </h1>
    </header>
    <nav id="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </nav>
    <main id="content-container">
      <article id="content">
        <h2>
          Welcome!
        </h2>
        <img src="http://placebear.com/400/400">
        <p>The domestic cat[1][2] (Felis catus[2] or Felis silvestris catus[4], informally Felis domesticus[6][7]) is a
          small, usually furry, domesticated, carnivorous mammal. It is often called the housecat when kept as an indoor
          pet,[8] or simply the cat when there is no need to distinguish it from other felids and felines. Cats are
          valued by humans for companionship and ability to hunt vermin and household pests. They are primarily
          nocturnal.[9]
        </p>
        <p>Cats are similar in anatomy to the other felids, with strong, flexible bodies, quick reflexes, sharp
          retractable claws, and teeth adapted to killing small prey. As crepuscular predators, cats use their acute
          hearing and ability to see in near darkness to locate prey. Not only can cats hear sounds too faint for human
          ears, they can also hear sounds higher in frequency than humans can perceive. This is because the usual prey
          of cats (particularly rodents such as mice) make high frequency noises, so the hearing of the cat has evolved
          to pinpoint these faint high-pitched sounds. Cats also have a much better sense of smell than humans.
        </p>
        <p>Despite being solitary hunters, cats are a social species, and cat communication includes the use of a
          variety of vocalizations (meowing, purring, trilling, hissing, growling and grunting) as well as pheromones
          and types of cat-specific body language.[10]
        </p>
      </article>
      <aside id="aside">
        <h3>
          Cat Body Types
        </h3>
        <ul>
          <li>Oriental
          <li>Foreign
          <li>Semi-Foreign
          <li>Semi-Cobby
          <li>Cobby
            </p>
      </aside>
      <footer id="footer">
        Copyright © Kitten Kare, 2019
      </footer>
    </main>
  </div>
</body>
</html>
```

- exercise3.css

```css
#container {
  margin: 0 auto;
  width: 100%;
  background: #fff;
}

#header {
  background: #ccc;
  padding: 20px;
}

#header h1 {
  margin: 0;
}

#navigation {
  float: left;
  width: 100%;
  background: #333;
}

#navigation ul {
  margin: 0;
  padding: 0;
}

#navigation ul li {
  list-style-type: none;
  display: inline;
}

#navigation li a {
  display: block;
  float: left;
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
  border-right: 1px solid #fff;
}

#navigation li a:hover {
  background: #383;
}

#content-container {
  float: left;
  width: 100%;
  background: #fff;
}

#content {
  clear: left;
  float: left;
  width: 60%;
  padding: 20px 0;
  margin: 0 0 0 4%;
  display: inline;
}

#content h2 {
  margin: 0;
}

#aside {
  float: right;
  width: 33%;
  padding: 20px 0;
  margin: 0 3% 0 0;
  display: inline;
}

#aside h3 {
  margin: 0;
}

#footer {
  clear: left;
  background: #ccc;
  text-align: right;
  padding: 20px;
  height: 1%;
}
```

Realize as seguintes tarefas:
1 - Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:
* Os elementos com id header , navigation e footer devem desaparecer;
* O elemento com id aside deve ser mostrado abaixo do conteúdo principal.
![Imagem 1](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/css-responsive/images/exercise_3_before_print-2d4180a7f515daebab4ee1c78fe51cfd.png)

2 - Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. Especificamente:
* O elemento com id aside deve desaparecer;
* O elemento body não deve ter padding ;
* As imagens não devem exceder a largura da tela;
* Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha;
* O elemento com id header deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo após o usuário rolar a página.
![Imagem 2](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/css-responsive/images/exercise_3_before_small_phone-9f496c34f56185b7f2403f0e200cfec3.png)
240x320: tela pequena

![Imagem 3](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/css-responsive/images/exercise_3_before_android-a59ce8b1d1a965e51c661e0999db28bb.png)