

let resume = {
    Name : "githiyon",
    
    DOB : "4-12-2000",

    Gender: "male" ,

    nationalty : "India",

    Hobbies : "drawing",

    language :[ "tamil","english"],

};

for (var key in resume) {
    console.log(key,'-',resume[key]);
    
}

console.log( JSON.stringify(resume));
