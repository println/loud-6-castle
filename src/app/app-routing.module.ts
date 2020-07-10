import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Shell } from '@modules/layout/shell/shell.service';
import { ROUTE_ID } from '@config/route-id.config';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: ROUTE_ID.about,
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
