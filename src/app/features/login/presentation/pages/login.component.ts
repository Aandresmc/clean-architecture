import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationUseCase } from '../../domain/usecases/login_usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent {
  group: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _authUseCase: AuthenticationUseCase
  ) {}
}
