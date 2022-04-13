export const BadgeShapesValues = ['', 'rounded-pill'] as const;
export type BadgeShapes = typeof BadgeShapesValues[number];

export const BadgeColorsValues = [
  'bg-primary',
  'bg-secondary',
  'bg-success',
  'bg-danger',
  'bg-warning',
  'bg-info',
  'bg-light',
  'bg-dark',
  'bg-link',
] as const;
export type BadgeColors = typeof BadgeColorsValues[number];

export const BadgeTextColorsValues = ['', 'text-dark'] as const;
export type BadgeTextColors = typeof BadgeTextColorsValues[number];
