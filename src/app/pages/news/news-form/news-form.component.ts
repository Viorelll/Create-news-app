import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { News } from '../../../core/models/news';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {

  newsForm = this.fb.group({
    imagePath: [''],
    title: [''],
    description: [''],
  });

  result: any;
  listCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder, 
    private newsService: NewsService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {

      const newsId = +(param.get('id') || 0);

      if (newsId > 0 )
      {
        this.fillForm(newsId);
      }

      this.newsService
        .getNewsCount()
        .subscribe(response => {
          this.listCount = response;
          console.log('The list count was successfully fetched');
        });

    });
  }

  fillForm(newsId: number) {

    this.newsService.getNewsById(newsId).subscribe(newsResult => {
  
      this.result = newsResult;
  
      if (this.result) {

        let {id, ...form} = this.result['item'];

        this.newsForm.setValue(form);
      }
    });
  }


  onSubmit() {

    const newsId = +( this.route.snapshot.paramMap.get('id') || 0);

    const news = this.newsForm.value as News;

    if (this.result) {
      news.id = newsId;
      this.newsService
          .editNews(this.result['key'], news)
          .subscribe(_ => console.log('The item was successfully edited'));

    } else {

      news.id = this.listCount + 1;
      this.newsService
        .addNews(news)
        .subscribe(_ => console.log('The item was successfully added. Id = ' + news.id));
    }
    
  
    this.newsService.refreshNews();
    this.router.navigate(['/news-list']);
  }
}
