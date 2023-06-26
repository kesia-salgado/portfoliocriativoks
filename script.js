// funcção utilizada para animação digitando na plataforma//
function ativaLetra(elemento){
    const arrayTexto = elemento.innerHTML.split(''); /*o espaçamento de letras pelo inner.html.split só se dá com os parentes vazios*/
    elemento.innerHTML = '';
    arrayTexto.forEach((letra, i)=>{
        setTimeout(()=>{// o setTimeout é uma função antiva do js//
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);/*Para que o efeito possa funcionar, o console.log que aqui está representado
pelo ativaletra,precisa estar abaixo do comando global representado por const titulo*/