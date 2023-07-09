// função utilizada para animação digitando na plataforma//
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

/* função para sobrepor texto quando o mouse passar em cima de cada icone*/

function showTooltip(element, text) {
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = text;
    tooltip.style.display = 'block';
    tooltip.style.top = element.offsetTop + element.offsetHeight + 'px';
    tooltip.style.left = element.offsetLeft + 'px';
  }

  function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
  }