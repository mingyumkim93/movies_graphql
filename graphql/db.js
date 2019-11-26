export const people = [
    {
        id: "0",
        name: "Nicolas",
        age: 18,
        gender: "male"
},
{       id: "1",
        name: "Mingyum",
        age: 26,
        gender: "male"
},
{       id: "2",
        name: "Seppo",
        age: 45,
        gender: "male"
},
{       id: "3",
        name: "Mom",
        age: 55,
        gender: "female"
}

]

export const getById = id => {
    const filteredPeople = people.filter(person => String(id) ===person.id);
    return  filteredPeople[0]
}