import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }


  sendContactEmail(data){
    return this.httpClient.post(environment.url_api+"/email/contact",data)
  }
}
