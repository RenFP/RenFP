# Objetos

É um coleção dinâmica de propriedades, ou seja, que pode sofrer modificação. A sua syntax é definida por um par de colchetes **{}**, e seu conteúdo tem
 chaves e valores, sendo o último de qualquer tipo de dado.

### Formas de declarar um Objeto:

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

- Método **Object.create** API.

    ```js
        const objeto = Object.create(null);
    ```
