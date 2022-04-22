import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavItemDirective } from './directives/nav-item.directive';
import { NavLinkDirective } from './directives/nav-link.directive';
import { NavComponent } from './nav.component';
import { NavComponentFixture } from './nav.component.fixture';

describe('NavComponent', () => {
  let fixture: ComponentFixture<NavWrapperComponent>;
  let navFixture: NavComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent, NavWrapperComponent, NavItemDirective, NavLinkDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavWrapperComponent);
    navFixture = new NavComponentFixture(fixture.debugElement);
    fixture.detectChanges();
  });

  it('creates navbar links', () => {
    const navLinks = navFixture.getNavLinks();
    const firstHref = navLinks?.length && navLinks[0].href;
    const firstText = navLinks?.length && navLinks[0].innerText;

    expect(navLinks).toBeTruthy();
    expect(navLinks?.length).toBe(2);
    expect(firstHref).toContain('/home/1');
    expect(firstText).toBe('Home Page');
  });
});

@Component({
  selector: 'desx-nav-wrapper',
  template: `
    <desx-nav>
      <ng-template desxNavItem>
        <a desxNavLink href="/home/1">Home Page</a>
      </ng-template>
      <ng-template desxNavItem>
        <a desxNavLink href="/about/us">About Us</a>
      </ng-template>
    </desx-nav>
  `,
})
class NavWrapperComponent {}
