import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { ProfileComponentFixture } from './profile.component.fixture';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let profileFixture: ProfileComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    profileFixture = new ProfileComponentFixture(fixture.debugElement);
  });

  it('hides link if options is set', () => {
    component.options = {
      showLink: false,
    };

    fixture.detectChanges();
    const link = profileFixture.getUserLink();
    expect(link).toBeFalsy();
  });
});
