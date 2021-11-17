# Exercício Bônus

Novamente em conjunto, tentem trocar de posição, quem pilotava, agora observa e vice-versa:

1. Você irá criar um sistema de cadastro de clientes. Esse sistema deve ser composto por 4 páginas.

* A primeira página deve ser a Home . Ela deverá ter um Link que possibilite ao usuário navegar para a página de login.

* A segunda página será a de Login . Devem existir 2 campos para pegar os dados do usuário (email e senha). Após o login ser efetuado, o usuário deve ser redirecionado para a página de Clientes cadastrados .

* Caso o login não seja feito, ou seja, o usuário tenha mudado à mão o link do sistema e ido para a página de cadastro ou de clientes, a única mensagem exibida deve ser: "Login não efetuado".

* A página de Clientes cadastrados deverá listar todos os clientes. Caso não haja cliente, a mensagem "Nenhum cliente cadastrado" deve aparecer na tela, juntamente com um botão para ir à pagina de cadastro. Esse botão deve permanecer na tela mesmo caso hajam clientes.

* A página de cadastro deve conter 3 inputs, para pegar 3 dados do cliente: nome, idade e email. Um botão deve gerar o cadastro. Deve haver também na página um botão que leve o usuário para a página de Clientes cadastrados.

* Estados que não necessitem navegar para outros componentes, podem ser guardados internamente. Todos os outros devem ser trafegados via Redux.

## Bônus
Você irá implementar funcionalidades ao código do cadastro de clientes.

* Na página de Clientes cadastrados, crie um botão que ordene os clientes em ordem alfabética a partir do campo nome . Caso o botão seja clicado novamente, a ordenação original deve ser mostrada.

* Cada cadastro deve ser acompanhado de um botão com o texto X . Caso o botão seja clicado, o cadastro deve ser excluído.