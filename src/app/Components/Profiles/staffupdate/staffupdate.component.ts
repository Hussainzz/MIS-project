import { AlertService } from './../../../Services/alert.service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BloodGroups, Genders, salutations } from '../../../data-model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-staffupdate',
  templateUrl: './staffupdate.component.html',
  styleUrls: ['./staffupdate.component.css']
})
export class StaffupdateComponent {

  Genders = Genders;
  BloodGroups = BloodGroups;
  data: any;
  Departments; Designations; ContractTypes : any[]
  parameter : string;
  salutations = salutations;


  constructor(private route:ActivatedRoute,private router:Router, private http:Http, private alertService:AlertService) {
    this.route.paramMap
    .subscribe(params=>{
      this.parameter = params.get("Id");
    })
    this.http.get('/api/v1/staff/'+this.parameter)
    .subscribe(response=>{
      let datas = response.json();
      this.data = datas[0];
      console.log(this.data);
    })
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

  OverviewSwitch(Id){
    console.log(Id);
    this.router.navigate(['/staffprofile',Id]);
  }

  UpdateSwitch(Id){
    console.log(Id);
    this.router.navigate(['/staffupdate',Id])
  }

  onUpdate(StaffId,Code,Salutation,FirstName,MiddleName,LastName,Gen,DateOfBirth,BloodGroup,Address,Email,ContactNumber,EmergencyContactName,EmergencyContactNumber,EmergencyContactRelationship,Qualification,Dep,Desig,DateOfJoining,ContType,Salary,Notes){
    let Staff ={
      StaffCode : Code.value,
      Salutation: Salutation.value,
      FirstName: FirstName.value,
      MiddleName: MiddleName.value,
      LastName: LastName.value,
      Gender:Gen.value,
      DateOfBirth : DateOfBirth.value,
      BloodGroup : BloodGroup.value,
      Address : Address.value,
      ContactNumber: parseInt(ContactNumber.value),
      Email: Email.value,
      EmergencyContactName: EmergencyContactName.value,
      EmergencyContactNumber: EmergencyContactNumber.value,
      EmergencyContactRelationship: EmergencyContactRelationship.value,
      EducationQualification: Qualification.value,
      Department: {Depid:parseInt(Dep.value)},
      Designation: {Dsid:parseInt(Desig.value)},
      DateOfJoining: DateOfJoining.value,
      ContractType:{Cid:parseInt(ContType.value)},
      Salary : Salary.value,
      Notes: Notes.value
    }
    console.log(StaffId);
    this.http.put('/api/v1/staffmemberedit/'+StaffId,Staff)
    .subscribe(response=>{
      this.alertService.success(response.json());
    })

  }






}
