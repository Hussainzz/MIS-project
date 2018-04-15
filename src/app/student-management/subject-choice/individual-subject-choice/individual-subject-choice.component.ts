import { Router } from '@angular/router';
import { AlertService } from './../../../Services/alert.service';
import { Http } from '@angular/http';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Component} from '@angular/core';
import { semesters } from '../../../data-model';

@Component({
  selector: 'app-individual-subject-choice',
  templateUrl: './individual-subject-choice.component.html',
  styleUrls: ['./individual-subject-choice.component.css']
})
export class IndividualSubjectChoiceComponent {

  /* Subjects = [
    {
      Id: 2,
      Name: "Accounts",
      Checked: false
    },
    {
      Id: 3,
      Name: "English",
      Checked: true
    }
  ] */

  DataBlank:any;
  Subjects:any[];
  Students:any[];
  SubjectChoices:any[];
  formData: any;
  AcademicYear:any;
  Semester:any;
  Data : any;
  StudUrl = "/api/v1/studentGetAll/?query=";
  constructor(private http:Http,private formBuilder: FormBuilder,private alertService:AlertService,private router:Router){

    this.http.get('/api/v1/getsubject')
    .subscribe(response=>{
      this.Subjects = response.json();
    })

    this.http.get('/api/v1/studentGetAll')
    .subscribe(response=>{
      this.Students = response.json();
    })

    this.http.get('/api/v1/getsubjectchoice')
    .subscribe(response=>{
      this.SubjectChoices = response.json();
    })

  }
  semesters = semesters;

  onSubmit(subjectChoice:NgForm){
    this.Semester = subjectChoice.value.semester;
    this.AcademicYear = subjectChoice.value.academicyear
        let QueryUrl = "RollNo:"+subjectChoice.value.rollNumber+",Semester:"+this.Semester+",AdmissionYear:"+this.AcademicYear;
        this.http.get(this.StudUrl+QueryUrl)
    .subscribe(response=>{
      if(response.json() != null){
      this.Data = response.json()[0];
      console.log(this.Data);
      }/* else{
        this.Data.Course.CourseShortName="";
        this.Data.RegistrationId="";
        this.alertService.error("error: no records found")
      } */

    })
  }
  Submit(Subject){
    let Student = {
      "AcademicYear": parseInt(this.Data.AdmissionYear),
      "Course": {
        "Cid": parseInt(this.Data.Course.Cid)
      },
      "Semester": this.Data.Semester,
      "StudentDetails":{
        "Sid": parseInt(this.Data.Sid)
        },
      "Subjects": {
        "Subid": parseInt(Subject.value)
      }
    }
    console.log(Student);
    this.http.post('/api/v1/addsubjectchoice', Student)
    .subscribe(response=>{
      this.alertService.success(response.json());
    })
  }

  View(){
    this.router.navigate(['viewsubjectchoices']);
  }
  Add(){
    this.router.navigate(['subject_choice'])
  }
}


