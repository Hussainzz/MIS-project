import { Component, OnInit } from '@angular/core';
import { courses, semesters, divisions } from '../../../data-model';


@Component({
  selector: 'app-bulk-subject-choice',
  templateUrl: './bulk-subject-choice.component.html',
  styleUrls: ['./bulk-subject-choice.component.css']
})
export class BulkSubjectChoiceComponent implements OnInit {
courses = courses;
semesters = semesters;



  constructor() { }

  ngOnInit() {
  }

}
