import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdShoppingComponent } from './third-shopping.component';

describe('ThirdShoppingComponent', () => {
  let component: ThirdShoppingComponent;
  let fixture: ComponentFixture<ThirdShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
