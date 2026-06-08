function initIntro() {
  const intro = document.querySelector("[data-palmer-intro]");
  const finishIntro = () => {
    document.body.classList.remove("is-loading");
    intro?.remove();
  };

  intro?.addEventListener("animationend", (event) => {
    if (event.target === intro && event.animationName === "palmer-intro-exit") {
      finishIntro();
    }
  });

  window.setTimeout(finishIntro, 6500);
}

function initRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) =>
    observer.observe(el)
  );
}

function initNavScroll() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    if (window.scrollY > 100) {
      nav.classList.remove("py-8", "mix-blend-difference");
      nav.classList.add("py-4", "bg-black/90", "mix-blend-normal");
    } else {
      nav.classList.add("py-8", "mix-blend-difference");
      nav.classList.remove("py-4", "bg-black/90", "mix-blend-normal");
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", targetId);
    });
  });
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-nav]");
  if (!toggle || !menu) return;

  const setOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.documentElement.classList.toggle("nav-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    setOpen(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}

function initPage() {
  initIntro();
  initRevealOnScroll();
  initNavScroll();
  initSmoothScroll();
  initMobileMenu();
}

document.addEventListener("partials:loaded", initPage);
