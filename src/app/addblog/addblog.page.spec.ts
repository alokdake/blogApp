import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddblogPage } from './addblog.page';

describe('AddblogPage', () => {
  let component: AddblogPage;
  let fixture: ComponentFixture<AddblogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddblogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
