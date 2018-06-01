import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  template: `

  <mat-card class="half-width center">

      <mat-grid-list cols="1" rowHeight="100px" class="center">
        <mat-grid-tile>
          <mat-form-field class='full-width'>
            <input matInput placeholder="Name">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile>
          <mat-form-field class='full-width'>
            <input matInput type="password" placeholder="Password">
          </mat-form-field>
        </mat-grid-tile>
      </mat-grid-list>
    </mat-card>

  `,
  styles: [
    `
    .full-width {
      width: 100%;
    }

    .half-width {
      width: 50%;
    }

    .center {
      margin: 10% 25% 0 25%;
    }
    `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// <!--- <mat-form-field>
// <input type="password" placeholder="Password">
// </mat-form-field>-->
