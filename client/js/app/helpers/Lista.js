class Lista{

    constructor(){
        this._lista = [];
    }

    adicionar(item) {
        this._lista.push(item);
    }

    get valores(){
        return this._lista.slice();
    }

}