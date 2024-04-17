const arrayBicicle = [

    {
        nome: "bici bella",
        peso: "30kg",
    },

    {
        nome: "bici cicciona",
        peso: "80kg",
    },

    {
        nome: "bici snella",
        peso: "15kg",
    },

    {
        nome: "bici brutta",
        peso: "50kg",
    },

];



let minorBicicle = arrayBicicle[0].peso;

let bicicleCur

arrayBicicle.forEach((curBicicle) => {

    if (curBicicle.peso < minorBicicle) {
        minorBicicle = curBicicle.peso;

        bicicleCur = ` ${curBicicle.nome} ${curBicicle.peso}`
    }

    return bicicleCur

});

console.log(bicicleCur);
