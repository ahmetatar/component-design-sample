import { DEFAULT_ACCORDION_OPTIONS, ACCORDION_OPTIONS } from './accordion/accordion.options';
import { ALERT_OPTIONS, DEFAULT_ALERT_OPTIONS } from './alert/alert.options';
import { BADGE_OPTIONS, DEFAULT_BADGE_OPTIONS } from './badge/badge.options';
import {
  BUTTON_GROUP_OPTIONS,
  DEFAULT_BUTTON_GROUP_OPTIONS,
} from './button-group/button-group.options';
import { BUTTON_OPTIONS, DEFAULT_BUTTON_OPTIONS } from './button/button.options';
import { DEFAULT_IMAGE_OPTIONS, IMAGE_OPTIONS } from './image/image.options';
import { DEFAULT_RATING_OPTIONS, RATING_OPTIONS } from './rating/rating.options';
import { DEFAULT_TEXTBOX_OPTIONS, TEXTBOX_OPTIONS } from './textbox/textbox.options';

export const DEFAULT_COMPONENT_OPTIONS = [
  { provide: ACCORDION_OPTIONS, useValue: DEFAULT_ACCORDION_OPTIONS },
  { provide: BADGE_OPTIONS, useValue: DEFAULT_BADGE_OPTIONS },
  { provide: BUTTON_OPTIONS, useValue: DEFAULT_BUTTON_OPTIONS },
  { provide: ALERT_OPTIONS, useValue: DEFAULT_ALERT_OPTIONS },
  { provide: TEXTBOX_OPTIONS, useValue: DEFAULT_TEXTBOX_OPTIONS },
  { provide: IMAGE_OPTIONS, useValue: DEFAULT_IMAGE_OPTIONS },
  { provide: BUTTON_GROUP_OPTIONS, useValue: DEFAULT_BUTTON_GROUP_OPTIONS },
  { provide: RATING_OPTIONS, useValue: DEFAULT_RATING_OPTIONS },
];
