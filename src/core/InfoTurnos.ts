import Operador from "./InfoOperadores"

export default class Info{
    #id: string
    #agrup: string
    #start: string
    #operador: string
    #atraso:string

    constructor(id: string, agrup: string, start: string, operador: string, atraso: string) {
        this.#id = id
        this.#agrup = agrup
        this.#start = start
        this.#operador = operador
        this.#atraso = atraso
    }

    static void() {
        return new Operador('','','','');
    }

    
    public get id(){
        return this.#id
    }
    
    
    public get agroup() {
        return this.#agrup
    }

    
    public get start() {
        return this.#start
    }

    
    public get operador() {
        return this.#operador
    }

    
    public get atraso() {
        return this.#atraso
    }
    
    
}