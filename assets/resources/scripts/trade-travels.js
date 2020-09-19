class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class Cliente extends Usuario {
    constructor(nome, email, telefone) {
        super(nome, email);
        this.telefone = telefone;
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
    nomeFromForm = document.querySelector('#nome').value;
    emailFromForm = document.querySelector('#email').value;
    var user = new Cliente(nomeFromForm, emailFromForm)
    users.push(user)
    console.log(user)
})

function spaceSplit(nome){
    this.nome = nome;
    var nome = new String(nome);
    return nome.split(' ', 2)
}

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
   travels.push( new Travel("Veneza"))
})

var buyButton = document.querySelector('#travelToLondon').addEventListener('click', ()=>{
    travels.push(new Travel("London"))
})

var buyButton = document.querySelector('#travelToEgipt').addEventListener('click', ()=>{
    travels.push(new Travel("Egipt"))
})

var travels = [];