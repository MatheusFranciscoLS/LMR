function DiaSemana() {
    var Hoje = new Date(document.getElementById('data').value);
    var Dia = Hoje.getDay();
    var Semana = new Array(6);

    Semana[0] = 'Domingo';
    Semana[1] = 'Segunda-Feira';
    Semana[2] = 'Terça-Feira';
    Semana[3] = 'Quarta-Feira';
    Semana[4] = 'Quinta-Feira';
    Semana[5] = 'Sexta-Feira';
    Semana[6] = 'Sábado';

    document.write(Semana[Dia]);
    document.write('<br>', Hoje);
}

function ColorirNome() {
    var Cor = new Array(6);

    Cor[0] = 'Black';
    Cor[1] = 'Magenta';
    Cor[2] = 'Green';
    Cor[3] = 'Blue';
    Cor[4] = 'Red';
    Cor[5] = 'Yellow';
    Cor[6] = 'Silver';

    var Nome = document.getElementById('pNome').value;

    for (let i = 0; i < Cor.length; i++) {
        document.write(Nome.fontcolor(Cor[i]) + '<br>');
    }

}