class Negociacao{

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        this._volume =  quantidade * valor;

        Object.freeze(this);

    }

    get data(){ return this._data; }
    get valor(){ return this._valor; }
    get quantidade(){ return this._quantidade; }
    get volume() { return this._volume; }
}