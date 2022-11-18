import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProspecto } from '../modelos/prospecto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {
  url='http://localhost:3000';
  token:string='';

  constructor(private http:HttpClient) { }

  ObtenerProspecto(): Observable<ModeloProspecto[]>{
    return this.http.get<ModeloProspecto[]>(`${this.url}/prospectos`)

  }
  ObtenerProspectoId(id: string): Observable<ModeloProspecto>{
    return this.http.get<ModeloProspecto>(`${this.url}/prospecto/${id}`);

  }

  CrearProspecto(prospecto:ModeloProspecto): Observable<ModeloProspecto>{
    return this.http.post<ModeloProspecto>(`${this.url}/prospecto`, prospecto, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })

  }



}
