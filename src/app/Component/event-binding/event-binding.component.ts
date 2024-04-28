import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

 
  public namein:any = "";

  SetNext() {
    document.getElementById("name-id").innerHTML = "My Name is Saikat";
  }
  Erase() {
    document.getElementById("name-id").innerHTML = "";
  }
  PrintText() {
    document.getElementById("name-id1").innerHTML = this.namein;
  }

  Erase1() {
   document.getElementById("name-id1").innerHTML ="";
  }


  ngOnInit() { 
    console.log("Hello World");
  };
}
