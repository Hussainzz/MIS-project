import { years } from './../../../../data-model';
import { Http } from '@angular/http';
import { AlertService } from './../../../../Services/alert.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.component.html',
  styleUrls: ['./addnewbook.component.css']
})
export class AddnewbookComponent {

  Sections : any[];
  years = years;
  Book: any;
  constructor(private alertService:AlertService,private http:Http) {
    this.http.get('/api/v1/getAllSections')
    .subscribe(response=>{
      this.Sections = response.json();
    })
  }

  AddBook(form: NgForm){
    console.log(form.value.Section)
    this.Book ={
      Author:form.value.Author,
      BookName: form.value.BookName,
      BookSection: {
        Bsid: parseInt(form.value.Section)
      },
      Classification: form.value.Classification,
      Edition: form.value.Edition,
      Isbn: form.value.ISBN,
      PublishPlace: form.value.PubLocation,
      PublishYear: parseInt(form.value.PubYear),
      Publisher: form.value.Publisher,
      TotalPages: form.value.NumberOfPages
    }
    console.log(this.Book)
    this.http.post('/api/v1/addbook/', JSON.stringify(this.Book))
    .subscribe(response=>{
      this.alertService.success(response.json());
    })
 }
}
