import { semesters } from './../../data-model';
import { Http } from '@angular/http';
import { AlertService } from './../../Services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent{

  CourseData: any[];
  Subjects:any[];
  semesters = semesters;
  field:any;


  constructor(private http:Http,private alertService:AlertService) {
    this.http.get('/api/v1/getcourse')
    .subscribe(response=>{
      this.CourseData = response.json();
    })

    this.http.get('/api/v1/getsubject')
    .subscribe(response=>{
      this.Subjects = response.json();
    })
  }
  submit(Compulsory,Course,semester,SubjectCode,SubjectName){
    var Subject = {
      Compulsory : Compulsory.value,
      Course: {
        Cid: parseInt(Course.value)
      },
      Semester: semester.value,
      SubjectCode: SubjectCode.value,
      SubjectName: SubjectName.value
    }

    this.http.post('/api/v1/addsubject',Subject)
    .subscribe(response=>{
      this.alertService.success(response.json())
      this.http.get('/api/v1/getsubject')
    .subscribe(response=>{
      this.Subjects = response.json();
    })
    })
  }

  Delete(Subject){
    let id = Subject.Subid;
    this.http.delete('/api/v1/SubjectDelete/'+id)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.Subjects.indexOf(Subject);
      this.Subjects.splice(index,1);

    })
  }
  Enter(value,SubName,SubCode,SubComp,C,Sem){

    this.field =!this.field;
  var Subject={
    SubjectName: SubName.value,
    SubjectCode: SubCode.value,
    Compulsory: SubComp.value,
    Course:{
      Cid:parseInt(C.value)
    },
    Semester:Sem.value
  }
  console.log(Subject);
  if(value.SubjectName!=SubName.value||value.SubjectCode!=SubCode.value||value.Compulsory!=SubComp.value||value.Course.Cid!=parseInt(C.value)||value.Semester!=Sem.value){
  this.http.put('/api/v1/SubjectEdit/'+value.Subid,Subject)
  .subscribe(response=>{
    this.alertService.success(response.json());
  })
}
}
}
