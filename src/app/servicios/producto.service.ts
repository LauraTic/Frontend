import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloProducto } from '../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url='http://127.0.0.1:3000';
  token:string='';

  constructor(private http:HttpClient, private seguridadServicio:SeguridadService) {
    this.token=this.seguridadServicio.ObtenerToken();
   }

  ObtenerProductos(): Observable<ModeloProducto[]>{
    return this.http.get<ModeloProducto[]>(`${this.url}/productos-servicios`);

  }

  ObtenerProductosId(id: string): Observable<ModeloProducto>{
    return this.http.get<ModeloProducto>(`${this.url}/productos-servicios/${id}`);

  }

  CrearProductos(producto:ModeloProducto): Observable<ModeloProducto>{

    return this.http.post<ModeloProducto>(`${this.url}/productos-servicios`, producto, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })


  }

  ActualizarProductos(producto:ModeloProducto): Observable<ModeloProducto>{

    return this.http.put<ModeloProducto>(`${this.url}/productos-servicios/${producto.id}`, producto, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })


  }
  
  EliminarProductos(id:string): Observable<any>{

    return this.http.delete(`${this.url}/productos-servicios/${id}`, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })


  }
  
}
