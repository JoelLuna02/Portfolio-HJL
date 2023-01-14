import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './comps/main.component';

const routes: Routes = [
  { path:'', component: MainComponent, data: {title: 'Bienvenido'} },
  { path:'auth', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
