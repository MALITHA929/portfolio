const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(card => {
            if (filter === "all") {
                card.style.display = "block";
            } else {
                const category = card.getAttribute("data-category");

                if (category.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });

    });
});