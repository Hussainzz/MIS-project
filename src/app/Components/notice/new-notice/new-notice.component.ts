import { AlertService } from './../../../Services/alert.service';
import { Http } from '@angular/http';
import { NoticeService } from './../../../Services/notice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-notice',
  templateUrl: './new-notice.component.html',
  styleUrls: ['./new-notice.component.css']
})
export class NewNoticeComponent {
  datas : any[];
  Notice: any[];
  constructor(private noticeService: NoticeService,private http:Http,private alertService:AlertService) {
    this.http.get('/api/v1/getnoticeType')
    .subscribe(response=>{
      this.datas = response.json();
    })
   }

   /* "NoticeTitle": "Exam Result will be displayed Tommorw",
	"NoticeType": {
					"Ntid": 1

				  },
	"NoticeContent": "tommowr is a Exam" */
   createNotice(selectedTopic:HTMLInputElement,NoticeTitle:HTMLInputElement, NoticeDesc:HTMLInputElement){
    console.log(parseInt(selectedTopic.value));
    let Notice = {"noticeTitle": NoticeTitle.value,"NoticeType":{ "Ntid": parseInt(selectedTopic.value)},"NoticeContent": NoticeDesc.value};
    this.noticeService.postNotice(Notice);
  }

  clear(){
    this.alertService.clear();
  }

}
