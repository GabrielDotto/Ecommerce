import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import { Usuario } from '../Models/Usuario';
import { LocalStorageService } from './LocalStorageService';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  private _usuarioUrl = 'localhost:52558/api/Preco/';
  private header = new Headers();


  constructor( private http: Http, private localStorageService: LocalStorageService) 
  {
      this.header.append('Authorization', 'Bearer' + localStorageService.getAuthToken());
  }

  public getById(id: string): Observable<Response>{
    return this.http.get(this._usuarioUrl+id, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public getAll(): Observable<Response>{
    return this.http.get(this._usuarioUrl, { headers: this.header })
        .map( r =>  r.json())
        .catch(this.errorMessage);
  }

  public insert(usuario: Usuario): Observable<Response>{
    return this.http.post(this._usuarioUrl, usuario, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  public update(usuario: Usuario): Observable<Response>{
    return this.http.put(this._usuarioUrl, usuario, { headers: this.header })
      .map(r => r.json())
      .catch(this.errorMessage);
  }

  private errorMessage(erro: Response ): Observable<Response>{
    return Observable.throw(erro);
  }
}