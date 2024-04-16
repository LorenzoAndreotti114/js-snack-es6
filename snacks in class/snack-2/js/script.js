const personArray = [

    {
        nome: "pippo",
        cognome: "bianchi",
        eta: "45",
    },

    {
        nome: "pluto",
        cognome: "rossi",
        eta: "16",
    },

    {
        nome: "paperino",
        cognome: "verdi",
        eta: "65",
    },

    {
        nome: "michele",
        cognome: "gialli",
        eta: "97",
    },

];

let finalArray = [];

finalArray = personArray.map((curPerson) => {

    if (curPerson.eta >= 18 && curPerson.eta <= 70) {
        return `${curPerson.nome} ${curPerson.cognome} può guidare`
    }
    else {
        return `${curPerson.nome} ${curPerson.cognome} non può guidare`
    }

})

console.log(finalArray);