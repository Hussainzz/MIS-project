import { AlertService } from './../../../Services/alert.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from './../../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PaginationService } from '../../../Services/pagination.service';

@Component({
  selector: 'app-searchstaff',
  templateUrl: './searchstaff.component.html',
  styleUrls: ['./searchstaff.component.css']
})
export class SearchstaffComponent {

  StaffUrl = '/api/v1/staffmemberGetAll/?query=';
  Staffs : any[];
  ContractTypes : any[];
  Designations : any[];

  constructor(private http:Http, private router: Router, private alertService:AlertService){
    this.http.get('/api/v1/getDesignation/')
   .subscribe(response=>{
     this.Designations = response.json();
   });
    this.http.get('/api/v1/getContractType/')
    .subscribe(response=>{
      this.ContractTypes = response.json();
    });

  }

  getStaff(Code:HTMLInputElement,Designation:HTMLInputElement,FirstName:HTMLInputElement,LastName:HTMLInputElement,Gender:HTMLInputElement,ContractType:HTMLInputElement){
    let QueryUrl = '';
    if(Code.value!="")
    {
        QueryUrl = "StaffCode:"+Code.value;
    }
    if(Designation.value!=""){
      if(Code.value==""){
        QueryUrl = QueryUrl+"Designation:"+Designation.value;
      }
      else{
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"Designation:"+Designation.value;
      }
    }
    if(FirstName.value!=""){
      if(Code.value=="" && Designation.value==""){
        QueryUrl = QueryUrl+"FirstName:"+FirstName.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"FirstName:"+FirstName.value;
      }
    }
    if(LastName.value!=""){
      if(Code.value=="" && Designation.value=="" && FirstName.value==""){
        QueryUrl = QueryUrl+"LastName:"+LastName.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"LastName:"+LastName.value;
      }
    }
    if(Gender.value!=""){
      if(Code.value=="" && Designation.value=="" && FirstName.value=="" && LastName.value==""){
        QueryUrl = QueryUrl+"Gender:"+Gender.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"Gender:"+Gender.value;
      }
    }
    if(ContractType.value!=""){
      if(Code.value=="" && Designation.value=="" && FirstName.value=="" && LastName.value=="" && Gender.value==""){
        QueryUrl = QueryUrl+"ContractType:"+ContractType.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"ContractType:"+ContractType.value;
      }
    }
    console.log(QueryUrl);
    this.http.get(this.StaffUrl+QueryUrl)
    .subscribe(response=>{
      if(response.json()==null){
      this.alertService.error("No records found");
      this.Staffs = null;
      }else{
        this.Staffs = response.json();
        this.alertService.clear();
      }
    });
  }
  Delete(Staff){
   this.http.delete('/api/v1/staffmemberdelete/'+Staff.StaffId)
    .subscribe(response=>{
        this.alertService.success(response.json());
        let index = this.Staffs.indexOf(Staff);
        this.Staffs.splice(index,1);
        console.log(this.Staffs);
    });
  }

  GoToProfile(Staff){
    this.router.navigate(['/staffprofile',Staff.StaffId]);
  }



}
