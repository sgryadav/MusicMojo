import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Userexists } from '../userexists';
import { Data } from '@angular/router/src/config';
import { DataService } from '../data.service';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {

  user = {
    username: "",
    firstname: "",
    email: "",
    password: "",
    score: Number[0]
  };

  verifyUser = {
    username: "",
    password: ""
  }

  error;

  passwordConf: String = ""
  constructor(private router: Router, private _dataService: DataService) { }
 
  ngOnInit() {
  }


  onSubmit(){ 
    //this.user = new User(f.username, f.firstname, f.email, f.password, this.user.score)
    let obs = this._dataService.createUser(this.user);
    obs.subscribe(data => {
      console.log("in reg_subscribe")
      this.user = JSON.parse(data['_body'])
      console.log(this.user.username);
      this._dataService.loggeduser = this.user;
      this.router.navigate(['/selectquiz']);
     
  
    })
    
   }

  verifyUserInfo(){ 
    let obs = this._dataService.verifyUserInfo(this.verifyUser)
    obs.subscribe(data => {
      console.log("in reg_subscribe")
      var body = JSON.parse(data['_body']);
      if(body.username){
        this.user = body;
        this._dataService.loggeduser = this.user;
        this.router.navigate(['/selectquiz']);
      }
      else{
        this.error = body;
        this.router.navigate(["/"]);
      }
     })

  }


}
