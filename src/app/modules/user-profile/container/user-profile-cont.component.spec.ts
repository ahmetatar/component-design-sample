import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileContComponent } from './user-profile-cont.component';

describe('UserProfileContComponent', () => {
  let component: UserProfileContComponent;
  let fixture: ComponentFixture<UserProfileContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileContComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
