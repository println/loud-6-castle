import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '@config';
import { environment } from '@env/environment';
import { AuthenticationService } from '@modules';
import { CustomValidators } from '@narik/custom-validators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Logger, UserQuery } from '@shared';
import { finalize } from 'rxjs/operators';
import { ForgotPasswordService } from '../../services/forgot-password.service';

const log = new Logger('Forgot Password');

enum PageType {
  RECOVERY,
  SECURITY_TYPE,
}

@UntilDestroy()
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  routes = ROUTES;

  version: string | null = environment.version;
  error: string | undefined;
  formEmail!: FormGroup;
  formSecurityCode!: FormGroup;
  isLoading = false;
  showPassword = false;

  pageType = PageType.RECOVERY;
  types = PageType;
  email?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: ForgotPasswordService,
    private userQuery: UserQuery
  ) {
    this.createForm();
  }

  ngOnInit() {}

  startForgotPassword() {
    this.isLoading = true;
    const data = this.formEmail.value.email;
    const forgotPassword$ = this.service.forgotPassword(data);
    forgotPassword$
      .pipe(
        finalize(() => {
          this.formEmail.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: () => {
          this.email = data;
          this.pageType = PageType.SECURITY_TYPE;
        },
        error: (error) => {
          log.debug(`Forgot Password Error: ${error}`);
          this.error = error;
        },
      });
  }

  recoveryToken() {
    this.isLoading = true;
    const token$ = this.service.getTokenBySecurityCode(this.formSecurityCode.value.code);
    token$
      .pipe(
        finalize(() => {
          this.formSecurityCode.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: (response) => {
          const token = response.token;
          this.router.navigate([ROUTES.resetPassword.path], { queryParams: { token: token }, replaceUrl: true });
        },
        error: (error) => {
          log.debug(`Security Code Error: ${error}`);
          this.error = error;
        },
      });
  }

  private createForm() {
    this.formEmail = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidators.email]],
    });
    this.formSecurityCode = this.formBuilder.group({
      code: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
    });
  }
}
