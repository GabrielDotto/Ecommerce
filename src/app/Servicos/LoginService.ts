import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _loginUrl = 'localhost:52558/api/Login';;

  constructor(private http: Http) { }

  public login(login: any): Observable<Response> {
    return this.http.post(this._loginUrl, login)
      .map(resp => resp.json())
      .catch(this.errorMessage);
  }

  private errorMessage(erro: Response ): Observable<Response>{
    return Observable.throw(erro);
  }
}