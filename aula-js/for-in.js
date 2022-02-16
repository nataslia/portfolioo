let pessoa = {
    nome: "Joelma",
    idade: "45",
    sexo: "feminino",
    peso: "57"
}
// duas formas de ver o valor de um objeto//
console.log(pessoa.sexo) //chave
console.log(pessoa["sexo"]) //propriedade 

for (let p in pessoa) {
    console.log(' dados da pessoa', p, pessoa[p]) //chave ex: nome
    // console.log('dados da pessoa', pessoa[p]) //valor ex: joelma
}