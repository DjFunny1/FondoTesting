function loadImage() {
    var imageUrl = document.getElementById('imageUrlInput').value;
    var imageContainer = document.getElementById('imageContainer');

    imageContainer.style.backgroundImage = 'url("' + imageUrl + '")';
}

document.getElementById('imageUrlInput').addEventListener('input', loadImage);