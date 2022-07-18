# Objetos

É um coleção dinâmica de propriedades, ou seja, que pode sofrer modificação. A sua syntax é definida por um par de colchetes **{}**, e seu conteúdo tem
 chaves e valores, sendo o último de qualquer tipo de dado.

## Formas de declarar um Objeto:

- Notação Literal:

    Como o próprio nome diz através da notação direta de um **Objeto** que é **{}**.
    
    ```js
        const objeto = {
            livro: 'O Pequeno Príncipe'
        }
    ```
        
- Função Construtora:

    Funções construtoras, tem a função de automatizar o processo de criação de uma objeto.    
    
    ```js
        const objeto = new Object; 
    ```

- Método **Object.create** API:

    Nesse método criamo um objeto a partir de um objeto criado.
    ```js
        const objeto = Object.create(null);
    ```
    
## Incrementações do ES6

- Atribuir uma propriedade de objeto, a partir de uma variável.

    ```js
        const title = 'Clean Code';
        
        const livro = {
            title  // eu apenas coloco o nome da variável e o JS já entende que a chave é 'title' e o valor é 'Clean Code'.
        }
        
        console.log(livro) //  { title: 'Clean Code' }
    ```
- Computar chaves no tempo de execução.
    
    Permite declarar chave dentro de um objeto a partir de um variável, por meio da referência.
    
    ```js
        const chave1 = 'Título';
        const chave2 = 'Páginas';
        const book = {};
        
        const book[chave1] = 'Clean Code'; // A sintax requer que coloquemos a variável entre colchetes [chave1], assim o interpretador entende que precisarar pegar o valor da variável 'chave1' que é 'Título.
        const book[chave2] = 464;
        
        console.log(book) // saída: { 'Título': 'Clean Code', 'Páginas': 464 }
    ```
