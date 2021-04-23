import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/core/services/http.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  constructor( private httpServices : HttpService ) { }

  ngOnInit(): void {
    this.getOrg()
  }

  getOrgList : any = [];
  getOrg() {
    this.httpServices.getOrganization().subscribe(data => {
      this.getOrgList = data;
      console.log('Organization list', data);
    })
  }

  deleteOrg(id : any) {
    this.httpServices.deleteOrganization(id).subscribe(data => {
      this.getOrg();
    })
    console.log(id);

  }

}
