import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiskComponent } from './addDisk.component';

describe('AddComponent', () => {
  let component: AddDiskComponent;
  let fixture: ComponentFixture<AddDiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
