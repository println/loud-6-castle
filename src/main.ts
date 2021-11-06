/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';
import { enableAkitaProdMode } from '@datorama/akita';
import mockService from './.mirage/mock.service';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

mockService.setup(environment.production);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
