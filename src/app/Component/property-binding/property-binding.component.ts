import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
   
  public back = 'lightgrey';
  public i:number = 0;
  onClick() {
    this.i = this.i+1;
    if (this.i === 1) {
      this.back = 'red';
    }
    if (this.i === 2) {
      this.back = 'green';
    }
    if (this.i === 3) {
      this.back = 'blue';
    }
    if (this.i === 4) {
      this.back = 'yellow';
    }
    if (this.i === 5) {
      this.back = 'orange';
    }
    if (this.i === 6) {
        this.back = 'purple'
    }
    if (this.i === 7) {
      this.i=0;
      console.log("Value 0 Reset");
    }
  }
  


}
