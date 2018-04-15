import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertService } from './../../../../Services/alert.service';
import { Http } from '@angular/http';
import { years, semesters, divisions } from './../../../../data-model';
import { Component, OnInit } from '@angular/core';
import { ranges } from '../../../../data-model';

@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.css']
})
export class PracticalComponent{

  ProjectAllocationUrl = '/api/v1/getAllPractical/?query=';


  years = years;
  semesters = semesters;
  Practical:any;
  students:any[];
  Staffs:any[];
  Divisions:any[];
  Subjects:any[];
  ranges = ranges;

  constructor(private http:Http,private alertService:AlertService,private router:Router) {
    this.http.get('/api/v1/getdivision')
    .subscribe(response=>{
      this.Divisions = response.json();
    })
    this.http.get('/api/v1/studentGetAll')
    .subscribe(response=>{
      this.students = response.json();
    })
    this.http.get('/api/v1/staffmemberGetAll')
    .subscribe(response=>{
      this.Staffs = response.json();
    })
    this.http.get('/api/v1/getsubject')
    .subscribe(response=>{
      this.Subjects = response.json();
    })
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.Practical = {
      AcademicYear: parseInt(form.value.AcademicYear),
      Batch: form.value.Batch,
      Division: {
        Did: parseInt(form.value.Division)
      },
      RollNo: form.value.Students,
      Semester: form.value.Semester,
      SessionNumbers: form.value.SessionNo,
      StaffMember: {
        StaffId: parseInt(form.value.Faculty)
      },
      Subjects: {
        Subid: parseInt(form.value.Subject)
      }
    }
    console.log(this.Practical)
    this.http.post('/api/v1/addpracticalallocation',this.Practical)
    .subscribe(response=>{
      this.alertService.success(response.json())
    })
  }

  JumpToAllocate(){
    this.router.navigate(['practicalallocation'])
  }

  JumpToView(){
    this.router.navigate(['practicalview'])
  }


}
