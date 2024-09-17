
function calcularSomaEMedia(a, b, c) {
    const soma = a + b + c;
    const media = soma / 3;
    return { soma, media };
}


function simularLancamentosDados() {
    const frequencia = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 1000000; i++) {
        const resultado = Math.floor(Math.random() * 6); 
        frequencia[resultado]++;
    }
    return frequencia;
}


function podeDirigir(piloto, carro) {
    const idadeMinima = 18;
    const potenciaMinima = 70;
    return piloto.idade >= idadeMinima || carro.cavalos < potenciaMinima;
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosMultiplicados = numeros.map((numero, indice) => numero * indice);

console.log("Soma e média dos números 2, 4 e 6:");
console.log(calcularSomaEMedia(2, 4, 6));

console.log("\nFrequência dos lançamentos de dados:");
console.log(simularLancamentosDados());

const piloto = {
    nome: "Bryan O'Conner",
    idade: 46,
};

const carro = {
    modelo: "Mitsubishi Eclipse",
    cavalos: 210,
};

console.log("\nPode dirigir?");
console.log(podeDirigir(piloto, carro));

console.log("\nNúmeros multiplicados pelos índices:");
console.log(numerosMultiplicados);
