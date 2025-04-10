document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-equipamento");
    const todosSlides = document.querySelectorAll(".slide");

    function esconderTodosSlides() {
        todosSlides.forEach(slide => {
            slide.style.display = "none";
        });
    }

    if (todosSlides[0]) todosSlides[0].style.display = "flex";

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            let alvo = button.dataset.target;
            const slideAtual = document.querySelector(`.slide.${alvo}`);

            esconderTodosSlides();

            if (slideAtual) {
                slideAtual.style.display = "flex";
            }
        });
    });

    document.querySelectorAll(".slider-container").forEach((container) => {
        const slides = container.querySelectorAll("img");
        let slideIndex = 1;

        function showDivs(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach(slide => (slide.style.display = "none"));
            slides[slideIndex - 1].style.display = "block";
        }

        function moveSlide(n) {
            showDivs(slideIndex += n);
        }

        showDivs(slideIndex);

        container.querySelector(".prev")?.addEventListener("click", () => moveSlide(-1));
        container.querySelector(".next")?.addEventListener("click", () => moveSlide(1));
    });
});
