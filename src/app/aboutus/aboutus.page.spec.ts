import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AboutusPage } from './aboutus.page';

describe('AboutusPage', () => {
  let component: AboutusPage;
  let fixture: ComponentFixture<AboutusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
