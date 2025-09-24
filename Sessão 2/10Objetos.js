
//exercicio

function retonaNome(){
        return prompt('Digite seu nome:')
    }

    const nomevar = retonaNome();


const criaPessoa = {

    nome : nomevar,
    

  
    comunicando(){
        document.body.innerHTML = `Olá ${this.nome} seja bem-vindo `
    }

 
}


criaPessoa.comunicando();
