import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tqDropdownMenu]'
})
export class DropdownMenuDirective {
  @HostBinding('attr.role') role = 'menu';
  @HostBinding('class.dropdown-menu') dropdownMenu = true;
  constructor() { }

}
