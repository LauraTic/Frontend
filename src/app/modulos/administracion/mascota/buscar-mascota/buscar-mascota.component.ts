import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ModeloMascotas } from 'src/app/modelos/mascotas.modelo';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnDestroy,OnInit {

  dtOptions: DataTables.Settings = {};
  listadoMascotas:ModeloMascotas[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private mascotaServicio: MascotasService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas(){
    this.mascotaServicio.ObtenerMascotas().subscribe((datos:ModeloMascotas[]) => {
      this.listadoMascotas=datos;
      this.dtTrigger.next(datos);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
