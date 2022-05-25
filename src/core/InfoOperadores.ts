export default class Operador {
    #id: string
    #numero: Number
    #nome: string


    constructor(id: string, numero: Number, nome: string) {
        this.#id = id
        this.#numero = numero
        this.#nome = nome
    }

    static void() {
        return new Operador('',0,'');
    }

    
    public get id(){
        return this.#id
    }
    
    
    public get numero() {
        return this.#numero
    }

    
    public get nome() {
        return this.#nome
    }
    
    
}