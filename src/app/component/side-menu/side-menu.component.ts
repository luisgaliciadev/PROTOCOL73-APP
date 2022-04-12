import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input('showMenu') showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.showMenu = false;
  }

}
