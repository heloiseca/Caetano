const avanca = document.querySelector('.btn-proximo');

avanca.array.forEach(button => {
button.addEventlistener('click', function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAttibute('data-proximo');

    atual.classList.remove('ativo');
    document.getElementByld(proximoPasso).classlist.add('ativo');
    });
})