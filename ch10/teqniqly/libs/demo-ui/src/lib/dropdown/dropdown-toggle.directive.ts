import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tqDropdownToggle]'
})
export class DropdownToggleDirective {
  @HostBinding('attr.aria-haspopup') ariaHasPopup = 'true';
  constructor() { }

}
