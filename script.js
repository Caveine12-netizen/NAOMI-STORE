document.addEventListener("DOMContentLoaded", function () {
    // Modal functionality
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            modalText.textContent = this.getAttribute("data-desc");
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Search functionality
    const searchInput = document.getElementById("search");
    const searchButton = document.querySelector(".search");
    const resetButton = document.querySelector(".reset");
    const productCards = document.querySelectorAll(".product-card");

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const productName = card.querySelector("h3").textContent.toLowerCase();
            if (productName.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Reset search
    resetButton.addEventListener("click", function () {
        searchInput.value = "";
        productCards.forEach(card => {
            card.style.display = "block";
        });
    });
});
