document.addEventListener('DOMContentLoaded', function(){

    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeAbas();
            aba.classList.add('personagens__grid__main__list__item--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('personagens__grid__nav__button--is-active');
            
        })
    }
})

function escondeAbas(){
    const abas = document.querySelectorAll('[data-tab-id]')
    for(let i = 0; i < abas.length; i++){
        abas[i].classList.remove('personagens__grid__main__list__item--is-active')
    }
}

function removeBotaoAtivo(){
    const abas = document.querySelectorAll('[data-tab-button]')
    for(let i = 0; i < abas.length; i++){
        abas[i].classList.remove('personagens__grid__nav__button--is-active')
    }
}