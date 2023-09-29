import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/@modules/layout/shell/shell.service';
import { PATHS, ROUTES } from '@config/routes.config';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: ROUTES.about.id,
      loadChildren: () => import('./@modules/layout/about/about.module').then((m) => m.AboutModule),
    },
    {
      path: PATHS.empty,
      loadChildren: () => import('./@modules/domain/domain.module').then((m) => m.DomainModule),
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
