import { Component } from '@angular/core';

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

  constructor(){ }
}
