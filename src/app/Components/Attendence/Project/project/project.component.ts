import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertService } from './../../../../Services/alert.service';
import { Http } from '@angular/http';
import { years, semesters } from './../../../../data-model';
import { Component, OnInit } from '@angular/core';
import { ranges } from '../../../../data-model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  ProjectAllocationUrl = '/api/v1/getAllProject/?query=';


  ranges=ranges;
  years = years;
  semesters = semesters;
  Staffs: any[];
  students: any[];
  Projects:any[];
  constructor(private http: Http, private alertService: AlertService ,private router:Router) {
    this.http.get('/api/v1/staffmemberGetAll')
      .subscribe(response => {
        this.Staffs = response.json();
      })
    this.http.get('/api/v1/studentGetAll')
      .subscribe(response => {
        this.students = response.json();
      })

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    var ProjectAllocation = {
      AcademicYear: parseInt(form.value.AcademicYear),
      ProjectCode: form.value.ProjectCode,
      RollNo: form.value.RollNo,
      SessionNumbers: form.value.Session,
      StaffMember: {
        StaffId: parseInt(form.value.Staff)
      },
      projectName: form.value.ProjectName
    }
    this.http.post('/api/v1/addprojectallocation', ProjectAllocation)
    .subscribe(response=>{
      this.alertService.success(response.json());
    })
  }

  JumpToAllocate(){
    this.router.navigate(['projectallocation'])
  }

  JumpToView(){
    this.router.navigate(['projectview'])
  }





}
