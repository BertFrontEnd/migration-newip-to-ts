import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataNews, DataSource } from '../options';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    document.querySelector('.sources')?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as DataNews)));
    this.controller.getSources((data) => this.view.drawSources(data as DataSource));
  }
}

export default App;
