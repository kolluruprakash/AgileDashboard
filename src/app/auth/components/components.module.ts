import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReEnterPwdComponent } from './re-enter-pwd/re-enter-pwd.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ReEnterPwdComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginComponent, RegistrationComponent, ReEnterPwdComponent]

})
export class ComponentsModule { }
