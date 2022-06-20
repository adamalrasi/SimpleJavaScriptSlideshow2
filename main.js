var i = 0;
var images = [];
var time = 3000;

// Image list
images[0] = 'img/pic1.avif';
images[1] = 'img/pic2.avif';
images[2] = 'img/pic3.avif';
images[3] = 'img/pic4.avif';
images[4] = 'img/pic5.avif';

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
