import { Component, OnInit } from '@angular/core';
import { _createDefaultCookieXSRFStrategy } from '@angular/http/src/http_module';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  user
  score
  constructor(private _dataService: DataService, private router: Router) { 
    this.score = this._dataService.score;
    this.user = this._dataService.user;
  }

  ngOnInit() {
  }
  navtoQuiz(){
    this._dataService.score = 0;
    this.router.navigate(['/selectquiz']);  
  }

  // pushScore(){
  //   let observable = this._dataService.pushScore(this._dataService.user["_id"], this.score);
  //   observable.subscribe(data=> this.user);
  // }

  navtoLogin(){
    this.router.navigate(['/']);  
  }

}
