import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfilePresComponent } from './user-profile-pres.component';

describe('UserProfileComponent', () => {
  let component: UserProfilePresComponent;
  let fixture: ComponentFixture<UserProfilePresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfilePresComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePresComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
