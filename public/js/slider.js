document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slider-container").forEach((container) => {
        let slides = container.querySelectorAll("img");
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
