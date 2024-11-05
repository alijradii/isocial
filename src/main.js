const navbarToggle = document.getElementById("navbar-toggle");
const navItems = document.getElementById("nav-items");

let navbarToggleActive = false;
let isAnimating = false;

function removeSideNav() {
  navbarToggle.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `;

  isAnimating = true;
  gsap.fromTo(
    "#nav-items",
    { width: "50%", opacity: 1 },
    {
      width: "0",
      opacity: 0,
      duration: 1,
      ease: "ease.out(0.3, 0.5)",
      onComplete: () => {
        navItems.classList.remove("active");
        isAnimating = false;
      },
    },
  );
}

function showSideNav() {
  navbarToggle.innerHTML = "&#215;";

  isAnimating = true;
  navItems.classList.add("active");
  gsap.fromTo(
    "#nav-items",
    { width: "0%", opacity: 0 },
    {
      width: "50%",
      opacity: 1,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
      onComplete: () => {
        isAnimating = false;
      },
    },
  );
}

navbarToggle.addEventListener("click", () => {
  if (isAnimating) return;
  navbarToggleActive = !navbarToggleActive;

  if (!navbarToggleActive) {
    removeSideNav();
  } else {
    showSideNav();
  }
});
