import { AlertService } from './../../Services/alert.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AddNewCourseService } from '../../Services/add-new-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  model: any = {};
  CourseData: any[];
  Division: any = {};
  field: any;

  constructor(
    private addNewCourseService: AddNewCourseService,
    private http: Http,
    private alertService: AlertService
  ) {
    this.http.get('/api/v1/getcourse')
      .subscribe(response => {
        this.CourseData = response.json();
        console.log(this.CourseData);
      })
  }

  createCourse() {
    console.log(this.model);
    this.addNewCourseService.create(this.model)
      .subscribe(
      data => {
        console.log(data);
        this.alertService.success(data.toString());
      },
      error => {
        console.log(error);
      }
      )
  }

  Delete(Course) {
    let id = Course.Cid;
    this.http.delete('/api/v1/CourseDelete/' + id)
      .subscribe(response => {
        this.alertService.success(response.json());
        let index = this.CourseData.indexOf(Course);
        this.CourseData.splice(index, 1);

      })
  }
  Enter(value, CSN, CFN, CT, RP) {

    var Course = {
      CourseShortName: CSN.value,
      CourseFullName: CFN.value,
      CourseType: CT.value,
      RollPrefix: RP.value
    }
    console.log(Course);


    this.field = !this.field;
    if (value.CourseShortName!=CSN.value||value.CourseFullName!=CFN.value||value.CourseType!=CT.value||value.RollPrefix!=RP.value) {

      console.log(Course);

      this.http.put('/api/v1/CourseEdit/' + value.Cid, Course)
        .subscribe(response => {
          this.alertService.success(response.json());
        })
    }
  }
}
