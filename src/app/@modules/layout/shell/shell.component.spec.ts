import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MockAuthenticationService } from '@modules/layout/auth/authentication.service.mock';
import { AuthenticationService } from '@modules/layout/auth';

import { I18nModule } from '@modules/layout/i18n';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

import { of } from 'rxjs';
import { UserQuery } from '@shared';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;
  let mockUserQuery: any;

  beforeEach(
    waitForAsync(() => {
      mockUserQuery = {
        select: () => of({ name: 'test' }),
      };

      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), I18nModule, NgbModule, RouterTestingModule],
        providers: [
          { provide: AuthenticationService, useValue: MockAuthenticationService },
          { provide: UserQuery, useValue: mockUserQuery },
        ],
        declarations: [HeaderComponent, ShellComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
