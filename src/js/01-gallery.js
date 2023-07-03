// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item" style="background: transparent; box-shadow: none;">
  <a class="gallery__item" href="${original}" style= "box-shadow: none;">
  <img class="gallery__image" src="${preview}" alt="${description}" style="border: 1px solid transparent;
   0px 2px 1px -1px rgb(0 0 0 / 12%);"/>
</a>
</div>`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);