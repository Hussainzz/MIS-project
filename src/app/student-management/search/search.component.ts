import { AlertService } from './../../Services/alert.service';
import {Router } from '@angular/router';
import { StudentService } from './../../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { courses, divisions } from '../../data-model';
import { Http }from '@angular/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  Key : any[];
courses = courses;
divisions = divisions;
students : any[];
  constructor(private studentService:StudentService, private http:Http, private router:Router, private alertService:AlertService) { }

  StudUrl = "/api/v1/studentGetAll/?query=";


  StudentSearch(reg_id:HTMLInputElement, first_name:HTMLInputElement, admission_year:HTMLInputElement){
    let QueryUrl = '';
    if(reg_id.value!="")
    {
        QueryUrl = "RegistrationId:"+reg_id.value;
    }
    if(first_name.value!=""){
      if(reg_id.value==""){
        QueryUrl = QueryUrl+"FirstName:"+first_name.value;
      }
      else{
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"FirstName:"+first_name.value;
      }
    }
    if(admission_year.value!=""){
      if(reg_id.value=="" && first_name.value==""){
        QueryUrl = QueryUrl+"AdmissionYear:"+admission_year.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"AdmissionYear:"+admission_year.value;
      }
    }

    console.log(QueryUrl);
    this.http.get(this.StudUrl+QueryUrl)
    .subscribe(response=>{
      if(response.json()==null){
        this.alertService.error("no records found");
        this.students = null;
      }else{
      this.students = response.json();
      this.alertService.clear();
      }
      console.log(this.students)
    })
  }

  Delete(Student){
    this.http.delete('/api/v1/studentDelete/'+Student.Sid)
     .subscribe(response=>{
         console.log(response);
         let index = this.students.indexOf(Student);
         this.students.splice(index,1);
         console.log(this.students);
     })
   }

   GoToProfile(Student){
     this.router.navigate(['/studentprofile',Student.Sid]);
   }

}
