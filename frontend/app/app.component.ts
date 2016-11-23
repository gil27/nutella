import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <my-issues></my-issues>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }
