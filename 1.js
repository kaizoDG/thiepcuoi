const heartsContainer = document.querySelector('.hearts');

function createHeart() {

    const heart = document.createElement('span');

    heart.innerHTML = '❤';

    heart.style.left = Math.random() * 100 + '%';

    heart.style.bottom = '-50px';

    heart.style.animationDuration =
        6 + Math.random() * 4 + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

/* tạo liên tục */

setInterval(createHeart, 300);
const btn = document.getElementById("openBtn");
const card = document.getElementById("card");
const screen = document.getElementById("openScreen");
btn.addEventListener("click", () => {

      const logoImg = document.querySelector(".logo-circle img");
    const hoaLeft = document.querySelector(".hoa-left");
    const hoaRight = document.querySelector(".hoa-right");

    const phuongLeft = document.querySelector(".phuong-left");
    const phuongRight = document.querySelector(".phuong-right");

    setTimeout(() => {
        logoImg.classList.add("logo-img-zoom");
    },10);

    // 2️⃣ Hoa biến mất sau
    setTimeout(() => {
        hoaLeft.classList.add("hoa-zoom");
        hoaRight.classList.add("hoa-zoom");
    }, 600);

    // 3️⃣ Phượng biến mất cuối
    setTimeout(() => {
         phuongLeft.style.animation = "none";
         phuongRight.style.animation = "none";

        phuongLeft.classList.add("phuong-zoom");
        phuongRight.classList.add("phuong-zoom");
    }, 900);

    // Card thu nhỏ như cũ
    setTimeout(() => {
        card.classList.add("opened");
    }, 1000);

    // Ẩn màn hình
    setTimeout(() => {
        screen.classList.add("hide-screen");
    }, 1100);

});

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


/* ================= TIỀN MỪNG ================= */

window.addEventListener("DOMContentLoaded", () => {

const moneyBox = document.getElementById("moneyBox");
const qrContainer = document.getElementById("qrContainer");

if (moneyBox && qrContainer) {
    moneyBox.addEventListener("click", () => {
        moneyBox.style.display = "none"; // Ẩn hộp tiền mừng
        qrContainer.classList.add("show-qr"); // Hiện QR
    });
}

});

/* TỰ ĐỘNG NHÂN BẢN ẢNH ĐỂ TẠO LOOP */

window.addEventListener("load", () => {

    const gallery = document.querySelector(".gallery-grid");

    const items = Array.from(gallery.children);

    items.forEach(item => {

        const clone = item.cloneNode(true);

        gallery.appendChild(clone);

    });

});