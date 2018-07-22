import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdNewComponent } from './third-new.component';

describe('ThirdNewComponent', () => {
  let component: ThirdNewComponent;
  let fixture: ComponentFixture<ThirdNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
