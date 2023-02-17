import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-number-input',
  templateUrl: './phone-number-input.component.html',
  styleUrls: ['./phone-number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberInputComponent {

  @Output() phone = new EventEmitter<string>();

  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10)
  ]);

  validatePhoneNumber(): void {
    const phoneNumber = this.phoneNumber.value?.trim().split(' ').join('') ?? '';
    this.phoneNumber.setValue(phoneNumber);
    if (this.phoneNumber.valid) {
      this.phone.emit(phoneNumber);
    }
  }

}
