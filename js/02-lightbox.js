import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const createGalery = galleryItems
  .map(
    (
      galleryItem
    ) => `<a class="gallery__item" href="${galleryItem.original}" title="${galleryItem.description}" loading="lazy">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" loading="lazy"/>
</a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", createGalery);

const showImage = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
