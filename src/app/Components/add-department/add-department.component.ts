import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../Services/index';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  Departments:any[];
  field:any;


  constructor(private http:Http,private alertService:AlertService) {
    this.http.get('/api/v1/getDepartment')
    .subscribe(response=>{
      this.Departments = response.json();
    })
  }

  submit(DepartmentName){
    var Department = {
      DepartmentName : DepartmentName.value
    }
    this.http.post('/api/v1/addDepartment',Department)
    .subscribe(response=>{
      this.alertService.success(response.json())
      this.http.get('/api/v1/getDepartment')
    .subscribe(response=>{
      this.Departments = response.json();
    })
    })
  }

  Delete(Department){
    let id = Department.Depid;
    this.http.delete('/api/v1/DepartmentDelete/'+id)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.Departments.indexOf(Department);
      this.Departments.splice(index,1);

    })
  }
  Enter(value,DepName){

    this.field =!this.field;
  var Department={
    DepartmentName: DepName.value
  }
  console.log(Department);
  if(value.DepartmentName != DepName.value){
  this.http.put('/api/v1/DepartmentEdit/'+value.Depid,Department)
  .subscribe(response=>{
    this.alertService.success(response.json());
  })
}
}
}
