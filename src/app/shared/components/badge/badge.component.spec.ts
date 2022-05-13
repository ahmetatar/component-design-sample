import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';
import { BadgeComponentFixture } from './badge.component.fixture';
import { BadgeBorderPipe } from './pipes/badge-border.pipe';
import { DEFAULT_BADGE_OPTIONS, BADGE_OPTIONS } from './badge.options';
import { BadgeModePipe } from './pipes/badge-mode.pipe';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;
  let badgeComponentFixture: BadgeComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgeComponent, BadgeBorderPipe, BadgeModePipe],
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
    const badge = badgeComponentFixture.getBadge();
    expect(badge).toBeTruthy();
    expect(badge).withContext('Text for test');
  });

  it('should be danger badge', () => {
    component.color = 'bg-danger';
    fixture.detectChanges();
    const badge = badgeComponentFixture.getDangerBadge();
    expect(badge).toBeTruthy();
  });

  it('should be rounded-pill', () => {
    component.shape = 'rounded-pill';
    fixture.detectChanges();
    const badge = badgeComponentFixture.getRoundedPillBadge();
    expect(badge).toBeTruthy();
  });

  it('should be text-dark', () => {
    component.textColor = 'text-dark';
    fixture.detectChanges();
    const badge = badgeComponentFixture.getTextDarkBadge();
    expect(badge).toBeTruthy();
  });
});
