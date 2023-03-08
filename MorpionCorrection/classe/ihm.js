import { poserUneQuestion } from "./tools.js";
import { Log } from "./log.js"
import { Jeu } from "./jeu.js";


export class Ihm {

  constructor() {

    this.first = true;
    this.fin = false;
    this.log = new Log()
    this.jeu = new Jeu(this.log)
    
  }

  async getPositions() {
    const joueur = this.first ? "X" : "O";
    console.log("Joueur : "+ joueur);
    this.log.addTextLine("Joueur : " + joueur)
    console.log("le joueur choisit sa case");
    const x = await poserUneQuestion("saisir rangée : ");
    this.log.addTextLine("Joueur : " + joueur)
    const y = await poserUneQuestion("saisir colonne : ");
    this.log.addTextLine("Joueur : " + joueur)
    return { joueur: joueur, x: x, y: y };
  }

  async demarrer() {
    console.log("#  .##.....##..#######..########..########..####..#######..##....##")
        this.log.addTextLine("#  .##.....##..#######..########..########..####..#######..##....##")
        console.log("#  .###...###.##.....##.##.....##.##.....##..##..##.....##.###...##")
        this.log.addTextLine("#  .###...###.##.....##.##.....##.##.....##..##..##.....##.###...##")
        console.log("#  .####.####.##.....##.##.....##.##.....##..##..##.....##.####..##")
        this.log.addTextLine("#  .####.####.##.....##.##.....##.##.....##..##..##.....##.####..##")
        console.log("#  .##.###.##.##.....##.########..########...##..##.....##.##.##.##")
        this.log.addTextLine("#  .##.###.##.##.....##.########..########...##..##.....##.##.##.##")
        console.log("#  .##.....##.##.....##.##...##...##.........##..##.....##.##..####")
        this.log.addTextLine("#  .##.....##.##.....##.##...##...##.........##..##.....##.##..####")
        console.log("#  .##.....##.##.....##.##....##..##.........##..##.....##.##...###")
        this.log.addTextLine("#  .##.....##.##.....##.##....##..##.........##..##.....##.##...###")
        console.log("#  .##.....##..#######..##.....##.##........####..#######..##....##")
        this.log.addTextLine("#  .##.....##..#######..##.....##.##........####..#######..##....##")
    while (!this.fin) {
      const res = await this.getPositions();
      if (this.jeu.jouer(res.joueur, res.x, res.y)) {
        this.first = !this.first;
        this.jeu.afficher();
        if(this.jeu.testVictoire(res.joueur)) {
            console.log(" Bravo joueur : "+res.joueur);
            this.log.addTextLine("Joueur : " + joueur)
            this.log.createLog()
            this.fin = true
        }else {
            this.fin = this.jeu.testFin();
        }
      }
    }
  }
}
