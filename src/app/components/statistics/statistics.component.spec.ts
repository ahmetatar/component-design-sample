import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsComponent } from './statistics.component';
import { StatisticComponentFixture } from './statistics.component.fixture';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;
  let statisticFixture: StatisticComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    statisticFixture = new StatisticComponentFixture(fixture.debugElement);
    component = fixture.componentInstance;
  });

  it('should create', () => {});
});
