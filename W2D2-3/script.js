let superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ];

  /*- Maak een array van alle superhelden namen
- Maak een array van alle "lichte" superhelden (< 190 pounds)
- Maak een array met de **namen** van de superhelden die 200 pounds wegen
- Maak een array met alle comics waar de superhelden hun "first apprearances" hebben gehad
- Maak een array met alle superhelden van DC Comics en een array met alle superhelden van Marvel Comics
- Tel het gewicht van alle superhelden van DC Comics bij elkaar op
- Doe hetzelfde met alle superhelden van Marvel Comics
- Bonus: vind de zwaarste superheld ! */

/* Opdracht 1
let namen = superheroes.map(myFunction)
function myFunction(name) {
    return name.name;
  }
  console.log(namen); */

  /* Opdracht 2
  function gewicht(weight){
      return weight.weight < 190; }
      
      console.log(superheroes.filter(gewicht)); */

/* Opdracht 3
let heavy = superheroes.filter(function(hea){
    return hea.weight === "200";
    });

let pop = heavy.map(function(ole){
return ole.name;});

console.log(pop); */

/* Opdracht 4
let eerste = superheroes.map(myFunction)
function myFunction(first_appearance){
    return first_appearance.first_appearance;}

    console.log(eerste);*/
    
/* Opdracht 5
function DC (publisher){
    return publisher.publisher === "DC Comics";
}
console.log(superheroes.filter(DC));

console.log("pauze");
function MV (publisher){
    return publisher.publisher === "Marvel Comics"
}
console.log(superheroes.filter(MV));
*/

/*let DCW = superheroes.filter(function(wei){
    return wei.publisher === "DC Comics";
});

let DCW1 = DCW.map(function(weight){
    return weight.weight;
});
console.log(DCW1);
function getSum(total, num){
    return total + Math.round(num);
}

console.log(DCW1.reduce(getSum, 0)); */

let MV = superheroes.filter(function(mvv){
    return mvv.publisher === "Marvel Comics" && mvv.weight !== 'unknown';
});

let MV1 = MV.map(function(weight){
    return weight.weight;
});
console.log(MV1);
function getSum(total, num){
    return total + Math.round(num);
}
console.log(MV1.reduce(getSum, 0));


