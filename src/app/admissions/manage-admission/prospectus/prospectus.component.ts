import { Component, OnInit } from '@angular/core';
import {admissions} from '../../../data-model';
@Component({
  selector: 'app-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.css']
})
export class ProspectusComponent implements OnInit {
admissions = admissions;
  constructor() { }

  ngOnInit() {
  }

}
