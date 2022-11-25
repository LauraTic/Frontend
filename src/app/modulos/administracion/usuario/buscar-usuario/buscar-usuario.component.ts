import { Component, OnInit,OnDestroy } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listadoUsuario:ModeloUsuario[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private usuarioServicio:UsuarioService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.ObtenerListadoUsuarios();
    
  }
//En los métodos de los componentes están los subscribe.
//Cada componente tiene un método asociado relacionado con su objetivo
  ObtenerListadoUsuarios(){
    this.usuarioServicio.ObtenerUsuarios().subscribe((datos:ModeloUsuario[]) => {
      this.listadoUsuario=datos;
      this.dtTrigger.next(datos);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
