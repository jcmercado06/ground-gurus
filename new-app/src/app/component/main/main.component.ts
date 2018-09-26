import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  users:any;
  constructor(private api: ApiService) { }

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
