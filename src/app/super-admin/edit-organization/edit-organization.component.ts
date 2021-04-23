import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/core/services/http.service';
import {FormControl, FormGroup} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss']
})
export class EditOrganizationComponent implements OnInit {

  constructor(private router : ActivatedRoute, private httpServices : HttpService) { }

  editOrganizationForm = new FormGroup({
    cardNo : new FormControl(''),
    orgnaziationName: new FormControl(''),
    adminName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    mobileNo: new FormControl(''),
    mobileNoAlternate: new FormControl(''),
    dateOfBirth: new FormControl(''),
    localAddress: new FormControl(''),
    permanentAddress: new FormControl(''),
    city: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    pinCode: new FormControl(''),
    firmType: new FormControl(''),
    description: new FormControl(''),
    gender: new FormControl(''),
    firmLogo: new FormControl('')
  })
  ngOnInit(): void {
    this.editOrganizationData();
    this.httpServices.getCurrentOrg(this.router.snapshot.params.id).subscribe((result: any) => {
      this.editOrganizationForm = new FormGroup({
        cardNo : new FormControl(result['cardNo']),
        orgnaziationName: new FormControl(result['orgnaziationName']),
        adminName: new FormControl(result['adminName']),
        email: new FormControl(result['email']),
        password: new FormControl(result['password']),
        confirmPassword: new FormControl(result['confirmPassword']),
        mobileNo: new FormControl(result['mobileNo']),
        mobileNoAlternate: new FormControl(result['mobileNoAlternate']),
        dateOfBirth: new FormControl(result['dateOfBirth']),
        localAddress: new FormControl(result['localAddress']),
        permanentAddress: new FormControl(result['permanentAddress']),
        city: new FormControl(result['city']),
        district: new FormControl(result['district']),
        state: new FormControl(result['state']),
        country: new FormControl(result['country']),
        pinCode: new FormControl(result['pinCode']),
        firmType: new FormControl(result['firmType']),
        description: new FormControl(result['description']),
        gender: new FormControl(result['gender']),
        firmLogo: new FormControl(result['firmLogo'])
      })
    })
  }

  editOrganizationData() {
    console.log(this.router.snapshot.params.id);
    this.httpServices.updateOrg(this.router.snapshot.params.id, this.editOrganizationForm.value).subscribe((result) => {
      console.log(this.editOrganizationForm.value, result);
      this.editOrganizationForm.reset();
    })
  }
}
