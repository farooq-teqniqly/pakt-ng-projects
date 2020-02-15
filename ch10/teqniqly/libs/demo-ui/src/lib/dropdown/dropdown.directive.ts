import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tqDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.dropdown') dropdown;
  @HostBinding('class.is-active') isActive;
  constructor() { }

}
