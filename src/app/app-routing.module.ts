import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompleteRegistryComponent } from './complete-registry/complete-registry.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'complete-registry', component: CompleteRegistryComponent },
  { path: 'app', loadChildren: () => import('./layout/layout.component').then(m => m.LayoutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
