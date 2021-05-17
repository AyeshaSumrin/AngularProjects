import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../services/contact-list-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contactList: any;
  constructor(public contactListService: ContactListService) { }

  ngOnInit() {
    this.getContactListDetails();
  }

  getContactListDetails() {
    this.contactListService.getContactList()
      .subscribe(response => {
        this.contactList = response;
      })
  }


}
