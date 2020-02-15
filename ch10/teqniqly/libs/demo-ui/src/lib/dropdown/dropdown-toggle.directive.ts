import { Directive, HostBinding, HostListener, Host } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[tqDropdownToggle]'
})
export class DropdownToggleDirective {
  @HostBinding('attr.aria-haspopup') ariaHasPopup = 'true';

  @HostListener('click') onClick() {
    this.dropdown.toggle();
  }
  constructor(@Host() private dropdown: DropdownDirective) { 
    
  }
}
