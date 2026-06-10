const SUPPORTED_LOCALES = ["de", "en"];
const DEFAULT_LOCALE = "de";

let messages = null;
let currentLocale = DEFAULT_LOCALE;
let partialsReady = false;

function detectLocale() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("lang");
  if (fromUrl && SUPPORTED_LOCALES.includes(fromUrl)) {
    return fromUrl;
  }

  const browser = navigator.language?.slice(0, 2).toLowerCase();
  if (browser && SUPPORTED_LOCALES.includes(browser)) {
    return browser;
  }

  return DEFAULT_LOCALE;
}

function getNestedValue(obj, key) {
  return key.split(".").reduce((value, part) => value?.[part], obj);
}

function t(key) {
  const value = getNestedValue(messages, key);
  return value ?? key;
}

async function loadMessages(locale) {
  const response = await fetch(`locales/${locale}.json`);
  if (!response.ok) {
    throw new Error(`Failed to load locale: ${locale}`);
  }
  return response.json();
}

function applyTranslations() {
  if (!messages) return;

  document.documentElement.lang = currentLocale;
  document.title = t("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) {
        el.setAttribute(attr, t(key));
      }
    });
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const isActive = btn.dataset.langBtn === currentLocale;
    btn.classList.toggle("opacity-100", isActive);
    btn.classList.toggle("border-white", isActive);
    btn.classList.toggle("opacity-40", !isActive);
    btn.classList.toggle("border-transparent", !isActive);
    if (isActive) {
      btn.setAttribute("aria-current", "true");
    } else {
      btn.removeAttribute("aria-current");
    }
  });
}

function updateUrl(locale) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", locale);
  history.replaceState(null, "", url);
}

async function setLocale(locale) {
  if (!SUPPORTED_LOCALES.includes(locale) || locale === currentLocale) {
    return;
  }

  currentLocale = locale;
  updateUrl(locale);
  messages = await loadMessages(locale);
  applyTranslations();
  document.dispatchEvent(new CustomEvent("locale:changed", { detail: { locale } }));
}

let languageSwitcherReady = false;

function initLanguageSwitcher() {
  if (languageSwitcherReady) return;
  languageSwitcherReady = true;

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      setLocale(btn.dataset.langBtn);
    });
  });
}

async function maybeApply() {
  if (!messages || !partialsReady) return;
  applyTranslations();
  initLanguageSwitcher();
  document.dispatchEvent(new CustomEvent("i18n:ready", { detail: { locale: currentLocale } }));
}

async function initI18n() {
  currentLocale = detectLocale();
  updateUrl(currentLocale);

  try {
    messages = await loadMessages(currentLocale);
  } catch (error) {
    console.error(error);
    if (currentLocale !== DEFAULT_LOCALE) {
      currentLocale = DEFAULT_LOCALE;
      messages = await loadMessages(DEFAULT_LOCALE);
    }
  }

  await maybeApply();
}

document.addEventListener("partials:loaded", () => {
  partialsReady = true;
  maybeApply();
});

window.i18n = { t, setLocale, getLocale: () => currentLocale };

initI18n();
