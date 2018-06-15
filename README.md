# Projeto MyReads

O projeto MyReads tem o objetivo de controlar de forma simples e descomplicada os livros de uma pessoa. MyReads organiza de forma categorizada os livros que lidos, lendo atualmente e livros que o  usuário gostaria de ler.

As categorias que são disponibilizadas são:

* Currently Reading (Lendo atualmente)
* Want to Read (A ser lidos)
* Read (Lidos)

Cada listagem contém os livros com as informações de Título do Livro, Autor e Foto da capa do livro. Para cada livro exibido, o usuário conta com um menu suspenso que lhe permitirá alterar a categoria de um determinado livro. 

# Instalando a aplicação

Para instalar a aplicação é necessário seguir os passos abaixo:
1. Acessar a linha de comando;
2. Digitar o seguine comando:
    git clone https://github.com/wellingtonasilva/reactnd-project-myreads
3. Executar o comando:
    npm install
4. Executar o comando:
    npm start
5. Abrir o navegador de sua preferência e digitar o seguinte endereço:
    http://localhost:3000

    
# Alterando a categoria de um livro

1. Na listagem de livros clique no botão suspenso (três pontinhos);
2. O MyReads irá exibir um menu com as seguintes opções:
  * Currently Reading;
  * Want to Read;
  * Read;
  * None.
3. O menu irá deixar em destaque a categoria atual do livro;
4. Selecione a nova categoria para o livro;
5. MyReads irá alterar mover o livro para a nova categoria.


# Adicionado um novo livro

MyReads permite que o usuário possa adicionar novos livros a sua biblioteca pessoal.
Para isso, basta seguir os passos abaixo:

1. Na listagem de livros clique no botão adicionar (+) no canto inferior direito;
2. MyReads irá apresentar a funcionalidade "Search";
3. No campo com a descrição "Search" digite o texto a ser pesquisado que automaticamente os livros que foram localizados serão exibidos abaixo do campo "Search".
4. O MyReads irá exibir um menu com as seguintes opções:
  * Currently Reading;
  * Want to Read;
  * Read;
  * None.
5. O menu irá deixar em destaque a categoria atual do livro;
6. Selecione a nova categoria para o livro;
7. MyReads irá alterar mover o livro para a categoria selecionada.



