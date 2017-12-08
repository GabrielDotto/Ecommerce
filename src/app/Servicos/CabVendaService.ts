import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import { Cab_Venda } from '../Models/Cab_Venda';
import { LocalStorageService } from './LocalStorageService';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CabVendaService {

  private _cabVendaUrl = 'localhost:52558/api/CabVenda/';
  private header = new Headers();


  constructor( private http: Http, private localStorageService: LocalStorageService) 
  {
      this.header.append('Authorization', 'Bearer' + localStorageService.getAuthToken());
  }

  public getById(id: string): Observable<Response>{
    return this.http.get(this._cabVendaUrl+id, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public getAll(): Observable<Response>{
    return this.http.get(this._cabVendaUrl, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public insert(cab_venda: Cab_Venda): Observable<Response>{
    return this.http.post(this._cabVendaUrl, cab_venda, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  public update(cab_venda: Cab_Venda): Observable<Response>{
    return this.http.put(this._cabVendaUrl, cab_venda, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  private errorMessage(erro: Response ): Observable<Response>{
    return Observable.throw(erro);
  }
}