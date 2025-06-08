document.addEventListener("DOMContentLoaded", () => {
  // Portfolio Dropdown once the portfolio element is clicked
  document.querySelectorAll(".ProjectCard").forEach((card) => {
    card.addEventListener("click", () => {
      const dropDown = card.nextElementSibling;
      dropDown?.classList.toggle("show");
    });
  });

  // Portfolio Indicator hidden once reached the portfolio
  const portfolioSticker = document.querySelector(".PortfolioSticky");
  const projectCardSection = document.querySelector(".ProjectCard");

  window.addEventListener("scroll", () => {
    const projectTop = projectCardSection.getBoundingClientRect().top;

    if (projectTop <= window.innerHeight) {
      portfolioSticker.classList.add("hidden");
    } else {
      portfolioSticker.classList.remove("hidden");
    }
  });

  // Copy PhoneNumber to clipboard
  const shareButton = document.getElementById("copyButton");
  const confirmation = document.getElementById("confirmation");

  if (shareButton) {
    shareButton.addEventListener("click", () => {
      const shareNumber = document.getElementById("copy").textContent.replace("Mobile: ", "");

      navigator.clipboard
        .writeText(shareNumber)
        .then(() => {
          confirmation.style.display = "block";
          confirmation.style.color = "green";
          confirmation.innerHTML = `Phone Number Successfully Copied`;
          setTimeout(() => {
            confirmation.style.display = "none";
          }, 3000);
        })
        .catch((err) => {
          confirmation.style.display = "block";
          confirmation.style.color = "red";
          confirmation.innerHTML = `Issue copying phone number: ${error?.message}`;
          setTimeout(() => {
            confirmation.style.display = "none";
          }, 3000);
        });
    });
  }
});
