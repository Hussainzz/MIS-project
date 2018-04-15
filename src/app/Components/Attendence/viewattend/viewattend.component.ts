import { NgForm } from '@angular/forms';
import { years, semesters } from './../../../data-model';
import { Http } from '@angular/http';
import { AlertService } from './../../../Services/alert.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewattend',
  templateUrl: './viewattend.component.html',
  styleUrls: ['./viewattend.component.css']
})
export class ViewattendComponent{


  SearchUrl = '/api/v1/allocationGetAll/?query='
  Subjects:any[];

  years = years;
  semesters = semesters;
  Divisions: any[];
  Staffs : any[];
  Allocations : any[];
  constructor(private alertService:AlertService, private http:Http, private router:Router) {

  this.http.get('/api/v1/getsubject')
  .subscribe(response=>{
    this.Subjects = response.json();
  })
    this.http.get('/api/v1/getdivision')
    .subscribe(response=>{
      this.Divisions = response.json();
    })
    this.http.get('/api/v1/staffmemberGetAll')
      .subscribe(response=>{
        this.Staffs = response.json();
      })
      console.log(this.Divisions);
      console.log(this.Staffs);
      console.log(this.Subjects);
    }

  Search(AY,Sem,Div,Sub,Sta){

    let QueryUrl = '';
    if(AY.value!="")
    {
        QueryUrl = "AcademicYear:"+AY.value;
    }
    if(Sem.value!=""){
      if(AY.value==""){
        QueryUrl = QueryUrl+"Semester:"+Sem.value;
      }
      else{
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"Semester:"+Sem.value;
      }
    }
    if(Div.value!=""){
      if(AY.value=="" && Sem.value==""){
        QueryUrl = QueryUrl+"Division.Did:"+Div.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"Division.Did:"+Div.value;
      }
    }
    if(Sub.value!=""){
      if(AY.value=="" && Sem.value=="" && Div.value==""){
        QueryUrl = QueryUrl+"Subjects.Subid:"+Sub.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"Subjects.Subid:"+Sub.value;
      }
    }
    if(Sta.value!=""){
      if(AY.value=="" && Sem.value=="" && Div.value=="" && Sub.value==""){
        QueryUrl = QueryUrl+"StaffMember.StaffId:"+Sta.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"StaffMember.StaffId:"+Sta.value;
      }
    }

    console.log(this.SearchUrl+QueryUrl);
    this.http.get(this.SearchUrl+QueryUrl)
    .subscribe(response=>{
      if(response.json()==null){
        this.alertService.error("no records found");
        this.Allocations=null;
      }
      else{
      this.Allocations = response.json();
      this.alertService.clear();
      }
    })
  }

  JumpToAllocate(){
    this.router.navigate(['attendenceallocation'])
  }

  JumpToView(){
    this.router.navigate(['viewallocation'])
  }

  DeleteAllocation(Allocation){
      this.http.delete('http://localhost:8081/api/v1/deleteAllocation/'+Allocation.Aaid)
      .subscribe(response=>{
        this.alertService.success(response.json());
        let index = this.Allocations.indexOf(Allocation);
        this.Allocations.splice(index,1);
      })
  }

}
