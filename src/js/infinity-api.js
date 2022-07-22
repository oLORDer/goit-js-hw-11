import axios from 'axios';

export const pixabay = {
  page: 1,
  q: null,

  fetchPhotosByQuery() {
    const urlSearchParams = new URLSearchParams({
      key: '28738829-9f4f28c3b0015af3dd201bcd9',
      q: this.q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: this.page,
    });
    return axios.get(`https://pixabay.com/api/?${urlSearchParams}`);
  },
};
