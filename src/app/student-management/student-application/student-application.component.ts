import { AlertService } from './../../Services/alert.service';
import { Http } from '@angular/http';
import { StudentService } from './../../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { courses, admissions, divisions, nationalities, semesters, years, months } from '../../data-model';

@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.css']
})
export class StudentApplicationComponent {
Student: any[];
CourseData : any[];
DivisionData : any[];
RollPrefix : any;

cobt:any;
hcobt:any;

courses = courses;
admissions = admissions;
divisions = divisions;
semesters = semesters;
years = years;
nationalities = nationalities;
months = months;

datePickerConfig: Partial<BsDatepickerConfig>;
constructor(private studentService: StudentService, private http:Http, private alertService:AlertService) {
  this.datePickerConfig = Object.assign({},
    { containerClass: 'theme-red',
    showWeekNumbers: false,
    dateInputFormat: 'YYYY/MM/DD'
  });
  this.http.get('/api/v1/getcourse')
  .subscribe(response=>{
    this.CourseData = response.json();
    console.log(this.CourseData);
  })

}
onSubmit(form: NgForm) {
  console.log(form.value);
  console.log("Form Submitted successfully!!");

  let Student = {
    "RollNo":form.value.RollNo,
    "Course":{"Cid":parseInt(form.value.Course)},
    "AdmissionYear":parseInt(form.value.AdmissionYear),
    "Division": {"Did": parseInt(form.value.Division)},
    "Semester": form.value.semester,
    "FirstName":form.value.firstname,
    "MiddleName":form.value.middlename,
    "LastName":form.value.lastname,
    "Gender":form.value.gender,
    "Dob": form.value.dateOfBirth,
    "PlaceOfBirth": form.value.placeOfBirth,
    "MaritalStatus": form.value.mstatus,
    "Religon": form.value.religion,
    "Nationality": form.value.nationality,
    "Category": form.value.category,
    "MobileNumber": form.value.mobilenumber,
    "BloodGroup": form.value.blood,
    "BankName": form.value.bankname,
    "AccountNumber": form.value.accountnumber,
    "BranchAddress": form.value.branchaddress,
    "LandLineNumber":form.value.landlinenumber,
    "ParentMobileNumber":form.value.mobnumber,
    "Email":form.value.email,
    "ResidentialAddress":form.value.address,
    "FatherName":form.value.fathername,
    "FatherStatus":this.setval(form.value.fatherLiving),
    "FatherOccupation":form.value.occup,
    "MotherName":form.value.mothername,
    "MotherStatus":this.setval(form.value.motherLiving),
    "MotherOccupation":form.value.moccup,
    "ParentEmail":form.value.pemail,
    "SiblingName":form.value.sname,
    "SscBoard":form.value.spass,
    "SscSeatNo":form.value.snum,
    "SscMonthOfPassing":form.value.mpass,
    "SscYearOfPassing":parseInt(form.value.ypass),
    "SscTotalMarks":parseInt(form.value.mobt),
    "SscMarkOutOf":parseInt(form.value.smout),
    "SscPercentage":parseFloat(form.value.pobt),
    "SscClassObtained":form.value.cobt,
    "HsscBoard":form.value.hpass,
    "HsscStream":form.value.hstream,
    "HsscSeatNo":form.value.hsnum,
    "HsscMonthOfPassing":form.value.hmpass,
    "HsscYearOfPassing":parseInt(form.value.hypass),
    "HsscTotalMarks":parseInt(form.value.hmobt),
    "HsscMarkOutOf":parseInt(form.value.hmout),
    "HsscPercentage":parseFloat(form.value.hper),
    "HsscClassObtained":form.value.hcobt,
    "Scholorship":"Minority",
    "CoCurricularActivities":form.value.activities,
    "ExtraCurricularActivities":form.value.exactivities,
    "SportsName":form.value.sport,
    "SportsLevelOfParticipation":form.value.sportLevel
  }
  console.log(Student);
  //this.studentService.AddStudent(Student);
  this.http.post('/api/v1/studentdetails',JSON.stringify(Student))
    .subscribe(response=>{
      this.alertService.success(response.json());
      console.log(response);
    })

 }

 getDivision(Course){
    console.log(Course.value);
    if(Course.value != ""){
      this.http.get('/api/v1/finddivision/'+Course.value)
      .subscribe(response=>{
        this.DivisionData = response.json();
        console.log(this.DivisionData);
      })
    }
 }

 setval(response){
   if(response=="true"){
     return "yes"
   }
   else {
     return "no";
   }
 }

 pobt:number;
smout:any;
mobt:any;


hper: number;
hmout: any;
hmobt: any;


 total(total){
  console.log(total);
  this.smout=total;
  this.pobt=this.percssc();

  }



   marksoutssc(total){
     this.smout=total;
     console.log(total)
     this.pobt=null;
     this.pobt=this.percssc();

   }
   marksobt(marksobt){
    this.pobt=null;
    this.smout=null;
     this.mobt = marksobt;

   }
   percssc(){
     var a= (this.mobt/this.smout) * 100;
     if(a>=70 && a<=100){
       this.cobt="Distinction";
     }
     else if(a>=60 && a<70){
      this.cobt="First Class";
     }
     else if(a>=40 && a<60){
      this.cobt="Second Class";
     }

     else if(a>=35 && a<40){
      this.cobt="Pass Class";
     }

     else if(a>=0 && a<35){
      this.cobt="Fail";
     }

     return a;

   }
   perce(){
     var a = (this.hmobt / this.hmout) * 100;
     if(a>=70 && a<=100){
      this.hcobt="Distinction";
    }
    else if(a>=60 && a<70){
     this.hcobt="First Class";
    }
    else if(a>=40 && a<60){
     this.hcobt="Second Class";
    }

    else if(a>=35 && a<40){
     this.hcobt="Pass Class";
    }

    else if(a>=0 && a<35){
     this.hcobt="Fail";
    }

     return a;
   }
   hmarksobt(hmobt){
     this.hper=null;
     console.log(hmobt);
     this.hmobt = hmobt
     this.hmout=null;
   }
   marksouthssc(hmout){
     this.hmout = hmout
     console.log(hmout);

     this.hper = this.perce()
   }







}
