function meuEscopo(){
   const form = document.querySelector('.form');
   const resultado = document.querySelector('.resultado')

   const pessoas = [];

   

    function recebeEventoForm(evento){

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const objetoPessoas = {
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura: altura.value

            

        }

        
        resultado.innerHTML +=`<br> Nome: ${nome.value} /  Sobrenome: ${sobrenome.value} / Peso: ${peso.value} / Altura: ${altura.value} <br> `;

        

        pessoas.push(objetoPessoas)
        
        console.log(pessoas)

        
        
    };

  
    form.addEventListener('submit', recebeEventoForm)



}

meuEscopo();

