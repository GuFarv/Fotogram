const images = [
"./img/gallery/1_img.jpeg",
"./img/gallery/2_img.jpeg",
"./img/gallery/3_img.jpeg",
"./img/gallery/4_img.jpeg",
"./img/gallery/5_img.jpeg",
"./img/gallery/6_img.jpeg",
"./img/gallery/7_img.jpeg",
"./img/gallery/8_img.jpeg",
"./img/gallery/9_img.jpeg",
"./img/gallery/10_img.jpeg",
"./img/gallery/11_img.jpeg",
"./img/gallery/12_img.jpeg",
];

let currentIndex = 0;

function openLightbox(index) {
currentIndex = index;
document.getElementById("lightbox").style.display = "flex";
updateImage();
}

function closeLightbox() {
document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
currentIndex += direction;

if (currentIndex < 0) currentIndex = images.length - 1;
if (currentIndex >= images.length) currentIndex = 0;

updateImage();
}

function updateImage() {
document.getElementById("lightbox-img").src = images[currentIndex];
}


document.addEventListener("keydown", (e) => {
if (document.getElementById("lightbox").style.display === "flex") {
if (e.key === "ArrowRight") changeImage(1);
if (e.key === "ArrowLeft") changeImage(-1);
if (e.key === "Escape") closeLightbox();
}
});