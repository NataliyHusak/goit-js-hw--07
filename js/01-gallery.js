import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGalery = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", createGalery);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const imgUrl = e.target.dataset.source;
    const instance = basicLightbox.create(`
      <img src="${imgUrl}" width="800" height="600">
    `);
    instance.show();
  }
});
