import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ModulosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ModulosComponent
  ]
})
export class ModulosModule { }
