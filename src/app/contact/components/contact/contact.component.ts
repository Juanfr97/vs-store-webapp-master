import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})



export class ContactComponent implements OnInit {

  constructor(private builder: FormBuilder,private contactService:ContactService) { }
  FormData: FormGroup;
  ngOnInit() {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    let element: HTMLElement = document.getElementById('btn-submit-contact');

    let data = {
      "name": this.FormData.controls.name.value,
      "from": this.FormData.controls.email.value,
      "text": this.FormData.controls.message.value
    }

    this.contactService.sendContactEmail(data).subscribe(response=>{
      alert("Email Enviado")
      console.log(response);
      this.FormData.controls.name.setValue(""),
      this.FormData.controls.email.setValue(""),
      this.FormData.controls.message.setValue("")
    })
  }

}
