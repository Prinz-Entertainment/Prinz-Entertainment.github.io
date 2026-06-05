# Prinz Entertainment – Website

Statische Marketing-Website für **Prinz Entertainment** (*Entertainment on the Key*). Präsentation von Services, Genres, Events und Kontaktmöglichkeit – optimiert für GitHub Pages.

## Tech-Stack

- **HTML** – semantisches Markup, deutschsprachiger Inhalt
- **Tailwind CSS** (CDN) – Utility-Klassen mit projektspezifischer Konfiguration in `index.html`
- **styles.css** – ergänzende Styles (Navigation, Formulare, Animationen)
- **script.js** – Mobile Navigation, Smooth Scroll, Kontaktformular via `mailto:`
- **DESIGN.md** – Design-Tokens (*Cinéma Noir Editorial*): Farben, Typografie, Spacing

Kein Build-Schritt nötig – reine Static-Site.

## Projektstruktur

```
.
├── index.html      # Hauptseite
├── styles.css      # Custom CSS
├── script.js       # Interaktionen
├── DESIGN.md       # Design-System-Referenz
├── assets/         # Bilder (Hero, Events, Portraits, …)
└── .nojekyll       # GitHub Pages: Jekyll deaktivieren
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

> **Hinweis:** Tailwind und Google Fonts werden per CDN geladen – für die lokale Vorschau ist eine Internetverbindung nötig.

## Deployment (GitHub Pages)

Das Repository ist für GitHub Pages vorbereitet (`.nojekyll` im Root). Nach Push auf `main` wird die Seite unter der konfigurierten Pages-URL ausgeliefert.

Remote: `https://github.com/Prinz-Entertainment/indernetsehte.git`

## Kontaktformular

Das Formular erzeugt beim Absenden eine vorbefüllte E-Mail (`mailto:`) an die im Script hinterlegte Adresse. Es gibt kein Backend – der Besucher muss ein lokales E-Mail-Programm nutzen.

## Lizenz

Alle Rechte vorbehalten – Prinz Entertainment.
