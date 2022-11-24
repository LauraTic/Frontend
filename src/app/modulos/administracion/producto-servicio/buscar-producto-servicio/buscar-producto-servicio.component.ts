import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-buscar-producto-servicio',
  templateUrl: './buscar-producto-servicio.component.html',
  styleUrls: ['./buscar-producto-servicio.component.css']
})
export class BuscarProductoServicioComponent implements OnDestroy,OnInit {
  
  dtOptions: DataTables.Settings = {};
  listadoRegistros: ModeloProducto[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private productoServicio:ProductoService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.ObtenerListadoProductos();
  }

  ObtenerListadoProductos(){
    this.productoServicio.ObtenerProductos().subscribe((datos:ModeloProducto[]) => {
      this.listadoRegistros=datos;
      this.dtTrigger.next(datos);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}

