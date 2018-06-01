
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataResultComponent } from './data-result.component';

describe('DataResultComponent', () => {
  let component: DataResultComponent;
  let fixture: ComponentFixture<DataResultComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
