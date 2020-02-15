import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tqDropdownItem]'
})
export class DropdownItemDirective {
  @HostBinding('class.dropdown-item') dropdownItem = true;
  constructor() { }

}
