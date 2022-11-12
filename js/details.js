// const screenWidth = window.screen.width;

const details = document.querySelectorAll("details");
console.log(details);
console.log(document.documentElement.clientWidth);

for (let i = 0; i < details.length; i++) {
  if (document.documentElement.clientWidth > 768) {
    details[i].open = true;
    // console.log(details[i].open);
  }
}

window.addEventListener(
  "resize",
  (event) => {
    for (let i = 0; i < details.length; i++) {
      if (document.documentElement.clientWidth > 768) {
        details[i].open = true;
      }
    }
  },
  false
);

window.addEventListener(
  `resize`,
  (event) => {
    for (let i = 0; i < details.length; i++) {
      if (document.documentElement.clientWidth < 768) {
        details[i].open = false;
      }
    }
  },
  false
);
