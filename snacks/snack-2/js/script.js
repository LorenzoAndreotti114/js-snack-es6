let footballTeams = [

    {
        nome: "team 1",
        score: 0,
        penalty: 0,
    },

    {
        nome: "team 2",
        score: 0,
        penalty: 0,
    },

    {
        nome: "team 3",
        score: 0,
        penalty: 0,
    },

    {
        nome: "team 4",
        score: 0,
        penalty: 0,
    },

    {
        nome: "team 5",
        score: 0,
        penalty: 0,
    },
]
console.log(footballTeams);

footballTeams.forEach((curTeam) => {

    curTeam.score = Math.floor(Math.random() * 10)

    curTeam.penalty = Math.floor(Math.random() * 5)

});

console.log(footballTeams);

let finalArray = []

finalArray = footballTeams.map((curTeam) => {

    const {nome, penalty} = curTeam

    return {
        nome,
        penalty,
    }

});

console.log(finalArray);