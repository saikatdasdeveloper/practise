import { Component } from '@angular/core';

@Component({
  selector: 'app-bgcolorchangeontype',
  templateUrl: './bgcolorchangeontype.component.html',
  styleUrl: './bgcolorchangeontype.component.css'
})
export class BgcolorchangeontypeComponent {
  public inputtext:any = "";
  public bgcolor: string = this.inputtext.toString();

}