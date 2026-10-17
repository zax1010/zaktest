// js code
const filterButtons = document.querySelectorAll(".filter_buttons button");
const cards = document.querySelectorAll(".carte");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterName = button.getAttribute("data-name").toLowerCase();

        cards.forEach(card => {
            const cardCategory = card.getAttribute("data-name") ? card.getAttribute("data-name").toLowerCase() : "";

            if (filterName === "touts" || filterName === cardCategory) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});
