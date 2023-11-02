import { Component } from '@angular/core';

@Component({
  selector: 'app-navber-menu',
  templateUrl: './navber-menu.component.html',
  styleUrls: ['./navber-menu.component.scss']
})
export class NavberMenuComponent {
  menuIconXbar:boolean = false;
  menuBars: boolean = false;
  openMenu(){
    this.menuBars =! this.menuBars;
    this.menuIconXbar =! this.menuIconXbar;
  }
}
