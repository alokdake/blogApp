import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportblogPage } from './reportblog.page';

describe('ReportblogPage', () => {
  let component: ReportblogPage;
  let fixture: ComponentFixture<ReportblogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReportblogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
