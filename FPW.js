window.addEventListener('scroll', function() {
    const image = document.querySelector('.slide-image');
    
    
    // Mendapatkan posisi scroll halaman
    const scrollPosition = window.scrollY;

    // Memeriksa apakah posisi scroll sudah melewati nilai tertentu (misalnya 300px)
    if (scrollPosition > 300) {
        image.style.opacity = 1;  // Mengubah opacity menjadi 1 (gambar muncul)
        image.style.transform = 'translateX(0)';  // Gambar bergerak ke posisi semula
    } else {
        image.style.opacity = 0;  // Menyembunyikan gambar
        image.style.transform = 'translateX(-100%)';  // Gambar kembali ke kiri luar layar
    }
});
