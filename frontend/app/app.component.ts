import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="pure-menu pure-menu-horizontal">
      <a href="#" class="pure-menu-heading nutella-brand">NUTELLA</a>
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-selected">
          <a routerLink="/issues" class="pure-menu-link">Issues</a>
        </li>
        <li class="pure-menu-item"><a href="https://github.com/gil27/nutella/issues" class="pure-menu-link">Contact</a></li>
      </ul>
    </div>

    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
