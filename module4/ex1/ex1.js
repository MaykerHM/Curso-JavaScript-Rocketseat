/*
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
// Retornar uma promise
}

checaIdade(20)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });
*/

function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if (idade >= 18) {
            resolve('Maior que 18');
        } else {
            reject('Menor que 18');
        }
    });
    }
    
checaIdade(20)
    .then(() => new Promise(resolve => setTimeout(resolve, 2000)))
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });