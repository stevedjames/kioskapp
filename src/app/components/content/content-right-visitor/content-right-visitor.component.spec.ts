import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRightVisitorComponent } from './content-right-visitor.component';

describe('ContentRightVisitorComponent', () => {
  let component: ContentRightVisitorComponent;
  let fixture: ComponentFixture<ContentRightVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRightVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRightVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
