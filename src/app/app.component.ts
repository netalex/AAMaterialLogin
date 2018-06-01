import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    router outlet: there
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
