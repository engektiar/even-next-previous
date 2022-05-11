var photos = ["img/img5.jpg", "img/img (1).jpg", "img/img (2).jpg", "img/img (3).jpg", "img/img (4).jpg", "img/8 (1).jpg", "img/8 (2).jpg", "img/8 (3).jpg"];
var imgtag = document.querySelector("img");
var count = 0;

function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgtag.src = photos[count];
  } else {
    imgtag.src = photos[count];
  }
}
function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgtag.src = photos[count];
  } else {
    imgtag.src = photos[count];
  }
}
