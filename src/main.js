import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form")
const gallery = document.querySelector(".gallery")

form.addEventListener("submit", event => {
    event.preventDefault()
    const query = event.target.elements["search-text"].value.trim()
    if (query === " ") {
        iziToast.error({
            message: "Type something into the search",
            position: 'topRight',
        })
        return
    }
    clearGallery()
    showLoader()
    getImagesByQuery(query)
        .then(response => {
            if (response.hits.length == 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight'
                })
            } else if (response.hits.length > 0) {
                createGallery(response.hits)
            }
        })
        .catch(error => {
            iziToast.error({
                message: `Error: ${error}`,
                position: 'topRight',
            })
            hideLoader()

        })
        .finally(() => hideLoader())
    event.target.reset()
})