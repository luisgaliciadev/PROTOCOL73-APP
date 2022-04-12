import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit(): void {
   
  }

  getShowMenu(res: boolean) {
    this.showMenu = res;
  }

}
