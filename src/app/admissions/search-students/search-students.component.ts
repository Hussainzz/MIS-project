import { Component, OnInit } from '@angular/core';
import { courses } from '../../data-model';

@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {
courses = courses;

  constructor() { }

  ngOnInit() {
  }

}
