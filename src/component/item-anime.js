class ItemAnime extends HTMLElement {
    set dataAnime(objItem) {
      this._dataAnime = objItem;
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div style='background-color: #115e59;  border-radius: 15px; width:100%; max-width:400px ; padding : 10px;text-align:center;'>
          <div style="font-size:15pt; font-family:fantasy; color:white; margin-bottom:10px;">${this._dataAnime.animeTitle}</div>
          <img src="${this._dataAnime.animeImg}" style="width:100%; height:auto; border-radius: 15px"/>
        </div>
      `;
    }
  }
  
  customElements.define("item-anime", ItemAnime);