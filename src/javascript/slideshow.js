const cycleImages = () => {
    var images = document.getElementsByClassName("main-slide-img");

    for (image of images) {
        image.style.display = 'none';
    }

    images[currentIndex].style.display = 'block';
    currentIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
    setTimeout(cycleImages, 6000);
}

var currentIndex = 0;
cycleImages();