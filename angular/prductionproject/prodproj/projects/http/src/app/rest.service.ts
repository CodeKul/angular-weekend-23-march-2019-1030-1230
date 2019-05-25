import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly urlGetOne = `https://reqres.in/api/users/`
  constructor(
    private http: HttpClient
  ) { }

  getOne(usId : number) : Observable<Object> {
    return this.http.get(`${this.urlGetOne}${usId}`)
  }
}
