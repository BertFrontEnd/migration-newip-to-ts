import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '62ae49ecdc1c4964ab1b7b617d830399',
    });
  }
}

export default AppLoader;
