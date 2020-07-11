import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '@core';
import { I18nModule } from '@modules/layout/i18n';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationService, UserQuery } from '@modules/layout/auth';
import { MockAuthenticationService } from '@modules/layout/auth/authentication.service.mock';
import { of } from 'rxjs';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;
  let mockUserQuery: any;

  beforeEach(async(() => {
    mockUserQuery = {
      select: () => of({ name: 'test' }),
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), I18nModule, NgbModule, CoreModule],
      providers: [
        { provide: AuthenticationService, useValue: MockAuthenticationService },
        { provide: UserQuery, useValue: mockUserQuery },
      ],
      declarations: [HeaderComponent, ShellComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
