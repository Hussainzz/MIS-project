import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StudentService {

  constructor(private http:Http) { }

  AddStudent(Student) {
    return this.http.post('/api/v1/studentAdd', Student)
    .subscribe(response =>{
      console.log(response);
    })
  }

}
