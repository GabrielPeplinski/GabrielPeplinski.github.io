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

let Travel = function(destino){
    this.destino = destino;
}

var nomeFromForm;
var emailFromForm;
var users = [];
document.querySelector('#create-login-button').addEventListener('click', function (){
    var getUserName = document.getElementsByTagName('input')[0]
    nomeFromForm = getUserName.value
    var getUserEmail = document.getElementsByName('form2')
    emailFromForm = getUserEmail[0].value;
    var user = new Cliente(nomeFromForm, emailFromForm.toLowerCase())
    console.log(user)
    users.push(user)
})

var form1 = document.querySelector('#nome').addEventListener('focus', ()=>{
    document.getElementById("nome").style.backgroundColor = "#EEAD0E";  
})

var form2 = document.querySelector('#nome').addEventListener('blur',()=>{
    document.getElementById("nome").style.backgroundColor = "#CFCFCF";
})

var formEmail1 = document.querySelector('#email').addEventListener('focus',()=>{
    document.getElementById('email').style.backgroundColor = "#EEAD0E";
})

var formEmail2 = document.querySelector('#email').addEventListener('blur',()=>{
    document.getElementById('email').style.backgroundColor = "#CFCFCF"
})

var buyButton = document.querySelector('#travelToVeneza').addEventListener('click', ()=>{
    if (checkUsuario() == true){
        travels.push( new Travel("Veneza"))
        alert('Compra efetivada!')
    }
})

var buyButton = document.querySelector('#travelToLondon').addEventListener('click', ()=>{
    if (checkUsuario() == true){
        travels.push(new Travel("London"))
        alert('Compra efetivada!')
    }
})

var buyButton = document.querySelector('#travelToEgipt').addEventListener('click', ()=>{
    if (checkUsuario() == true){
        travels.push(new Travel("Egipt"))
        alert('Compra efetivada!')
    }
})

var travels = [];

// FUNÇÃO COM PROBLEMA - IMPRESSÃO DAS VIAGENS COMPRADAS
// function getTravels(){
//     travels.forEach(e => {
//         console.log(e.destino)
//         return e.destino
//     });
// }

// window.onkeydown = function(){
//    var spaceToWrite = document.querySelector('.your-travels').innerHTML = getTravels() };

var screen = window;
screen.onload = function(){
    alert('Bem-vindo ao nosso site de Vendas😃');
}

var telefone;
(function(){
    setTimeout(function(){
        telefone = prompt('Gostaria de nos dizer seu telefone?'); 
    }, 3000);
})()

var checkNumber = false;
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
    if( checkIfUsuarioIsAnyUserIsCreated() == false){
        window.alert("AVISO:É necessário criar um usuário para efetivar a compra!")
        return false;
    }else if( checkIfUsuarioIsAnyUserIsCreated() == true){
        return true;
    }
}

var checkIfUsuarioIsAnyUserIsCreated= function(){
    if(users.length == 0){
        return false
    }else{
        return true
    }
}

var coments = [];
function postComentTradePage(comentSpace){
    var coment = comentSpace;
    coments.push(coment)
    alert("Muito obrigado por deixar um comentário!")
}