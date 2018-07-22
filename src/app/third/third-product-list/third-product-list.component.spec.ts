import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdProductListComponent } from './third-product-list.component';

describe('ThirdProductListComponent', () => {
  let component: ThirdProductListComponent;
  let fixture: ComponentFixture<ThirdProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
