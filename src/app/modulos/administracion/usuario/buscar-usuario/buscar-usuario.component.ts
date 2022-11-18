import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {
  listadoUsuario:ModeloUsuario[] = [];

  constructor(private usuarioServicio:UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
    
  }
//En los métodos de los componentes están los subscribe.
//Cada componente tiene un método asociado relacionado con su objetivo
  ObtenerListadoUsuarios(){
    this.usuarioServicio.ObtenerUsuarios().subscribe((datos:ModeloUsuario[]) => {
      this.listadoUsuario=datos;    })
  }
  

}
