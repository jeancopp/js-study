class NegociacoesView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(elementos){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${elementos.map(e => `
                        <tr>
                            <td>${DataHelper.dataParaTexto(e.data)}</td>
                            <td>${e.quantidade}</td>
                            <td>${e.valor}</td>
                            <td>${e.volume}</td>
                        </tr>`).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                    ${
                        elementos
                            .map(e=>e.volume)
                            .reduce( (t,n) => t + n , 0.00 )
                    }
                    </td>                
                </tfoot>
            </table>`;
    }
    
    update(lista){
        this._elemento.innerHTML = this._template(lista);
    }

}