import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { RoutesEnums } from './shared/enums/routes.enum';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: RoutesEnums.HOME_COMPONENT,
    component:HomePageComponent,
  },
  { path: RoutesEnums.CORE_PAGE,
    loadChildren: ()=>import('./core/core.module').then((m)=> CoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
