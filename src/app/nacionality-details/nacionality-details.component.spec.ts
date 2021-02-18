import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalityDetailsComponent } from './nacionality-details.component';

describe('NacionalityDetailsComponent', () => {
  let component: NacionalityDetailsComponent;
  let fixture: ComponentFixture<NacionalityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacionalityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
