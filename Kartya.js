export default class Kartya {
    #fajlnev;
    #szuloElem;
    #imgElem;
    #index;
    #blokkolt = false; //true: nem kattintható
    #allapot = false; /* false: le van fedve, true: fel van fordítva */
    constructor(id,szuloElem,fajlnev,allapot){
        this.#szuloElem = szuloElem;
        this.#index = id;
        this.#fajlnev = fajlnev;
        this.#allapot = allapot;
        this.#megjelenit();
        this.#kattintasTrigger();
        window.addEventListener("gameBlocked",()=>{
            this.#blokkolt = true;
        });
        window.addEventListener("gameUnBlocked",()=>{
            this.#blokkolt = false;
        });
    }
    #megjelenit(){
        let html = `
            <div class="kepek">
                <img src="kepek/hatter.jpg" alt="kép" id="${this.#index}" class="kartya">
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);
    }
    getFajlnev(){
        return this.#fajlnev;
    }
    setLap(){
        /* módosítja a kép src attribútumát */
        if(this.#allapot){
            this.#imgElem.src = this.#fajlnev;
            this.#imgElem.classList.add("flipped");
        }else{
            this.#imgElem.src = "kepek/hatter.jpg";
            this.#imgElem.classList.remove("flipped");
        }
    }
    
    setAllapot(){
        this.#allapot = !this.#allapot;
        this.setLap();
    }
    
    #kattintasTrigger(){
        this.#imgElem = document.querySelector(".kepek:last-child img");
        this.#imgElem.addEventListener("click", () => {
            if(!this.#blokkolt){
                    const e = new CustomEvent("fordit",{detail:this});
                    window.dispatchEvent(e);
                    this.setAllapot();
            }
        });
    }
}