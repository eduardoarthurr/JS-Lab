## 📚 Assuntos abordados neste Markdown

* **Operadores**

  * Operadores de comparação (`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`)
  * Operadores lógicos (`&&`, `||`, `!`)
  * Operador ternário (`? :`)
  * Uso do operador lógico `||` para valores padrão (fallback)

* **Manipulação do DOM**

  * Criação de elementos com `document.createElement()`
  * Adição de classes com `classList.add()`
  * Inserção de elementos no DOM com `appendChild()`
  * Conceito da árvore do DOM
  * Relação entre `window`, `document` e elementos HTML

* **Atribuição por Desestruturação**

  * Desestruturação de arrays
  * Seleção de valores específicos
  * Operador `rest (...)`
  * Desestruturação de objetos
  * Renomeação de variáveis na desestruturação
  * Desestruturação de objetos aninhados

* **Datas e Horários**

  * Objeto `Date`
  * Instanciação de datas
  * Criação de datas com parâmetros e strings
  * Métodos de acesso:

    * Dia, mês, ano
    * Hora, minutos, segundos, milissegundos
    * Dia da semana
  * Formatação de data com `toLocaleDateString()`

* **Estruturas de Repetição**

  * Loop `for`
  * Percorrendo arrays com `for`
  * Loop `for in`

    * Leitura de índices de arrays
    * Leitura de chaves de objetos
  * Loop `for of`

    * Leitura direta dos valores
  * Diferença entre `for`, `for in` e `for of`
  * Método `forEach()`

    * Acesso ao valor, índice e array completo

---

# Operadores de comparação

- > maior que
- < menor que
- >= maior que ou igual a
- <= menor que ou igual a 
- == igualdade (valor)
- === igualdade estrita (valor e tipo)
- != diferente (valor)
- !== diferente (valor e tipo)

---
# Operadores Lógicos

- && -> and -> e
- || -> or -> ou
- ! -> not -> não

---
# createElement

> Para criar um elemento no HTML usando o Js basta usar a função createElement.

```
const p = document.createElement('p')
```

 - vai ser criado um paragrafo no html 

> Para atribuir uma classe nesse elemento basta usar o método classList.add

```
p.classList.add('paragrafo-resultado')
```
---
# appendChield()

>appendChild indica que voce deseja incluir um elemento em outro exemplo: 

```
const caixa = document.getElementById('caixa');
const p = document.creatElement('p');
p.innerText = 'ola fui criado por JS!'
caixa.appendChield(p);

```

- a tag p com o texto sera inserida dentro de uma div que possui o id caixa

---
# Atribuição por desestruturação

> Nada mais é que uma atribuição de variáveis para cada valor de dentro de um array ou objeto, sendo assim voce podendo trabalhar com mais facilidade com esses valores.

```
const numeros = [1,2,3];

const [primeiroNumero,segundoNumero,terceiroNumero];

console.log(primeiroNumero, segundoNumero, terceiroNumero);

saida = 1 2 3
```

> para selecionar números específicos basta pular usando a virgula

```
const numeros = [1,2,3];

const [primeiroNumero,terceiroNumero] = numeros;

console.log(primeiroNumero, terceiroNumero);

saida = 1 3
```

> para selecionar o resto dos números e não necessariamente atribuir uma variável para cada um basta usar o operador ... neste tipo de situação ele é chamado de rest.

```
const numeros = [1,2,3,4,5,6,7,8,9];

const [primeiroNumero,segundoNumero,terceiroNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto)

saida = 1 2 3
saida = 4 5 6 7 8 9
```

-  com esse operador voce criou uma array onde você armazenou todos os valores restantes 

# Atribuição por desestruturação em objetos 

>A atribuição por destruturação em objetos tem a mesma lógica que dos arrays mas uma pequeno detalhe que diferencia os dois, com os objetos é necessário criar variáveis com o mesmo nome das chaves que deseja ter o retorno de valor.

```
const pessoa = {
	nome : 'eduardo'
	sobrenome : 'rodovalho'
	endereco : {
		rua : 'csb 2'
		cidade : 'taguatinga'
	}

};

const {nome, sobrenome} = pessoa;

console.log(nome, sobrenome);

saida = eduardo rodovalho
```

> Caso desejar colocar um nome diferente da chave para variável, bastar usar : e atribuir um novo valor 

```
const pessoa = {
	nome : 'eduardo'
	sobrenome : 'rodovalho'
	endereco : {
		rua : 'csb 2'
		cidade : 'taguatinga'
	}
};

const {nome : teste, sobrenome} = pessoa;

console.log(teste, sobrenome);

saida = eduardo rodovalho
```

> Para acessar um objeto dentro de outro objeto para atribuir por destruturação basta apontar para o objeto especifico que deseja.

```
const pessoa = {
	nome : 'eduardo'
	sobrenome : 'rodovalho'
	endereco : {
		rua : 'csb 2'
		cidade : 'taguatinga'
	}
};

const {rua, cidade} = pessoa.endereco;

console.log(rua, cidade);

saida = csb 2 taguatinga
```

> Nesse trecho em especifico é o momento em que falamos quero que atribua essas chaves para estas variáveis, elas estão no objeto endereco que está dentro do objeto pessoa

```
const {rua, cidade} = pessoa.endereco;
```
---

# Operação ternaria

> Operador ternário = ? : 
> Substitui um simples if e else 

```

const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? "VIP" : "LITH";

```
- variável para o resultado = (condição) ? valor para true : valor para false

```
const corUsuario = null;

const corPadrao = corUsuario || "Preta"

```
- variável para resultado = caso seja null || escolha essa 

---
# Date


> Date é um objeto que tem que ser instanciado que retorna a data e o horário do exato momento instanciado


```
const dataHoje = new Date()

console.log(dataHoje.toString())
```
 
- Caso queira alterar a data basta usar o parâmetro ou em forma de números ou string, levando em consideração que janeiro começa pelo mes 0
	- const dataHoje = new Date(2025, 08, 10) // a, m, d, h, M ,s, ms
	- const dataHoje = new Date("2025-08-20 20:15:30")

- Para obter informações de forma separada basta:
	- Dia // dataHoje.getDate()
	- Mês // dataHoje.getMonth()
	- Ano // dataHoje.getFullYear()
	- Hora // dataHoje.getHours()
	- Min // dataHoje.getMinutes()
	- Seg// dataHoje.getSeconds()
	- Ms // dataHoje.getMiliseconds()
	- Dia da semana // dataHoje. getDay() - 0 domingo, 6 Sábado


- Para obter horário completo em pt-BR

```
body.innerHTML = dataHoje.toLocaleDateString("pt-BR, {dataStyle: "full", timeStyle: "short"})
```


---
# Estruturas de repetição 

## for  

> Para usar estrutura de repetição for devemos colocar onde ela inicia a condição para repetir e o incremento que ela vai seguir exemplo:

```
for (inicio; condição; incremento){
	estrutura que vai repetir 
}

for (let i = 0; i < 5 ; i ++){
	// loop vai começar em 0, vai continuar enquanto for menor que 5 e vai seguir de 1 em 1 
}
```

> Para acessarmos os elementos de um vetor podemos usar o loop 

```
const vetor = [1,2,3]

for (let i = 0; i < vetor.lenth ; i ++){
}
```
## for in

> Se a intenção é apenas ler a lista para facilitar a leitura de indice podemos usar o **For in**, recomendável para objetos 

```
const vetor = [1,2,3]

for (let indice in frutas){
	
}
```
-  O in lê os **índices** de um array ou **chaves de objetos**  

```
const pessoa = {
	nome: 'eduardo'
	sobrenome: 'rodovalho'
	idade: 20
}

for (let chave in pessoas){
	console.log(chave)
}

saida = nome sobrenome idade
```
## for of

> Se a intenção é apenas ler os elementos sem precisar contar os índices podemos usar o **For of** , não recomendável para objetos

```
const vetor = ['eduardo','arthur','rodovalho']

for (let numero of vetor){
	console.log(numero)
}

saida = eduardo arthur rodovalho 
```

- Nos outros exemplos o valor passado para variável de controle é o indice que representa aquele elemento, no **For of** o valor que é passado é realmente o elemento que está na posição do indice facilitando mais ainda. 

> Se invés de of usasse in o resulta seria o numero do indice de cada elemento 

```
const vetor = ['eduardo','arthur','rodovalho']

for (let numero in vetor){
	console.log(numero)
}

saida = 0 1 2
```

# forEach()

> Voce pode usar essa função quando necessita de um resposta mais completa, ela retorna o valor o indice e o array completo 

```
const vetor = ['eduardo','arthur']

vetor.forEach(function (valor, indice, array){
	console.log(valor, indice, array)
})

saida = eduardo 0 ['eduardo', 'arthur'] arthur 1 ['eduardo','arthur']
```


---

# DOM e a árvore do DOM 

> A arvore do DOM começa pela janela do navegador representada por window, ou seja o pai de todos os elementos e depois vamos descendo até o document que usamos  para acessar a tag HTML que possui outros filhos dentro dela que sao as tags head e body, e dentro delas possuem outros filhos e assim por diante, por isso a representação de arvore genealógica pois sempre um elemento pai da origem a um elemento filho, **sempre que manipulamos essa estrutura podemos falar que estamos manipulando a arvore do DOM** 


---
