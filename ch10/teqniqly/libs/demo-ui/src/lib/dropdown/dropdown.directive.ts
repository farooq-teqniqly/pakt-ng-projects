import { Directive, HostBinding } from '@angular/core';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';

@Directive({
  selector: '[tqDropdown]'
})
export class DropdownDirective {
  private isOpen = false;

  //toggle: DropdownToggleDirective;
  menu: DropdownMenuDirective;

  @HostBinding('class.dropdown') dropdown = true;
  
  @HostBinding('class.is-active') 
  get isActive(): boolean {
    return this.isOpen;
  }
  set isActive(value: boolean) {
    this.isOpen = value;
  }


  constructor() {}
}
