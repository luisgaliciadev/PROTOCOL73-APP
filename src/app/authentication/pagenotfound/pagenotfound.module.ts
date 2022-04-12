import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound.component';
import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';



@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule
  ]
})
export class PagenotfoundModule { }
