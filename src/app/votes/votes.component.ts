import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();
    uvotes = 0;
    dvotes = 0;

    upVote(){
      this.uvotes = this.uvotes + 1;
    }

    downVote(){
      this.dvotes = this.dvotes + 1;
    }

  constructor() { }

  ngOnInit() {
  }

}