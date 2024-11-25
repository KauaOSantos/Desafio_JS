
const btn = document.querySelector('.btn');
const controle = document.getElementById('controle');

controle.addEventListener('change',pegouMudanca);

const funcoes = {
    text(valor) {
        btn.innerText = valor;
    },
    color(valor) {
        btn.style.color = valor;
    },
    backgroundColor(valor) {
        btn.style.backgroundColor = valor;
    },
    height(valor) {
        btn.style.height = valor + 'px';
    },
    width(valor) {
        btn.style.width  = valor + 'px';
    },
    border(valor) {
        btn.style.border = valor;
    },
    borderRadius(valor) {
        btn.style.borderRadius = valor + 'px';
    },
    fontFamily(valor) {
        btn.style.fontFamily = valor;
    },
    fontSize(valor) {
        btn.style.fontSize = valor +'px';
    },
};

function pegouMudanca(event) {
    const valor = event.target.value;
    const name = event.target.name;
    funcoes[name](valor);
    colocarStorage(name,valor);
}

function colocarStorage(name,valor) {
    localStorage[name] = valor;
}

colocarCss();

function colocarCss() {
    const variavelLocal = Object.keys(localStorage);

    variavelLocal.forEach(function(variavelAtual){
        funcoes[variavelAtual](localStorage[variavelAtual])
    })
};