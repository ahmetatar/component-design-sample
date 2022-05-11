import { ButtonGroupStyles } from '../button-group.model';
import { ButtonGroupOptions } from '../button-group.options';
import { ButtonGroupStylePipe } from './button-group-style.pipe';

describe('ButtonGroupStylePipe', () => {
  it('transforms button group class name by toolbar option', () => {
    const pipe = new ButtonGroupStylePipe();
    const buttonGroupOptions: ButtonGroupOptions = {
      isToolbar: true,
    };

    const buttonGroupStyle = pipe.transform(ButtonGroupStyles.Horizontal, buttonGroupOptions);
    expect(buttonGroupStyle).toContain('btn-toolbar');
  });
});
