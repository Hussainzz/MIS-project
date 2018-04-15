import { ViewIndividualSubjectChoiceComponent } from './student-management/subject-choice/individual-subject-choice/view-individual-subject-choice/view-individual-subject-choice.component';
import { AddSubjectComponent } from './Components/add-subject/add-subject.component';
import { AddContractTypeComponent } from './Components/add-contract-type/add-contract-type.component';
import { AddDesignationComponent } from './Components/add-designation/add-designation.component';
import { AddDepartmentComponent } from './Components/add-department/add-department.component';
import { ViewProjectComponent } from './Components/Attendence/Project/view-project/view-project.component';
import { ViewPracticalComponent } from './Components/Attendence/Practical/view-practical/view-practical.component';
import { NoticeEditComponent } from './Components/notice/notice-edit/notice-edit.component';
import { SectionsComponent } from './Components/Library/Setting/sections/sections.component';
import { EditabookComponent } from './Components/Library/BookManagement/editabook/editabook.component';
import { AddnewbookComponent } from './Components/Library/BookManagement/addnewbook/addnewbook.component';
import { ProjectComponent } from './Components/Attendence/Project/project/project.component';
import { PracticalComponent } from './Components/Attendence/Practical/practical/practical.component';
import { ViewattendComponent } from './Components/Attendence/viewattend/viewattend.component';
import { AllocationComponent } from './Components/Attendence/allocation/allocation.component';
import { StudentupdateComponent } from './Components/Profiles/studentupdate/studentupdate.component';
import { StudentprofileComponent } from './Components/Profiles/studentprofile/studentprofile.component';
import { AddDivisionComponent } from './Components/add-division/add-division.component';
import { StaffupdateComponent } from './Components/Profiles/staffupdate/staffupdate.component';


import { StaffprofileComponent } from './Components/Profiles/staffprofile/staffprofile.component';
import { ViewNoticeComponent } from './Components/notice/view-notice/view-notice.component';
import { StaffmanageComponent } from './Components/staffManagement/staffmanage/staffmanage.component';
import { SearchstaffComponent } from './Components/staffManagement/searchstaff/searchstaff.component';
import { ImportstaffComponent } from './Components/staffManagement/importstaff/importstaff.component';
import { NoticeTypeComponent } from './Components/notice/notice-type/notice-type.component';
import { NewNoticeComponent } from './Components/notice/new-notice/new-notice.component';
import { AddCourseComponent } from './Components/add-course/add-course.component';
import { AuthGuard } from './Guards/auth.guard';
import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAdmissionComponent } from './admissions/manage-admission/manage-admission.component';
import { VerificationComponent } from './admissions/verification/verification.component';
import { ShortlistComponent } from './admissions/shortlist/shortlist.component';
import { AdmitComponent } from './admissions/admit/admit.component';
import { FinalizeComponent } from './admissions/finalize/finalize.component';
import { SearchComponent } from './student-management/search/search.component';
import { StudentLookupComponent } from './admissions/student-lookup/student-lookup.component';
import { SubjectChoiceComponent } from './student-management/subject-choice/subject-choice.component';
import { AllocateDivisionComponent } from './student-management/allocate-division/allocate-division.component';
import { AllocateRollnoComponent } from './student-management/allocate-rollno/allocate-rollno.component';
import { SearchStudentsComponent } from './admissions/search-students/search-students.component';
import { ManageAcademicsComponent } from './student-management/manage-academics/manage-academics.component';
import { AcademicProgressionComponent } from './student-management/academic-progression/academic-progression.component';
import { BulkUploadComponent } from './student-management/bulk-upload/bulk-upload.component';
import { ImportComponent } from './student-management/import/import.component';
import { ExportComponent } from './student-management/export/export.component';
import { BulkSubjectChoiceComponent } from './student-management/subject-choice/bulk-subject-choice/bulk-subject-choice.component';
import { IndividualSubjectChoiceComponent } from './student-management/subject-choice/individual-subject-choice/individual-subject-choice.component';
import { ProspectusComponent } from './admissions/manage-admission/prospectus/prospectus.component';
import { SpecialCaseComponent } from './admissions/manage-admission/special-case/special-case.component';
import { UndertakingContentComponent } from './admissions/manage-admission/undertaking-content/undertaking-content.component';
import { LoginComponent } from './Components/login/index';
import { StudentApplicationComponent } from './student-management/student-application/student-application.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent ,canActivate:[AuthGuard]},
    { path: 'manage-admission', component: ManageAdmissionComponent ,canActivate:[AuthGuard], children:[
        //add path for enable disable stream here
        {path: 'prospectus',canActivate:[AuthGuard], component: ProspectusComponent},
        {path: 'special_case',canActivate:[AuthGuard], component: SpecialCaseComponent},
        {path: 'undertaking',canActivate:[AuthGuard], component: UndertakingContentComponent}
    ] },
    {path: 'add_new_student', canActivate:[AuthGuard], component: StudentApplicationComponent},
    { path: 'verification',canActivate:[AuthGuard], component:  VerificationComponent},
    { path: 'shortlist',canActivate:[AuthGuard], component: ShortlistComponent },
    { path: 'admit',canActivate:[AuthGuard], component: AdmitComponent },
    { path: 'finalise',canActivate:[AuthGuard], component: FinalizeComponent},
    { path: 'search',canActivate:[AuthGuard], component: SearchComponent },
    { path: 'student-lookup',canActivate:[AuthGuard], component: StudentLookupComponent},
    {path: 'subject_choice',canActivate:[AuthGuard], component: IndividualSubjectChoiceComponent, children:[
        {path: 'bulk',canActivate:[AuthGuard], component: BulkSubjectChoiceComponent},
        {path: 'individual',canActivate:[AuthGuard], component: IndividualSubjectChoiceComponent}
    ]},

    {path: 'allocate_division', canActivate:[AuthGuard], component: AllocateDivisionComponent},
    {path: 'allocate_roll_no', canActivate:[AuthGuard],component: AllocateRollnoComponent},
    {path: 'search_student', canActivate:[AuthGuard],component: SearchComponent},
    {path: 'manage_academics', canActivate:[AuthGuard],component: ManageAcademicsComponent},
    {path: 'academic_progression', canActivate:[AuthGuard],component: AcademicProgressionComponent},
    {path: 'bulk_upload', canActivate:[AuthGuard],component: BulkUploadComponent},
    {path: 'import', canActivate:[AuthGuard],component: ImportComponent},
    {path: 'export', canActivate:[AuthGuard],component: ExportComponent},
     //temporary
    {path: 'dashboard/add-new-course', canActivate:[AuthGuard],component: AddCourseComponent},
    {path: 'newnotice', canActivate:[AuthGuard], component: NewNoticeComponent},
    {path: 'noticetype', canActivate:[AuthGuard], component: NoticeTypeComponent},
    {path: 'viewnotice', canActivate:[AuthGuard], component: ViewNoticeComponent},
    {path: 'importstaff', canActivate:[AuthGuard], component: ImportstaffComponent},
    {path: 'searchstaff', canActivate:[AuthGuard], component: SearchstaffComponent},
    {path: 'staffmanage', canActivate:[AuthGuard], component: StaffmanageComponent},
    {path: 'staffprofile/:Id', canActivate:[AuthGuard], component: StaffprofileComponent},
    {path: 'staffupdate/:Id', canActivate:[AuthGuard], component:StaffupdateComponent},
    {path: 'addDivision' , canActivate:[AuthGuard], component:AddDivisionComponent},
    {path: 'studentprofile/:Id', canActivate:[AuthGuard], component:StudentprofileComponent},
    {path: 'studentupdate/:Id', canActivate:[AuthGuard], component:StudentupdateComponent},
    {path: 'attendenceallocation', canActivate:[AuthGuard], component:AllocationComponent},
    {path: 'viewallocation', canActivate:[AuthGuard], component:ViewattendComponent},
    {path: 'practicalallocation', canActivate:[AuthGuard], component:PracticalComponent},
    {path: 'projectallocation', canActivate:[AuthGuard], component:ProjectComponent},
    {path: 'addnewbook', canActivate:[AuthGuard], component:AddnewbookComponent},
    {path: 'editabook', canActivate:[AuthGuard], component:EditabookComponent},
    {path: 'sections', canActivate:[AuthGuard], component:SectionsComponent},
    {path: 'noticeedit/:Id', canActivate:[AuthGuard], component:NoticeEditComponent},
    {path: 'booksearch', canActivate:[AuthGuard], component:EditabookComponent},
    {path: 'practicalview',canActivate:[AuthGuard], component:ViewPracticalComponent },
    {path: 'projectview',canActivate:[AuthGuard], component:ViewProjectComponent },
    {path: 'addDepartment',canActivate:[AuthGuard], component:AddDepartmentComponent},
    {path: 'addDesignation',canActivate:[AuthGuard], component:AddDesignationComponent},
    {path: 'addContractType',canActivate:[AuthGuard],component:AddContractTypeComponent},
    {path: 'addSubject',canActivate:[AuthGuard], component:AddSubjectComponent},
    {path: 'viewsubjectchoices',canActivate:[AuthGuard], component:ViewIndividualSubjectChoiceComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}
