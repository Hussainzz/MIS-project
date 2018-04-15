import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent{


  parameter : any;
  data : any;
  constructor(private http:Http, private Route:ActivatedRoute, private router:Router) {
    this.Route.paramMap
    .subscribe(params=>{
      this.parameter = params.get('Id');
      console.log(this.parameter);
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


}
