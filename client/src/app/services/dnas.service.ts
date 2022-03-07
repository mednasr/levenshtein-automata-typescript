import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Dna } from '../models/Dna'

@Injectable({
  providedIn: 'root'
})
export class DnasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getDnas(){
    return this.http.get(`${this.API_URI}/dnas`);
  }

  oneDna(string: string){
    return this.http.get(`${this.API_URI}/dnas/${string}`);
  }

  saveDna(dna: Dna){
    return this.http.post(`${this.API_URI}/dnas`, dna);
  }



}
