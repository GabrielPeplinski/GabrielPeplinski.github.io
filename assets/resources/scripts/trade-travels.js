window.onload = function(){
    $('#cepInput').mask('00000-000');
};

class Usuario {
    constructor(nome, email, cpf, cep) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.cep = cep;
    }
}

class Cliente extends Usuario {
    constructor(nome, email, cpf, cep, telefone) {
        super(nome, email, cpf, cep);
        if (checkNumberFunction() === true) {
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

let Travel = function (destino, dias) {
    this.destino = destino;
    this.dias = dias;
};

window.onload = function () {
    let cpfInput = document.querySelector('#cpfInput');
    cpfInput.addEventListener('blur', function () {
        if (this.validity.invalid) {
            this.setCustomValidity('AVISO: Preencha o CPF da maneira correta!');
        }
    });
    cpfInput.addEventListener('blur', function () {
        if (this.validity.valid) {
            this.setCustomValidity('Preenchido corretamente!');
        }
    });

    let cepInput = document.querySelector('#cepInput');
    cepInput.addEventListener('blur', function(){
        if(this.validity.invalid){
            this.setCustomValidity('AVISO: Preencha o CEP da maneira correta!');
        }else{
            this.setCustomValidity('Preenchido corretamente!');
        }
    });
};

// Criação de Usuário
let nomeFromForm;
let emailFromForm;
var users = [];
document
    .querySelector('#formCreateUser')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        let getUserName = document.getElementsByTagName('input')[0];
        nomeFromForm = getUserName.value;
        let nomeSub = nomeFromForm.substring(0, 1);
        let nomeSub2 = nomeFromForm.substring(1, nomeFromForm.length);
        nomeSub = nomeSub.toUpperCase();
        let nomeFull = nomeSub + nomeSub2;
        let getUserEmail = document.getElementsByName('form2')[0];
        emailFromForm = getUserEmail.value;
        let cpf = document.forms[0].cpfInput.value;
        console.log(cpf);
        let cep = document.forms[0].cepInput.value;
        console.log(cep);

        if ((nomeFromForm !== null && nomeFromForm !== " ") && (emailFromForm !== null && emailFromForm !== " ")){
            let user = new Cliente(nomeFull, emailFromForm.toLowerCase(), cpf, cep);
            users.push(user);
            console.log(users[0]);

            // JSON
            localStorage.setItem('userClient', JSON.stringify(user));
            let a = JSON.parse(localStorage.getItem('userClient'));
            console.log(a);
            alert('Usuário criado com sucesso!');

            //Usuário Logado
            document.querySelector('#userNameLogin').innerHTML = getUsernameFromJSON();
            showUserlogin();
            hideUserCreate();
        }else{
            alert('AVISO: Preencha o nome e email!');
        }
        console.log(e);
    });

function showUserlogin(){
    document.getElementById('userNameLogin').style.display = 'inline';
}

let formNome = document.querySelector('#nome');
formNome.addEventListener('focus', function () {
    document
        .getElementById('nome')
        .style
        .backgroundColor = '#EEAD0E';
});

let formEmail = document.querySelector('#email');
formEmail.addEventListener('focus', function () {
    document
        .getElementById('email')
        .style       
        .backgroundColor = "#EEAD0E";
});

let formCPF = document.querySelector('#cpfInput');
formCPF.addEventListener('focus', function () {
    document
        .getElementById('cpfInput')
        .style
        .backgroundColor = '#EEAD0E';
});

let formCEP = document.querySelector('#cepInput');
formCEP.addEventListener('focus', function () {
    document
        .getElementById('cepInput')
        .style
        .backgroundColor = '#EEAD0E';
});

$('.form-space').children('input').on('blur', function(){
    $('.form-space').children('input').css('background-color','#CFCFCF');
});

let buyButtonVeneza = document
    .querySelector('#checkDaysInVeneza')
    .addEventListener('submit', function (e) {
        let daysVeneza = document
            .forms[1]
            .numDays1
            .value;
        e.preventDefault();
        if ((checkUsuario() === true) && (checkDay1 === true)) {
            travels.push(new Travel('Veneza', daysVeneza));
            alert('Compra efetivada!');
        }
    });

let buyButtonLondon = document
    .querySelector('#checkDaysInLondon')
    .addEventListener('submit', function (e) {
        let daysLondon = document
            .forms[2]
            .numDays2
            .value;
        e.preventDefault();
        if ((checkUsuario() === true) && (checkDay1 === true)) {
            travels.push(new Travel('Londres', daysLondon));
            alert('Compra efetivada!');
        }
    });

var travels = [];

let screen = window;
screen.onload = function () {
    alert('Bem-vindo ao nosso site de Vendas😃');
};

let telefone;
(function () {
    setTimeout(function () {
        telefone = prompt(`Gostaria de nos informar seu telefone ${localStorage.getItem('username')}?`);
    }, 5000);
})();

var checkNumberFunction = function () {
    if (telefone !== null) {
        return true;
    } else {
        return false;
    }
};

document
    .querySelector('#h2-create-user')
    .addEventListener('mouseover', function () {
        alert('Crie um Usuario para efetuar compras!');
    });

//Controle de compra de viagens
var checkUsuario = function () {
    if (checkIfIsAnyUserIsCreated() === false) {
        window.alert('AVISO:É necessário criar um usuário para efetivar a compra!');
        return false;
    } else if (checkIfIsAnyUserIsCreated() === true) {
        return true;
    }
};

var checkIfIsAnyUserIsCreated = function () {
    if (users.length === 0) {
        return false;
    } else {
        return true;
    }
};

document
    .querySelector('body')
    .addEventListener('keydown', function () {
        let key = event.keyCode;
        if (key === 27) {
            getTravels();
        }
    });

function getTravels() {
    travels.forEach(e => {
        alert('Destino:' + e.destino + ', ' + e.dias + ' dias');
    });
}

(function () {
    document
        .forms[4]
        .elements[0]
        .value = 'Deixe seu comentário!';
}());

document
    .querySelector('#comentSpace')
    .addEventListener('focus', function () {
        window.document.forms.commentSection.comentSpace.value = '';
    });

$('#comentSpace').on('blur', function(){
    $('#commentSection>textarea').val('Deixe seu comentário!');
});

let h2CreateUserMessage = document.querySelector('#h2-create-user');

$('.sign-in').on('mouseover', function(){
    h2CreateUserMessage.innerHTML = 'Criando Usuário...';
});

$('.sign-in').on('mouseout', function(){
    $('#logoUser +p').text('Crie seu Usuário:');
});

window.onload = function () {
    let inputCamp = document.querySelector('#numDays3');

    inputCamp.addEventListener('blur', function () {
        if (this.validity.valueMissing) {
            this.setCustomValidity('AVISO: Preencha esse campo!');
        }
    });

    inputCamp.addEventListener('blur', function () {
        if (this.validity.rangeOverFlow) {
            this.setCustomValidity(
                'AVISO: Somente podem ser compradas viagens de até 10 dias!'
            );
        }
    });

    inputCamp.addEventListener('blur', function () {
        if (this.validity.rangeUnderflow) {
            this.setCustomValidity('AVISO: O mínimo de dias para uma viagem é 1 dia!');
        }
    });

    inputCamp.addEventListener('blur', function () {
        if (checkIfIsAnyUserIsCreated() === false) {
            alert('AVISO:É necessário criar um usuário para efetivar a compra!');
        }
    });

    inputCamp.addEventListener('blur', function () {
        if (this.validity.valid) {
            let daysValue = document
                .forms[3]
                .numDays3
                .value;
            travels.push(new Travel("Egito", daysValue));
        }
    });
};

let coments = [];
function postComentTradePage(comentSpace) {
    let coment = comentSpace;
    coments.push(coment);
    alert('Muito obrigado por deixar um comentário!');
}

// Função de Validação Modo Tradicional
let checkDay1 = false;
function checkDays1() {
    let daysValue = document
        .forms[1]
        .numDays1
        .value;
    if ((daysValue < 0) || (daysValue > 10) || (daysValue === null) || (daysValue === "")) {
        checkDay1 = false;
        return false;
    } else {
        checkDay1 = true;
        return true;
    }
}

let checkDay2 = false;
function checkDays2() {
    let daysValue = document
        .forms[2]
        .numDays2
        .value;
    if ((daysValue < 0) || (daysValue > 10) || (daysValue === null) || (daysValue === "")) {
        checkDay2 = false;
        return false;
    } else {
        checkDay2 = true;
        return true;
    }
}

let buyButtonEgipt = document.querySelector('#checkDaysInEgipt');
buyButtonEgipt.addEventListener('submit', function(e) {
    e.preventDefault();
});

// Validação usando API HTML 5
function checkDays3() {
    if (checkIfIsAnyUserIsCreated() === true) {
        let daysValue = document
        .forms[3]
        .numDays2
        .value;
        travels.push(new Travel('Egipt', daysValue));
        alert('Compra efetivada!');
    } else {
        alert('AVISO:É necessário criar um usuário para efetivar a compra!');
    }
}

//Web Storage
(()=> {
    let nameFromPrompt = window.prompt('Qual seu nome?');
    localStorage.setItem('username', nameFromPrompt);
    console.log(localStorage.getItem('username'));
})();

//Recuperando JSON
let usernameFromJSON;
function getUsernameFromJSON(){
    let userCreated = JSON.parse(localStorage.getItem('userClient'));
    usernameFromJSON = userCreated.nome;
    console.log(usernameFromJSON);
    return usernameFromJSON;
}

$('.comentSpaceSection').on('focus', function(){
    $('textarea').css('background-color', '#EEAD0E');
});

$('.comentSpaceSection').on('blur', function(){
    $('textarea').css('background-color', 'white');
});

//Efeito Fade nas Imagens
$('.imgTravels').on('mouseover', function(){
    $('.travelName').next('img').fadeOut('slow');
});

$('.imgTravels').on('mouseout', function(){
    $('.imgTravels').fadeIn('fast');
});

function hideUserCreate(){
    $('#logoUser').parent().addClass('hidePart');
    $('.hidePart').hide();
}

//Ajax
function getUsandoDados() {
    let parametros = {
        nome: getUsernameFromJSON()
    };
    var servico = "http://localhost:3000/usuario-criado";
    $.get(servico, parametros, function (data) {
        console.log(data);
    });
}