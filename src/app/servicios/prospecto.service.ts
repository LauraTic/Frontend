import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProspecto } from '../modelos/prospecto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {
  url='http://127.0.0.1:3000';
  token:string='';

  constructor(private http:HttpClient) { }

  ObtenerProspecto(): Observable<ModeloProspecto[]>{
    return this.http.get<ModeloProspecto[]>(`${this.url}/prospectos`)

  }
  ObtenerProspectoId(id: string): Observable<ModeloProspecto>{
    return this.http.get<ModeloProspecto>(`${this.url}/prospectos/${id}`);

  }

  CrearProspecto(prospecto:ModeloProspecto): Observable<ModeloProspecto>{
    return this.http.post<ModeloProspecto>(`${this.url}/prospectos`, prospecto, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })

  }



}
