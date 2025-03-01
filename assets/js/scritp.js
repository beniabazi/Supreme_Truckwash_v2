document.addEventListener("DOMContentLoaded", function () {
    console.log("🚛 Supreme Truckwash Website Loaded");

    // ==============================
    // 🚛 HERO SLIDESHOW FUNCTIONALITY
    // ==============================
    let slideIndex = 0;
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".hero-slider .slide");
    const dots = document.querySelectorAll(".dots-container .dot");
    const totalSlides = slides.length;

    if (!slidesContainer || !totalSlides) {
        console.error("❌ Hero slider elements not found.");
    } else {
        console.log(`✅ Found ${totalSlides} hero slides.`);
    }

    function showSlide(index) {
        if (!slidesContainer) return;
        
        slideIndex = (index + totalSlides) % totalSlides;
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex]?.classList.add("active");
        console.log(`🖼️ Showing Hero Slide ${slideIndex + 1}`);
    }

    function changeSlide(n) {
        showSlide(slideIndex + n);
    }

    let slideInterval = setInterval(() => changeSlide(1), 5000);

    document.querySelector(".prev")?.addEventListener("click", () => {
        changeSlide(-1);
        resetAutoSlide();
    });

    document.querySelector(".next")?.addEventListener("click", () => {
        changeSlide(1);
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => changeSlide(1), 5000);
    }

    showSlide(slideIndex);

    // ==============================
    // 🖼️ WELCOME SECTION IMAGE SLIDER
    // ==============================
    let welcomeSlideIndex = 0;
    const welcomeSlidesContainer = document.querySelector(".welcome-slider .slides");
    const welcomeSlides = document.querySelectorAll(".welcome-slider .slide");
    const totalWelcomeSlides = welcomeSlides.length;

    if (!welcomeSlidesContainer || !totalWelcomeSlides) {
        console.error("❌ Welcome slider elements not found.");
    } else {
        console.log(`✅ Found ${totalWelcomeSlides} welcome slides.`);
    }

    function showWelcomeSlide(index) {
        if (!welcomeSlidesContainer) return;
        
        welcomeSlideIndex = (index + totalWelcomeSlides) % totalWelcomeSlides;
        welcomeSlidesContainer.style.transform = `translateX(-${welcomeSlideIndex * 100}%)`;
        console.log(`🖼️ Showing Welcome Slide ${welcomeSlideIndex + 1}`);
    }

    function changeWelcomeSlide(n) {
        showWelcomeSlide(welcomeSlideIndex + n);
    }

    let welcomeSlideInterval = setInterval(() => changeWelcomeSlide(1), 5000);

    const welcomePrev = document.querySelector(".welcome-slider .prev");
    const welcomeNext = document.querySelector(".welcome-slider .next");

    if (welcomePrev && welcomeNext) {
        welcomePrev.addEventListener("click", () => {
            changeWelcomeSlide(-1);
            resetWelcomeAutoSlide();
        });

        welcomeNext.addEventListener("click", () => {
            changeWelcomeSlide(1);
            resetWelcomeAutoSlide();
        });
    } else {
        console.warn("⚠ Welcome slider navigation buttons not found.");
    }

    function resetWelcomeAutoSlide() {
        clearInterval(welcomeSlideInterval);
        welcomeSlideInterval = setInterval(() => changeWelcomeSlide(1), 5000);
    }

    showWelcomeSlide(welcomeSlideIndex);

    // ==============================
    // ❓ FAQ SECTION TOGGLE FUNCTIONALITY
    // ==============================
    console.log("🚀 FAQ script loaded after DOM is fully loaded!");

    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) {
        console.error("❌ No .faq-item elements found!");
    } else {
        console.log(`✅ Found ${faqItems.length} FAQ items.`);
    }

    faqItems.forEach((item, index) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = question?.querySelector(".toggle-icon");

        if (!question) {
            console.error(`❌ FAQ question missing for item at index ${index}`);
            return;
        }

        console.log(`✅ FAQ ${index + 1}: ${question.textContent.trim()}`);

        question.addEventListener("click", () => {
            console.log(`🟢 Clicked: ${question.textContent.trim()}`);

            item.classList.toggle("active");

            if (answer) {
                answer.style.display = item.classList.contains("active") ? "block" : "none";
                console.log(`📖 FAQ Answer ${index + 1} is now ${answer.style.display}`);
            } else {
                console.error(`❌ FAQ answer missing for item at index ${index}`);
            }

            if (icon) {
                icon.textContent = item.classList.contains("active") ? "-" : "+";
                console.log(`🔁 Icon changed: ${icon.textContent}`);
            } else {
                console.error(`❌ Toggle icon missing for FAQ item ${index}`);
            }
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

            if (!name || !email || !message) {
                alert("⚠ Please fill in all fields.");
                return;
            }

            alert("✅ Thank you for your message! We'll get back to you soon.");
            contactForm.reset();
        });
    }

    // ==============================
    // 🍔 MOBILE MENU TOGGLE
    // ==============================
    const hamburger = document.querySelector(".hamburger");
    const closeMenu = document.querySelector(".close-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    function toggleMenu() {
        mobileMenu?.classList.toggle("active");
    }

    hamburger?.addEventListener("click", toggleMenu);
    closeMenu?.addEventListener("click", toggleMenu);

    document.querySelectorAll(".mobile-menu ul li a").forEach(item => {
        item.addEventListener("click", () => {
            mobileMenu?.classList.remove("active");
        });
    });
});
