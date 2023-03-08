import axios from "axios";
import './component/list-anime';
import './component/item-anime';

// Fungsi untuk mengambil data Anime dari API
const getListAnime = async () => {
  const compListAnime = document.querySelector("list-anime");
  axios.get('https://gogoanime.consumet.org/recent-release')
  .then((response) => {
    // Olah data Anime disini
    compListAnime.dataAnime = response.data;
  })
  .catch((error) => {console.log(error)});
}

window.addEventListener("DOMContentLoaded", () => {
  getListAnime();
});