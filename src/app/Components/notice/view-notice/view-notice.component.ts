import { AlertService } from './../../../Services/alert.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-notice',
  templateUrl: './view-notice.component.html',
  styleUrls: ['./view-notice.component.css']
})
export class ViewNoticeComponent{

  datas : any[];
  notices : any[];
  constructor(private http:Http,private router:Router,private alertService:AlertService) {

    this.http.get('/api/v1/getnoticeType')
    .subscribe(response=>{
      this.datas = response.json();
    });

   }



  SearchNotice(title:HTMLInputElement, type:HTMLInputElement){
    var notices : any[];
    let QueryUrl = '';
    if(title.value!="")
    {
        QueryUrl = "Nid:"+title.value;
    }
    if(type.value!=""){
      if(title.value==""){
        QueryUrl = QueryUrl+"NoticeType:"+type.value;
      }
      else{
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"NoticeType:"+type.value;
      }
    }

    console.log(QueryUrl);


    this.http.get('/api/v1/noticeS?query='+QueryUrl)
    .subscribe(response=>{
      if(response.json()==null){
        this.alertService.error("no records found");
        this.notices = null;
      }else{
      this.notices = response.json();
      this.alertService.clear();
      }
      //this.datas = response.json();
    });


  }
  editNotice(Notice){
    console.log(Notice.Ntid);
    let Id = Notice.Nid;
    this.router.navigate(['noticeedit',Id]);
  }
  deleteNotice(Notice){
    let noticeid = Notice.Nid;
    this.http.delete('/api/v1/noticedelete/'+noticeid)
    .subscribe(response=>{
      console.log(response);
      let index = this.notices.indexOf(Notice);
      this.notices.splice(index,1);
    });
  }

}
