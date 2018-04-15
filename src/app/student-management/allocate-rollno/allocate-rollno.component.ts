import { Component, OnInit } from '@angular/core';
import { admissions, courses, divisions } from '../../data-model';

@Component({
  selector: 'app-allocate-rollno',
  templateUrl: './allocate-rollno.component.html',
  styleUrls: ['./allocate-rollno.component.css']
})
export class AllocateRollnoComponent implements OnInit {
admissions = admissions;
courses = courses;
divisions = divisions;

  constructor() { }

  ngOnInit() {
  }

}
