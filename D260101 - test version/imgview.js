const images = [
    //Preview Funktion

    'img/mountainview_1.jpeg',
    'img/mountainview_2.jpeg',
    'img/mountainview_3.jpeg',
    'img/mountainview_4.jpeg',
    'img/mountainview_5.jpeg',
    'img/mountainview_6.jpeg',
    'img/mountainview_7.jpeg',
    'img/mountainview_8.jpeg',
    'img/mountainview_9.jpeg',
    'img/mountainview_10.jpeg',
    'img/mountainview_11.jpeg',
    'img/mountainview_12.jpeg',
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

//Upload Funktion

const input = document.getElementById("files");
const thumbs = document.getElementById("thumbs");

input.addEventListener("change", () => {


    [...input.files].forEach(file => {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.style.width = "150px";
        img.style.height = "150px";
        img.style.objectFit = "cover";
        img.style.paddingLeft = "10px";
        img.style.paddingRight = "10px";
        img.style.borderRadius = "25px";
        thumbs.appendChild(img);
    });
});


function drawThumbnail(ctx, img, size) {
    const ratio = Math.max(size / img.width, size / img.height);
    const w = img.width * ratio;
    const h = img.height * ratio;
    const x = (size - w) / 2;
    const y = (size - h) / 2;

    ctx.drawImage(img, x, y, w, h);
}

//Bilderspeicher löschen

function img_delete() {
    thumbs.innerHTML = "";
    upload.value = "";
    return
}


//Bilderanzahl pro Zeile


const maxPerRow = 7;

function renderThumbnail(file, index) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);


    if ((index + 1) % maxPerRow === 0) {
        img.style.marginRight = "0";
    }

    gallery.appendChild(img);
}
