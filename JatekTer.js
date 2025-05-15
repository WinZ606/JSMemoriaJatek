import Kartya from "./Kartya.js";

export default class JatekTer {
  #kartyaLista = [];
  #kivalasztottKartyaLista = [];
  constructor(kepekLista) {
    this.#kartyaLista = kepekLista;
    this.megjelenit();
  }
  megjelenit() {
    for (let index = 0; index < this.#kartyaLista.length; index++) {
        new Kartya(index, document.querySelector(".tarolo"), this.#kartyaLista[index].src);
    }
  }

  #init() {}
  #kever() {}
  #ellenorzes() {}
  #TriggerBlocked() {}
  #TriggerUnBlocked() {}
}
