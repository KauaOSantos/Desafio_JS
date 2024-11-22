
const btn = document1.querySelector('.btn');
const controle = document.getElementById('controle');

controle.addEventListener('change',pegouMudança);

const funcoes = {
    Texto(valor) {
        btn.innerText = valor;
        return btn.innerText
    },
    Color(valor) {
        btn.style.color = valor;
    },
    BackgroundColor(valor) {
        btn.style.BackgroundColor= valor;
    },
    Height(valor) {
        btn.style.Height = valor + 'px';
    },
    Width(valor) {
        btn.style.Width  = valor + 'px';
    },
    Border(valor) {
        btn.style.Border = valor;
    },
    BorderRadius(valor) {
        btn.style.BorderRadius = valor + 'px';
    },
    fontFamily(valor) {
        btn.style.fontFamily = valor ;
    },
    FontSize(valor) {
        btn.style.FontSize = valor +'px' ;
    }
}

function pegouMudanca(event) {

    const valor = event.target.value;
    const nome = event.target.name;
    funcoes[nome][valor];
    colocarStorage(nome,valor);
}

function colocarStorage(nome,valor) {

    localStorage[nome] = valor;
}

 colocarCss();

 function colocarCss() {

    const variaveisLocal = Object.keys(localStorage);

    variaveisLocal.forEach(function(variavelAtual){
        funcoes[variavelAtual](localStorage[variavelAtual])
    })
};