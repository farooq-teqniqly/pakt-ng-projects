import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { DropdownDirective } from './dropdown.directive';

describe('DropdownToggleDirective', () => {
  it('should create an instance', () => {
    const directive = new DropdownToggleDirective(new DropdownDirective());
    expect(directive).toBeTruthy();
  });
});
