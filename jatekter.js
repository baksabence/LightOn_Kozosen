import EredmenyMegjelenit from "./eredmenymegjelenit.js";
import Lampa from "./lampa.js"

export default class Jatekter{
    #db = 0;
    #allapotLista = [false, false, false, false, false, false, false, false, false];
    #meret;
    #lepes;

    constructor(allapot,id,szuloElem){
        this.#init()
        $(window).on("kapcsolas", (event)=>{
            console.log(event.detail)
            let id = event.detail
            this.#szomszedokKeresese(id)
            this.#lepes++
        })
    }

    #setAllapotLista(){
        for (let index = 0; index < 5; index++){
            let vel = Math.random()
            if(vel < 0.2){
                this.#allapotLista[index] = true
            }else{
                this.#allapotLista[index] = false
            }
        }
    }

    #szomszedokKeresese(id){
        this.#allapotLista[id] = !this.#allapotLista[id]
        // id-1 , id+1
        if(id%3!==2)
        this.#allapotLista[id+1] = !this.#allapotLista[id+1]
        if(id%3!==0){
        this.#allapotLista[id-1] = !this.#allapotLista[id-1]
        }
        if (id < 6){
        this.#allapotLista[id+3] = !this.#allapotLista[id+3]
        }
        if(id > 2){
        this.#allapotLista[id-3] = !this.#allapotLista[id-3]
        }
        this.#init()
        new EredmenyMegjelenit(this.#db,$(".eredmeny"))
    }

    #init(){
        $(".jatekter").empty()
        this.#db = 0
        this.#ellenorzes()
        this.#allapotLista.forEach((elem, index)=>{
            new Lampa(elem,index,$(".jatekter"))
        })
    }

    #ellenorzes(){
        this.#allapotLista.forEach((elem, index) =>{
            if(!elem){
                this.#db++;
            }
        })

    }

}