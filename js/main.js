let paginationItems = document.querySelectorAll(".cta__pagination-item");
let activeIndex = 0;

const images = [
  { 0: "./assets/1_0.jpg", 1: "./assets/1_1.jpg", 2: "./assets/1_2.jpg" },
  { 0: "./assets/2_0.jpg", 1: "./assets/2_1.jpg", 2: "./assets/2_2.jpg" },
  { 0: "./assets/3_0.jpg", 1: "./assets/3_1.jpg", 2: "./assets/3_2.jpg" },
];

const changeImages = (id) => {
  let first = document.querySelector(".cta__image");
  let second = document.querySelector(".cta__right-second");
  let third = document.querySelector(".cta__right-third");

  first.src = images[id][0];
  third.src = images[id][1];
  second.src = images[id][2];
};

const setActive = (index) => {
  activeIndex = index;
  let active = document.querySelector(".cta__pagination-item.active");
  active.classList.remove("active");
  paginationItems[index].classList.add("active");
};

let interval = setInterval(() => {
  if (activeIndex < 2) {
    activeIndex += 1;
  } else {
    activeIndex = 0;
  }
  setActive(activeIndex);
  changeImages(activeIndex);
}, 3000);

for (let i = 0; i < paginationItems.length; i++) {
  paginationItems[i].addEventListener("click", () => {
    setActive(i);
    changeImages(i);
  });
}
