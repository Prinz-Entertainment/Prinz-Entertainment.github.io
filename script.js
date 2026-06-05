const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

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

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const optionalLines = [
      ["Telefonnummer", data.get("phone")],
      ["G\u00e4steanzahl", data.get("guests")],
      ["Ort", data.get("location")],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);

    const lines = [
      "Neue Anfrage f\u00fcr Prinz-Entertainment",
      "",
      `Name: ${data.get("name") || ""}`,
      `E-Mail: ${data.get("email") || ""}`,
      `Eventdatum: ${data.get("date") || ""}`,
      `Eventart: ${data.get("eventType") || ""}`,
      ...optionalLines,
      "",
      "Nachricht:",
      `${data.get("message") || ""}`,
    ];

    const subject = encodeURIComponent("Anfrage Prinz-Entertainment");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:semprinz.entertainment@gmail.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = "Ihre Anfrage wurde f\u00fcr Ihr E-Mail-Programm vorbereitet.";
    }
  });
}
