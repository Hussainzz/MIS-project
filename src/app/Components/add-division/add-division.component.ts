import { AlertService } from './../../Services/alert.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.css']
})
export class AddDivisionComponent{
  Division: any;
  model: any= {};
  CourseData : any[];
  field:any;

  DivisionData: any[];
  constructor(
    private http:Http,
    private alertService: AlertService
  ) {
    this.http.get('/api/v1/getcourse')
      .subscribe(response=>{
      this.CourseData = response.json();
      console.log(this.CourseData);

      this.http.get('/api/v1/getdivision')
      .subscribe(response=>{
        this.DivisionData = response.json();
        console.log(this.DivisionData);
      })
  })
  }

  createDivision(){
    console.log(this.model)
    let Division = {"DivisionName": this.model.DivisionName,"Course":{ "Cid": parseInt(this.model.Course)},"YearClass": this.model.YearType};
    console.log(Division);
    this.http.post('/api/v1/adddivision',JSON.stringify(Division))
      .subscribe(
        data=> {
          console.log(data)
          this.alertService.success(data.json());
            this.http.get('/api/v1/getdivision')
            .subscribe(response=>{
                this.DivisionData = response.json();
                console.log(this.DivisionData);
            })
        },
        error=> {
            console.log(error);
        }
      )
  }

  Delete(Division){
    let id = Division.Did;
    this.http.delete('/api/v1/DivisionDelete/'+id)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.DivisionData.indexOf(Division);
      this.DivisionData.splice(index,1);

    })
  }
  Enter(value,DivName,C,YC){

    this.field =!this.field;
  var Division={
    DivisionName: DivName.value,
    Course:{
      Cid:parseInt(C.value)
    },
    YearClass:YC.value
  }
  console.log(Division);
  if(value.DivisionName != DivName.value||value.Course.Cid!=parseInt(C.value)||value.YearClass!=YC.value){
  this.http.put('/api/v1/DivisionEdit/'+value.Did,Division)
  .subscribe(response=>{
    this.alertService.success(response.json());
  })
}
}

}
