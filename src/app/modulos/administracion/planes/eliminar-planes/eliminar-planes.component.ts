import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlanes } from 'src/app/modelos/planes.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-eliminar-planes',
  templateUrl: './eliminar-planes.component.html',
  styleUrls: ['./eliminar-planes.component.css']
})
export class EliminarPlanesComponent implements OnInit {
  id: string = '';
  nombre: string = '';

  constructor(
    private servicioPlanes: PlanesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }

  BuscarPlan() {    
    this.servicioPlanes.ObtenerPlanesId(this.id).subscribe((datos: ModeloPlanes) => {
      
      if (datos.id && datos.nombre) {
        this.id = datos.id;
        this.nombre = datos.nombre;
      }
    })
  }

  EliminiarPlanes(){
    this.servicioPlanes.EliminarPlanes(this.id).subscribe((datos: any) => {
      alert("Plan eliminado correctamente chimba");
      this.router.navigate(["/administracion/buscar-planes"]);
    }, (error: any) => {
      alert("Error al eliminar")
    })
  }
}
