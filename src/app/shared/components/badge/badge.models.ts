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

export const BadgeBordersValues = ['', 'border-dark', 'border-light'] as const;
export type BadgeBorders = typeof BadgeBordersValues[number];

export const BadgeModesValues = ['', 'counter', 'dot'] as const;
export type BadgeModes = typeof BadgeModesValues[number];
