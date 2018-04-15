import { Component, OnInit } from '@angular/core';
import { courses } from '../../data-model';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  courses = courses;
  constructor() { }

  ngOnInit() {
  }

}
