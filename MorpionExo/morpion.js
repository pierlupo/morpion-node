import { poserUneQuestion } from "./tools/tools.js";

let tour = 1;
let gameOver = false;

const morpion = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

afficherGrille(morpion);

while (!gameOver) {
  //vérification du positionnement dans la morpion
  let bonnePosition = false;
  while (!bonnePosition) {
    console.log("##########################");
    console.log("Veuillez saisir une position:");
    var col = await poserUneQuestion("saisir un n° de colonne : ");
    var row = await poserUneQuestion("saisir un n° de rangée : ");
    bonnePosition = verifPosition(col, row, morpion);
    if (!bonnePosition) console.log("Veuillez choisir une position autorisée");
  }
  morpion[col - 1][row - 1] = tour;
  // if(tour === 1) tour = 2;
  // else tour = 1;
  //même chose en ternaire :
  tour === 1 ? (tour = 2) : (tour = 1);
  afficherGrille(morpion);
  // gameOver = verifGameOver(morpion)
  // if(!gameOver){
  //     console.log("Bravo");
  // }
}

function afficherGrille(morpion) {
  for (let i = 0; i < morpion.length; i++) {
    let carre = "";
    for (let j = 0; j < morpion[i].length; j++) {
      if (morpion[i][j] === 0) carre += "|   |";
      else if (morpion[i][j] === 1) carre += "| X |";
      else if (morpion[i][j] === 2) carre += "| O |";
    }
    console.log(carre);
  }
}
function verifPosition(col, row, morpion) {
  return (
    row >= 1 &&
    row <= 3 &&
    col >= 1 &&
    col <= 3 &&
    morpion[col - 1][row - 1] === 0
  );
  // if(row >= 0 && row <= 2 && col >= 0 && col <= 2 && morpion[col-1][row-1] === 0)
  // return true;
  // else return false;
}

// function verifGameOver(morpion){
//     for(let i = 0;i<morpion.length ; i++){
//     if(morpion[i][0] === morpion [i][1] && morpion[i][0] === morpion[i][2] !==0) return true;
//     if(morpion[0][i] === morpion [1][i] && morpion[0][i] === morpion[2][2] !==0) return true;
// }
// if(morpion[0][0] === morpion[1][1] && morpion[0][0] === morpion[2][2] !==0) return true;
// if(morpion[2][1] === morpion[1][1] && morpion[2][1] === morpion[1][2] !==0) return true;
// return false
// }
