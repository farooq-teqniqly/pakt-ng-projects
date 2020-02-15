import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tqDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.dropdown') dropdown = true;
  @HostBinding('class.is-active') isActive = true;
  constructor() { }

}
