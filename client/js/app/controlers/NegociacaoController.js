class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputs = {
             valor : $("#valor")
            ,quantidade : $("#quantidade")
            ,data : $("#data")
        };

        this._negociacoes = new Lista();

        this._view = new NegociacoesView($("#negociacoes"));
        this._mensagemView = new MensagemView($("#mensagem"));
        
        this._view.update(this._negociacoes.valores);
        this._mensagemView.update(new Mensagem("Seja bem vindo"));

        this._mensagemPadrao = new Mensagem("Negociacao adicionada com sucesso!");

        Object.freeze(this);
    }

    adicionar(event){
        event.preventDefault();

        this._negociacoes.adicionar(new Negociacao(
            DataHelper.textoParaData(this._inputs.data.value)
            ,this._inputs.quantidade.value
            ,this._inputs.valor.value
        ));
        this._limparForm();        

        this._view.update(this._negociacoes.valores);
        this._mensagemView.update(this._mensagemPadrao);
    }   

    _limparForm(){
        this._inputs.data.value = '';
        this._inputs.quantidade.value = 1;
        this._inputs.valor.value = 0.0;

        this._inputs.data.focus();
    }

}