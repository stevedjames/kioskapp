import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLeftVisitorComponent } from './content-left-visitor.component';

describe('ContentLeftVisitorComponent', () => {
  let component: ContentLeftVisitorComponent;
  let fixture: ComponentFixture<ContentLeftVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLeftVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLeftVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
