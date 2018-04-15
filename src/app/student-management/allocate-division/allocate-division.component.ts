import { Component, OnInit } from '@angular/core';
import { admissions, courses, subjectchoices} from '../../data-model';

@Component({
  selector: 'app-allocate-division',
  templateUrl: './allocate-division.component.html',
  styleUrls: ['./allocate-division.component.css']
})
export class AllocateDivisionComponent implements OnInit {
  admissions = admissions;
  courses = courses;

  constructor() { }

  ngOnInit() {
  }

}
