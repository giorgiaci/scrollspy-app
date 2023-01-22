import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesEnums } from '../../enums/routes.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  showProgressBar:boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToSpyScroll(){
    this.showProgressBar = true;
    setTimeout(()=>{
      this.router.navigate([RoutesEnums.CORE_PAGE, RoutesEnums.SCROLL_PAGE_SECTION], { relativeTo: this.activatedRoute.parent })
    }, 1000)
    
  }
  goToSorryPage(){
    this.showProgressBar = true;
    setTimeout(()=>{
      this.router.navigate([RoutesEnums.CORE_PAGE, RoutesEnums.THANKS_COMPONENT], { relativeTo: this.activatedRoute.parent })
    }, 1000)    
  }
}
