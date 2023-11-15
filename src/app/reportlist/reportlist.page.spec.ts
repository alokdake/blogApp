import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportlistPage } from './reportlist.page';

describe('ReportlistPage', () => {
  let component: ReportlistPage;
  let fixture: ComponentFixture<ReportlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReportlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
