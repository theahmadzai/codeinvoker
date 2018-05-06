import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  theme: boolean;

  constructor() { }

  ngOnInit() {
  }

  setTheme(theme: boolean) {
    this.theme = theme;
    if (theme) {
      document.querySelector('body').style.background = '#333';
      document.querySelector('body').style.color = 'white';
      document.querySelector('body').style.transition = 'all 300ms linear';
    }
    else {
      document.querySelector('body').style.background = 'white';
      document.querySelector('body').style.color = 'black';
    }
  }
}
