import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private readonly baseUrl = `https://reqres.in/api/`

  constructor() { }

  base() {
    return this.baseUrl
  }
}
