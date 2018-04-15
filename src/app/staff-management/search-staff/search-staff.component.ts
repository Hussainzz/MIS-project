import { Component, OnInit } from '@angular/core';
import {designations} from '../../data-model';
@Component({
  selector: 'app-search-staff',
  templateUrl: './search-staff.component.html',
  styleUrls: ['./search-staff.component.css']
})
export class SearchStaffComponent implements OnInit {
designations = designations;
  constructor() { }

  ngOnInit() {
  }

}
