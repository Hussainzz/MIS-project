import { Router } from '@angular/router';
import { years } from './../../../../data-model';
import { AlertService } from './../../../../Services/alert.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent {

  ProjectAllocationUrl = '/api/v1/getAllProject/?query=';

  Projects: any[];
  Staffs:any[];
  years = years;

  constructor(private http:Http,private alertService:AlertService,private router:Router) {
    this.http.get('/api/v1/staffmemberGetAll')
    .subscribe(response=>{
      this.Staffs = response.json();
    })
  }

  SearchProjectAllocations(AY,PN,St){
    let QueryUrl = '';
    if(AY.value!="")
    {
        QueryUrl = "AcademicYear:"+AY.value;
    }
    if(PN.value!=""){
      if(AY.value==""){
        QueryUrl = QueryUrl+"ProjectCode:"+PN.value;
      }
      else{
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"ProjectCode:"+PN.value;
      }
    }
    if(St.value!=""){
      if(AY.value=="" && PN.value==""){
        QueryUrl = QueryUrl+"StaffMember.StaffId:"+St.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"StaffMember.StaffId:"+St.value;
      }
    }
    console.log(QueryUrl);
    this.http.get(this.ProjectAllocationUrl+QueryUrl)
    .subscribe(response=>{
      if(response.json()==null){
        this.alertService.error("no records found");
        this.Projects = null;
      }else{
      this.Projects = response.json();
      this.alertService.clear();
      }
    })
  }
  DeleteProjectAllocation(ProAllocation){
    this.http.delete('/api/v1/deleteProject/'+ProAllocation.Paid)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.Projects.indexOf(ProAllocation);
      this.Projects.splice(index,1);
    })

  }

  JumpToAllocate(){
    this.router.navigate(['projectallocation'])
  }

  JumpToView(){
    this.router.navigate(['projectview'])
  }

}
