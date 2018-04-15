import { Component, OnInit } from '@angular/core';
import { courses, semesters, divisions } from '../../data-model';


@Component({
  selector: 'app-academic-progression',
  templateUrl: './academic-progression.component.html',
  styleUrls: ['./academic-progression.component.css']
})
export class AcademicProgressionComponent implements OnInit {

  courses = courses;
  semesters = semesters;
  divisions = divisions;
   
  constructor() { }

  ngOnInit() {
  }

}
