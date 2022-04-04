import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewDiskComponent } from './overviewDisk.component';

describe('OverviewComponent', () => {
  let component: OverviewDiskComponent;
  let fixture: ComponentFixture<OverviewDiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewDiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
