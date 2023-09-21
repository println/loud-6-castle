export * from './account-activation.api.service';
import { AccountActivationApiService } from './account-activation.api.service';
export * from './account.api.service';
import { AccountApiService } from './account.api.service';
export * from './account-auth.api.service';
import { AccountAuthApiService } from './account-auth.api.service';
export * from './account-forgot-password.api.service';
import { AccountForgotPasswordApiService } from './account-forgot-password.api.service';
export * from './account-issue.api.service';
import { AccountIssueApiService } from './account-issue.api.service';
export * from './account-reset-password.api.service';
import { AccountResetPasswordApiService } from './account-reset-password.api.service';
export * from './account-session.api.service';
import { AccountSessionApiService } from './account-session.api.service';
export * from './user.api.service';
import { UserApiService } from './user.api.service';
export const APIS = [
  AccountActivationApiService,
  AccountApiService,
  AccountAuthApiService,
  AccountForgotPasswordApiService,
  AccountIssueApiService,
  AccountResetPasswordApiService,
  AccountSessionApiService,
  UserApiService,
];
