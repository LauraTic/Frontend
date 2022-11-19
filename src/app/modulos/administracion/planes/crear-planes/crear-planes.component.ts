import { NoopAnimationPlayer } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-crear-planes',
  templateUrl: './crear-planes.component.html',
  styleUrls: ['./crear-planes.component.css']
})
export class CrearPlanesComponent implements OnInit {
  fgValidador: FormGroup= this.fb.group({
    'nombre':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'precio':['',[Validators.required]],
  })
  constructor(private fb: FormBuilder, 
    private servicioPlanes : PlanesService,
    private router: Router
     ) { }

  ngOnInit(): void {
  
  }
  GuardarPlanes(){
    let nombre =this.fgValidador.controls["nombre"].value;
    let precio =parseInt(this.fgValidador.controls["precio"].value);
    let descripcion =this.fgValidador.controls["descripcion"].value;
    let p = new ModeloPlanes();
    p.nombre=nombre;
    p.precio=precio;
    p.descripcion=descripcion;
    this.servicioPlanes.CrearPlanes(p).subscribe((datos: ModeloPlanes)=>{
      alert("Plan creado correctamente");
    this.router.navigate(["/administracion/buscar-planes"])
    },(error: any)=>{alert("Error creando plan");
  })
  }
}
