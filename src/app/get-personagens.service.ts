import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from "../environments/environments";
import { ClassPersonagem } from "./class-personagem";

@Injectable({
  providedIn: 'root'
})
export class GetPersonagensService {
  private url = 'http://localhost:3000/personagens';
  //private urlEnv = 

  constructor(private  _httpCliente: HttpClient) {}

  public getPersonagens(): Observable<ClassPersonagem[]> {
    return this._httpCliente.get<ClassPersonagem[]>(`${API_PATH}`)
  }
}
