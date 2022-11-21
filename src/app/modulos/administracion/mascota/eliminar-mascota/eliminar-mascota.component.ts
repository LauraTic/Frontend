import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascotas } from 'src/app/modelos/mascotas.modelo';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {

  id: string = '';
  nombre: string = '';

  constructor(
    private servicioMascota: MascotasService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
  }

  BuscarMascota() {    
    this.servicioMascota.ObtenerMascotasId(this.id).subscribe((datos: ModeloMascotas) => {
      
      if (datos.id && datos.nombre) {
        this.id = datos.id;
        this.nombre = datos.nombre;
      }
    })
  }

  EliminarMascota(){
    this.servicioMascota.EliminarMascota(this.id).subscribe((datos: any) => {
      alert("Mascota eliminada correctamente chimba");
      this.router.navigate(["/administracion/listar-mascota"]);
    }, (error: any) => {
      alert("Error al eliminar")
    })
  }

}
