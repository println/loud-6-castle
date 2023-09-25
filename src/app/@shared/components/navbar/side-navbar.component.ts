import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { ROUTES } from '@config';

@Component({
  standalone: true,
  selector: 'app-side-navbar, [app-side-navbar]',
  templateUrl: './side-navbar.component.html',
  imports: [CommonModule],
})
export class SideNavbarComponent implements OnInit, AfterViewInit {
  @HostBinding('class') class = 'c-navbar';

  routes = ROUTES;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.markDropdownItems();
  }

  private markDropdownItems() {
    const parentSelector = `.${this.class}__item`;
    const childSelector = `.${this.class}__nav`;
    const dropdownClass = `${this.class}__item--dropping`;

    const parents = this.querySelectorHas(parentSelector, childSelector);
    parents.forEach((el) => {
      this.renderer.addClass(el, dropdownClass);
    });
  }

  private querySelectorHas(parentSelector: string, childSelector: string): HTMLElement[] {
    const navbarEl = this.elementRef.nativeElement;
    return [].filter.call(navbarEl.querySelectorAll(parentSelector), (elem: HTMLElement) => {
      return elem.querySelector(childSelector);
    });
  }
}
