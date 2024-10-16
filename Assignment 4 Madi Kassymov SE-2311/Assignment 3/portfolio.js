const images = [
    'images/guitar.jpg',
    'images/horse.jpg',
    'images/photographing.jpg',
    'images/sport-d-hiver-ski.jpg',
    'images/01J7B91F7W73NQMGXTZBGSR3YF.jpg',
    'images/Puck-Drop-CARHA-Hockey-Member-Benefits-1024x576.jpg',
];

let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Функция для обновления изображения
function updateImage() {
    currentImage.src = images[currentIndex];
}

// Обработчик кнопки "Назад"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

// Обработчик кнопки "Вперед"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});