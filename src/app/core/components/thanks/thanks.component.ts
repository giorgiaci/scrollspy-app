import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesEnums } from 'src/app/shared/enums/routes.enum';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent {
  content:string = `
  I greatly appreciate the time and effort you took to review my code.
  Each interview presents a valuable learning opportunity and personal growth for me.
  `

  constructor(private router: Router, private activatedRoute: ActivatedRoute){ }

  goBack(){
    this.router.navigate(['../'])
   }
  goToSpyscroll(){
    this.router.navigate([RoutesEnums.SCROLL_PAGE_SECTION], { relativeTo: this.activatedRoute.parent })
  }
}
