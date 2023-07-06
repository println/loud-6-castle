/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';
import { enableElfProdMode } from '@ngneat/elf';
import { devTools } from '@ngneat/elf-devtools';
import mockService from './.mirage/mock.service';

if (environment.production) {
  enableProdMode();
  enableElfProdMode();
}

mockService.setup(environment.production);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef) => {
    devTools({
      postTimelineUpdate: () => moduleRef.injector.get(ApplicationRef).tick(),
    });
  })
  .catch((err) => console.error(err));
