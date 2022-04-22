import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { NavbarComponentFixture } from './navbar.component.fixture';
import { NavbarColors } from './navbar.models';
import { DEFAULT_NAVBAR_OPTIONS, NAVBAR_OPTIONS, PlacementOptions } from './navbar.options';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let navbarFixture: NavbarComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {
          provide: NAVBAR_OPTIONS,
          useValue: DEFAULT_NAVBAR_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    navbarFixture = new NavbarComponentFixture(fixture.debugElement);
  });

  it('creates dark navbar', () => {
    component.color = NavbarColors.DARK;
    fixture.detectChanges();

    const navbar = navbarFixture.getNavbarByColor(NavbarColors.DARK);
    expect(navbar).toBeTruthy();
  });

  it('creates sticky top navbar', () => {
    component.options = {
      placement: PlacementOptions.STICK_TOP,
    };
    fixture.detectChanges();

    const navbar = navbarFixture.getNavbarByPlacement(PlacementOptions.STICK_TOP);
    expect(navbar).toBeTruthy();
  });
});
