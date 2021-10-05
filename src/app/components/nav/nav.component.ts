import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  title = 'Portfolio';
  menuOpen = false;

  menuSwith() {
    this.menuOpen = !this.menuOpen;
  }
}