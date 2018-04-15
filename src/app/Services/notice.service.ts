import { AlertService } from './alert.service';
import { NoticeType } from './../Models/Notice/NoticeType';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class NoticeService {

data : any[];


  constructor(private http: HttpClient, private h:Http, private alertService:AlertService) { }

  postNoticeType(typeName){
    let headers = new Headers({ 'Authorization': ''});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/v1/newnoticeType', JSON.stringify(typeName))
      .map((response: Response)=>{
        return response;
      })

  }

  postNotice(Notice) {
    return this.http.post('/api/v1/newnotice', Notice)
    .subscribe(response =>{
      this.alertService.success(response.toString());
    })
  }
}
