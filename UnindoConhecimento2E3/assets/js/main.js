function IMC(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    function retornoIMC(evento){

        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        const objetoAlturaPeso = {
            peso : peso.value,
            altura : altura.value
        }

        function calculoIMC(){
            const valorPesoa =  Number(peso.value);
            const valorAltura =  Number(altura.value);

            const resultIMC = valorPesoa / (valorAltura * valorAltura);

            return resultIMC

        }
       
        
        function feedbackIMC(IMC){

            if(IMC < 18.5){

                return 'Abaixo do peso';
            
            }else if( IMC >= 18.5 && IMC <= 24.9){
                
                return 'Peso normal';

            }else if( IMC >= 25 && IMC <= 29.9){

                return 'Sobrepeso';

            }else if( IMC >= 30 && IMC <= 34.9){

                return 'Obesidade grau 1';

            }else if( IMC >= 35 && IMC <= 39.9){

                return 'Obesidade grau 2';

            }else{

                return 'Obesidade grau 3';

            }
            
        }

        const IMC = calculoIMC();

        console.log(`peso: ${peso.value}, altura: ${altura.value}, IMC: ${IMC.toFixed(2)}, ${feedbackIMC(IMC)}`)

        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (${feedbackIMC(IMC)})`

    }

    form.addEventListener('submit', retornoIMC);




}

IMC();