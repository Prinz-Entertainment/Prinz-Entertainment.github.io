function initIntro() {
  const intro = document.querySelector("[data-palmer-intro]");
  const finishIntro = () => {
    document.body.classList.remove("is-loading");
    intro?.remove();
    document.dispatchEvent(new Event("intro:finished"));
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

function initNavIndicator() {
  const nav = document.getElementById("main-nav");
  const indicator = nav?.querySelector("[data-nav-indicator]");
  const links = [...(nav?.querySelectorAll("[data-nav-link]") ?? [])];
  const allLinks = [...document.querySelectorAll("[data-nav-link]")];

  if (!nav || !indicator || !links.length) return;

  const items = links
    .map((link) => {
      const targetId = link.getAttribute("href");
      const target = targetId?.startsWith("#")
        ? document.querySelector(targetId)
        : null;

      return target ? { link, target } : null;
    })
    .filter(Boolean);

  if (!items.length) return;

  let activeLink = null;
  let frameRequested = false;

  const setActiveLink = (link) => {
    activeLink = link;
    const activeHref = link?.getAttribute("href");

    allLinks.forEach((navLink) => {
      const isActive = Boolean(activeHref) && navLink.getAttribute("href") === activeHref;
      navLink.classList.toggle("is-active", isActive);
      if (isActive) {
        navLink.setAttribute("aria-current", "location");
      } else {
        navLink.removeAttribute("aria-current");
      }
    });
  };

  const hideIndicator = () => {
    indicator.style.setProperty("--nav-active-opacity", "0");
  };

  const clearActiveLink = () => {
    hideIndicator();
    setActiveLink(null);
  };

  const moveIndicator = (link) => {
    if (!link) {
      clearActiveLink();
      return;
    }

    setActiveLink(link);

    if (window.innerWidth < 768) {
      hideIndicator();
      return;
    }

    const container = indicator.offsetParent ?? indicator.parentElement;
    if (!container) return;

    const linkRect = link.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    indicator.style.setProperty(
      "--nav-active-x",
      `${linkRect.left - containerRect.left}px`,
    );
    indicator.style.setProperty(
      "--nav-active-y",
      `${linkRect.bottom - containerRect.top + 4}px`,
    );
    indicator.style.setProperty("--nav-active-width", `${linkRect.width}px`);
    indicator.style.setProperty("--nav-active-opacity", "1");
  };

  const getCurrentLink = () => {
    const navHeight = nav.getBoundingClientRect().height;
    const scrollPosition =
      window.scrollY + navHeight + Math.max(window.innerHeight * 0.3, 140);
    const pageBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 2;

    if (pageBottom) {
      return items[items.length - 1].link;
    }

    return items.reduce((current, item) => {
      return item.target.offsetTop <= scrollPosition ? item.link : current;
    }, null);
  };

  const updateIndicator = () => {
    frameRequested = false;
    const nextLink = getCurrentLink();

    if (!nextLink) {
      clearActiveLink();
      return;
    }

    if (nextLink !== activeLink) {
      moveIndicator(nextLink);
      return;
    }

    moveIndicator(activeLink);
  };

  const requestUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateIndicator);
  };

  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      const desktopLink = links.find((navLink) => navLink.getAttribute("href") === href);
      moveIndicator(desktopLink);
    });
  });

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);
  document.addEventListener("i18n:ready", requestUpdate);
  document.addEventListener("locale:changed", requestUpdate);

  requestUpdate();
}

function initInitialHashScroll() {
  let hasSynced = false;

  const syncHashTarget = () => {
    if (hasSynced || document.body.classList.contains("is-loading")) return;

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    hasSynced = true;
    target.scrollIntoView({ behavior: "auto", block: "start" });
    window.dispatchEvent(new Event("scroll"));
  };

  document.addEventListener("intro:finished", syncHashTarget, { once: true });
  window.setTimeout(syncHashTarget, 0);
  window.setTimeout(syncHashTarget, 7000);
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
  initNavIndicator();
  initInitialHashScroll();
  initSmoothScroll();
  initMobileMenu();
}

document.addEventListener("partials:loaded", initPage);
