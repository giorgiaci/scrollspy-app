import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MaterialModule } from './materal/material.module';
import { ScrollSpyDirective } from './directives/scrollspy.directive';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [    
    HomePageComponent,
    ScrollSpyDirective,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[
    MaterialModule,
    ScrollSpyDirective,
    NavBarComponent
  ],
})
export class SharedModule { }
