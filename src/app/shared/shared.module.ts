import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MaterialModule } from './materal/material.module';

@NgModule({
  declarations: [    
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[MaterialModule],
})
export class SharedModule { }
