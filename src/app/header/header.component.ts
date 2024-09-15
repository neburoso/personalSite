import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openMenu: boolean;
  hamburguer: string;

  constructor() {
    this.openMenu = false;
    this.hamburguer = "menu";
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
    if (this.openMenu) {
      this.hamburguer = "close"
    } else {
      this.hamburguer = "menu"
    }
  }
}
