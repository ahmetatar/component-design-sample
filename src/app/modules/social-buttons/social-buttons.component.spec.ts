import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialButtonsComponent } from './social-buttons.component';
import { SocialButtonsComponentFixture } from './social-buttons.component.fixture';
import { SOCIAL_BUTTONS } from './social-buttons.mocks';

describe('SocialButtonsComponent', () => {
  let component: SocialButtonsComponent;
  let fixture: ComponentFixture<SocialButtonsComponent>;
  let socialButtonFixture: SocialButtonsComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialButtonsComponent);
    component = fixture.componentInstance;
    socialButtonFixture = new SocialButtonsComponentFixture(fixture.debugElement);
  });

  it('creates social buttons', () => {
    component.buttons = SOCIAL_BUTTONS;
    fixture.detectChanges();

    const buttons = socialButtonFixture.getButtons();

    expect(buttons).toBeTruthy();
    expect(buttons?.length).toBe(3);
  });
});
