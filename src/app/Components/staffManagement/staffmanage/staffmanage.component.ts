import { salutations } from './../../../data-model';
import { AlertService } from './../../../Services/alert.service';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staffmanage',
  templateUrl: './staffmanage.component.html',
  styleUrls: ['./staffmanage.component.css']
})
export class StaffmanageComponent{
  Designations: any[];
  Departments: any[];
  ContractTypes: any[];
  salutations = salutations;

  Staff : any[];
  constructor(private http:Http,private alertService:AlertService) {
   this.http.get('/api/v1/getDesignation/')
   .subscribe(response=>{
     this.Designations = response.json();
   })
   this.http.get('/api/v1/getContractType/')
   .subscribe(response=>{
     this.ContractTypes = response.json();
   })
   this.http.get('/api/v1/getDepartment/')
   .subscribe(response=>{
      this.Departments = response.json();
   })

  }
  onSubmit(form:NgForm){
    let Staff ={
      // StaffCode : form.value.Code,
      Salutation: form.value.Salutaion,
      FirstName: form.value.First_Name,
      MiddleName: form.value.Middle_Name,
      LastName: form.value.Last_Name,
      Gender:form.value.gender,
      DateOfBirth : form.value.dateOfBirth,
      BloodGroup : form.value.options,
      Address : form.value.Address,
      ContactNumber: parseInt(form.value.Contact_Number),
      Email: form.value.Email,
      EmergencyContactName: form.value.Emergency_Name,
      EmergencyContactNumber: form.value.Emergency_Number,
      EmergencyContactRelationship: form.value.Emergency_Relation,
      EducationQualification: form.value.Qualification,
      Department: {Depid:parseInt(form.value.department)},
      Designation: {Dsid:parseInt(form.value.designation)},
      DateOfJoining: form.value.Date_Of_Joining,
      ContractType:{Cid:parseInt(form.value.Contract_Type)},
      Salary : form.value.Salary,
      Notes: form.value.Notes
    }
    console.log(Staff);
    this.http.post('/api/v1/staffdetails',Staff)
    .subscribe(response=>{
      this.alertService.success(response.json());
    })
  }

}
