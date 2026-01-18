const images = [
"1_img.jpeg",
"2_img.jpeg",
"3_img.jpeg",
"4_img.jpeg",
"5_img.jpeg",
"6_img.jpeg",
"7_img.jpeg",
"8_img.jpeg",
"9_img.jpeg",
"10_img.jpeg",
"11_img.jpeg",
"12_img.jpeg",
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

// Tastatursteuerung
document.addEventListener("keydown", (e) => {
if (document.getElementById("lightbox").style.display === "flex") {
if (e.key === "ArrowRight") changeImage(1);
if (e.key === "ArrowLeft") changeImage(-1);
if (e.key === "Escape") closeLightbox();
}
});