import { Http } from '@angular/http';
import { AlertService } from './../../../../Services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent{

  BookDatas : any[];
  field:any;

  constructor(private http:Http,private alertService:AlertService) {
    this.http.get('/api/v1/getAllSections')
    .subscribe(response=>{
      this.BookDatas = response.json();
    })
  }

  SaveSection(SectionName){
    let Section = {
      SectionName : SectionName.value
    }
    console.log(Section);
    this.http.post('/api/v1/addbooksection',JSON.stringify(Section))
    .subscribe(response=>{
      this.alertService.success(response.json())
      console.log(response);
        this.http.get('/api/v1/getAllSections')
        .subscribe(response=>{
        this.BookDatas = response.json();
      })
    })
  }
  Delete(Section){
    let id = Section.Bsid;
    this.http.delete('/api/v1/DeleteSection/'+id)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.BookDatas.indexOf(Section);
      this.BookDatas.splice(index,1);

    })
  }
  Enter(value,SectionName){

    this.field =!this.field;
  var Section={
    SectionName: SectionName.value
  }
  console.log(Section);
  if(value.SectionName != SectionName.value){
  this.http.put('/api/v1/EditSection/'+value.Bsid,Section)
  .subscribe(response=>{
    this.alertService.success(response.json());
  })
}
}

}
