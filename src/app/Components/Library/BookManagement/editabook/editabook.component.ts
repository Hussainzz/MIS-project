import { Http } from '@angular/http';
import { AlertService } from './../../../../Services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editabook',
  templateUrl: './editabook.component.html',
  styleUrls: ['./editabook.component.css']
})
export class EditabookComponent{

  constructor(private http:Http, private alertService:AlertService) { }

  Books:any[];

  BookUrl = '/api/v1/getallbooks/?query=';

  SearchBooks(ISBN,BookName,Author){
    let QueryUrl = '';
    if(ISBN.value!="")
    {
        QueryUrl = "Isbn:"+ISBN.value;
    }
    if(BookName.value!=""){
      if(ISBN.value==""){
        QueryUrl = QueryUrl+"BookName:"+BookName.value;
      }
      else{
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"BookName:"+BookName.value;
      }
    }
    if(Author.value!=""){
      if(ISBN.value=="" && BookName.value==""){
        QueryUrl = QueryUrl+"Author:"+Author.value;
      }
      else {
        QueryUrl = QueryUrl+",";
        QueryUrl = QueryUrl+"Author:"+Author.value;
      }
    }
    this.http.get(this.BookUrl+QueryUrl)
    .subscribe(response=>{
      if(response.json()==null){
        this.alertService.error("no records found")
      }else{
        this.Books = response.json();
        this.alertService.clear();
      }

      console.log(this.Books);
    })
  }
  Delete(Book){
    console.log(Book);
    this.http.delete('/api/v1/deletebook/'+Book.Bid)
    .subscribe(response=>{
      this.alertService.success(response.json());
      let index = this.Books.indexOf(Book);
        this.Books.splice(index,1);
    })
  }
}
