import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarProductoServicioComponent } from './producto-servicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './producto-servicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './producto-servicio/editar-producto-servicio/editar-producto-servicio.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  //EMPIEZAN LOS LLAMADOS A MASCOTAS
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
  //EMPIEZA PRODUCTO SERVICIO
  {
    path:"crear-producto-servicio",
    component:CrearProductoServicioComponent
  },
  {
    path:'editar-producto-servicio/:id',
    component:EditarProductoServicioComponent
  },
  {
    path:"listar-producto-servicio",
    component: BuscarProductoServicioComponent
  },

  //EMPIEZA USUARIOS
  {
    path:"crear-usuario",
    component:CrearUsuarioComponent
  },
  {
    path:"editar-usuario/:id",
    component:EditarUsuarioComponent
  },
  {
    path:"listar-usuario",
    component:BuscarUsuarioComponent
  },
  {
    path:"eliminar-usuario/:id",
    component:EliminarUsuarioComponent
  },
  //EMPIEZA PROSPECTOS
  {
    path:"crear-prospecto",
    component:CrearProspectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
