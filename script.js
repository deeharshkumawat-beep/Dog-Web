// Example: dynamic cart counter
let cartCount = 3;
const cartBadge = document.getElementById("cart-count");

document.querySelector(".shop-btn").addEventListener("click", () => {
  cartCount++;
  cartBadge.textContent = cartCount.toString().padStart(2, "0");
});
// Filter functionality for Pet Foodies
const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll("#foodies-grid .product-card");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active from all
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let category = btn.dataset.filter;

    products.forEach(product => {
      if (category === "all" || product.classList.contains(category)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
// Filter functionality for Pet Treats
const filtersTreats = document.querySelectorAll(".section-header:nth-of-type(3) .filter");
const treats = document.querySelectorAll("#treats-grid .product-card");

filtersTreats.forEach(btn => {
  btn.addEventListener("click", () => {
    filtersTreats.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let category = btn.dataset.filter;

    treats.forEach(product => {
      if (category === "all" || product.classList.contains(category)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
// Testimonial Carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

// Auto Slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

