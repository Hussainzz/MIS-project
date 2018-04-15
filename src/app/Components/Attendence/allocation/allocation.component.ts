import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { years, semesters } from './../../../data-model';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../Services/alert.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent{

  years = years;
  semesters = semesters;
  Subjects:any[];
  Divisions: any[];
  Staffs : any[];
  Allocations : any[];
  constructor(private alertService:AlertService, private http:Http, private router:Router) {

    this.http.get('/api/v1/allocationGetAll')
    .subscribe(response=>{
      this.Allocations = response.json();
      console.log(this.Allocations[0]);
    })

    this.http.get('/api/v1/getdivision')
    .subscribe(response=>{
      this.Divisions = response.json();
    })
    this.http.get('/api/v1/staffmemberGetAll')
      .subscribe(response=>{
        this.Staffs = response.json();
      })

      this.http.get('/api/v1/getsubject')
      .subscribe(response=>{
        this.Subjects = response.json();
      })
      console.log(this.Divisions);
      console.log(this.Staffs);
      console.log(this.Subjects);
    }
    onSubmit(form : NgForm){
      console.log(form.value);
      let Allocation = {
        AcademicYear: parseInt(form.value.AcademicYear),
        Division: {
          Did: parseInt(form.value.Division)
        },
        Semester:form.value.Semester,
        SessionNumbers:form.value.Sessions,
        StaffMember:{
          StaffId:parseInt(form.value.Staff)
        },
        Subjects:{
          Subid:parseInt(form.value.Subject)
        }
      }
      console.log(Allocation);
      this.http.post('/api/v1/addallocation',Allocation)
      .subscribe(response=>{
        this.alertService.success(response.json());
        this.http.get('/api/v1/allocationGetAll')
    .subscribe(response=>{
      this.Allocations = response.json();
      console.log(this.Allocations);
    })

      })
    }

    JumpToAllocate(){
      this.router.navigate(['attendenceallocation'])
    }

    JumpToView(){
      this.router.navigate(['viewallocation'])
    }

}
