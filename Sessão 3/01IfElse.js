function mensagemUsuario() {
    const data = new Date();
    const hora = data.getHours();

    

    if (hora >= 6 && hora <= 11) {
        return 'Bom dia !';
    } else if (hora >= 12 && hora <= 17) {
        return 'Boa Tarde !';
    } else {
        return 'Boa noite !';
    }
}

const mensagemInicio = document.querySelector('.mensagem')

mensagemInicio.innerHTML = `Ola Eduardo, ${mensagemUsuario()}`