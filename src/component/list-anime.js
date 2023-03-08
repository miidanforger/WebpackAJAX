import './item-anime';

class ListAnime extends HTMLElement {
  set dataAnime(arrPred) {
    this._dataAnime = arrPred;
    this.render();
  }
  
  render() {
    // Clear first
    this.innerHTML = "";
    this._dataAnime.forEach(anime => {
      const elemItemAnime = document.createElement("item-anime");
      elemItemAnime.dataAnime = anime;
      elemItemAnime.style.width = '100%';
      elemItemAnime.style.display = 'flex';
      elemItemAnime.style.flexDirection = 'row';
      elemItemAnime.style.justifyContent = 'center';
      
      this.appendChild(elemItemAnime);
    });
  }
}

customElements.define('list-anime', ListAnime);
