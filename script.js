console.log("hello world");

// 1a
const jPDinos = [ "Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"]

// 1b
function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);

// 2a
const jPCharacters ={
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern", 
    ianMalcolm: "Jeff Goldblum"
};

// 2b
seeCharacters = ([ellieSattler]) => console.log(ellieSattler);

seeCharacters(jPCharacters);

// BONUS
// 3a
const jurrasicparkMovies = [
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park",  three: "Jurassic Park III"
    }, 
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Dominion"
    }
];

// 3b
seejPMovies = ({one, two, three}, {four, five, six}) => {
    console.log(one);
 console.log(two);
 console.log(three);
 console.log(four);
 console.log(five);
 console.log(six);
};

seejPMovies (jurrasicparkMovies [0], jurrasicparkMovies[1]);