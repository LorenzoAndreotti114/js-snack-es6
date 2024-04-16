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
console.log(minorBicicle);


arrayBicicle.forEach((curBicicle) => {

    console.log(curBicicle, minorBicicle);

    if (curBicicle.peso < minorBicicle) {
        minorBicicle = curBicicle.peso;
    }

});

console.log(minorBicicle);
