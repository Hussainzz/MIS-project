import { Component, OnInit } from '@angular/core';
import { courses } from '../../../data-model';

@Component({
  selector: 'app-special-case',
  templateUrl: './special-case.component.html',
  styleUrls: ['./special-case.component.css']
})
export class SpecialCaseComponent implements OnInit {

  courses = courses;
  constructor() { }

  ngOnInit() {
  }

}
