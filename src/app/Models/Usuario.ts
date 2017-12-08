import { Cab_Venda } from './Cab_Venda';

export class Usuario{
    Id: string;
    Senha: string;
    Email: string;
    IsAdmin: boolean;
    Nome: string;
    CabVenda: Cab_Venda[];
}