import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
