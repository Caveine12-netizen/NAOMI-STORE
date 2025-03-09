// Reset tombol pencarian
document.querySelector('.reset').addEventListener('click', function() {
    document.getElementById('search').value = '';
});

// Event listener untuk tombol "Read More"
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.getAttribute('data-desc');
        document.getElementById('modal-text').innerText = description;
        document.getElementById('modal').style.display = 'block';
    });
});

// Event listener untuk tombol close di modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Tutup modal jika klik di luar kontennya
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
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
                card.style.display = "block";  // Tampilkan jika cocok
            } else {
                card.style.display = "none";  // Sembunyikan jika tidak cocok
            }
        });
    }

    function resetSearch() {
        searchInput.value = "";
        productCards.forEach(card => card.style.display = "block"); // Tampilkan semua produk
    }

    searchButton.addEventListener("click", searchProducts);
    resetButton.addEventListener("click", resetSearch);

    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
});
