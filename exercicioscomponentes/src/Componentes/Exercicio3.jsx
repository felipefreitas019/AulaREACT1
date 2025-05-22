export default function Exercicio3({valor, taxa, tempo})
{
    let valoroarcela = valor + (valor*(taxa**2/100)*tempo);
    
    return (
        <div>
        o valor atualizado : {valoroarcela}

        </div>
    );
}