import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import { Det_Venda } from '../Models/Det_Venda';
import { LocalStorageService } from './LocalStorageService';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DetVendaService {

  private _detVendaUrl = 'localhost:52558/api/DetVenda/';
  private header = new Headers();


  constructor( private http: Http, private localStorageService: LocalStorageService) 
  {
      this.header.append('Authorization', 'Bearer' + localStorageService.getAuthToken());
  }

  public getById(id: string): Observable<Response>{
    return this.http.get(this._detVendaUrl+id, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public getAll(): Observable<Response>{
    return this.http.get(this._detVendaUrl, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public insert(det_venda: Det_Venda): Observable<Response>{
    return this.http.post(this._detVendaUrl, det_venda, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  public update(det_venda: Det_Venda): Observable<Response>{
    return this.http.put(this._detVendaUrl, det_venda, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  private errorMessage(erro: Response ): Observable<Response>{
    return Observable.throw(erro);
  }
}