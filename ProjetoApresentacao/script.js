(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation1');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function Cadastro() {
    let pNome = document.getElementById('pNome').value;
    let sNome = document.getElementById('sNome').value;
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
    let cEmail = document.getElementById('cEmail').value;
    let senha = document.getElementById('senha').value;
    let cSenha = document.getElementById('cSenha').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let cpf = document.getElementById('cpf').value;
    let nCartao = document.getElementById('nCartao').value;

    if (pNome === "") {
        alert("Preencher o campo 'Nome'")
    }
    if (sNome === "") {
        alert("Preencher o campo 'Sobrenome'")
    }
    if (usuario === "") {
        alert("Preencher o campo 'Usuario'")
    }
    if (email === "") {
        alert("Preencher o campo 'Email'")
    }
    if (cEmail === "") {
        alert("Preencher o campo 'Confirmar Email'")
    }
    if (senha === "") {
        alert("Preencher o campo 'Senha'")
    }
    if (cSenha === "") {
        alert("Preencher o campo 'Confirmar Senha'")
    }
    if (cidade === "") {
        alert("Preencher o campo 'Cidade'")
    }
    if (estado === "") {
        alert("Preencher o campo 'Estado'")
    }
    if (cep === "") {
        alert("Preencher o campo 'CEP'")
    }
    if (cpf === "") {
        alert("Preencher o campo 'CPF'")
    }
    if (nCartao === "") {
        alert("Preencher o campo 'Nº Cartão'")
    }
    else if (pNome != "" && sNome != "" && usuario != "" && email != "" && cEmail != "" && senha != "" && cSenha != "" && cidade != "" && estado != "" && cep != "" && cpf != "" && nCartao != "") {
        alert("Cadastro realizado com sucesso!!")
    } else { }
}

function Email() {
    let email = document.getElementById('email').value;
    let cEmail = document.getElementById('cEmail').value;
    if (email != cEmail) {
        alert("Emails divergentes, favor verificar.")
    }
}

function Senha() {
    let senha = document.getElementById('senha').value;
    let cSenha = document.getElementById('cSenha').value;
    if (senha != cSenha) {
        alert("Senhas divergentes, favor verificar.")
    }
}

function marcarTermos() {
    document.getElementById("termosButton").onblur = function() {
        if (!document.getElementById("termosButton").classList.contains("clicked")) {
            document.getElementById("avisoTermos").style.display = "block";
        }
}
}