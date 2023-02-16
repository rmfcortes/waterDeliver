import { Injectable } from '@angular/core';
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber, UserCredential } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = getAuth();
  recaptchaVerifier!: RecaptchaVerifier;

  setRecaptcha(): void {
    this.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': () => {}
    }, this.auth);
  }

  signInWithPhoneNumber(phoneNumber: string): Promise<ConfirmationResult> {
    return signInWithPhoneNumber(this.auth, phoneNumber, this.recaptchaVerifier);
  }

  confirmVerificationCode(confirmationResult: ConfirmationResult, verificationCode: string): Promise<UserCredential> {
    return confirmationResult.confirm(verificationCode);
  }


}
