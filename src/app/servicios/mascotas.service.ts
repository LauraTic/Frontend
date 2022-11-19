import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloMascotas } from '../modelos/mascotas.modelo';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  url='http://127.0.0.1:3000';
  token:string='';

  constructor(private http:HttpClient) { }

  ObtenerMascotas(): Observable<ModeloMascotas[]>{
    return this.http.get<ModeloMascotas[]>(`${this.url}/mascotas`)
  }

  ObtenerMascotasId(id: string): Observable<ModeloMascotas>{
    return this.http.get<ModeloMascotas>(`${this.url}/mascotas/${id}`);

  }

  CrearMascotas(mascotas:ModeloMascotas): Observable<ModeloMascotas>{
    return this.http.post<ModeloMascotas>(`${this.url}/mascotas`, mascotas, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })

  }

  
  ActualizarMascotas(mascota : ModeloMascotas): Observable<ModeloMascotas>{
    return this.http.put<ModeloMascotas>(`${this.url}/mascotas/${mascota.id}`, mascota, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })


  }
  
  EliminarMascota(id:string): Observable<any>{

    return this.http.delete(`${this.url}/mascotas/${id}`, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })


  }
 
}
