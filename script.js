const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const dropdownBtn = document.querySelector(".dropdown-btn");
const menuItem = document.querySelector(".menu-item");


// BUAT BURGER UTAMA
if (burger && menu) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }

// BUAT DROPDOWN PACKAGE
if (dropdownBtn && menuItem) {
    dropdownBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah halaman lompat ke atas
      menuItem.classList.toggle("active");
    });
  }
});


const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
  setTimeout(() => card.classList.add('show'), i * 200); // 200ms jeda
});


document.addEventListener("DOMContentLoaded", function () {
  // Buat pengamat (Observer) scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Jika elemen masuk ke area layar HP/Browser
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1 // Elemen bakal muncul begitu 10% bagiannya kelihatan
  });

  // Pilih elemen yang mau dikasih animasi scroll
  const animatedElements = document.querySelectorAll(".card, .hidden-left");
  
  // Jalankan observer untuk setiap elemen
  animatedElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 1;
  const totalPages = document.querySelectorAll('.terms-page').length;

  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const pageNumDisplay = document.getElementById('current-page-num');
  const totalPageDisplay = document.getElementById('total-pages-num');

  totalPageDisplay.textContent = totalPages;

  function updatePage(newPage) {
    // Sembunyikan halaman lama & tampilkan yang baru
    document.querySelectorAll('.terms-page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page-${newPage}`).classList.add('active');

    // Update Step Indicator
    document.querySelectorAll('.step').forEach((step, index) => {
      if (index + 1 === newPage) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    currentPage = newPage;
    pageNumDisplay.textContent = currentPage;

    // Atur Status Tombol
    btnPrev.disabled = currentPage === 1;
    if (currentPage === totalPages) {
      btnNext.textContent = 'Selesai / Setuju';
    } else {
      btnNext.textContent = 'Selanjutnya →';
    }

    // Scroll otomatis ke atas halaman saat pindah
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  btnNext.addEventListener('click', () => {
    if (currentPage < totalPages) {
      updatePage(currentPage + 1);
    } else {
      alert('Terima kasih telah membaca Syarat & Ketentuan Sonic Home!');
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  });
});


// Toggle Burger Menu Main
const burgerToggle = document.getElementById('burger-toggle');
const navMenu = document.getElementById('nav-menu');

burgerToggle.addEventListener('click', () => {
  burgerToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Toggle Submenu Produk
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownParent = dropdownToggle.parentElement;

dropdownToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('show');
  dropdownParent.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen burger button, menu dropdown, dan icon-nya
    const wifiMenuBtn = document.getElementById('wifi-menu-btn');
    const wifiMobileMenu = document.getElementById('wifi-mobile-menu');
    const wifiMenuIcon = document.getElementById('wifi-menu-icon');

    // Cek dulu apakah elemennya ada di halaman biar gak error
    if (wifiMenuBtn && wifiMobileMenu && wifiMenuIcon) {
        wifiMenuBtn.addEventListener('click', () => {
            // Toggle class 'hidden' buat buka/tutup menu
            wifiMobileMenu.classList.toggle('hidden');

            // Ganti icon burger (fa-bars) jadi silang (fa-xmark) dan sebaliknya
            if (wifiMobileMenu.classList.contains('hidden')) {
                wifiMenuIcon.classList.remove('fa-xmark');
                wifiMenuIcon.classList.add('fa-bars');
            } else {
                wifiMenuIcon.classList.remove('fa-bars');
                wifiMenuIcon.classList.add('fa-xmark');
            }
        });
    }
});

