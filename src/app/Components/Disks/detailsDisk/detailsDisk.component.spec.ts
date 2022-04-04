import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsDiskComponent } from './detailsDisk.component';

describe('DetailsDiskComponent', () => {
  let component: DetailsDiskComponent;
  let fixture: ComponentFixture<DetailsDiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
