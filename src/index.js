import { Pixabay } from './js/pixabay-api';
import { Notify } from 'notiflix';
import templateFunction from './templates/gallery-cards.hbs';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const SearchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const btn = document.querySelector('.btn');
const pixabay = new Pixabay();

SearchForm.addEventListener('submit', onSearchFormSubmit);
btn.addEventListener('click', pagination);

async function onSearchFormSubmit(event) {
  event.preventDefault();
  pixabay.q = event.currentTarget.elements.searchQuery.value;
  btn.classList.add('is-hidden');
  pixabay.page = 1;

  try {
    const response = await pixabay.fetchPhotosByQuery();

    if (response.data.total === 0) {
      return Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    if (pixabay.page * pixabay.per_page < response.data.totalHits) {
      console.log('total:', response.data.total)
      btn.classList.remove('is-hidden');
    }
    Notify.success(`Was founded: ${response.data.total} images`);
    gallery.innerHTML = templateFunction(response.data.hits);
    lightbox.refresh();
  } catch (error) {
    Notify.failure(error.message);
  }
}

async function pagination() {
  pixabay.page += 1;

  const response = await pixabay.fetchPhotosByQuery();

  try {
    if (pixabay.page * pixabay.per_page >= response.data.totalHits) {
      console.log('hits:', response.data.hits.length)
      Notify.warning("We're sorry, but you've reached the end of search results.");
      btn.classList.add('is-hidden');
    }
    gallery.insertAdjacentHTML(
      'beforeend',
      templateFunction(response.data.hits)
    );

    lightbox.refresh();
  } catch {
    console.log('err:' + err);
  }
}

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",captionPosition:"bottom",captionDelay : 250 });
