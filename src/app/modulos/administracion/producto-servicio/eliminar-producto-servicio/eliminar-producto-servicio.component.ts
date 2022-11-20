import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto-servicio',
  templateUrl: './eliminar-producto-servicio.component.html',
  styleUrls: ['./eliminar-producto-servicio.component.css']
})
export class EliminarProductoServicioComponent implements OnInit {

  id: string = '';
  nombre: string = '';

  constructor(
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  BuscarProducto() {    
    this.servicioProducto.ObtenerProductosId(this.id).subscribe((datos: ModeloProducto) => {
      
      if (datos.id && datos.nombre) {
        this.id = datos.id;
        this.nombre = datos.nombre;
      }
    })
  }

  EliminiarProducto(){

    this.servicioProducto.EliminarProductos(this.id).subscribe((datos: any) => {
      alert("Producto eliminado correctamente chimba");
      this.router.navigate(["/administracion/listar-producto-servicio"]);
    }, (error: any) => {
      alert("Error al eliminar")
    })
  }
}
