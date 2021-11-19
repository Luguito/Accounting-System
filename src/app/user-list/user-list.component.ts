import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'create', component: CreateComponent },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRouting { }


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [UserListRouting, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [UserListComponent, CreateComponent],
  exports: [UserListComponent]
})
export class UserListModule { }