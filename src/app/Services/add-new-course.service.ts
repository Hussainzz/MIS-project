import { Course } from './../Models/Course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'


@Injectable()
export class AddNewCourseService {

  constructor(private http:HttpClient) { }

  create(course: Course) {
    return this.http.post('/api/v1/addcourse', course);
  }
}
