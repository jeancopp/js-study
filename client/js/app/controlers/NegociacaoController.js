class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputs = {
             valor : $("#valor")
            ,quantidade : $("#quantidade")
            ,data : $("#data")
        };

        this.negociacoes = new Lista();
        
        Object.freeze(this);
    }

    adicionar(event){
        event.preventDefault();

        this.negociacoes.adicionar(new Negociacao(
            DataHelper.textoParaData(this._inputs.data.value)
            ,this._inputs.quantidade
            ,this._inputs.valor
        ));
        this._limparForm();        
    }   

    _limparForm(){
        this._inputs.data.value = '';
        this._inputs.quantidade.value = 1;
        this._inputs.valor.value = 0.0;

        this._inputs.data.focus();
    }

}