import { Component, Input } from '@angular/core';

import { Article, ArticleListConfig, ArticlesService } from '../../core';
@Component({
  selector: 'app-article-list',
  styleUrls: ['article-list.component.css'],
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent {

  // @Input() config: ArticleListConfig;  // --- config(undefined) ???
  constructor(
    private articlesService: ArticlesService
  ) {
    // console.log("ArticleListComponent -> config", this.config)
    // console.log("ArticleListComponent -> limit", this.limit)
    // if (this.config !== undefined) {
    //   this.query = this.config;
    //   this.currentPage = 1;
    //   this.runQuery();
    // }
  }

  @Input() limit: number;

  @Input()
  set config(config: ArticleListConfig) {  // --- config(data) ???
    if (config) {
      // console.log('configs', config);
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ArticleListConfig;
  results: Article[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = (this.limit * (this.currentPage - 1));
    }

    this.articlesService.query(this.query)
      .subscribe(data => {
        // console.log('data', data);
        this.loading = false;
        this.results = data.articles;

        // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
        this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
      });
  }

}
