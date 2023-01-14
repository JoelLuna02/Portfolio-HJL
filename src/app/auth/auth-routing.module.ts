import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ChangeComponent } from './change.component';

const rutas: Routes = [
  {
    path:'', children: [
      { path:'login', component: LoginComponent, data: { title: 'Iniciar sesión'} },
      { path:'change', component: ChangeComponent, data: { title: 'Cambiar Contraseña'} },
      { path:'**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ]
})
export class AuthRoutingModule { }
