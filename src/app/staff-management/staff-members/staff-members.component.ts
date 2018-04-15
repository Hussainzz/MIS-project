import { Component, OnInit } from '@angular/core';
import { departments } from '../../data-model';

@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent implements OnInit {
departments = departments;
  constructor() { }

  ngOnInit() {
  }

}
