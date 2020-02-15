import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownDirective } from './dropdown.directive';

describe('DropdownMenuDirective', () => {
  it('should create an instance', () => {
    const directive = new DropdownMenuDirective(new DropdownDirective());
    expect(directive).toBeTruthy();
  });
});
