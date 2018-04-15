import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

import { semesters, divisions } from '../../data-model';

@Component({
  selector: 'app-manage-academics',
  templateUrl: './manage-academics.component.html',
  styleUrls: ['./manage-academics.component.css']
})
export class ManageAcademicsComponent implements OnInit {
  divisions = divisions;

      //dateOfBirth: Date = new Date(2018, 0, 1);//to set default date
      datePickerConfig: Partial<BsDatepickerConfig>;
      constructor() {
        this.datePickerConfig = Object.assign({}, 
          { containerClass: 'theme-red', 
          showWeekNumbers: false,
          dateInputFormat: 'DD/MM/YYYY'
        });
      }



  ngOnInit() {
  }

}
