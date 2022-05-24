import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from './rating.component';
import { RatingFixture } from './rating.fixture';
import { RATING_OPTIONS, DEFAULT_RATING_OPTIONS } from './rating.options';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;
  let ratingFixture: RatingFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingComponent],
      providers: [
        {
          provide: RATING_OPTIONS,
          useValue: DEFAULT_RATING_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    ratingFixture = new RatingFixture(fixture.debugElement);
  });

  it('creates 5 stars', () => {
    fixture.detectChanges();

    const rating = ratingFixture.getStars();
    expect(rating?.length).toEqual(5);
  });

  it('creates readonly stars', () => {
    component.readonly = true;
    fixture.detectChanges();

    const rating = ratingFixture.getReadonly();
    expect(rating).toBeTruthy();
  });

  it('creates editable stars', () => {
    component.readonly = false;
    fixture.detectChanges();

    const rating = ratingFixture.getReadonly();
    expect(rating).not.toBeTruthy();
  });

  it('creates correct number of stars', () => {
    component.value = 3;
    fixture.detectChanges();

    const rating = ratingFixture.getActive();
    expect(rating?.length).toEqual(3);
  });
});
