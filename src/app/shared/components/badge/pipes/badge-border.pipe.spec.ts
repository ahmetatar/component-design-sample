import { BadgeBorderPipe } from './badge-border.pipe';

describe('BadgeBorderPipe', () => {
  it('badge should have chosen border', () => {
    const pipe = new BadgeBorderPipe();
    const badgeStyle = pipe.transform('border-dark');
    expect(badgeStyle).toBe('border border-dark');
  });
});
