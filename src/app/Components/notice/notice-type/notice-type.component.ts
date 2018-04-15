import { AlertService } from './../../../Services/alert.service';
/* import { Http } from '@angular/http'; */
import {Http} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticeService } from './../../../Services/notice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-notice-type',
  templateUrl: './notice-type.component.html',
  styleUrls: ['./notice-type.component.css']
})
export class NoticeTypeComponent{

  field:any;
  typeName : any[];
  datas : any[];

  constructor(private noticeService: NoticeService,private http:Http, private alertService:AlertService) {
    this.http.get('/api/v1/getnoticeType')
    .subscribe(response=>{
      this.datas = response.json();
    })
   }


  createType(noticetypeName: HTMLInputElement){
    let typeName = { noticeTypeName: noticetypeName.value};
    this.http.post('/api/v1/newnoticeType', JSON.stringify(typeName))
      .subscribe((response)=>{
        this.alertService.success(response.json());
    this.http.get('/api/v1/getnoticeType')
    .subscribe(response=>{
      this.datas = response.json();
    })
    })

    console.log(this.datas);

    /* this.http.get('http://127.0.0.1:8080/v1/getnoticeType')
    .subscribe(response=>{
      this.datas=response.json();
      console.log(this.datas);
    }) */
  }

  deleteType(NoticeType){
    let s = NoticeType.Ntid;
    this.http.delete('/api/v1/noticeTypeDelete/'+s)
    .subscribe(response=>{
      console.log(response);
      let index = this.datas.indexOf(NoticeType);
      this.datas.splice(index,1);
    })

    }

    Enter(value,TN){

        this.field =!this.field;
      var NoticeType={
        NoticeTypeName: TN.value
      }
      console.log(NoticeType);
      if(value.NoticeTypeName!=TN.value){
      this.http.put('/api/v1/noticeTypeEdit/'+value.Ntid,NoticeType)
      .subscribe(response=>{
        this.alertService.success(response.json());
      })
    }
    }

}
