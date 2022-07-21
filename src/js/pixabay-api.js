import axios from "axios";

export class Pixabay{
    #API_KEY = '28738829-9f4f28c3b0015af3dd201bcd9';
    #BASE_URL ='https://pixabay.com/api';

    constructor(){
        this.page = 1;
        this.q = null;
        this.per_page = 15;
    }

    fetchPhotosByQuery() {
        const urlSearchParams = new URLSearchParams({
            key : this.#API_KEY,
            q : this.q,
            image_type : 'photo',
            orientation : 'horizontal',
            safesearch : true,
            per_page : this.per_page,
            page: this.page
        })
            return axios.get(`${this.#BASE_URL}/?${urlSearchParams}`)
    }
}