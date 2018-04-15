import { AlertService } from './../../../Services/alert.service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BloodGroups, Genders, MStatus, Class, DeathStatus, years, months} from '../../../data-model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent {
  Genders = Genders;
  BloodGroups = BloodGroups;
  MStatus = MStatus;
  Class = Class;
  DeathStatus = DeathStatus;
  months = months;
  years = years;
  data : any;
  parameter : string;



  constructor(private http:Http,private router:Router, private route:ActivatedRoute,private alertService:AlertService) {
    this.route.paramMap
    .subscribe(params=>{
      this.parameter = params.get('Id');
    })
    this.http.get('/api/v1/student/'+this.parameter)
    .subscribe(response=>{
      let datas = response.json();
      this.data = datas[0];
      console.log(this.data);
    })
  }

  ProfileSwitch(Id){
    console.log(Id);
    this.router.navigate(['/studentprofile',Id]);
  }

  UpdateSwitch(Id){
    console.log(Id);
    this.router.navigate(['/studentupdate',Id]);
  }

  onUpdate(Sid, FirstName, MiddleName,LastName, Gen, DOB, POB, MS, Religion, Nationality, C, MobNumb, BG, BankName, Account, BranchAddress, LandLineNumber, PMN, Email, Address, FatherName, FDS, FatherOccupation,MotherName, MDS, MotherOccupation,ParentEmail, SiblingName,GuardianName,GuardianOccupation,GuardianRelation,GuardianAddress, SscBoardName, SscBoardNumber, SSCMonth,SSCYear,SscMarks, SscMarksOutOf, SscPercentage, SscClass, HsscBoardName, HsscStream, HsscNumber,HsscMonth, HsscYear, HsscMarks,HsscMarksOutOf, HsscPercentage, HsscClass){
    let Student= {
      "FirstName":FirstName.value,
      "MiddleName":MiddleName.value,
      "LastName":LastName.value,
      "Gender":Gen.value,
      "Dob": DOB.value,
      "PlaceOfBirth": POB.value,
      "MaritalStatus": MS.value,
      "Religon": Religion.value,
      "Nationality": Nationality.value,
      "Category": C.value,
      "MobileNumber": MobNumb.value,
      "BloodGroup": BG.value,
      "BankName": BankName.value,
      "AccountNumber": Account.value,
      "BranchAddress": BranchAddress.value,
      "LandLineNumber":LandLineNumber.value,
      "ParentMobileNumber":PMN.value,
      "Email":Email.value,
      "ResidentialAddress":Address.value,
      "FatherName":FatherName.value,
      "FatherStatus": FDS.value,
      "FatherOccupation":FatherOccupation.value,
      "MotherName":MotherName.value,
      "MotherStatus":MDS.value,
      "MotherOccupation":MotherOccupation,
      "ParentEmail":ParentEmail.value,
      "SiblingName":SiblingName.value,
      "SscBoard":SscBoardName.value,
      "SscSeatNo":SscBoardNumber.value,
      "SscMonthOfPassing":SSCMonth.value,
      "SscYearOfPassing":parseInt(SSCYear.value),
      "SscTotalMarks":parseInt(SscMarks.value),
      "SscMarkOutOf":parseInt(SscMarksOutOf.value),
      "SscPercentage":parseFloat(SscPercentage.value),
      "SscClassObtained":SscClass.value,
      "HsscBoard":HsscBoardName.value,
      "HsscStream":HsscStream.value,
      "HsscSeatNo":HsscNumber.value,
      "HsscMonthOfPassing":HsscMonth.value,
      "HsscYearOfPassing":parseInt(HsscYear.value),
      "HsscTotalMarks":parseInt(HsscMarks.value),
      "HsscMarkOutOf":parseInt(HsscMarksOutOf.value),
      "HsscPercentage":parseFloat(HsscPercentage),
      "HsscClassObtained":HsscClass.value,

    }
    console.log(Student);
    console.log(Sid);
    this.http.put('/api/v1/studentEdit/'+Sid, Student)
    .subscribe(response=>{
      this.alertService.success(response.json())
    })

  }

}
