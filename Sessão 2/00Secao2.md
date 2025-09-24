# Seção 2

---


# Variáveis
#### Cap 12 ao 18 

- Variáveis = variam, diferente de constantes que nao variam, são constantemente a mesma coisa.  
- Alocam um pequeno espaço na memória para guardar informações desejadas
- declaradas como **let** nomeVariavel;
- **NÃO UTILIZE VAR, UTILIZE LET**
	- Caso eu declare mais de uma vez uma variável com **var**  ela não vai dar erro vai apenas alterar o valor daquela variável, isso pode trazer alguns conflitos de código. O indicado é nao declarar mais de uma vez uma variável. 

# Constantes 

- Mesma ideia de variáveis a diferença que nao podemos modificar o valor de uma **const**.


---
# Tipos primitivos 
#### Cap 19

- Diferente da linguagem Java que voce deveria declarar as variáveis de forma me explicada o JavaScript de certa forma faz isso pra voce, facilitando um pouco trazendo menos tipos primitivos eles são:
	- String (caracteres)
	- Number (int e float)
	- undefined -> não aponta para local nenhuma da memória
	- null -> não aponta para local nenhuma da memória
		- a diferença entre os dois é que undefined o próprio JavaScript que retorna pra voce e o null voce pode declarar alguma let ou const para fazer algo no código, o certo e sempre que voce queira que que algo seja nulo use null e nao undefined para voce saber diferenciar quando e voce ou a linguagem. 
	- boolean (true or false valores lógicos)


---
# parseInt() parseFloat() Number()
#### Cap 19

- parseInt() parseFloat() Number() são usados quando voce deseja transformar uma string em um int ou float o a função number() te retorna de acordo que a string foi escrita, se for float ou int é o mais indicado a ser usado .  


---
# Objeto window
#### Cap 21 ao 22

> Um objeto que pode te retornar vários métodos, pelo seu nome ja é bem descritivo ele é relacionado com a janela do navegador, voce usando o console do navegador e digitando window ele te retorna todos os métodos que podem ser usados. Algumas que podem ser consideradas importante:

- **window.alert (")**
	- pode ser usado apenas **alert()**
	-  mostra uma pequena janela aberta no navegador com a mensagem escrita retornando undefined ou seja sem retorno .
- **window.confirm(")**
	- pode ser usado apenas **confirm()**
	- uma janela parecida é mostrada com a mensagem passada no parâmetro a diferença que essa função é usada para confirmar ações, ela da alternativa ao usuário de cancelar e dar ok dependendo  da escolha ele confirma (retornando true) ou não (retornando false) a ação executada.
- **window.prompt(")**
	- pode ser usado apenas **prompt()**
	- uma janela de mensagem aparece com um input retornando o dado que o usuário digitar.


---
# document.innerHTML


> Usado para adicionar textos em locais específicos da pagina 

- += Acrescenta frase sem apagar o que tiver 

```
 const escrevaAqui = document.querySelector('.escreva-aqui')
 
 escrevaAqui.innerHTML += 'Hello, '
 escrevaAqui.innerHTML += 'World!! '
```

- = Apaga o que tiver e escreve o que voce quer

```
 const escrevaAqui = document.querySelector('.escreva-aqui')
 
 escrevaAqui.innerHTML = 'Hello, world!'
```

---

# Strings
#### Cap 24 ao 25

- **variavel.charAt(índice)**
	- pode usar variavel[0] indice desejado
	- procure e me retorne qual letra dessa string está neste índice do parâmetro 
- **variavel.indexOf("string")**
	- procure e me retorne em  qual índice começa essa string do parâmetro, do inicio dela para o final (ou seja do s ao g)
	- **variavel.indexOf("string", 3)**
		- depois do índice 3 procure e me retorne em  qual índice começa essa string do parâmetro, do inicio dela para o final (ou seja do s ao g)
	- **variavel.lastIndexOf("string" )**
		- procure e me retorne em  qual índice começa essa string  do parâmetro, começando do final para o inicio  (ou seja do g ao s )
	- **variavel.lastIndexOf("string", 3 )**
		- depois do índice 3 procure e me retorne em  qual índice começa essa string do parâmetro, começando do final para o inicio (ou seja do g ao s)
- **variavel.search(/x/ )**
	- qual índice está essa letra?
- **variavel.replace(/x/, "y" )**
	- substitua o primeiro x por y 
- **variavel.replace(/x/g, "y" )**
	- substitua todos os x por y 
- **variavel.lenth**
	- retorne o tamanho exato dessa string (quantos índices possui)
- **variavel.slice(2, 5)**
	- quero que voce faça um corte e me retorne as strings do índice 2 ao índice 5 **variavel.slice(inicio, fim)**
	- quando voce usa números negativos está pedindo que comece o corte pelo final da string até o seu inicio ex:
		-  **variavel.slice(-3)** 
	- com números negativos para indicar o inicio e o fim que voce quer o corte comece e termine basta alternar de lado ex:
		- **variavel.slice(-fim , -inicio)**
	- **variavel.split(" ")**
		- me retorne todas as palavras dessa string em uma lista
	- **variavel.split("r")**
		- me retorne todas as palavras dessa string em uma lista retirando todos os "r"
	- **variavel.split(" " , 2)**
		- me retorne as duas palavras dessa string em uma lista 
- **variavel.toUpperCase**
	- retorna todas as letras da variável em maiúsculas. 
- **variavel.toLowerCase**
	- retorna todas as letras da variável em minúsculas.


---
# Numbers
#### Cap 26 ao 28

- **variavel.toString**
	- retorna o numero transformado em string.
- **variavel.toFixed**(x)
	- retorna o numero com a quantidade de casas decimais de acordo com número passado no parâmetro.
- **Number.isInteger(variável)**
	- retorna um valor booleano para saber se o dado da variável é um número inteiro ou não.
- **Number.isNan(variável)**
	- retorna um valor booleano informando se sua conta deu ou não errado (NaN = is not a number), possibilidades:
		- operação matemática inválida 
		- converter algum texto em número ou fazer alguma operação com letra
		- qualquer operação com NaN resulta em NaN, se voce depender de alguma outra operação que esteja dando esse resultado todo o resto também dará.

> Operações de valores decimais são imprecisas podendo retornar valores incorretos, para arredondar esses números de forma correta e que fique realmente valores inteiros não só a olho nu mas para a maquina também, não basta usar apenas o objeto **vaiavel.toFixed**(x) correto é :

- parseFloat(variável.toFixed(x))
ou
- variável(variável.toFixed(x))
### Math

- math.floor(variável)
	- arredonda o valor da variável para baixo mesmo se o valor for 5,9999
- math.ceil(variável)
	- arredonda o valor da variável para cima mesmo se o valor for 5,00001
- math.round(variável)
	- arredonda de acordo com o valor a partir 5.5 vai pra cima, 4.99 vai pra baixo 
- math.max()
	- retorna o maior valor de uma sequencia 
- math.min()
	- retorna o menor valor de uma sequencia 
- math.random()
	- retorna um número aleatório entre 0 e 1 onde o 1 não está incluído. 
	- caso queira escolher o intervalo para o sorteio do numero aleatório  basta
		- math.random() * (10 - 5) + 5 (vai sortear um número entre 10 e 5)
- math.PI()
	- retorna o valor de PI

> **OBS:** caso queira achar a raiz quadrada de um número basta usar a notação **variável ** 0.5**



---
# Array

>  Um array é uma lista, um coleção de dados.

- Uma boa prática e deixar apenas um tipo de dado dentro de um array

- Array[0]
	- me retorne o elemento no índice 0.
- Array [0] = novo valor 
	- altere o valor do elemento no índice 0
- Array.lenth
	- me retorne o valor o tamanho desse array
- Array.push()
	- acrescente esse valor ao final desse array
- Array.unshift()
	- acrescente esse valor no inicio desse array
	- não e considerável tão pratico, pois acrescentando no inicio voce altera toda a lista e mudando os índices de cada elemento(voce meio que empurra pra frente todos os elementos ). Isso pode atrasar a performance do seu código 
- Array.pop()
	- remova o ultimo elemento desse array
- Array.shift()
	- remove o primeiro elemento desse array
	- altera os índices trazendo toda lista pra frente, aquilo que estava no índice 1 vai pro 0 e assim por diante
- delete Array[5]
	- Remova o elemento do índice 5 ()
	- obs: isso deixa um "buraco" na sua lista
- Array.slice(0,5)
	- me retorne os elementos do indice 0 ao indice 5
- Array instanceof Array
	- este elemento é um array? true or false


---
# Funções 


> Blocos de códigos que podem ser reutilizados,  recebem ou nao  parâmetro que retornam ou nao algo, mas que sempre executam uma tarefa especifica.

```
// formas de declarar funções

  

function soma (x,y) {

    const resultado = x + y

    return resultado

}

  

const resultSoma = soma(5, 4)

  

//função anonima ou arrow functions

const raiz = function (n){

    return n ** 0.5

}

  

const raiz1 = (n) => n ** 0.5

  
  

console.log(resultSoma)

  

console.log(raiz(25))

  

console.log(raiz1(25))
```

---
# Objetos


> Um objeto coleção de chave : valor, onde cada chave tem seu valor atribuído e valor pode ser de qualquer tipo incluindo outro objeto ou função, objeto em si é feito pra organizar e agrupar dados e comportamentos de uma só estrutura.

```
//Objeto

const fichaCarro = {
	nome: 'fusion'
	marca: 'ford'
	cor: 'preta'
}

console.log(fichaCarro.nome)
```

---
# querySelector()


> Para selecionarmos um elemento com Js podemos usar o document.getElementByClassName() ou  document.getElementById() e etc. Porém esse  método pode te limitar algumas vezes o mais comum e usado atualmente é o querySelector() que voce pode distinguir o que quer selecionar no parâmetro: 


-  querySelector('div') -> seleciona a tag completa porem só pode ser utilizada se no documento ou na div selecionada existir so um elemento com essa tag 

-  querySelector('.form') -> usando o ponto significa para escolher a **classe** form.

-  querySelector('#form') -> usando o hashtag significa para escolher o ID form. 


---

# Valores por referencia


> Tipos primitivos existem possibilidade de cópia quando passados por valor ex:

```
let a = 'Eduardo'

let b = a

a = "Gabriela"

console.log(a, b)

Saída = Gabriela, Eduardo
```



>Quando falamos de tipos por referência (como Objetos, Arrays e Funções), ao atribuir uma variável a outra, não é feito uma cópia do valor em si. Ambas passam a compartilhar a mesma referência na memória, ou seja, apontam para o mesmo objeto. Assim, qualquer alteração feita através de uma variável é refletida na outra. Isso difere dos tipos primitivos (passados por valor), que criam uma cópia independente na memória ex:

```
let a = ['Eduardo']
let b = a

b.push('Gabriela')

console.log(a, b)

Saída = ['Eduardo', 'Gabriela'] ['Eduardo', 'Gabriela']
```


---
# addEventListener()


> **addEventListener()** é usado para monitorar eventos em certos elementos, o evento que deseja ser monitorado e passado por parâmetro ex:

```
const botaoLogin = document.querySelector('.botao-login')

function interagir (){
	alert('O botao foi clicado!')
}

botaoLogin.addEventListener('click', interagir)

```

- Nesse pequeno exemplo usamos a função addEventListener() para monitorar o click no botão e assim que ocorrer essa ação ele chama a função interagir.

---

