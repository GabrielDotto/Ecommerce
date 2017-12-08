import { Det_Venda } from './Det_Venda';
import { Produto } from './Produto';

export class Preco{
    Id: string;
    Valor: number;
    Data: Date;
    IdProduto: string;
    Produto: Produto;
    Det_Venda: Det_Venda[];
}