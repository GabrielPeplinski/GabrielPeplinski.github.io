class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class Cliente extends Usuario {
    constructor(nome, email, telefone) {
        super(nome, email);
        if(checkNumberFunction() === true){
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

let Travel = function(destino, dias) {
    this.destino = destino;
    this.dias = dias;
};

let nomeFromForm;
let emailFromForm;
var users = [];
let getUserName = document.getElementsByTagName('input')[0];
let getUserEmail = document.getElementsByName('form2')[0];
document.querySelector('#create-login-button').addEventListener('click', function () {
    // var getUserName = document.getElementsByTagName('input')[0]
    nomeFromForm = getUserName.value;
    nomeSub = nomeFromForm.substring(0, 1);
    nomeSub2 = nomeFromForm.substring(1,nomeFromForm.length);
    nomeSub = nomeSub.toUpperCase();
    nomeFull = nomeSub + nomeSub2;
    // var getUserEmail = document.getElementsByName('form2')
    emailFromForm = getUserEmail.value;
    var user = new Cliente(nomeFull, emailFromForm.toLowerCase());
    users.push(user);
    alert('Usuário criado com sucesso!');
});

let formNome = document.querySelector('#nome');
formNome.addEventListener('focus', function() {
    document.getElementById('nome').style.backgroundColor = "#EEAD0E";  
});

formNome.addEventListener('blur',function() {
    document.getElementById("nome").style.backgroundColor = "#CFCFCF";
});

let formEmail = document.querySelector('#email');
formEmail.addEventListener('focus',function() {
    document.getElementById('email').style.backgroundColor = "#EEAD0E";
});

formEmail.addEventListener('blur',function() {
    document.getElementById('email').style.backgroundColor = "#CFCFCF";
});

var buyButtonVeneza = document.querySelector('#checkDaysInVeneza').addEventListener('submit', function(e) {
    let daysVeneza = document.forms[1].numDays1.value;
    e.preventDefault();
    if ((checkUsuario() == true) && (checkDay1 == true)){
        travels.push( new Travel("Veneza",daysVeneza));
        alert('Compra efetivada!');
    }
});

var buyButtonVeneza = document.querySelector('#checkDaysInLondon').addEventListener('submit', function(e) {
    let daysLondon = document.forms[2].numDays2.value;
    e.preventDefault();
    if ((checkUsuario() == true) && (checkDay1 == true)){
        travels.push( new Travel("Londres",daysLondon));
        alert('Compra efetivada!');
    }
});

var travels = [];

let screen = window;
screen.onload = function() {
    alert('Bem-vindo ao nosso site de Vendas😃');
};

let telefone;
(function() {
    setTimeout(function() {
        telefone = prompt('Gostaria de nos dizer seu telefone?'); 
    }, 3000);
})();

var checkNumberFunction = function() {
    if (telefone != null){
        return true;
    }else{
        return false;
    }
};

document.querySelector('#h2-create-user').addEventListener('mouseover', function() {
    alert('Crie um Usuario para efetuar compras!');
});

//Controle de compra de viagens
var checkUsuario = function() {
    if (checkIfIsAnyUserIsCreated() == false){
        window.alert('AVISO:É necessário criar um usuário para efetivar a compra!');
        return false;
    }else if( checkIfIsAnyUserIsCreated() == true){
        return true;
    }
};

var checkIfIsAnyUserIsCreated = function() {
    if (users.length == 0){
        return false;
    }else{
        return true;
    }
};

let coments = [];
function postComentTradePage(comentSpace) {
    let coment = comentSpace;
    coments.push(coment);
    alert('Muito obrigado por deixar um comentário!');
}

document.querySelector('body').addEventListener('keydown', function() {
    let key = event.keyCode;
    if (key === 27){
        getTravels();
    }
});

function getTravels() {
    travels.forEach(e =>{
        alert('Destino:'+ e.destino + ', ' + e.dias + ' dias');
    });
}

window.onload = function() {
    document.forms[1].elements[0].value = 'Deixe seu comentário!';
};

document.querySelector('#comentSpace').addEventListener('focus', function() {
    window.document.forms.commentSection.comentSpace.value = '';
});

document.querySelector('#comentSpace').addEventListener('blur', function() {
    window.document.forms.commentSection.comentSpace.value = 'Deixe seu comentário!';
});
 
let h2CreateUserMessage = document.querySelector('#h2-create-user');

 document.querySelector('.sign-in').addEventListener('mouseover', function() {
    h2CreateUserMessage.innerHTML = 'Criando Usuário...';
});

document.querySelector('.sign-in').addEventListener('mouseout', function() {
    h2CreateUserMessage.innerHTML = 'Crie seu Usuário:';
});

// Função de Validação Modo Tradicional
let checkDay1 = false;
function checkDays1() {
    let daysValue = document.forms[1].numDays1.value;
    if ((daysValue < 0) || (daysValue > 10) || (daysValue == null) || (daysValue == "")){
        checkDay1 = false;
        return false;
    }else{
        checkDay1 = true;
        return true;
    }
}

let checkDay2 = false;
function checkDays2() {
    let daysValue = document.forms[2].numDays2.value;
    if ((daysValue < 0) || (daysValue > 10) || (daysValue == null) || (daysValue == "")){
        checkDay1 = false;
        return false;
    }else{
        checkDay1 = true;
        return true;
    }
}

// Validação usando API HTML 5
function checkDays3() {
    if(checkIfIsAnyUserIsCreated() === true){
        alert('Compra efetivada!');
    }else{
        alert('AVISO:É necessário criar um usuário para efetivar a compra!');
    }
}

window.onload = function() {
    let inputCamp = document.querySelector('#numDays3');

    inputCamp.addEventListener('blur', function(){
        if (this.validity.valueMissing){
            this.setCustomValidity('AVISO: Preencha esse campo!');
        }
    });

    inputCamp.addEventListener('blur', function(){
        if (!this.validity.rangeOverFlow){
            this.setCustomValidity('AVISO: Somente podem ser compradas viagens de até 10 dias!');
        }
    });

    inputCamp.addEventListener('blur' ,function(){
        if (this.validity.rangeUnderflow){
            this.setCustomValidity('AVISO: O mínimo de dias para uma viagem é 1 dia!');
        }
    });

    inputCamp.addEventListener('blur', function(){
        if(checkIfIsAnyUserIsCreated() === true){
            alert('AVISO:É necessário criar um usuário para efetivar a compra!');
        }
    });

    inputCamp.addEventListener('blur', function(){
        if (this.validity.valid){
            let daysValue = document.forms[3].numDays3.value;
            travels.push(new Travel("Egito", daysValue));
        }
    });
};
