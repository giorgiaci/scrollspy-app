import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnums } from '../shared/enums/routes.enum';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { ThanksComponent } from './components/thanks/thanks.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:RoutesEnums.SCROLL_PAGE_SECTION,
        component: ScrollspyComponent,
      },
      {
        path:RoutesEnums.THANKS_COMPONENT,
        component: ThanksComponent
      }
    ]
  
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }