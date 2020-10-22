class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class Cliente extends Usuario {
    constructor(nome, email, telefone) {
        super(nome, email);
        if(checkNumber === true){
            this.telefone = telefone;
        }
    }
}

class Admin extends Usuario {
    constructor(nome, email, telefone) {
        super(nome, email);
        this.telefone = telefone;
    }
}

let Travel = function(destino, dias){
    this.destino = destino;
    this.dias = dias;
}

let nomeFromForm;
let emailFromForm;
let users = [];
let getUserName = document.getElementsByTagName('input')[0]
let getUserEmail = document.getElementsByName('form2')[0]
document.querySelector('#create-login-button').addEventListener('click', function (){
    // var getUserName = document.getElementsByTagName('input')[0]
    nomeFromForm = getUserName.value
    nomeSub = nomeFromForm.substring(0, 1);
    nomeSub2 = nomeFromForm.substring(1,nomeFromForm.length);
    nomeSub = nomeSub.toUpperCase();
    nomeFull = nomeSub + nomeSub2;
    // var getUserEmail = document.getElementsByName('form2')
    emailFromForm = getUserEmail.value;
    var user = new Cliente(nomeFull, emailFromForm.toLowerCase())
    users.push(user)
    alert('Usuário criado com sucesso!')
})

let formNome = document.querySelector('#nome')
formNome.addEventListener('focus', ()=>{
    document.getElementById("nome").style.backgroundColor = "#EEAD0E";  
})
formNome.addEventListener('blur',()=>{
    document.getElementById("nome").style.backgroundColor = "#CFCFCF";
})

let formEmail = document.querySelector('#email')
formEmail.addEventListener('focus',()=>{
    document.getElementById('email').style.backgroundColor = "#EEAD0E";
})
formEmail.addEventListener('blur',()=>{
    document.getElementById('email').style.backgroundColor = "#CFCFCF";
})

var buyButtonVeneza = document.querySelector('#checkDaysInVeneza').addEventListener('submit', function(e){
    let daysVeneza = document.forms[1].numDays1.value;
    e.preventDefault()
    if ((checkUsuario() == true) && (checkDay1 == true)){
        travels.push( new Travel("Veneza",daysVeneza))
        alert('Compra efetivada!')
    }
})

var buyButtonVeneza = document.querySelector('#checkDaysInLondon').addEventListener('submit', function(e){
    let daysLondon = document.forms[2].numDays2.value;
    e.preventDefault()
    if ((checkUsuario() == true) && (checkDay1 == true)){
        travels.push( new Travel("Londres",daysLondon))
        alert('Compra efetivada!')
    }
})

var buyButton = document.querySelector('#travelToEgipt').addEventListener('click', ()=>{
    if (checkUsuario() == true){
        travels.push(new Travel("Egipt"))
        alert('Compra efetivada!')
    }
})

let travels = [];

let screen = window;
screen.onload = function(){
    alert('Bem-vindo ao nosso site de Vendas😃');
}

let telefone;
(function(){
    setTimeout(function(){
        telefone = prompt('Gostaria de nos dizer seu telefone?'); 
    }, 3000);
})()

let checkNumber = false;
var checkNumberFunction = function(){
    if(telefone != null){
        return checkNumber = true;
    }else{
        return checkNumber = false;
    }
}

document.querySelector('#h2-create-user').addEventListener('mouseover', function(){
    alert("Crie um Usuario para efetuar compras!")
})

//Controle de compra de viagens
var checkUsuario = function(){
    if( checkIfIsAnyUserIsCreated() == false){
        window.alert("AVISO:É necessário criar um usuário para efetivar a compra!")
        return false;
    }else if( checkIfIsAnyUserIsCreated() == true){
        return true;
    }
}

var checkIfIsAnyUserIsCreated= function(){
    if(users.length == 0){
        return false
    }else{
        return true
    }
}

let coments = [];
function postComentTradePage(comentSpace){
    var coment = comentSpace;
    coments.push(coment)
    alert("Muito obrigado por deixar um comentário!")
}

document.querySelector('body').addEventListener('keydown', ()=>{
    var key = event.keyCode;
    if (key == 27){
        getTravels()
    }
})

function getTravels(){
    travels.forEach(e=>{
        alert("Destino:"+ e.destino + ", " + e.dias + " dias")
    })
}

window.onload = ()=>{
    document.forms[1].elements[0].value = 'Deixe seu comentário!'
}

document.querySelector('#comentSpace').addEventListener('focus', ()=>{
    window.document.forms.commentSection.comentSpace.value = '';
})

document.querySelector('#comentSpace').addEventListener('blur', ()=>{
    window.document.forms.commentSection.comentSpace.value = 'Deixe seu comentário!';
})
 
let h2CreateUserMessage = document.querySelector('#h2-create-user');

 document.querySelector('.sign-in').addEventListener('mouseover', ()=>{
    h2CreateUserMessage.innerHTML = "Criando Usuário..."
})

document.querySelector('.sign-in').addEventListener('mouseout', ()=>{
    h2CreateUserMessage.innerHTML = "Crie seu Usuário:"
})

// Função de Validação Modo Tradicional
let checkDay1 = false
function checkDays1(){
    let daysValue = document.forms[1].numDays1.value;
    if((daysValue < 0) || (daysValue > 10) || (daysValue == null) || (daysValue == "")){
        checkDay1 = false;
        return false;
    }else{
        checkDay1 = true;
        return true;
    }
}

let checkDay2 = false
function checkDays2(){
    let daysValue = document.forms[2].numDays2.value;
    if((daysValue < 0) || (daysValue > 10) || (daysValue == null) || (daysValue == "")){
        checkDay1 = false;
        return false;
    }else{
        checkDay1 = true;
        return true;
    }
}

// Validação usando API HTML 5
//  FIX THIS
function checkDays3(){
    let inputCamp = document.querySelector('#daysInEgipt');

    inputCamp.addEventListener('blur', function(){
        if((this.validity.valueMissing) && (this.validity.valid)){
            alert('Compra efetivada!')
        }
    })

    inputCamp.addEventListener('invalid', function(e){
        
    })
} 

// Caso inválidos os dados do input, não permite mensagens padrão do navegador
window.onload = function(){
    document.querySelector('#daysInEgipt').addEventListener('invalid', function(e){
        e.preventDefault()
    })
}