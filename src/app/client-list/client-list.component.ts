import { Component, OnInit, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersService } from '@services';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(private us:UsersService) { }

  async ngOnInit() {
    let res = await this.us.getUserSeller();
    console.log(res)
  }

}


const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'create', component: UserCreateComponent },
  { path: 'details/:id', component: DetailsComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientListRouting { }


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [ClientListRouting, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ClientListComponent],
  exports: [ClientListComponent]
})
export class ClientListModule { }