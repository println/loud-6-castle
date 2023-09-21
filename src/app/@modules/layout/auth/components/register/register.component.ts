import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '@config';
import { CustomValidators } from '@narik/custom-validators';
import { Logger } from '@shared';
import { AccountAuthApiService, AuthRegisterRequest } from '@shared/api/backend';

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
    private service: AccountAuthApiService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', [Validators.required, CustomValidators.email]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      agree: [false, Validators.requiredTrue],
    });
  }

  register() {
    const values = this.form.value;
    const data: AuthRegisterRequest = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    } as AuthRegisterRequest;

    this.service.register(data).subscribe({
      next: () => {
        this.router.navigate([ROUTES.login.path]).then(
          (nav) => {
            console.log(nav); // true if navigation is successful
          },
          (err) => {
            console.log(err); // when there's an error
          }
        );
      },
      error: (error) => {
        log.error(error);
      },
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
