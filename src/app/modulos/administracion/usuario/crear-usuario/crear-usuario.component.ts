import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'cedula':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'telefono':['',[Validators.required]],
    'correo':['',[Validators.required]],
    //'clave':['',[Validators.required]],
    'rol':['',[Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioUsuario:UsuarioService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarUsuario(){
    let cedula = this.fgValidador.controls["cedula"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let correo = this.fgValidador.controls["correo"].value;
    //let clave = this.fgValidador.controls["clave"].value;
    let rol = this.fgValidador.controls["rol"].value;

    let p = new ModeloUsuario();
    p.cedula = cedula;
    p.nombre = nombre;
    p.apellido = apellido;
    p.telefono = telefono;
    p.correo = correo;
    //p.clave = clave;
    p.rol = rol;
    
    this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario) => {
      alert("Usuario almacenado correctamente chimba");
      this.router.navigate(["/administracion/listar-usuario"]);
    }, (error: any) => {
      alert("Error almacenado el usuario");
    })
  }

}
