import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascotas } from 'src/app/modelos/mascotas.modelo';
import { MascotasService } from 'src/app/servicios/mascotas.service';

declare const IniciarSelect:any;
@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  estado_array:string[]=["Pendiente","Aceptada","Rechazada"];

  fgValidador: FormGroup = this.fb.group({    
    
    'nombre':['',[Validators.required]],
    'foto':['',[Validators.required]],
    'estado':['',[Validators.required]],
    'especie':['',[Validators.required]],
    'comentario':['',[Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioMascota:MascotasService,
    private router:Router) { }

  ngOnInit(): void {
    this.ObtenerSelect();
  }

  ObtenerSelect(){
    setTimeout(() => {
      IniciarSelect("estado_array");

    }, 100)
    
  }

  
  GuardarMascota(){  
    let nombre = this.fgValidador.controls["nombre"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    
    let p = new ModeloMascotas();  
    p.nombre = nombre;
    p.foto = foto;
    p.estado = estado;
    p.especie = especie;
    p.comentario = comentario;
   
    
    this.servicioMascota.CrearMascotas(p).subscribe((datos: ModeloMascotas) => {
      alert("Usuario almacenado correctamente chimba");
      this.router.navigate(["/administracion/listar-mascota"]);
    }, (error: any) => {
      alert("Error almacenado el usuario");
    })
  }

 

}
