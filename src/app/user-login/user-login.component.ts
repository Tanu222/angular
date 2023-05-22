import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any = {
    username:'',
    email:'',
    password:''
  }
  loginObj:any = {
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
       this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      username:'',
      email:'',
      password:''
    }
  }
  onLogin(){
    const isUserExists = this.signupUsers.find(m => m.username==this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExists != undefined){
      let loginUser = {
        username:'',
        email:''
      }
      this.signupUsers.forEach((user)=>{
        if(user.username === this.loginObj.username){
           loginUser.username =user.username,
           loginUser.email = user.email
        }
      })
  
      localStorage.setItem('loginUser',JSON.stringify(loginUser));
      alert("user logged in succesfully")
    }else{
      alert("wrong credentials!")
    }
  }

}
