import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThanksComponent } from './components/thanks/thanks.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreRoutingModule } from './core.routing.module';

@NgModule({
  declarations: [
    ScrollspyComponent,
    ThanksComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [
    ScrollspyComponent
  ]
})
export class CoreModule { }
