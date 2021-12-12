import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from 'src/app/shared/testing/component.base-fixture';

export class ProfileComponentFixture extends ComponentBaseFixture {
  protected readonly PROFILE_USER_LINK = '.profile-user-link';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns user profile link
   * @returns {HTMLAnchorElement | null} HTMLAnchorElement
   */
  public getUserLink(): HTMLAnchorElement | null {
    return this.getElement(this.PROFILE_USER_LINK);
  }
}
