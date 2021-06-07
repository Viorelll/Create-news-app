import { Component, EventEmitter, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { News } from '../../../core/models/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: News[] = [];
  key: string = "";

  constructor(
    private router: Router, 
    private newsService: NewsService) {

   }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(newsList => {
      this.news.push(...newsList);
    });
  }

  printIconEvent(iconItemEvent: string) {
    console.log(iconItemEvent);
  }

  onDeleteNews(newsId: number) {

    this.newsService.getNewsById(newsId).subscribe(newsResult => {
      this.key = newsResult['key'];
      this.removeNewsByKey(this.key);
    });

    this.router.navigate(['/news-list']);
  }

  onEditNews(newsId: number) {
    this.router.navigate(['/news-list/edit', newsId]);
  }

  removeNewsByKey(key: string) {
    this.newsService
      .deleteNews(this.key)
      .subscribe(_ => console.log('The item was successfully deleted'));
  }
}


