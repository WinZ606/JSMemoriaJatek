export default class Kartya {
    #fajlnev;
    #szuloElem;
    #index;
    constructor(id,szuloElem,fajlnev){
        this.#szuloElem = szuloElem;
        this.#index = id;
        this.#fajlnev = fajlnev;
        this.megjelenit();
    }
    megjelenit(){
        let html = `
            <div class="kepek">
                <img src="${this.#fajlnev}" alt="kép" id="${this.#index}" class="kartya">
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);
    }
}