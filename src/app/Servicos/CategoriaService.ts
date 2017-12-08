import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import { Categoria } from '../Models/Categoria';
import { LocalStorageService } from './LocalStorageService';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

  private _categoriaUrl = 'http://localhost:52558/api/Categorias';
  private header = new Headers();


  constructor( private http: Http, private localStorageService: LocalStorageService) 
  {
      this.header.append('Authorization', 'Bearer' + localStorageService.getAuthToken());
  }

  public getById(id: string): Observable<Response>{
    return this.http.get(this._categoriaUrl+id, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public getAll(): Observable<Response>{
    return this.http.get(this._categoriaUrl, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public insert(categoria: Categoria): Observable<Response>{
    return this.http.post(this._categoriaUrl, categoria, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  public update(categoria: Categoria): Observable<Response>{
    return this.http.put(this._categoriaUrl, categoria, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  private errorMessage(erro: Response ): Observable<Response>{
    return Observable.throw(erro);
  }
}