import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isAdminAvailable(): boolean {
    const currentHour = new Date().getHours();
    return currentHour >= 9 && currentHour < 22;
  }
}
