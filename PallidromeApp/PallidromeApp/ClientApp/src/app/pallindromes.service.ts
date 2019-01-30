

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Pallindrome } from "./pallindrome";

@Injectable()
export class PallindromesService {

  public baseUrl: string;

  constructor(private httpClient: HttpClient) {

    
  }
  

  // Getting the list of pallindromes
  getPallindromes(): Observable<Pallindrome[]> {
    return this.httpClient.get<Pallindrome[]>(this.baseUrl+'/api/Pallindromes');
  }

  // Adding a new video by calling post
  addPallindrome(pallindrome: Pallindrome) {
    return this.httpClient.post(this.baseUrl +'/api/Pallindromes', pallindrome);
  }

}
