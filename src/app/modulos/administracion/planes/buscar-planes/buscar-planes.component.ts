import { Component, OnInit } from '@angular/core';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-buscar-planes',
  templateUrl: './buscar-planes.component.html',
  styleUrls: ['./buscar-planes.component.css']
})
export class BuscarPlanesComponent implements OnInit {
  listadoRegistros: ModeloPlanes[]= [];
  constructor(private planesServicio: PlanesService) { }

  ngOnInit(): void {
    this.ObtenerListadoPlanes();
  }
  ObtenerListadoPlanes(){

    this.planesServicio.ObtenerPlanes().subscribe((datos:ModeloPlanes[]) => {
      this.listadoRegistros=datos;
    })
  }
}
