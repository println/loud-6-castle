import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '@config';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Logger } from '@shared';
import { finalize } from 'rxjs/operators';
import { ForgotPasswordService } from '../../services/forgot-password.service';

const log = new Logger('Reset Password');

@UntilDestroy()
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
    private service: ForgotPasswordService
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

  renewPassword() {
    this.isLoading = true;
    const password = this.form.value.password;
    const token = this.route.snapshot.queryParamMap.get('token') || '';
    const token$ = this.service
      .renewPassword(token, password)
      .pipe(
        finalize(() => {
          this.form.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: () => {
          this.router.navigate([ROUTES.login.path], { replaceUrl: true });
        },
        error: (error) => {
          log.debug(`Reset password error: ${error}`);
          this.error = error;
        },
      });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
