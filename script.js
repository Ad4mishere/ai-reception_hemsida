document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('open');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptAll = document.getElementById("cookie-accept-all");
  const acceptNecessary = document.getElementById("cookie-accept-necessary");

  const consent = localStorage.getItem("cookieConsent");

  if (!consent) {
    banner.hidden = false;
  }

  acceptAll.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "all");
    banner.hidden = true;
    loadCalendly();
  });

  acceptNecessary.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    banner.hidden = true;
  });

  if (consent === "all") {
    loadCalendly();
  }
});

function loadCalendly() {
  if (document.getElementById("calendly-script")) return;

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  script.id = "calendly-script";
  document.body.appendChild(script);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav-desktop");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});
