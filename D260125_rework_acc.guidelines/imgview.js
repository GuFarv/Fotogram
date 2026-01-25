let images = [
    'mountainview_1.jpeg',
    'mountainview_2.jpeg',
    'mountainview_3.jpeg',
    'mountainview_4.jpeg',
    'mountainview_5.jpeg',
    'mountainview_6.jpeg',
    'mountainview_7.jpeg',
    'mountainview_8.jpeg',
    'mountainview_9.jpeg',
    'mountainview_10.jpeg',
    'mountainview_11.jpeg',
    'mountainview_12.jpeg',
]

let currentIndex = 0;

// Pushen der Bilder von Tabelle zu Gallerie
function pushImageWidgets() {

    const PHOTO_CONTAINER = document.getElementById("photo_content");

    for (let i = 0; i < images.length; i++) {
        const IMAGE = images[i];
        PHOTO_CONTAINER.innerHTML += `<img onclick="openDialog(${i})" tabindex="0" onkeydown="tabToOpenImageWidgets(event,${i})" class="GalleryImage" src="img/${IMAGE}" alt="${IMAGE}">`;
    }
}


// Öffnen und Schließen der Gallerie
function openDialog(index) {
    currentIndex = index;

    const DIALOG_REF = document.getElementById("img_dialog");
    DIALOG_REF.showModal();
    DIALOG_REF.classList.add("opened");

    const BODY_OVERFLOW = document.getElementById("hide_scrollbar");
    BODY_OVERFLOW.classList.add("HideScrollbar");

    updateDialog();
}

function closeDialog() {
    const DIALOG_REF = document.getElementById("img_dialog");
    DIALOG_REF.close();
    DIALOG_REF.classList.remove("opened");

    const BODY_OVERFLOW = document.getElementById("hide_scrollbar");
    BODY_OVERFLOW.classList.remove("HideScrollbar");
}

// Indexaktualisierung für Navigation
function updateDialog() {
    pushDialogHeadline(currentIndex);
    pushDialogImage(currentIndex);
    showIndex(currentIndex);
}

// Push Inhalt von "Dialog"
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

// Funktionen von "Dialog Navigation"
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

// Referenzierungen auf Elemente
const dialog = document.getElementById('img_dialog');
const background = document.getElementById('dialog_background');

// Klicken auf Hintergrund schließt "Dialog"
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
