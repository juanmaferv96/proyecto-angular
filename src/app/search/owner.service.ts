import { Owner } from './../models/owner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private httpClient: HttpClient) { }

  getOwners(){
    return this.httpClient.get('http://localhost:3000/owners');
  }
  addOwner(owner: Owner): Observable<Owner> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.httpClient.post<Owner>('http://localhost:3000/owners', owner, {headers});


  }
}
