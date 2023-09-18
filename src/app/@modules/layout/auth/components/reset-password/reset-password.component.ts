import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '@config';
import { AuthenticationService } from '@modules';
import { Logger, UserQuery } from '@shared';

const log = new Logger('Reset Password');

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  routes = ROUTES;

  error: string | undefined;
  form!: FormGroup;
  isLoading = false;
  showPassword = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userQuery: UserQuery
  ) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.form = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      agree: [false, Validators.requiredTrue],
    });
  }

  register() {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
