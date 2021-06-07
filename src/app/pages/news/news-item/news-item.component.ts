
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() news: any;
  @Output() newsItemEvent = new EventEmitter<string>();

  @Output() deleteNewsEvent = new EventEmitter<number>();
  @Output() editNewsEvent = new EventEmitter<number>();

  constructor(  ) { }

  ngOnInit(): void {
  }

  newsImageClick(value: string) {
    this.newsItemEvent.emit(value);
  }

  onEditNews(id: number) {
    //console.log('Edit Id ' + id);
    this.editNewsEvent.emit(id);
  }

  emitDeleteNews(id: number) {
    //console.log('Delete Id ' + id);
    this.deleteNewsEvent.emit(id);
  }

}
