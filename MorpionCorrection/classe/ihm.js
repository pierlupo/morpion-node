import { poserUneQuestion } from "./tools.js";
import { Jeu } from "./jeu.js";


export class Ihm {

  constructor() {
    this.jeu = new Jeu();
    this.first = true;
    this.fin = false;
  }

  async getPositions() {
    const joueur = this.first ? "X" : "O";
    console.log("Joueur : "+ joueur);
    console.log("le joueur choisit sa case");
    const x = await poserUneQuestion("saisir rangée : ");
    const y = await poserUneQuestion("saisir colonne : ");
    return { joueur: joueur, x: x, y: y };
  }

  async demarrer() {
    while (!this.fin) {
      const res = await this.getPositions();
      if (this.jeu.jouer(res.joueur, res.x, res.y)) {
        this.first = !this.first;
        this.jeu.afficher();
        if(this.jeu.testVictoire(res.joueur)) {
            console.log(" Bravo joueur : "+res.joueur);
            this.fin = true
        }else {
            this.fin = this.jeu.testFin();
        }
      }
    }
  }
}
