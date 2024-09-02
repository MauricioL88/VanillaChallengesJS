// Desafio 8
function formatPhoneNumber(telNumber) {
    if (telNumber.length !== 11) {
        return 'Array com tamanho incorreto.';
    }

    let contagem = {};
    for (let i = 0; i < telNumber.length; i++) {
        let numero = telNumber[i];

        if (numero < 0 || numero > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }

        /*
            Cria no objeto a chave e adiona a contagem como valor.
            Existe uma condicional, se a chave for "true" ou 0, adiciona ou incrementa +1.
        */ 
        contagem[numero] = (contagem[numero] || 0) + 1;

        if (contagem[numero] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }

    return `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;
}

module.exports = {
    formatPhoneNumber
}