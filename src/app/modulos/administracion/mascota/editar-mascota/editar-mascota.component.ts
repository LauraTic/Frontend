import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascotas } from 'src/app/modelos/mascotas.modelo';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],    
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioMascotas: MascotasService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
  }

  BuscarMascota() {
    this.servicioMascotas.ObtenerMascotasId(this.id).subscribe((datos: ModeloMascotas) => {
      this.fgValidador.controls["id"].setValue(this.id);    
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["especie"].setValue(datos.especie);
      this.fgValidador.controls["comentario"].setValue(datos.comentario);      
    })
  }

  EditarMascota(){
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
    p.id = this.id;

    this.servicioMascotas.ActualizarMascotas(p).subscribe((datos:ModeloMascotas)=>{
      alert("Usuario actualizado chimba");
      this.router.navigate(["/administracion/listar-mascota"]);
    },(error:any)=>{
      alert("Error al actualizar")
    }) 
  }



}
