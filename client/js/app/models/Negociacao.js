class Negociacao{


    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = 1;
        this._valor = 0.00;

        Object.freeze(this);

    }

    get data(){ return this._data; }
    get valor(){ return this._valor; }
    get quantidade(){ return this._quantidade; }
}