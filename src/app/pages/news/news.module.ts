import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsRoutingModule } from './news-routing.module';

import { FlexModule } from '@angular/flex-layout'

import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsItemComponent,
    NewsFormComponent,    
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    ReactiveFormsModule,
    NewsRoutingModule
  ]
})
export class NewsListModule { }
