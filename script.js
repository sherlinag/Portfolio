// Scroll to top button 
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  function checkScroll() {
    const scrollThreshold = window.innerWidth <= 768 ? 40 : 300; // 50px for mobile, 300px for desktop

    if (window.scrollY > scrollThreshold) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  window.addEventListener("scroll", checkScroll);

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});


