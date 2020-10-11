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
let users = [];
document.querySelector('#create-login-button').addEventListener('click', function (){
    var getUserName = document.getElementsByTagName('input')[0]
    nomeFromForm = getUserName.value
    nomeSub = nomeFromForm.substring(0, 1);
    nomeSub2 = nomeFromForm.substring(1,nomeFromForm.length);
    nomeSub = nomeSub.toUpperCase();
    nomeFull = nomeSub + nomeSub2;
    var getUserEmail = document.getElementsByName('form2')
    emailFromForm = getUserEmail[0].value;
    var user = new Cliente(nomeFull, emailFromForm.toLowerCase())
    users.push(user)
    alert('Usuário criado com sucesso!')
})

var formNome = document.querySelector('#nome')
formNome.addEventListener('focus', ()=>{
    document.getElementById("nome").style.backgroundColor = "#EEAD0E";  
})
formNome.addEventListener('blur',()=>{
    document.getElementById("nome").style.backgroundColor = "#CFCFCF";
})

var formEmail = document.querySelector('#email')
formEmail.addEventListener('focus',()=>{
    document.getElementById('email').style.backgroundColor = "#EEAD0E";
})
formEmail.addEventListener('blur',()=>{
    document.getElementById('email').style.backgroundColor = "#CFCFCF";
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

var coments = [];
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
        alert(e.destino)
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