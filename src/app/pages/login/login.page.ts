import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { ConfirmationResult } from '@angular/fire/auth';

import { AuthService } from '@services/data/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {

  confirmationResult!: ConfirmationResult;
  validPhoneNumber = '';
  step = 1;

  private authService = inject(AuthService);


  ngOnInit() {
    this.authService.setRecaptcha();
  }
  
  async signInWithPhoneNumber(phoneNumber: string): Promise<void> {
    try {
      this.validPhoneNumber = `+52${phoneNumber}`;
      //this.confirmationResult = await this.authService.signInWithPhoneNumber(phone);
      this.step++;
    } catch (error) {
      console.log(`error`, error);
    }
  }

  resendCode(): void {
    //this.confirmationResult = await this.authService.signInWithPhoneNumber(phone);
  }

  async confirmVerificationCode(code: string): Promise<void> {
    console.log(`code`, code)
    try {
      //const user = await this.authService.confirmVerificationCode(this.confirmationResult, code);
      //console.log(`user`, user);
    } catch (error) {
      console.log(`error`, error);
    }
  }

  

}
