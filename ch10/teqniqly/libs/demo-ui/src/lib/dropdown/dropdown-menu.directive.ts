import { Directive, HostBinding, Host, HostListener } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[tqDropdownMenu]'
})
export class DropdownMenuDirective {
  @HostBinding('attr.role') role = 'menu';
  @HostBinding('class.dropdown-menu') dropdownMenu = true;

  @HostListener('click') onClick() {
    this.dropdown.isActive = false;
  }
  
  constructor(@Host() private dropdown: DropdownDirective) { }

}
