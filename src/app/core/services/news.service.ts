import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 
 
  news: News[] = [];
  result: News | undefined;
  //   new News(
  //     1,
  //     "https://image.shutterstock.com/image-vector/background-screen-saver-on-breaking-600w-723749530.jpg", 
  //     "Breaking news", 
  //     "This is the content of the breaking news. Stay tune!!!"),
  // ];


  firebaseURL = "https://newsstorage-89f67-default-rtdb.firebaseio.com/newsstorage-89f67-default-rtdb.json";
  firebaseRootURL = "https://newsstorage-89f67-default-rtdb.firebaseio.com/newsstorage-89f67-default-rtdb/";

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient
      .get<any>(this.firebaseURL)
      .pipe(
        map(newsList => {
          //console.log(newsList);
          return Object.keys(newsList).map(key=> newsList[key]);
        })
      );
  }

  getNewsCount() {
    return this.httpClient
      .get<any>(this.firebaseURL)
      .pipe(
        map(newsList => {
          return Object.keys(newsList).map(key=> newsList[key]).length;
        })
      );
  }

  getNewsById(newsId: number)  {
    return this.httpClient
        .get<any>(this.firebaseURL)
        .pipe(
          map(newsList => {
            var key = Object.keys(newsList)
                            .find(key => (newsList[key] as News).id == newsId) as string;

            //console.log(key);
            
            return { 
              key: key, 
              item: newsList[key] 
            };
          })
        );
  }

  addNews(news: News) {
    return this.httpClient
        .post(this.firebaseURL, news);
  }

  deleteNews(key: string) {
    return this.httpClient
      .delete(this.firebaseRootURL + key + '.json');
  }

  editNews(key: string , news: any) {
    return this.httpClient
      .put(this.firebaseRootURL + key + '.json', JSON.stringify(news) );
  }
  
}
