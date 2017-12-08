//   public string Id { get; set; }
//         public string IdProduto { get; set; }
//         public string IdCab { get; set; }
//         public string IdPreco { get; set; }

//         public Produtos IdProdutosNavigation { get; set; }
//         public Preco IdPrecoNavigation { get; set; }
//         public Cab_Venda IdCabNavigation { get; set; }

import { Produto } from './Produto';
import { Preco } from './Preco';
import { Cab_Venda } from './Cab_Venda';

export class Det_Venda{
    Id: string;
    IdProduto: string;
    IdCab: string;
    IdPreco: string;
    Produto: Produto;
    Preco: Preco;
    Cab_Venda: Cab_Venda;

}