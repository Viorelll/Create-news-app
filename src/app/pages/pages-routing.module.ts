import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'news-list'
            },
            {   
                path: 'news-list',
                loadChildren: () => 
                    import('./news/news.module')
                    .then(m => m.NewsListModule)
            }     
        ]
    },  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class PagesRoutingModule {
  }
  