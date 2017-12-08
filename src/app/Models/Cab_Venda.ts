import { Det_Venda } from './Det_Venda';
import { Usuario } from './Usuario';

export class Cab_Venda {
    Id: string;
    IdUser: string;
    Data: Date;
    Situacao: string;
    DataExpedicao: Date;
    DataAceite: Date;
    Usuario: Usuario;
    Det_Venda: Det_Venda[];
}