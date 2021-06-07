import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./pages/pages.module')
        .then(m => m.PagesModule),

  } ,
  { path: '', redirectTo: 'news-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'news-list' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }