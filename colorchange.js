document.getElementById('toggleColorButton').addEventListener('click', function() {
    document.getElementById('imageInput').click(); // Имитируем нажатие на input файл
});

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Получаем выбранный файл
    if (file) {
        const reader = new FileReader(); // Создаем объект FileReader
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`; // Устанавливаем фоновое изображение
            document.body.style.backgroundSize = 'cover'; // Растягиваем изображение на весь экран
            document.body.style.backgroundPosition = 'center'; // Центрируем изображение
        }
        reader.readAsDataURL(file); // Читаем содержимое файла как Data URL
    }
});
