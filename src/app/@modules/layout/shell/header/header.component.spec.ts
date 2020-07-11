import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService } from '@modules/layout/auth/authentication.service';
import { I18nModule } from '@modules/layout/i18n';
import { HeaderComponent } from './header.component';
import { UserQuery } from '@shared/states/auth/user.query';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockUserQuery: any;

  beforeEach(async(() => {
    mockUserQuery = {
      select: () => of({ name: 'test' }),
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgbModule, TranslateModule.forRoot(), I18nModule],
      declarations: [HeaderComponent],
      providers: [
        {
          provide: AuthenticationService,
          useValue: jest.fn().mockImplementation((): Partial<AuthenticationService> => ({})),
        },
        {
          provide: UserQuery,
          useValue: mockUserQuery,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.inject(AuthenticationService);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
