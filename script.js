document.addEventListener("DOMContentLoaded", () => {
    // Аккордеон
    document.querySelectorAll(".accordion-header").forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            button.classList.toggle("active");
            content.classList.toggle("active");

            if (content.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });

    // Вкладки
    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(button.dataset.tab).classList.add("active");
        });
    });

    // Попап
    const popup = document.getElementById("popup");
    document.getElementById("open-popup").addEventListener("click", () => popup.classList.add("show"));
    document.querySelector(".close-popup").addEventListener("click", () => popup.classList.remove("show"));
    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.classList.remove("show");
    });
});