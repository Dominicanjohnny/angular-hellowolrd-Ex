import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNested2Component } from './my-nested2.component';

describe('MyNested2Component', () => {
  let component: MyNested2Component;
  let fixture: ComponentFixture<MyNested2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNested2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNested2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
