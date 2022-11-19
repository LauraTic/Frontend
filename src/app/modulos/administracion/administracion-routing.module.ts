import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanesComponent } from './planes/buscar-planes/buscar-planes.component';
import { CrearPlanesComponent } from './planes/crear-planes/crear-planes.component';
import { EditarPlanesComponent } from './planes/editar-planes/editar-planes.component';
import { EliminarPlanesComponent } from './planes/eliminar-planes/eliminar-planes.component';
import { BuscarProductoServicioComponent } from './producto-servicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './producto-servicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './producto-servicio/editar-producto-servicio/editar-producto-servicio.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [

  //EMPIEZAN LOS LLAMADOS A PLANES
  {
    path:"crear-planes",
    component:CrearPlanesComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"buscar-plan",
    component:BuscarPlanesComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"editar-plan",
    component:EditarPlanesComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"eliminar-plan",
    component:EliminarPlanesComponent,
    canActivate: [ValidadorSesionGuard]
  },

  //EMPIEZAN LOS LLAMADOS A MASCOTAS
  {
    path:"crear-mascota",
    component:CrearMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"listar-mascota",
    component:BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"editar-mascota/:id",
    component:EditarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },

  //EMPIEZA PRODUCTO SERVICIO
  {
    path:"crear-producto-servicio",
    component:CrearProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'editar-producto-servicio/:id',
    component:EditarProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"listar-producto-servicio",
    component: BuscarProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },

  //EMPIEZA USUARIOS
  {
    path:"crear-usuario",
    component:CrearUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"editar-usuario/:id",
    component:EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"listar-usuario",
    component:BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"eliminar-usuario/:id",
    component:EliminarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  //EMPIEZA PROSPECTOS
  {
    path:"crear-prospecto",
    component:CrearProspectoComponent
  },
 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
