# Prinz Entertainment – Website

Statische Marketing-Website für **Prinz Entertainment** (_Entertainment on the
Key_). Präsentation von Services, Genres, Events und Kontaktmöglichkeit –
optimiert für GitHub Pages.

## Tech-Stack

- **HTML** – modulare Partials unter `partials/`
- **Tailwind CSS** (CDN) – Utility-Klassen mit Konfiguration in
  `js/tailwind-config.js`
- **css/custom.css** – ergänzende Styles (Intro-Animation, Scroll-Reveal, Cards)
- **js/** – Partial-Loader, i18n, Seiteninteraktionen
- **locales/** – Übersetzungen (DE/EN)
- **DESIGN.md** – Design-Tokens (_Cinéma Noir Editorial_): Farben, Typografie,
  Spacing

Kein Build-Schritt nötig – reine Static-Site.

## Projektstruktur

```
.
├── index.html          # Shell (lädt Partials per fetch)
├── partials/           # HTML-Abschnitte (nav, hero, services, …)
├── css/
│   └── custom.css      # Custom CSS
├── js/
│   ├── tailwind-config.js
│   ├── includes.js     # Partial-Loader
│   ├── i18n.js         # Sprachumschaltung
│   └── main.js         # Intro, Nav, Scroll-Reveal
├── locales/
│   ├── de.json
│   └── en.json
├── assets/             # Bilder & Videos
├── DESIGN.md
└── .nojekyll           # GitHub Pages: Jekyll deaktivieren
```

## Lokal starten

Eine der folgenden Optionen reicht:

```bash
# Python
python3 -m http.server 8080

# Node (npx, ohne Installation)
npx serve .
```

Dann im Browser öffnen: [http://localhost:8080](http://localhost:8080)

> **Hinweis:** Partials und Locales werden per `fetch()` geladen – `file://`
> funktioniert nicht. Tailwind und Google Fonts kommen per CDN; für die lokale
> Vorschau ist eine Internetverbindung nötig.

## Deployment (GitHub Pages)

Das Repository folgt der GitHub-Pages-Konvention
[`username.github.io`](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)
und ist als **User/Organization Site** eingerichtet.

|            |                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| Repository | [Prinz-Entertainment/Prinz-Entertainment.github.io](https://github.com/Prinz-Entertainment/Prinz-Entertainment.github.io) |
| Live-URL   | [https://prinz-entertainment.github.io/](https://prinz-entertainment.github.io/)                                          |

Nach Push auf `main` wird der Inhalt aus dem Repository-Root ausgeliefert
(`.nojekyll` deaktiviert Jekyll). In den Repository-Einstellungen unter
**Settings → Pages** muss **Deploy from branch** auf `main` / `/ (root)` stehen.

## Lizenz

Alle Rechte vorbehalten – Prinz Entertainment.
