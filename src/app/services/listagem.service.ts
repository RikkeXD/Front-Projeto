import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs'
import { Usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {
  private apiUrl = "http://localhost:3000/usuarios" //Rota GET que está o JSON
  constructor(private http: HttpClient) { } //Recebendo as propriedades do HttpCliente

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl)

  }

  getItem(id: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
}
