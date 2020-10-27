(function(){
    'use strict';
    (() => {
        window.alert('✈Bem-vindo ao Bonfim Viagens✈');
    })();
    
    let nome;
    window.addEventListener('onload', getNome());
    
    function getNome() {
        nome = window.prompt('Qual seu nome?');
        nome = nome.toUpperCase();
        confirmacao();
       function confirmacao(){
           var answer = window.confirm(`Olá, tudo bem!Então seu nome é ${nome} certo?`);
       }
    }
    
    document.querySelector('#go-down-button').addEventListener('click', function() {
            window.scrollTo(0, 630);
    });
    
    //Beneficios - Button
    //usar var inverted =
    var benefits1 = ['Fuga da rotina',
                'Maior criatividade',
                'Maior confiança e autoestima',
                'Maior adaptação a mudanças',
                'Aumento da capacidade cognitiva',
                'Melhora a função cardíaca',
                'Aumento da habilidade social',
                'Criação de boas lembranças',
                'Vai fazer você se divertir!'
    ];
    
    var benefits2 = [
                'Fuga da rotina',
                'Maior criatividade',
                'Maior confiança e autoestima',
                'Maior adaptação a mudanças',
                'Aumento da capacidade cognitiva',
                'Melhora a função cardíaca',
                'Aumento da habilidade social',
                'Criação de boas lembranças',
                'Vai fazer você se divertir!'
    ];
    
    let i = 0;
    let benefits = benefits1.concat(benefits2).reverse();
    setInterval(function() {
        function plusOne() {
        var location = document.getElementById('benefits-space');
        location.innerHTML = benefits[i];
        i++;
        if(i > benefits.length){
            location.innerHTML = "Viajar é Bom!";
        }
        }
        plusOne();
    }, 3000);
    
    document.querySelector('.rateUsStars').addEventListener('submit', function(e){
        e.preventDefault();
    });
    
}());

function getCidade() {
    window.alert('Tenho uma ótima notícia!Temos uma agência em sua cidade!😃');
}

function validaCheckboxes(){
    let checkboxes = document.getElementsByName('stars');
    for(var i in checkboxes){
        if(checkboxes[i].checked){
            isChecked = true;
            alert('Avaliação enviada!');
            return true;
        }
    }
}