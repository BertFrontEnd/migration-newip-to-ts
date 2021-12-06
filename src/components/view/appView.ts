import News from './news/news';
import Sources from './sources/sources';
import { DataNews, DataSource } from '../options';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: DataNews): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: DataSource): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}
