import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  loginObj:any = {
    username:'',
    email:''
  }
  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('loginUser');
    if(localData != null){
       this.loginObj = JSON.parse(localData);
       console.log(this.loginObj);
    }
  }

}
