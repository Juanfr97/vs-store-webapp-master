import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Product } from '../../models/Product';
import { Response } from '../../models/Response';
import { ResponseAuth, ResponseUser } from '../../models/BodyResponses';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<ResponseUser>(`${environment.url_api}/Auth/Usuarios`);
  }

  getUser(id: string) {
    return this.http.get<User>(`${environment.url_api}/Auth/${id}`);
  }

  createUser(user) {
    return this.http.post<ResponseAuth>(`${environment.url_api}/Auth/register`, user);
  }

  EditUser(id: string, changes: Partial<User>) {
    return this.http.put(`${environment.url_api}/Auth/${id}`, changes);
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.url_api}/Auth/${id}`);
  }
}
