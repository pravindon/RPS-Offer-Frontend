import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { StudentService } from '../shared/core/services/student.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EndUserPrfileListComponent } from './end-user-prfile-list/end-user-prfile-list.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    SuperAdminComponent,
    DashboardComponent,
    OrganizationComponent,
    OrganizationListComponent,
    EditOrganizationComponent,
    EndUserPrfileListComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxSpinnerModule,
    // ToastrModule.forRoot()
  ],
  providers: [
    StudentService
  ]
})
export class SuperAdminModule { }
