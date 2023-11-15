import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBlogPage } from './add-blog.page';

describe('AddBlogPage', () => {
  let component: AddBlogPage;
  let fixture: ComponentFixture<AddBlogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
