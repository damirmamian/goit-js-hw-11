import axios from 'axios';

const API_KEY = "53393377-61327aeaa606bd712bd3f0283"
const URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    return axios.get(URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true"
        }
    }).then(response => response.data)
}