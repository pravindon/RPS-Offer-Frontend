import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { EndUserPrfileListComponent } from './end-user-prfile-list/end-user-prfile-list.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationComponent } from './organization/organization.component';
import { SuperAdminComponent } from './super-admin.component';

const routes: Routes = [
  { path: '', component: SuperAdminComponent },
  { path: 'addashboard', component: DashboardComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'editOrganization/:id', component: EditOrganizationComponent },
  { path: 'organizationList', component: OrganizationListComponent },
  { path: 'euProfile', component: EndUserPrfileListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
