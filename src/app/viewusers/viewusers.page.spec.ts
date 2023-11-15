import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewusersPage } from './viewusers.page';

describe('ViewusersPage', () => {
  let component: ViewusersPage;
  let fixture: ComponentFixture<ViewusersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
