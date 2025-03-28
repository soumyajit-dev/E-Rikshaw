import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private webService: WebService) {}

  isAuthenticated(): any {
    const userName = this.webService.getUserName;
    const authenticationToken = this.webService.getAuthentication;

    return (
      userName &&
      userName !== '' &&
      authenticationToken &&
      authenticationToken !== ''
    );
  }
}
