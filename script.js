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