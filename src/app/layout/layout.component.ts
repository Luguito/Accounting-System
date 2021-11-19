import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


import { CompanyComponent } from '../company/company.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'register-company', component: CompanyComponent },
      { path: 'clients', loadChildren: () => import('../client-list/client-list.component').then(m => m.ClientListModule) },
      { path: 'users', loadChildren: () => import('../user-list/user-list.component').then(m => m.UserListModule) },
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting { }


import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  imports: [LayoutRouting],
  exports: [LayoutRouting],
  declarations: [LayoutComponent, SidebarComponent]
})
export class LayoutModule { }