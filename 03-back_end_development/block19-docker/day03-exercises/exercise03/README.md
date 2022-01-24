# Exercício 3
Por padrão o ghost utiliza um sqlite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

1. Crie um novo serviço para o nosso banco de dados, podemos utilizar um mysql, utilize a imagem mysql:5.7 ; 
2. Precisamos definir uma senha root para o nosso bd , para isso utilize a variável MYSQL_ROOT_PASSWORD , lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host , para a env do container ; 
3. Agora precisamos configurar nosso service com o ghost para utilizar o MySQL, para isso defina a variável database__client para mysql ; 
4. Defina o nome ghost para o nome do database utilizando a variável database__connection__database ; 
5. E então, indique a conexão para o nosso MySQL na env database__connection__host ; 
6. Para definir a pessoa usuária ( root ) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password . 
7. Utilize a opção depends_on para criar relações de dependências entre os serviços. 
8. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.