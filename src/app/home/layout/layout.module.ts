import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { IndexModule } from '../index/index.module';
import { ComponentModule } from '../../component/component.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentModule,
    IndexModule
  ]
})
export class LayoutModule { }
