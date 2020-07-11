import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core';
import { I18nModule } from '@modules/layout/i18n';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '@modules';
import { MockAuthenticationService } from '@modules/layout/auth/authentication.service.mock';
import { UserQuery } from '@shared/states/auth/user.query';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockUserQuery: any;

  beforeEach(async(() => {
    mockUserQuery = {
      isLoggedIn: () => true,
    };

    TestBed.configureTestingModule({
      imports: [NgbModule, RouterTestingModule, TranslateModule.forRoot(), I18nModule, ReactiveFormsModule, CoreModule],
      providers: [
        { provide: AuthenticationService, useValue: MockAuthenticationService },
        { provide: UserQuery, useValue: mockUserQuery },
      ],
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
