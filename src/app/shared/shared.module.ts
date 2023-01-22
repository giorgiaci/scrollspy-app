import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MaterialModule } from './materal/material.module';
import { ScrollSpyDirective } from './directives/scrollspy.directive';

@NgModule({
  declarations: [    
    HomePageComponent,
    ScrollSpyDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[
    MaterialModule,
    ScrollSpyDirective
  ],
})
export class SharedModule { }
