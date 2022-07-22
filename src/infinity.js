// btn and body theme
const btnToggleTheme = document.querySelector('#toggle-mode');
const body = document.querySelector('body');

btnToggleTheme.addEventListener('click', () => {
  body.classList.toggle('theme');
})

// images
import Notify  from 'notiflix';
import markup  from './templates/gallery-cards.hbs';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {pixabay} from './js/infinity-api';


const searchBtn = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const btnMore = document.querySelector('.btn');

searchBtn.addEventListener('submit', onSurchSubmit);
btnMore.addEventListener('click', onClickBtnMore);

async function onSurchSubmit(e) {
  e.preventDefault();
  pixabay.q = e.currentTarget.elements.searchQuery.value;
  pixabay.page = 1;

  try {
    const response = await pixabay.fetchPhotosByQuery();
    gallery.innerHTML = markup(response.data.hits);
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  // console.log(pixabay.q);
}

async function onClickBtnMore() {
  
}