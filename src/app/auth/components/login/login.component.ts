import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user:User={}
  token:string=''
  role:string=''
  userId:string=''
  isAdmin:boolean=false
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService,
    private snackbar: MatSnackBar
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    
    this.user.email=this.form.value.email
    this.user.password=this.form.value.password
    console.log(this.user);
    this.authService.login(this.user).subscribe((response)=>{
    console.log(response);
     if(response.isLogged){
       localStorage.setItem("role",response.role)
      this.router.navigate(['./home'])
     }
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
