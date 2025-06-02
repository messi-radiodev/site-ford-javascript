// Array storage class
let carouselArr = [];

// class Carousel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._carouselArr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;

            Carousel.ShowCurrent(); // Exibe a primeira imagem
            Carousel._interval = setInterval(() => Carousel.Next(), 5000); // 5 segundos
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    static ShowCurrent() {
        const item = Carousel._carouselArr[Carousel._sequence];
        const carouselDiv = document.getElementById("carousel");
        const carouselLink = document.getElementById("carousel-link");
    
        carouselDiv.style.backgroundImage = `url(${item.image})`;
        carouselDiv.style.backgroundSize = "contain";
        carouselDiv.style.backgroundPosition = "center";
        carouselDiv.style.backgroundRepeat = "no-repeat";
        
    
        const titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;
    
        // atualiza o link da imagem
        if (carouselLink) {
            carouselLink.href = item.url;
        }
    }

    // % sendo utilizado para o resto da divisão, carrossel nunca trava e nunca sai dos limites do array.
    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.ShowCurrent();
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.ShowCurrent();
    }
}

// Botões de navegação após carregar a página
window.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            Carousel.Prev();
        });

        nextBtn.addEventListener("click", () => {
            Carousel.Next();
        });
    }
});