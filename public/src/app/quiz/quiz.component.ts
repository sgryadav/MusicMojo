import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions;
  score = 0
  userAnswer = ""
  constructor(private _dataService: DataService, private router: Router) {
    this.questions = this._dataService.actualQuestions;
  }

  ngOnInit() {
    console.log(this.questions);
  }
  
  onSubmit(formData) {
    this.userAnswer = formData.ans_selected;
    if(this.questions.length>1){
      if(this.userAnswer==this.questions[0].answer)
      this.score++
      this.questions.shift()
    }
    else {
      if(this.userAnswer==this.questions[0].answer)
      this.score++;
      this._dataService.loggeduser.score.push(this.score);
      this.router.navigate(['/result']);    
    }
  }

  resultRoute(){
  this.router.navigate(['/result']);    
  }
  navtoQuiz(){
    this._dataService.score = 0;
    this.router.navigate(['/selectquiz']);  
  }
}




  
  
