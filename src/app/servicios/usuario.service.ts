import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from '../modelos/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='http://127.0.0.1:3000';
  token:string='';

  constructor(private http:HttpClient) { }

  //
  ObtenerUsuarios(): Observable<ModeloUsuario[]>{
    return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios`)
  }

  ObtenerUsuariosId(id: string): Observable<ModeloUsuario>{
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`);

  }

  CrearUsuario(usuario:ModeloUsuario): Observable<ModeloUsuario>{
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, usuario, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })

  }

  
  ActualizarUsuario(usuario : ModeloUsuario): Observable<ModeloUsuario>{
    return this.http.put<ModeloUsuario>(`${this.url}/usuarios/${usuario.id}`, usuario, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })


  }
  
  EliminarUsuario(id:string): Observable<any>{

    return this.http.delete(`${this.url}/usuario/${id}`, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}` 
      })
    })


  }
  




}


/*Aquí en el servicio creado para usuario se establecen los métodos. 
En el constructor se pone un private http que comunica con el back, es el client HTTP API
Todos los métodos del servicio retornan un observable


*/