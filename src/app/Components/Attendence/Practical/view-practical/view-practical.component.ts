import { Router } from '@angular/router';
import { semesters, years } from './../../../../data-model';
import { Http } from '@angular/http';
import { AlertService } from './../../../../Services/alert.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-practical',
  templateUrl: './view-practical.component.html',
  styleUrls: ['./view-practical.component.css']
})
export class ViewPracticalComponent {
  PracticalAllocationUrl = '/api/v1/getAllPractical/?query=';

  years=years;
  semesters = semesters;
  Staffs:any[];
  Subjects:any[];




  constructor(private http:Http,private alertService:AlertService,private router:Router) {



    this.http.get('/api/v1/staffmemberGetAll')
    .subscribe(response=>{
      this.Staffs = response.json();
    });

    this.http.get('/api/v1/getsubject')
    .subscribe(response=>{
      this.Subjects = response.json();
    });
  }
  PracticalAllocations:any[];
  Search(AY,Sem,Sub){
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
    if(Sub.value!=""){
      if(AY.value=="" && Sem.value==""){
        QueryUrl = QueryUrl+"Subjects.Subid:"+Sub.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"Subjects.Subid:"+Sub.value;
      }
    }
    console.log(QueryUrl);
    this.http.get(this.PracticalAllocationUrl+QueryUrl)
    .subscribe(response=>{
      if(response.json()==null){
        this.alertService.error("no records found");
        this.PracticalAllocations = null;
      }
      else{
        this.PracticalAllocations = response.json();
        this.alertService.clear();
      }

    });

  }
  Delete(allocation){
    var id = allocation.Prid;
    this.http.delete('/api/v1/deletePracticalAllocation/'+id)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.PracticalAllocations.indexOf(allocation);
      this.PracticalAllocations.splice(index,1);
    });

  }

  JumpToAllocate(){
    this.router.navigate(['practicalallocation']);
  }

  JumpToView(){
    this.router.navigate(['practicalview']);
  }

}
