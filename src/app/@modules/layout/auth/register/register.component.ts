import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '@config';
import { environment } from '@env/environment';
import { AuthenticationService } from '@modules';
import { CustomValidators } from '@narik/custom-validators';
import { Logger, UserQuery } from '@shared';

const log = new Logger('Register');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
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
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', [Validators.required, CustomValidators.email]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      agree: [false, Validators.requiredTrue],
    });
  }

  register() {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
