import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AllblogsPage } from './allblogs.page';

describe('AllblogsPage', () => {
  let component: AllblogsPage;
  let fixture: ComponentFixture<AllblogsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllblogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
