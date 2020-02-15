import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tqDropdownMenu]'
})
export class DropdownMenuDirective {
  @HostBinding('class.dropdown-menu') dropdownItem;
  @HostBinding('role') role = 'menu';
  constructor() { }

}
