// Add event listener to card to flip on hover
document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card");
    card.addEventListener("mouseover", function() {
      card.classList.add("flip");
    });
    card.addEventListener("mouseout", function() {
      card.classList.remove("flip");
    });
  });