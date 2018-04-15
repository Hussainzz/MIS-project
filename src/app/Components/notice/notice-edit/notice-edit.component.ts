import { ActivatedRoute } from '@angular/router';
import { AlertService } from './../../../Services/alert.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.component.html',
  styleUrls: ['./notice-edit.component.css']
})
export class NoticeEditComponent{

  param: any;
  notice: any;
  notices: any;
  noticeTypes: any;

  constructor(private http:Http, private alertService:AlertService, private route:ActivatedRoute) {
    this.route.paramMap
    .subscribe(response=>{
      this.param = response.get("Id");
      console.log(this.param);
    })
    this.http.get('/api/v1/notice/'+this.param)
    .subscribe(response=>{
      this.notice = response.json();
      this.notices = this.notice[0];
      console.log(this.notices);
    })
    this.http.get('/api/v1/getnoticeType')
    .subscribe(response=>{
      this.noticeTypes = response.json();
    })
  }

  editNotice(NoticeTitle,selectedTopic,NoticeDesc){
    var Notice = {"noticeTitle": NoticeTitle.value,"NoticeType":{ "Ntid": parseInt(selectedTopic.value)},"NoticeContent": NoticeDesc.value};
    console.log(Notice);
    this.http.put('/api/v1/noticeedit/'+this.param,Notice)
    .subscribe(response=>{
      this.alertService.success(response.json());
    })
  }


}
