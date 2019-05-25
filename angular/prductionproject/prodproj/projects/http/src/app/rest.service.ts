import { Data } from './domain/domain';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly users = `users/`

  constructor(
    private http: HttpClient,
    private url: UrlService
  ) { }

  getOne(usId: number): Observable<Object> {
    return this.http.get(`${this.url.base()}${this.users}${usId}`)
  }

  getMany() {
    return this.http.get(`${this.url.base()}${this.users}`)
  }

  createUser(data: Data) {
    return this.http.post(`${this.url.base()}${this.users}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accpet': 'application/json'
      }
    })
  }
  /**
   * 
   * 2xx - successful processing on server and returned the response
   * 3xx - redirection
   * 4xx - resource and request related probelms,
   * 5xx - Internal Server Error
   */
}
