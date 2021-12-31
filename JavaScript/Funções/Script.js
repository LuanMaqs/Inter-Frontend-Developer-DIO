/*const alunos = [
    {
        nome: 'Carlos',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 2,
        turma: '2B'
    },
]

function alunosAprovados(alunos, media){
    let aprovados = [];

    for(let i = 0; i < alunos.length; i++) { 

        const {nota, nome} = alunos[i];
        
        if(nota >= media){
            aprovados.push(nome);
        }
    } 

    return aprovados;
}

console.log( alunosAprovados(alunos, 5)); */





function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Carla",
    idade: 26,
};

const pessoa2 = {
    nome: 'Maria',
    idade: 30,
};

const animal = {
    nome: 'Bylli',
    raca: 'york',
    idade: 10,
};




console.log(calculaIdade.call(animal, 30));