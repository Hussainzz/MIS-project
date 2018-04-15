import { Component, OnInit } from '@angular/core';
import { courses, admissions } from '../../data-model';

@Component({
  selector: 'app-student-lookup',
  templateUrl: './student-lookup.component.html',
  styleUrls: ['./student-lookup.component.css']
})
export class StudentLookupComponent implements OnInit {

  courses = courses;
  admissions = admissions;
  constructor() { }

  ngOnInit() {
  }

}
