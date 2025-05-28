//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor (image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._carouselArr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 4000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

        const item = Carousel._carouselArr[Carousel._sequence];

        const carouselDiv = document.getElementById("carousel");

        carouselDiv.style.backgroundImage = `url(${item.image})`;
        carouselDiv.style.backgroundSize = "contain";
        carouselDiv.style.height = "500px";
        carouselDiv.style.backgroundRepeat = "no-repeat";

        // Atualiza o texto no container com ID 'carousel-title'
        const titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;

        // Avança para a próxima imagem (loop circular)
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
    
};

/* arqruivo atualizado verificar
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

        carouselDiv.style.backgroundImage = `url(${item.image})`;
        carouselDiv.style.backgroundSize = "contain";
        carouselDiv.style.backgroundPosition = "center";
        carouselDiv.style.backgroundRepeat = "no-repeat";
        carouselDiv.style.height = "500px";

        const titleDiv = document.getElementById("carousel-title");
        titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;
    }

    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.ShowCurrent();
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.ShowCurrent();
    }
}

// ⬇️ Botões de navegação após carregar a página
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

*/