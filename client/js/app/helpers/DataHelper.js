class DataHelper{


    constructor(){
        throw new Error("Não é possível instanciar");
    }

    static textoParaData(texto){
        if( ! /\d{4}\-\d{2}\-\d{2}/.test(texto) ) throw new Error("Texto inválido para conversão");

        return new Date(...texto.split("-")
                    .map ( (d,i) =>  parseInt(d) - ( i % 2 ) ) );
    }

    static dataParaTexto(data){
        return `${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`;
    }

}