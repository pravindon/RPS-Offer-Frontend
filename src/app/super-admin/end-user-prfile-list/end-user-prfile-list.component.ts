import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/core/services/http.service';

@Component({
  selector: 'app-end-user-prfile-list',
  templateUrl: './end-user-prfile-list.component.html',
  styleUrls: ['./end-user-prfile-list.component.scss']
})
export class EndUserPrfileListComponent implements OnInit {

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.getUserProfileList();
  }
  
  userList : any = [];
  getUserProfileList() {
    this.httpService.getUserProfile().subscribe(data => {
      this.userList = data;
      console.log('End User Profile List', this.userList);
    })
  }

  deleteUserProfile(id : any) {
    this.httpService.deleteUserProfile(id).subscribe(data => {
      this.getUserProfileList();
    })
    console.log(id);
    
  }

}
