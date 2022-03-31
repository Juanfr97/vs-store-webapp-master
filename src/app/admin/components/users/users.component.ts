import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[] = [];
  displayedColumns: string[] = ['id', 'name','lastName', 'email', 'actions'];

  constructor(
    private usersService: UsuariosService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getAllUsers()
    .subscribe(response => {
      console.log(response)
      this.users = response.users;
    });
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id)
    .subscribe(rta => {
      console.log(rta);
      this.fetchUsers();
    });
  }

}
