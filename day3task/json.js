let circket = {
    palyer:"dhoni",
    age:40,
    position:"wicket keeper",
    team:"india",

};


for (var key of Object.keys(circket)) {
console.log(key," 🏏-", circket[key]);
}


console.log( JSON.stringify(circket));

