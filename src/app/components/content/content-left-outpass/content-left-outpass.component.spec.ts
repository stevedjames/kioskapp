import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLeftOutpassComponent } from './content-left-outpass.component';

describe('ContentLeftOutpassComponent', () => {
  let component: ContentLeftOutpassComponent;
  let fixture: ComponentFixture<ContentLeftOutpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLeftOutpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLeftOutpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
