import { Injectable } from '@angular/core';
import { APIHelper } from './APIHelper';

const WHOAMI_RESOURCE = '/whoAmI';
const LOGIN_RESOURCE = '/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiHelper: APIHelper) { }

  public login(credentials) {
    return this.apiHelper.post(LOGIN_RESOURCE, credentials);
  }

  public whoAmI() {
    return this.apiHelper.get(WHOAMI_RESOURCE);
  }
}
