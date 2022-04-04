import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewMovieComponent } from './overviewMovie.component';

describe('OverviewComponent', () => {
  let component: OverviewMovieComponent;
  let fixture: ComponentFixture<OverviewMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
