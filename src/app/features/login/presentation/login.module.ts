import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { LoginPageRouting } from './login.routing';
import { CoreModule } from 'src/app/shared/modules/core.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CoreModule, MaterialModule, LoginPageRouting],
  providers: [],
})
export class LoginPageModule {}
