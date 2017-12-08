import { Categoria } from './Categoria';
import { Det_Venda } from './Det_Venda';
import { Preco } from './Preco';

export class Produto {
    Id: string;
    Nome: string;
    IdCategoria: string;
    Categoria: Categoria;
    Det_Venda: Det_Venda[];
    Preco: Preco[];
}