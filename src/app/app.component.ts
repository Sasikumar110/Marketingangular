import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketingangular';
  display=false;
  bacdisplay=true;
 
menuclick()
{
this.display=true
this.bacdisplay=false
}

public slides = [
  { src: "../../assets/eventmanagement.jpg" },
  { src: "../../assets/eventmange1.jpg" },
  { src: "../../assets/LOGO-1.jpg" },
  { src: "../../assets/hamburger.png" }
];

 

}