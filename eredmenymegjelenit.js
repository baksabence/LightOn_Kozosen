export default class EredmenyMegjelenit{
    #db
    #szuloelem

    constructor(){
        this.#db = db
        this.#szuloelem = szuloelem
        this.megjelenit()
    }

    megjelenit(){
        let txt = `<p>${this.#db}</p>`
        this.#szuloelem.html(txt)
    }
}