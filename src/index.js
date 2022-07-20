import { Pixabay } from "./js/pixabay-api";
import { Notify } from "notiflix";
import templateFunction from './templates/gallery-cards.hbs';

const SearchForm  = document.querySelector('.search-form');
const gallery  = document.querySelector('.gallery');
const btn  = document.querySelector('.btn');
const pixabay = new Pixabay();



function onSearchFormSubmit(event) {
  event.preventDefault();
  pixabay.q = event.currentTarget.elements.searchQuery.value;
  btn.classList.add('is-hidden');
  pixabay.page = 1;


  pixabay.fetchPhotosByQuery()
  .then(responce =>{
    if (responce.data.total === 0) {
      return Notify.warning('Sorry, there are no images matching your search query. Please try again.');
    }
    Notify.success(`Was founded: ${responce.data.total} images`);
    gallery.innerHTML = templateFunction(responce.data.hits);
    btn.classList.remove('is-hidden');
  })
  .catch(reject => Notify.failure('error'))
}

function pagination() {
  pixabay.page += 1;
  pixabay.fetchPhotosByQuery()
  .then(responce => {
    if(responce.data.hits.length === 0) {
      Notify.warning('No more images');
      btn.classList.add('is-hidden');
    }
    gallery.insertAdjacentHTML("beforeend", templateFunction(responce.data.hits));
  })
  .catch(err => console.log('err:' + err))
}

SearchForm.addEventListener('submit', onSearchFormSubmit);
btn.addEventListener('click', pagination);