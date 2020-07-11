import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Shell } from '@modules/layout/shell/shell.service';
import { ROUTE } from '@config/route.config';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: ROUTE.about.id,
      loadChildren: () => import('./@modules/layout/about/about.module').then((m) => m.AboutModule),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
