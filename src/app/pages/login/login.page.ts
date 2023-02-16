import { Component, inject, OnInit } from '@angular/core';
import { ConfirmationResult } from '@angular/fire/auth';

import { AuthService } from '@services/data/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private authService = inject(AuthService);
  confirmationResult!: ConfirmationResult;

  ngOnInit() {
    this.authService.setRecaptcha();
    this.signInWithPhoneNumber();
  }
  
  async signInWithPhoneNumber(): Promise<void> {
    try {
      this.confirmationResult = await this.authService.signInWithPhoneNumber('+523314473715');
      this.confirmVerificationCode();
    } catch (error) {
      console.log(`error`, error);
    }
  }

  async confirmVerificationCode(): Promise<void> {
    try {
      const user = await this.authService.confirmVerificationCode(this.confirmationResult, '123456');
      console.log(`user`, user);
    } catch (error) {
      console.log(`error`, error);
    }
  }

  

}
