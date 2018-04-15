import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AlertService } from './../../../../Services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-individual-subject-choice',
  templateUrl: './view-individual-subject-choice.component.html',
  styleUrls: ['./view-individual-subject-choice.component.css']
})
export class ViewIndividualSubjectChoiceComponent{

  Subjects:any[];
  Students:any[];
  SubjectChoices:any[];

  constructor(private http:Http,private alertService:AlertService,private router:Router) {
    this.http.get('/api/v1/getsubject')
    .subscribe(response=>{
      this.Subjects=response.json();
    })

    this.http.get('/api/v1/studentGetAll')
    .subscribe(response=>{
      this.Students = response.json();
    })
  }

  SearchChoices(RN){
    let QueryUrl = '';
    if(RN.value!="")
    {
        QueryUrl = "StudentDetails.RollNo:"+RN.value;
    }
    /* if(Topic.value!=""){
      if(RN.value==""){
        QueryUrl = QueryUrl+"Subjects.Subid:"+Topic.value;
      }
      else{
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"Subjects.Subid:"+Topic.value;
      }
    } */

    this.http.get('/api/v1/getsubjectchoice/?query='+QueryUrl)
    .subscribe(response=>{
      if(response.json()!=null){
        this.SubjectChoices = response.json();
        this.alertService.clear();
      }
      else {
        this.SubjectChoices = null;
        this.alertService.error("Error no records found");
      }
    })
  }


  Delete(SubjectChoice){
    let id = SubjectChoice.Scid;
    console.log(id);
    this.http.delete('/api/v1/SubjectChoiceDelete/'+id)
    .subscribe(response=>{
      this.alertService.success(response.json())
      let index = this.SubjectChoices.indexOf(SubjectChoice);
      this.SubjectChoices.splice(index,1);
    })
  }

  View(){
    this.router.navigate(['viewsubjectchoices']);
  }
  Add(){
    this.router.navigate(['subject_choice'])
  }

}
