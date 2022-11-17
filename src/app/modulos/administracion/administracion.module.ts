import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoServicioComponent } from './producto-servicio/producto-servicio.component';
import { PlanesComponent } from './planes/planes.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { MascotaComponent } from './mascota/mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearPlanesComponent } from './planes/crear-planes/crear-planes.component';
import { EditarPlanesComponent } from './planes/editar-planes/editar-planes.component';
import { EliminarPlanesComponent } from './planes/eliminar-planes/eliminar-planes.component';
import { BuscarPlanesComponent } from './planes/buscar-planes/buscar-planes.component';
import { CrearProductoServicioComponent } from './producto-servicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './producto-servicio/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './producto-servicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProductoServicioComponent } from './producto-servicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioComponent,
    ProductoServicioComponent,
    PlanesComponent,
    SucursalComponent,
    MascotaComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    CrearPlanesComponent,
    EditarPlanesComponent,
    EliminarPlanesComponent,
    BuscarPlanesComponent,
    CrearProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
    BuscarProductoServicioComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    EliminarSucursalComponent,
    BuscarSucursalComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
