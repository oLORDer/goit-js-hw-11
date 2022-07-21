import axios from "axios";

export class Pixabay{
    #API_KEY = '28738829-9f4f28c3b0015af3dd201bcd9';
    #BASE_URL ='https://pixabay.com/api';

    constructor(q){
        this.page = 1;
        this.q = q;
    }

    fetchPhotosByQuery() {
        const urlSearchParams = new URLSearchParams({
            key : this.#API_KEY,
            q : this.q,
            image_type : 'photo',
            orientation : 'horizontal',
            safesearch : true,
            per_page : 40,
            page: this.page
        })
            return axios.get(`${this.#BASE_URL}/?${urlSearchParams}`)
    }
}