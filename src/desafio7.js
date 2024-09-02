// Desafio 7
function taxesCalcul(grossSalary) {
    let txInss = 0.0, txIr = 0.0;

    if(grossSalary < 1556.95) {
        txInss = grossSalary * 0.08;
    } else if(grossSalary > 1556.95 && grossSalary <= 2594.92) {
        txInss = grossSalary * 0.09;
    } else if(grossSalary > 2594.92 && grossSalary <= 5189.82) {
        txInss = grossSalary * 0.11;
    } else if(grossSalary > 5189.82) {
        txInss = 570.88;
    }

    let salarioBase = grossSalary - txInss;

    if(salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        txIr = (salarioBase * 0.075) - 142.80;
    } else if(salarioBase > 2826.65 && salarioBase <= 3751.05) {
        txIr = (salarioBase * 0.15) - 354.80;
    } else if(salarioBase > 3751.05 && salarioBase <= 4664.68) {
        txIr = (salarioBase * 0.225) - 636.13;
    } else if(salarioBase > 4664.68) {
        txIr = (salarioBase * 0.275) - 869.36;
    }

    let expectedNetSalaray = salarioBase - txIr;

    return  `Salário: R$ ${expectedNetSalaray}`;
}

module.exports = {
    taxesCalcul
}