export default class Agrup {
    #id: string
    #agrup: string
    #mp: string
    #client: string
    #ini_plan: string
    #fim_plan: string
    #leg_cor: string
    #leg_font: string
    #start: string
    #status: boolean
    #nagrup: string
    #tcorte: Number
    #data: string
    #maq: string


    constructor(
        id: string, agrup: string, mp: string, client: string, ini_plan: string, fim_plan: string, leg_cor: string,
        leg_font: string, start: string, status: boolean, nagrup: string, tcorte: Number, data: string, maq: string
        ) {
        this.#id = id
        this.#agrup = agrup
        this.#mp = mp
        this.#client = client
        this.#ini_plan = ini_plan
        this.#fim_plan = fim_plan
        this.#leg_cor = leg_cor
        this.#leg_font = leg_font
        this.#start = start
        this.#status = status
        this.#nagrup = nagrup
        this.#tcorte = tcorte
        this.#data = data
        this.#maq = maq
    }

    static void() {
        return new Agrup('','','','','','','','','',false,'',0, '','')
    }

    get id() {
        return this.#id
    }

    get agrup() {
        return this.#agrup
    }

    get mp() {
        return this.#mp
    }

    get client() {
        return this.#client
    }

    get ini_plan() {
        return this.#ini_plan
    }

    get fim_plan() {
        return this.#fim_plan
    }

    get leg_cor() {
        return this.#leg_cor
    }

    get leg_font() {
        return this.#leg_font
    }

    get start() {
        return this.#start
    }

    get status() {
        return this.#status
    }

    get nagrup() {
        return this.#nagrup
    }

    get tcorte() {
        return this.#tcorte
    }

    
    public get data() {
        return this.#data
    }

    
    public get maq() {
        return this.#maq
    }
    
    

}