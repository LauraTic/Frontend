import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarProductoServicioComponent } from './producto-servicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './producto-servicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './producto-servicio/editar-producto-servicio/editar-producto-servicio.component';

const routes: Routes = [
  {
    path:"crear-mascota",
    component:CrearMascotaComponent
  },
  {
    path:"buscar-mascota",
    component:BuscarMascotaComponent
  },
  {
    path:"editar-mascota",
    component:EditarMascotaComponent
  },
  {
    path:"eliminar-mascota",
    component:EliminarMascotaComponent
  },
  {
    path:"crear-producto-servicio",
    component:CrearProductoServicioComponent
  },
  {
    path:"editar-producto-servicio/:id",
    component:EditarProductoServicioComponent
  },
  {
    path:"listar-producto-servicio",
    component: BuscarProductoServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
