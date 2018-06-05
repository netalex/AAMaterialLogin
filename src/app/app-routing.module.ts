import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataResultComponent } from './data-result/data-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'data-result', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'data-result', component: DataResultComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
