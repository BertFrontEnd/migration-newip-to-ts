import './sources.css';
import { Article } from '../../options';

class Sources {
  draw(data: Article[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp');

    data.forEach((item: Article) => {
      const sourceClone = (sourceItemTemp as HTMLMetaElement).content.cloneNode(true);

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone
        .querySelector('.source__item')
        .setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
