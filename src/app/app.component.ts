import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
  <span><h1>Angular material login</h1></span>
  </mat-toolbar>

  <router-outlet></router-outlet>
  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {
  title = 'app';
}
