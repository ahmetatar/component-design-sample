import { ButtonOptions } from '../button.options';
import { ButtonStylePipe } from './button-style.pipe';

describe('ButtonStylePipe', () => {
  it('transforms button class name by outline option', () => {
    const pipe = new ButtonStylePipe();
    const buttonOptions: ButtonOptions = {
      isOutline: true,
    };

    const buttonStyle = pipe.transform('primary', buttonOptions);
    expect(buttonStyle).toBe('btn-outline-primary');
  });
});
