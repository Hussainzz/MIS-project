import { AlertService } from './../../Services/alert.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent{

  field:any;

  Designations: any[];
  constructor(private http:Http,private alertService:AlertService) {
    this.http.get('/api/v1/getDesignation')
    .subscribe(response=>{
      this.Designations = response.json();
    })
  }

  submit(DesignationName){
    var Designation = {
      DesignationName : DesignationName.value
    }
    this.http.post('/api/v1/addDesignation',Designation)
    .subscribe(response=>{
      this.alertService.success(response.json())
      this.http.get('/api/v1/getDesignation')
    .subscribe(response=>{
      this.Designations = response.json();
    })
    })

  }

  Delete(Designation){
    let id = Designation.Dsid;
    this.http.delete('/api/v1/DesignationDelete/'+id)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.Designations.indexOf(Designation);
      this.Designations.splice(index,1);

    })
  }
  Enter(value,DesName){

    this.field =!this.field;
  var Designation={
    DesignationName: DesName.value
  }
  console.log(Designation);
  if(value.DesignationName != DesName.value){
  this.http.put('/api/v1/DesignationEdit/'+value.Dsid,Designation)
  .subscribe(response=>{
    this.alertService.success(response.json());
  })
}
}

}
