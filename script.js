 
// document.addEventListener("DOMContentLoaded", function () {
//   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

//   function checkScroll() {
//     const scrollThreshold = window.innerWidth <= 768 ? 40 : 300; 

//     if (window.scrollY > scrollThreshold) {
//       scrollToTopBtn.style.display = "block";
//     } else {
//       scrollToTopBtn.style.display = "none";
//     }
//   }

//   window.addEventListener("scroll", checkScroll);

//   scrollToTopBtn.addEventListener("click", function () {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopBtn");
  const progressCircle = document.getElementById("progress");
  const totalScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const circleLength = 125;

  window.addEventListener("scroll", () => {
    let scrollPercentage = window.scrollY / totalScrollHeight;
    let strokeOffset = circleLength * (1 - scrollPercentage);

    progressCircle.style.strokeDashoffset = strokeOffset;

    if (window.scrollY > 100) {
      scrollToTopButton.style.opacity = 1;
    } else {
      scrollToTopButton.style.opacity = 0;
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

