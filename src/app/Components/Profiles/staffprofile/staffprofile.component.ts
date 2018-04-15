import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {TabsModule} from "ng2-tabs";

@Component({
  selector: 'app-staffprofile',
  templateUrl: './staffprofile.component.html',
  styleUrls: ['./staffprofile.component.css']
})
export class StaffprofileComponent{

  parameter : any;
  data : any;
  constructor(private http:Http,private route: ActivatedRoute, private router:Router) {

    this.route.paramMap
    .subscribe(params=>{
      this.parameter = params.get('Id');
      console.log(this.parameter)
    })

    this.http.get('/api/v1/staff/'+this.parameter)
      .subscribe(response=>{
        let datas = response.json();
        this.data = datas[0];
        console.log(this.data);

      });


  }
  OverviewSwitch(Id){
    console.log(Id);
    this.router.navigate(['/staffprofile',Id]);
  }

  UpdateSwitch(Id){
    console.log(Id);
    this.router.navigate(['/staffupdate',Id])
  }


}
