class NegociacoesView extends View{

    constructor(elemento){
        super(elemento);
    }

    template(elementos){
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
    
}