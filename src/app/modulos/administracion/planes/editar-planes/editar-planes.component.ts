import { NoopAnimationPlayer } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-editar-planes',
  templateUrl: './editar-planes.component.html',
  styleUrls: ['./editar-planes.component.css']
})
export class EditarPlanesComponent implements OnInit {
  id:string ='';
  fgValidador: FormGroup= this.fb.group({
    'id':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'precio':['',[Validators.required]],
  })
  constructor(private fb: FormBuilder, 
    private servicioPlanes : PlanesService,
    private router: Router,
    private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
  this.id=this.route.snapshot.params["id"];
  this.BuscarProducto();
  }
  BuscarProducto(){
    this.servicioPlanes.ObtenerPlanesId(this.id).subscribe((datos:ModeloPlanes)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
    });
  }

  EditarPlanes(){
    let nombre =this.fgValidador.controls["nombre"].value;
    let precio =parseInt(this.fgValidador.controls["precio"].value);
    let descripcion =this.fgValidador.controls["descripcion"].value;
    let p = new ModeloPlanes();
    p.nombre=nombre;
    p.precio=precio;
    p.descripcion=descripcion;
    p.id=this.id;
    this.servicioPlanes.EditarPlanes(p).subscribe((datos: ModeloPlanes)=>{
      alert("Plan modificado correctamente");
    this.router.navigate(["/administracion/buscar-planes"])
    },(error: any)=>{alert("Error modificando el plan");
    
  })
  }
}