import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '@config';
import { AuthenticationService } from '@modules';
import { Logger, UserQuery } from '@shared';

const log = new Logger('Forgot Password');

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userQuery: UserQuery
  ) {}

  ngOnInit() {}
}
