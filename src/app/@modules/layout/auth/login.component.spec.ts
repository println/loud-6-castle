import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core';
import { I18nModule } from '@modules/layout/i18n';
import { LoginComponent } from './login.component';
import { UserQuery } from '@modules/layout/auth/state/user.query';
import { AuthenticationService } from '@modules';
import { Type } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockUserQuery: any;

  beforeEach(async(() => {
    mockUserQuery = {
      isLoggedIn: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [NgbModule, RouterTestingModule, TranslateModule.forRoot(), I18nModule, ReactiveFormsModule, CoreModule],
      declarations: [LoginComponent],
      providers: [
        {
          provide: UserQuery,
          useValue: mockUserQuery,
        },
      ],
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
