import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingComponent } from './paging.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

describe('PagingComponent', () => {
  let component: PagingComponent;
  let fixture: ComponentFixture<PagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagingComponent],
      imports: [NgbPaginationModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
