
import { StudentService } from './Services/student.service';
import { HttpModule } from '@angular/http';
import { NoticeService } from './Services/notice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TabsModule} from "ng2-tabs";


import { AppComponent } from './app.component';
import { SubjectChoiceComponent } from './student-management/subject-choice/subject-choice.component';
import { IndividualSubjectChoiceComponent
} from './student-management/subject-choice/individual-subject-choice/individual-subject-choice.component';
import { BulkSubjectChoiceComponent
} from './student-management/subject-choice/bulk-subject-choice/bulk-subject-choice.component';
import { SearchComponent } from './student-management/search/search.component';
import { ManageAdmissionComponent } from './admissions/manage-admission/manage-admission.component';
import { ProspectusComponent } from './admissions/manage-admission/prospectus/prospectus.component';
import { SpecialCaseComponent } from './admissions/manage-admission/special-case/special-case.component';
import { UndertakingContentComponent } from './admissions/manage-admission/undertaking-content/undertaking-content.component';
import { VerificationComponent } from './admissions/verification/verification.component';
import { ShortlistComponent } from './admissions/shortlist/shortlist.component';
import { AdmitComponent } from './admissions/admit/admit.component';
import { FinalizeComponent } from './admissions/finalize/finalize.component';
import { SearchStudentsComponent } from './admissions/search-students/search-students.component';
import { StudentLookupComponent } from './admissions/student-lookup/student-lookup.component';
import { StaffMembersComponent } from './staff-management/staff-members/staff-members.component';
import { SearchStaffComponent } from './staff-management/search-staff/search-staff.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AllocateDivisionComponent } from './student-management/allocate-division/allocate-division.component';
import { AllocateRollnoComponent } from './student-management/allocate-rollno/allocate-rollno.component';
import { ManageAcademicsComponent } from './student-management/manage-academics/manage-academics.component';
import { AcademicProgressionComponent } from './student-management/academic-progression/academic-progression.component';
import { BulkUploadComponent } from './student-management/bulk-upload/bulk-upload.component';
import { ImportComponent } from './student-management/import/import.component';
import { ExportComponent } from './student-management/export/export.component';
import { LoginComponent } from './Components/login/index';
import { AlertComponent } from './Directives/alert/index';
import { AlertService, AuthenticationService ,UserService } from './Services/index';
import { AuthGuard } from './Guards/index';
import { AddCourseComponent } from './Components/add-course/add-course.component';
/* 1519796447  */
//temporary
import { AddNewCourseService } from './Services/add-new-course.service';
import { NewNoticeComponent } from './Components/notice/new-notice/new-notice.component';
import { NoticeTypeComponent } from './Components/notice/notice-type/notice-type.component';
import { SearchstaffComponent } from './Components/staffManagement/searchstaff/searchstaff.component';
import { StaffmanageComponent } from './Components/staffManagement/staffmanage/staffmanage.component';
import { ImportstaffComponent } from './Components/staffManagement/importstaff/importstaff.component';
import { StudentApplicationComponent } from './student-management/student-application/student-application.component';
import { ViewNoticeComponent } from './Components/notice/view-notice/view-notice.component';
import { StaffprofileComponent } from './Components/Profiles/staffprofile/staffprofile.component';
import { StaffupdateComponent } from './Components/Profiles/staffupdate/staffupdate.component';
import { AddDivisionComponent } from './Components/add-division/add-division.component';
import { StudentprofileComponent } from './Components/Profiles/studentprofile/studentprofile.component';
import { StudentupdateComponent } from './Components/Profiles/studentupdate/studentupdate.component';
import { AllocationComponent } from './Components/Attendence/allocation/allocation.component';
import { ViewattendComponent } from './Components/Attendence/viewattend/viewattend.component';
import { ProjectComponent } from './Components/Attendence/Project/project/project.component';
import {PracticalComponent} from './Components/Attendence/Practical/practical/practical.component';
import { AddnewbookComponent } from './Components/Library/BookManagement/addnewbook/addnewbook.component';
import { EditabookComponent } from './Components/Library/BookManagement/editabook/editabook.component';
import { SectionsComponent } from './Components/Library/Setting/sections/sections.component';
import { NoticeEditComponent } from './Components/notice/notice-edit/notice-edit.component';
import { ViewPracticalComponent } from './Components/Attendence/Practical/view-practical/view-practical.component';
import { ViewProjectComponent } from './Components/Attendence/Project/view-project/view-project.component';
import { AddDepartmentComponent } from './Components/add-department/add-department.component';
import { AddContractTypeComponent } from './Components/add-contract-type/add-contract-type.component';
import { AddSubjectComponent } from './Components/add-subject/add-subject.component';
import { AddDesignationComponent } from './Components/add-designation/add-designation.component';
import { ViewIndividualSubjectChoiceComponent } from './student-management/subject-choice/individual-subject-choice/view-individual-subject-choice/view-individual-subject-choice.component';


@NgModule({
  declarations: [
    AppComponent,
    SubjectChoiceComponent,
    IndividualSubjectChoiceComponent,
    BulkSubjectChoiceComponent,
    SearchComponent,
    ManageAdmissionComponent,
    ProspectusComponent,
    SpecialCaseComponent,
    UndertakingContentComponent,
    VerificationComponent,
    ShortlistComponent,
    AdmitComponent,
    FinalizeComponent,
    SearchStudentsComponent,
    StudentLookupComponent,
    AllocateDivisionComponent,
    AllocateRollnoComponent,
    SearchStudentsComponent,
    ManageAcademicsComponent,
    AcademicProgressionComponent,
    BulkUploadComponent,
    ImportComponent,
    ExportComponent,
    StaffMembersComponent,
    SearchStaffComponent,
    DashboardComponent,
    HeaderComponent,
   LoginComponent,
   AlertComponent,
   AddCourseComponent,
   NewNoticeComponent,
   NoticeTypeComponent,
   SearchstaffComponent,
   StaffmanageComponent,
   ImportstaffComponent,
   StudentApplicationComponent,
   ViewNoticeComponent,
   StaffprofileComponent,
   StaffupdateComponent,
   AddDivisionComponent,
   StudentprofileComponent,
   StudentupdateComponent,
   AllocationComponent,
   ViewattendComponent,
   ProjectComponent,
   PracticalComponent,
   AddnewbookComponent,
   EditabookComponent,
   SectionsComponent,
   NoticeEditComponent,
   ViewPracticalComponent,
   ViewProjectComponent,
   AddDepartmentComponent,
   AddContractTypeComponent,
   AddSubjectComponent,
   AddDesignationComponent,
   ViewIndividualSubjectChoiceComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    TabsModule,




  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    NoticeService,
    StudentService,
    //temporary
    AddNewCourseService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
