import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OtpInputComponent } from "./otp-input/otp-input.component";
import { PhoneNumberInputComponent } from "./phone-number-input/phone-number-input.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PhoneNumberInputComponent,
        OtpInputComponent,
    ],
    exports: [
        PhoneNumberInputComponent,
        OtpInputComponent,
    ]
})

export class LoginComponentsModule {}