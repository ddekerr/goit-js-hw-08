// Add imports above this line

import "simplelightbox/dist/simple-lightbox.min.css";
// import SimpleLightbox from "simplelightbox";
// const SimpleLightbox = require("simple-lightbox");
import { galleryItems } from './gallery-items';
// Change code below this line

const lightboxConfig = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  showCounter: false,
};

// create markup gallery
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', createMarkupInnerGallery(galleryItems));

// create lightbox instance and show
const lightbox = new SimpleLightbox('.gallery__item', lightboxConfig);
lightbox.on('show.simplelightbox');


// create markup for each gallery object and join them in one string
function createMarkupInnerGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `
  }).join("");
}