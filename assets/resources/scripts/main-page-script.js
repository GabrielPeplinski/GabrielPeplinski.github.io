(()=>{
    window.alert('✈Bem-vindo ao Bonfim Viagens✈')
})()

var nome;
window.onload = getNome();

function getNome(msg){
    nome = window.prompt('Qual seu nome?')
    confirmacao()
   function confirmacao(){
        var answer = window.confirm(`Olá, tudo bem!Então seu nome é ${nome} certo?`)
   }
}

document.querySelector('#go-down-button').addEventListener('click', function(){
        window.scrollTo(-150, document.body.scrollHeight);
})

//Beneficios - Button
benefits = ["Fuga da rotina",
            "Maior criatividade",
            "Maior confiança e autoestima",
            "Maior adaptação a mudanças",
            "Aumento da capacidade cognitiva",
            "Melhora a função cardíaca",
            "Aumento da habilidade social",
            "Criação de boas lembranças",
            "Vai fazer você se divertir!"
]
var nextButton = document.getElementById('next-benefit')