(()=>{
    window.alert('✈Bem-vindo ao Bonfim Viagens✈')
})()

var nome;
window.onload = getNome();

function getNome(){
    nome = window.prompt('Qual seu nome?')
    confirmacao()
   function confirmacao(){
        var answer = window.confirm(`Olá, tudo bem!Então seu nome é ${nome} certo?`)
   }
}

document.querySelector('#go-down-button').addEventListener('click', function(){
        window.scrollTo(-400, document.body.scrollHeight);
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

setInterval(function(){
    var location = document.getElementById('benefits-space')
    var i = 0;
    console.log(benefits[i])
    document.getElementById('benefits-space').innerHTML = benefits[i]
    plusOne(i)
},1000)

function plusOne(num){
    this.num =+ 1;
}


//eventos img-mouse
