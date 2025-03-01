document.addEventListener("DOMContentLoaded", function () {
    console.log("🚛 Supreme Truckwash Website Loaded");

    // ==============================
    // 🚛 HERO SLIDESHOW FUNCTIONALITY
    // ==============================
    let slideIndex = 0;
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".hero-slider .slide"); // Only hero slides
    const dots = document.querySelectorAll(".dots-container .dot");
    const totalSlides = slides.length; // Correct count

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }

        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

        // Update Active Dot
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[slideIndex]) {
            dots[slideIndex].classList.add("active");
        }
    }

    function changeSlide(n) {
        showSlide(slideIndex + n);
    }

    function goToSlide(n) {
        showSlide(n);
    }

    function autoSlide() {
        changeSlide(1);
    }

    let slideInterval = setInterval(autoSlide, 5000);

    // Button Controls
    document.querySelector(".prev").addEventListener("click", function () {
        changeSlide(-1);
        resetAutoSlide();
    });

    document.querySelector(".next").addEventListener("click", function () {
        changeSlide(1);
        resetAutoSlide();
    });

    // Dot Navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            goToSlide(index);
            resetAutoSlide();
        });
    });

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 5000);
    }

    showSlide(slideIndex);

    // ==============================
    // 🖼️ WELCOME SECTION IMAGE SLIDER
    // ==============================
    let welcomeSlideIndex = 0;
    const welcomeSlidesContainer = document.querySelector(".welcome-slider .slides");
    const welcomeSlides = document.querySelectorAll(".welcome-slider .slide");
    const totalWelcomeSlides = welcomeSlides.length;

    function showWelcomeSlide(index) {
        if (index >= totalWelcomeSlides) {
            welcomeSlideIndex = 0;
        } else if (index < 0) {
            welcomeSlideIndex = totalWelcomeSlides - 1;
        } else {
            welcomeSlideIndex = index;
        }

        welcomeSlidesContainer.style.transform = `translateX(-${welcomeSlideIndex * 100}%)`;
    }

    function changeWelcomeSlide(n) {
        showWelcomeSlide(welcomeSlideIndex + n);
    }

    let welcomeSlideInterval = setInterval(() => {
        changeWelcomeSlide(1);
    }, 5000);

    document.querySelector(".welcome-slider .prev").addEventListener("click", function () {
        changeWelcomeSlide(-1);
        resetWelcomeAutoSlide();
    });

    document.querySelector(".welcome-slider .next").addEventListener("click", function () {
        changeWelcomeSlide(1);
        resetWelcomeAutoSlide();
    });

    function resetWelcomeAutoSlide() {
        clearInterval(welcomeSlideInterval);
        welcomeSlideInterval = setInterval(() => {
            changeWelcomeSlide(1);
        }, 5000);
    }

    showWelcomeSlide(welcomeSlideIndex);

    // ==============================
    // ❓ FAQ SECTION TOGGLE FUNCTIONALITY
    // ==============================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

    // ==============================
    // 📧 CONTACT FORM FUNCTIONALITY
    // ==============================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("⚠ Please fill in all fields.");
                return;
            }

            alert("✅ Thank you for your message! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});


// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    // Toggle menu when clicking the hamburger icon
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const closeMenu = document.querySelector(".close-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    function toggleMenu() {
        mobileMenu.classList.toggle("active");
    }

    hamburger.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", toggleMenu);

    // Close menu when clicking a nav link
    document.querySelectorAll(".mobile-menu ul li a").forEach(item => {
        item.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    });
});



