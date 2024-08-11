import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: '../img/gdansk1.jpg',
    original: '../img/gdansk1.jpg',
    description: 'Gdansk--Polen',
  },
  {
    preview: '../img/turkey1.jpg',
    original: '../img/turkey1.jpg',
    description: 'Alania--Tyrkiet',
  },
  {
    preview: '../img/aarhus1.jpg',
    original: '../img/aarhus1.jpg',
    description: 'Aarhus--Denmark',
  },
];

const imagesMarkup = images
  .map(
    image =>
      `<li class="gallery-item">
  <a class="gallery-link" href=${image.original}> 
    <img
      class="gallery-image"
      src=${image.preview}

      alt=${image.description}
    />
  </a>
</li>`
  )
  .join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', imagesMarkup);

let lightboxgallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightboxgallery.on('show.simplelightbox', function () {});
