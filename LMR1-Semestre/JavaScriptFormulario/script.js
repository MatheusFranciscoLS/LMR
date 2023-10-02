function MostrarNome() {
    var Nome = document.getElementById('MeuForm').value;
    var sobreNome = document.getElementById('MeuForm').value;
    alert("Seu nome é : " + Nome + " " + sobreNome);

}

function Soma() {
    let numero1 = document.getElementById('MyCalc').pv1.value;
    let numero2 = document.getElementById('MyCalc').pv2.value;
    let Total = parseInt(numero1) + parseInt(numero2);

    if (numero1 === "" || numero2 === "") {
        alert("Preencha todos os campos")
    } else {
        alert("O resultado da soma é : " + Total)
    }
}

function Subtrair() {
    let numero1 = document.getElementById('MyCalc').pv1.value;
    let numero2 = document.getElementById('MyCalc').pv2.value;
    let Total = parseInt(numero1) - parseInt(numero2);

    if (numero1 === "" || numero2 === "") {
        alert("Preencha todos os campos")
    } else {
        alert("O resultado da subtração é : " + Total)
    }
}

function Vezes() {
    let numero1 = document.getElementById('MyCalc').pv1.value;
    let numero2 = document.getElementById('MyCalc').pv2.value;
    let Total = parseInt(numero1) * parseInt(numero2);

    if (numero1 === "" || numero2 === "") {
        alert("Preencha todos os campos")
    } else {
        alert("O resultado da multiplicação é : " + Total)
    }
}

function Divisao() {
    let numero1 = document.getElementById('MyCalc').pv1.value;
    let numero2 = document.getElementById('MyCalc').pv2.value;
    let Total = parseInt(numero1) / parseInt(numero2);

    if (numero1 === "" || numero2 === "") {
        alert("Preencha todos os campos")
    }
    else if (numero2 == 0) {
        alert("Não é dividido por 0!")
    } else {
        alert("A Divisão é : " + Total);
    }
}