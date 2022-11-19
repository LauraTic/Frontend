import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {
  id: string = '';
  nombre: string = '';

  constructor(
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario() {    
    this.servicioUsuario.ObtenerUsuariosId(this.id).subscribe((datos: ModeloUsuario) => {
      
      if (datos.id && datos.nombre) {
        this.id = datos.id;
        this.nombre = datos.nombre;
      }
    })
  }

  EliminiarUsuario(){

    this.servicioUsuario.EliminarUsuario(this.id).subscribe((datos: any) => {
      alert("Usuario eliminado correctamente chimba");
      this.router.navigate(["/administracion/listar-usuario"]);
    }, (error: any) => {
      alert("Error al eliminar")
    })
  }
}
