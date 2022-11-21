import { Component, OnInit } from '@angular/core';
import { ModeloMascotas } from 'src/app/modelos/mascotas.modelo';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {
  listadoMascotas:ModeloMascotas[] = [];

  constructor(private mascotaServicio: MascotasService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas(){
    this.mascotaServicio.ObtenerMascotas().subscribe((datos:ModeloMascotas[]) => {
      this.listadoMascotas=datos;})
  }

}
