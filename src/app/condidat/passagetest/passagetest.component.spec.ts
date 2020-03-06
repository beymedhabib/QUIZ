import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagetestComponent } from './passagetest.component';

describe('PassagetestComponent', () => {
  let component: PassagetestComponent;
  let fixture: ComponentFixture<PassagetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
