import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import { Preco } from '../Models/Preco';
import { LocalStorageService } from './LocalStorageService';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PrecoService {

  private _precoUrl = 'localhost:52558/api/Preco/';
  private header = new Headers();


  constructor( private http: Http, private localStorageService: LocalStorageService) 
  {
      this.header.append('Authorization', 'Bearer' + localStorageService.getAuthToken());
  }

  public getById(id: string): Observable<Response>{
    return this.http.get(this._precoUrl+id, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public getAll(): Observable<Response>{
    return this.http.get(this._precoUrl, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public insert(preco: Preco): Observable<Response>{
    return this.http.post(this._precoUrl, preco, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  public update(preco: Preco): Observable<Response>{
    return this.http.put(this._precoUrl, preco, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  private errorMessage(erro: Response ): Observable<Response>{
    return Observable.throw(erro);
  }
}