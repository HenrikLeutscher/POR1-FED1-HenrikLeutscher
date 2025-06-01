document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".ProjectCard").forEach(card => {
        card.addEventListener("click", () => {
            const dropDown = card.nextElementSibling;
            dropDown?.classList.toggle("show");
        });
    });
});