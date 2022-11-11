// const screenWidth = window.screen.width;
// console.log(screenWidth);
const details = document.querySelectorAll("details");
console.log(details);
console.log(document.documentElement.clientWidth);
// console.log(details[1].open);
for (let i = 0; i < details.length; i++) {
  if (document.documentElement.clientWidth > 768) {
    details[i].open = true;
    // console.log(details[i].open);
  }
}
