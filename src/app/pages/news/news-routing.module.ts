import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsListComponent } from "./news-list/news-list.component";

const routes: Routes = [
    {
        path: '',
        component: NewsListComponent,
        children: [
            {
                path: 'add',
                component: NewsFormComponent
            },
            {
                path: 'edit/:id',
                component: NewsFormComponent
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
  export class NewsRoutingModule {
  }
  