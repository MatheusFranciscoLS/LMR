function MostrarNome() {
    var Nome = document.getElementById('MeuForm').value;
    var sobreNome = document.getElementById('MeuForm').value;
    alert("Seu nome é : " + Nome + " " + sobreNome);
}

function Soma() {
    var numero1 = document.getElementById('MyCalc').n1soma.value;
    var numero2 = document.getElementById('MyCalc').n2soma.value;
    var Total = parseInt(numero1) + parseInt(numero2);

    alert("A Soma é : " + Total);
}

function Subtrair() {
    var numero1 = document.getElementById('MyCalc').n1menos.value;
    var numero2 = document.getElementById('MyCalc').n2menos.value;
    var Total = parseInt(numero1) - parseInt(numero2);

    alert("A Subtração é : " + Total);
}

function Vezes() {
    var numero1 = document.getElementById('MyCalc').n1vezes.value;
    var numero2 = document.getElementById('MyCalc').n2vezes.value;
    var Total = parseInt(numero1) * parseInt(numero2);

    alert("A Multiplicação é : " + Total);
}

function Divisao() {
    var numero1 = document.getElementById('MyCalc').n1div.value;
    var numero2 = document.getElementById('MyCalc').n2div.value;
    var Total = parseInt(numero1) / parseInt(numero2);

    if (numero2==0) {
        alert("Não é dividido por 0!")
    }else{
        alert("A Divisão é : " + Total);
    }
}