import { Component, OnInit } from '@angular/core';
import { ApiService } from  "../../services/api.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor( private api: ApiService) { }

  ngOnInit() {
    this.api.get("users").subscribe((data)=>{
      this.users = data;
      console.log("Users: ", this.users);
    });
   
    
  }

    getValue(name){
      alert(name);
    }
}
