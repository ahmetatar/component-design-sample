import { Component, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { Statistic } from './statistics.models';
import { StatisticsOptions, STATISTICS_OPTIONS } from './statistics.options';

@Component({
  selector: 'desx-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StatisticsComponent implements OnInit {
  @Input()
  options?: Partial<StatisticsOptions>;

  @Input()
  statistics: Statistic[] = [];

  constructor(@Optional() @Inject(STATISTICS_OPTIONS) private defaultOptions: StatisticsOptions) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
