import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from 'src/app/shared/testing/component.base-fixture';

export class StatisticComponentFixture extends ComponentBaseFixture {
  protected readonly STATISTIC_COLUMNS = '.statistics .statistic-item';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns statistic columns
   */
  public getStatisticItems() {
    return this.getElementAll(this.STATISTIC_COLUMNS);
  }
}
