let SeuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('d-1-2 span');
let descricao = document.querySelector('d-1-4');
let aviso = document.querySelector('d-2');
let lateral = document.querySelector('d-1-right');
let numeros = document.querySelector('d-1-3');

let etapaAtual = 0;
//let etapas = '';
function comecarEtapa(){
    //let etapa = etapas[etapaAtual];
    lateral.innerHTML = '';
    let numeroHtml = '';

    for(let i=0; i<etapa.numeroHtml; i++){
        numeroHtml += '<div class="numero"></div>';
    }

    SeuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.disblay = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
    alert("Funcionando 2");
}

function clicou(n){
    alert("Clicou em "+n);
}
function branco(){
    alert("Clicou em BRANCO");
}
function corrige(){
    alert("Clicou em CORRIGE");
}
function confirma(){
    alert("Clicou em CONFIRMA");
}

comecarEtapa();