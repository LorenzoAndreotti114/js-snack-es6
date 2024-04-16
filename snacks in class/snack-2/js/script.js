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

    return {...personArray}

})