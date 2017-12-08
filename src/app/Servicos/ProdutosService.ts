import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import { Produto } from '../Models/Produto';
import { LocalStorageService } from './LocalStorageService';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutosService {

  private _produtosUrl = 'localhost:52558/api/Produtos/';
  private header = new Headers();


  constructor( private http: Http, private localStorageService: LocalStorageService) 
  {
      this.header.append('Authorization', 'Bearer' + localStorageService.getAuthToken());
  }

  public getById(id: string): Observable<Response>{
    return this.http.get(this._produtosUrl+id, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public getAll(): Observable<Response>{
    return this.http.get(this._produtosUrl, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public insert(produto: Produto): Observable<Response>{
    return this.http.post(this._produtosUrl, produto, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  public update(produto: Produto): Observable<Response>{
    return this.http.put(this._produtosUrl, produto, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  private errorMessage(erro: Response ): Observable<Response>{
    return Observable.throw(erro);
  }
}