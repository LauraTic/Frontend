import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto-servicio',
  templateUrl: './crear-producto-servicio.component.html',
  styleUrls: ['./crear-producto-servicio.component.css']
})
export class CrearProductoServicioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'tipo':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'decripcion':['',[Validators.required]],
    'precio':['',[Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProducto(){
    let tipo = this.fgValidador.controls["tipo"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let p = new ModeloProducto();
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    this.servicioProducto.CrearProductos(p).subscribe((datos: ModeloProducto) => {
      alert("Producto almacenado correctamente chimba");
      this.router.navigate(["/administracion/listar-producto-servicio"]);
    }, (error: any) => {
      alert("Error almacenado el producto");
    })
  }

}
