import { Component } from '@angular/core';

@Component({
  selector: 'app-image-change',
  templateUrl: './image-change.component.html',
  styleUrl: './image-change.component.css'
})
export class ImageChangeComponent {

  public img_url: any = '';
  public num:number = 0;
  public counter: number = 0 ;
  OnPizza() {
    console.log(this.num);
   this.num = this.num+1;
   if (this.num === 0) {
      this.img_url = 'assets/images/img1.png';
  
   }
   if (this.num === 1) {
    this.img_url = 'assets/images/img2.png';

   }
   if (this.num === 2) {
    this.img_url = 'assets/images/img3.png';
    this.num = 0;
  
   }

  }
  OnCounter() {
    this.counter = this.counter+1;
    console.log(this.counter);
  }
  

}
