import { Component, OnInit } from '@angular/core';
import { courses } from '../../data-model';

@Component({
  selector: 'app-admit',
  templateUrl: './admit.component.html',
  styleUrls: ['./admit.component.css']
})
export class AdmitComponent implements OnInit {
courses = courses;
  constructor() { }

  ngOnInit() {
  }

}
