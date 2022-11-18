import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProductoServicioComponent } from './producto-servicio/producto-servicio.component';
import { PlanesComponent } from './planes/planes.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ContactanosComponent,
    ProductoServicioComponent,
    PlanesComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
