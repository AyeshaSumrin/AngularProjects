import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  constructor(public httpClient: HttpClient) { }

  getContactList() {
    return this.httpClient.post(environment.apiEndPoint + 'f0e8c1b8-2fca-4da0-8fc0-9e7c2a949c36', '');
  }

}
