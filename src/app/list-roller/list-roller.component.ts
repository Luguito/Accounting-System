import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
@Component({
  selector: 'app-list-roller',
  templateUrl: './list-roller.component.html',
  styleUrls: ['./list-roller.component.scss']
})
export class ListRollerComponent implements OnInit {

  constructor(private us:UsersService) { }

  async ngOnInit() {
    let res = await this.us.getUserSeller();
    console.log(res)
  }

}
