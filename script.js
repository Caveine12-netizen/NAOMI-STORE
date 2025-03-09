document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const searchButton = document.querySelector(".btn.search");
    const resetButton = document.querySelector(".btn.reset");
    const productCards = document.querySelectorAll(".product-card");

    function searchProducts() {
        const searchText = searchInput.value.toLowerCase();
        
        productCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector(".read-more").getAttribute("data-desc").toLowerCase();

            if (title.includes(searchText) || description.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    function resetSearch() {
        searchInput.value = "";
        productCards.forEach(card => card.style.display = "block");
    }

    searchButton.addEventListener("click", searchProducts);
    resetButton.addEventListener("click", resetSearch);

    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
});
