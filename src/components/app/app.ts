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
    document
      // eslint-disable-next-line max-len
      .querySelector('.sources')?.addEventListener('click', (e) => this.controller.getNews(e, (data: DataNews) => this.view.drawNews(data)));
    this.controller.getSources((data: DataSource) => this.view.drawSources(data));
  }
}

export default App;
