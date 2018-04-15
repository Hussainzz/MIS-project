import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportstaffComponent } from './importstaff.component';

describe('ImportstaffComponent', () => {
  let component: ImportstaffComponent;
  let fixture: ComponentFixture<ImportstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
