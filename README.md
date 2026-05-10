# Markdown Wiki Tool

Statisches Wiki fuer Browser und GitHub Pages.

## Ziele

- Seiteninhalt als reines Markdown
- Rich-Text-Bearbeitung im integrierten Editor
- Markdown-Shortcuts direkt im Editor (z.B. `# `, `- `, `1. `)
- Toolbar fuer Formatierungs-Buttons
- Seitenaktionen direkt in Toolbar (Neu, Umbenennen, Loeschen, Markdown, Import, Export, Speichern)
- Language-Switch (DE/EN) fuer gesamte App
- Seitenleiste als einklappbarer Ordnerbaum aus `pages`-Struktur
- Einstellseite fuer Farben, Schrift, Groesse und Skalierung

## Dateien

- `index.html`: App-Struktur
- `styles.css`: Theme + Layout
- `app.js`: Wiki-Logik, Editor, Speicherung, Import/Export
- `pages/**/*.md`: Beispielseiten als Markdown inkl. Unterordner
- `pages/manifest.json`: Liste der beim Start zu ladenden Markdown-Dateien

## Nutzung lokal

Einfach `index.html` im Browser oeffnen.

## GitHub Pages

1. Repository nach GitHub pushen
2. In GitHub unter **Settings -> Pages** als Source Branch (z.B. `main`) waehlen
3. Root (`/`) als Folder nutzen
4. Nach Deployment laeuft App direkt ueber GitHub Pages URL

## Wichtiger Hinweis zu Speicherung

GitHub Pages ist statisch. App kann `.md` lesen, aber nicht direkt ins Repo zurueckschreiben.

- Bearbeitung im Editor aktualisiert Seite in Echtzeit
- `Speichern` schreibt in `localStorage` des Browsers
- `Markdown export` speichert aktuelle Seite als `.md` Datei
- `Markdown import` laedt externe `.md` Datei als neue Wiki-Seite

Damit bleiben Inhalte weiterhin als Markdown ausserhalb des Tools bearbeitbar.
