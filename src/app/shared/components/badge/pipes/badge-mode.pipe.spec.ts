import { BadgeModePipe } from './badge-mode.pipe';

describe('BadgeModePipe', () => {
  it('badge should have chosen mode', () => {
    const pipe = new BadgeModePipe();
    const badgeStyle = pipe.transform('counter');
    expect(badgeStyle).toBe('position-absolute top-0 start-100 translate-middle');
  });
});
