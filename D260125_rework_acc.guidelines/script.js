let images = [
    'mountainview_1.jpg',
    'mountainview_2.jpg',
    'mountainview_3.jpg',
    'mountainview_4.jpg',
    'mountainview_5.jpg',
    'mountainview_6.jpg',
    'mountainview_7.jpg',
    'mountainview_8.jpg',
    'mountainview_9.jpg',
    'mountainview_10.jpg',
    'mountainview_11.jpg',
    'mountainview_12.jpg',
]

// referencing of elements
const dialog = document.getElementById('img_dialog');
const background = document.getElementById('dialog_background');

let currentIndex = 0;


// Push img from array to gallery
function pushImageWidgets() {

    const PHOTO_CONTAINER = document.getElementById("photo_content");

    for (let i = 0; i < images.length; i++) {
        const IMAGE = images[i];
        PHOTO_CONTAINER.innerHTML += `<img onclick="openDialog(${i})" tabindex="0" onkeydown="tabToOpenImageWidgets(event,${i})" class="GalleryImage" src="img/${IMAGE}" alt="${IMAGE}">`;
    }
}


// opening and closing of gallery
function toggleDialog(open, index = null) {
    const DIALOG_REF = document.getElementById("img_dialog");
    const BODY_OVERFLOW = document.getElementById("hide_scrollbar");

    if (open) {
        currentIndex = index;
        DIALOG_REF.showModal();
        DIALOG_REF.classList.add("opened");
        BODY_OVERFLOW.classList.add("HideScrollbar");
        updateDialog();
    } else {
        DIALOG_REF.close();
        DIALOG_REF.classList.remove("opened");
        BODY_OVERFLOW.classList.remove("HideScrollbar");
    }
}

// open
function openDialog(index) {
    toggleDialog(true, index);
}

// close
function closeDialog() {
    toggleDialog(false);
}


// Index update for navigation
function updateDialog() {
    pushDialogHeadline(currentIndex);
    pushDialogImage(currentIndex);
    showIndex(currentIndex);
}

// Push content of "Dialog"
function pushDialogHeadline(index) {
    const HEADLINE_CONTAINER = document.getElementById("dialog_title");
    HEADLINE_CONTAINER.innerHTML = images[index].toUpperCase();
}

function pushDialogImage(index) {
    const IMAGE_CONTAINER = document.getElementById("big_picture");
    IMAGE_CONTAINER.innerHTML = `<img src="img/${images[index]}">`;
}

function showIndex(index) {
    let showIndex = document.getElementById("show_index");
    showIndex.innerHTML = `${[index + 1]}/${images.length}`;
}

// Function "Dialog Navigation"
function navBack() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateDialog();
}

function navForward() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateDialog();
}


// click onto boackgraund closes "Dialog"
dialog.onclick = function () {
    closeDialog();
};

// der Klick auf das "Dialogfenster" schließt es
background.onclick = function (event) {
    event.stopPropagation();
};

//Manuelle Navigation mit Tastatur

function tabToOpenImageWidgets(event, index) {
    if (event.key === "Enter") {
        openDialog(index);
    }
}

document.addEventListener("keydown", function (event) {
    const dialog = document.getElementById("img_dialog");

    if (!dialog.open) return;

    switch (event.key) {
        case "ArrowLeft":
            navBack();
            break;

        case "ArrowRight":
            navForward();
            break;

        case "Escape":
            closeDialog();
            break;

    }
});

//tab functionality WCAG

const tabElement = document.getElementById("img_dialog");

tabElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    navForward();
    navBack();
    closeDialog()
  }
});



