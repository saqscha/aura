// === MOBILE MENU TOGGLE ===
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "flex" ? "none" : "flex";
});

// === INTRO ANIMATION HANDLING ===
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const body = document.querySelector("body");

  // Safety: Intro sichtbar halten
  intro.style.opacity = "1";
  intro.style.display = "flex";
  body.style.opacity = "0";

  // Logo startet sofort (keine extra Delay nötig)

  // Nach ~2.8s → Intro langsam ausblenden
  setTimeout(() => {
    intro.style.transition = "opacity 1.8s ease";
    intro.style.opacity = "0";
  }, 2800);

  // Nach ~4.6s → Intro entfernen & Seite zeigen
  setTimeout(() => {
    intro.remove();
    body.style.transition = "opacity 1.2s ease, transform 1.2s ease";
    body.style.opacity = "1";
    body.style.transform = "translateY(0)";
  }, 4600);
});
