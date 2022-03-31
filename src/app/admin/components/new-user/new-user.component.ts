import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  user: User = {}
  form: FormGroup;
  token: string = ''
  role: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsuariosService,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.value.password != this.form.value.confirmPassword) {
      this.snackbar.open('Contraseñas no coinciden',null, { duration: 1500 })
    }
    else {
      this.user.name = this.form.value.name
      this.user.lastName = this.form.value.lastName
      this.user.email = this.form.value.email
      this.user.city = this.form.value.city
      this.user.street = this.form.value.street
      this.user.zipCode = this.form.value.zipCode
      this.user.password = this.form.value.password
      this.usersService.createUser(this.user).subscribe((response) => {
          this.router.navigate(['./admin/users'])
          
       
      }, (error) => {
        console.log(error);
        this.snackbar.open(error.error.body,null, { duration: 1500 })
      })

    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

}
