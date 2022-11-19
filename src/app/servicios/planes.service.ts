import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloPlanes } from '../modelos/planes.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  url='http://127.0.0.1:3000';
  token:string='';

  constructor(private http:HttpClient, private seguridadServicio:SeguridadService) {
    this.token=this.seguridadServicio.ObtenerToken();
   }

  ObtenerPlanes(): Observable<ModeloPlanes[]>{
    return this.http.get<ModeloPlanes[]>(`${this.url}/planes`);
  }

  ObtenerPlanesId(id: string): Observable<ModeloPlanes>{
    return this.http.get<ModeloPlanes>(`${this.url}/planes/${id}`);
  }

  CrearPlanes(planes:ModeloPlanes): Observable<ModeloPlanes>{
    return this.http.post<ModeloPlanes>(`${this.url}/planes`, planes, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })
  }
  EditarPlanes(planes:ModeloPlanes): Observable<ModeloPlanes>{
    return this.http.put<ModeloPlanes>(`${this.url}/planes/${planes.id}`, planes, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })
  }
  EliminarPlanes(id:string): Observable<any>{
    return this.http.delete(`${this.url}/planes/${id}`, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })
  }
}
