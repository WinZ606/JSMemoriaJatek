import Kartya from "./Kartya.js";

export default class JatekTer {
  #kartyaLista = [];
  #szuloElem = document.querySelector(".kep");
  #kivalasztottKartyaLista = [];
  constructor(kepekLista) {
    this.#kartyaLista = kepekLista;
    this.#kever();
    this.megjelenit();
  }
  megjelenit() {
    for (let index = 0; index < this.#kartyaLista.length; index++) {
      new Kartya(
        index,
        document.querySelector(".kep"),
        this.#kartyaLista[index].src
      );
    }
    this.#ellenorzes();
  }
  #kever() {
    this.#kartyaLista.sort((a, b) => Math.random() - 0.5);
  }
  #ellenorzes() {
    /* itt iratkozunk fel a kattintasTrigger eseményre */
    /* meg kell nézni hogy a két kiválasztott kártya egyforma-e */
    window.addEventListener("fordit", (event) => {
      if (this.#kivalasztottKartyaLista.length < 2) {
        this.#kivalasztottKartyaLista.push(event.detail);
      }
      if (this.#kivalasztottKartyaLista.length == 2) {
        this.#TriggerBlocked();
        /* össze kell hasonlítani a két elemnek a fájlnevét */
        let f1 = this.#kivalasztottKartyaLista[0].getFajlnev()
        let f2 = this.#kivalasztottKartyaLista[1].getFajlnev() 
        if (f1 == f2) {
          console.log("találtál egy párt");
          setTimeout(()=>{
            this.#TriggerUnBlocked();
          }, 2000);
        }else{
          console.log("nem találtál párt");
          /* vissza kell fordítani a kártyákat */
          let kl1 = this.#kivalasztottKartyaLista[0];
          let kl2 = this.#kivalasztottKartyaLista[1];
          setTimeout(()=>{
            kl1.setAllapot();
            kl2.setAllapot();
            this.#TriggerUnBlocked();
          }, 2000);
        }
        /* ki kell üríteni a listát */
        this.#kivalasztottKartyaLista.splice(0);

      }
    });
  }
  #TriggerBlocked() {
    /* létrehoz egy "gameBlocked" eseményt, amire majd fel tud iratkozni a kártya*/
    const e = new CustomEvent("gameBlocked");
    window.dispatchEvent(e);
        
  }
  #TriggerUnBlocked() {
    const e = new CustomEvent("gameUnBlocked");
    window.dispatchEvent(e);
  }
}
