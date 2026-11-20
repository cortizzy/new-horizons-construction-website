(() => {
  "use strict";

  const menuButton = document.getElementById("menuToggle");
  const navigation = document.getElementById("primaryNav");

  function closeMenu() {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    navigation?.classList.remove("is-open");
  }

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    navigation?.classList.toggle("is-open", open);
  });

  navigation?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".service-card, .approach-steps li, .industry-list a, .photo-caption");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    revealItems.forEach(item => {
      item.classList.add("reveal");
      revealObserver.observe(item);
    });
  }

  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const subject = encodeURIComponent(`New Horizons project inquiry: ${values.get("service")}`);
    const body = encodeURIComponent(
      `Name: ${values.get("name")}\n` +
      `Email: ${values.get("email")}\n` +
      `Company: ${values.get("company") || "Not provided"}\n` +
      `Service: ${values.get("service")}\n\n` +
      `Project details:\n${values.get("message")}`
    );
    const status = document.getElementById("formStatus");
    if (status) status.textContent = "Opening your email application with the inquiry details.";
    window.location.href = `mailto:info@newhorizonsconstructions.com?subject=${subject}&body=${body}`;
  });
})();
