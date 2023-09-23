import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menushow',
  templateUrl: './menushow.component.html',
  styleUrls: ['./menushow.component.css']
})
export class MenushowComponent implements OnInit {

  menuclose=true;
  constructor() { }

  ngOnInit(): void {
  }

  menuclosebu()
  {
    this.menuclose=false;
  }

}
