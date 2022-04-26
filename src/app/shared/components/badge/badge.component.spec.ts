import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';
import { BadgeComponentFixture } from './badge.component.fixture';
import {
  BadgeBordersValues,
  BadgeColorsValues,
  BadgeShapesValues,
  BadgeTextColorsValues,
} from './badge.models';
import { DEFAULT_BADGE_OPTIONS, BADGE_OPTIONS } from './badge.options';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;
  let badgeComponentFixture: BadgeComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeComponent],
      providers: [
        {
          provide: BADGE_OPTIONS,
          useValue: DEFAULT_BADGE_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    badgeComponentFixture = new BadgeComponentFixture(fixture.debugElement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show inputted text', () => {
    component.text = 'Text for test';
    fixture.detectChanges();
    expect(badgeComponentFixture.getBadge()?.innerText).toBe('Text for test');
  });

  it('should be danger badge', () => {
    component.color = BadgeColorsValues[3];
    fixture.detectChanges();
    expect(badgeComponentFixture.getDangerBadge()).toBeTruthy();
  });

  it('should be rounded-pill', () => {
    component.shape = BadgeShapesValues[1];
    fixture.detectChanges();
    expect(badgeComponentFixture.getRoundedPillBadge()).toBeTruthy();
  });

  it('should be text-dark', () => {
    component.textColor = BadgeTextColorsValues[1];
    fixture.detectChanges();
    expect(badgeComponentFixture.getTextDarkBadge()).toBeTruthy();
  });

  it('should be border-dark', () => {
    component.border = BadgeBordersValues[1];
    fixture.detectChanges();
    expect(badgeComponentFixture.getBorderDarkBadge()).toBeTruthy();
  });
});
