import { Component, HostBinding, NgZone, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  host: { class: 'c-shell' },
})
export class ShellComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private ngZone: NgZone, private router: Router) {
    router.events.pipe(untilDestroyed(this)).subscribe((event) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {}

  private navigationInterceptor(event: any): void {
    if (event instanceof NavigationStart) {
      this.showLoader();
    }
    if (event instanceof NavigationEnd) {
      this.hideLoader();
    }
    if (event instanceof NavigationCancel) {
      this.hideLoader();
    }
    if (event instanceof NavigationError) {
      this.hideLoader();
    }
  }

  private showLoader() {
    this.ngZone.runOutsideAngular(() => {
      this.isLoading = true;
    });
  }

  private hideLoader(): void {
    const minimumRoutingResponseDelayInMilliseconds = 100;
    setTimeout(() => {
      this.ngZone.runOutsideAngular(() => {
        this.isLoading = false;
      });
    }, minimumRoutingResponseDelayInMilliseconds);
  }
}
