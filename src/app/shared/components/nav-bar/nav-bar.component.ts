import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesEnums } from '../../enums/routes.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  routePath: string = '';
  showHomeIcon: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router
    ){
    this.routePath = this.activatedRoute.snapshot?.routeConfig?.path!;
  }

  ngOnInit(){
    this.showHomeIcon = this.routePath === RoutesEnums.HOME_COMPONENT ? true : false;
  }

  goHome(){
    this.router.navigate([RoutesEnums.HOME_COMPONENT])
  }
  goToScrollSpy(){
    this.router.navigate([RoutesEnums.CORE_PAGE, RoutesEnums.SCROLL_PAGE_SECTION])
  }
}
