import { ChangeDetectionStrategy, Component, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpInputComponent {

  @ViewChildren(IonInput) inputs!: QueryList<IonInput>;
  @Output() otp = new EventEmitter<string>();
  @Output() resend = new EventEmitter<void>();

  otpForm = new FormGroup({
    0: new FormControl(null),
    1: new FormControl(),
    2: new FormControl(),
    3: new FormControl(),
    4: new FormControl(),
    5: new FormControl(),
  });
  currentInput = 0;

  inputChange(): void {
    if (this.currentInput === this.inputs.length - 1) {
      this.inputs.last.getInputElement().then(input => input.blur());
      return
    }
    this.currentInput++;
    const nextInput = this.inputs.get(this.currentInput);
    nextInput?.setFocus();
  }

  onFocus(index: number): void {
    const indexControl = index as 0 | 1 | 2 | 3 | 4 | 5;
    this.otpForm.controls[indexControl].setValue(null);
    this.currentInput = index;
  }

  validateOtp(): void {
    const formValues = Object.values(this.otpForm.value);
    const isComplete = formValues.every(value => value >= 0);
    if (isComplete) {
      const otp = formValues.join('');
      this.otp.emit(otp);
    }
  }

}
