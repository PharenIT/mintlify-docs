# Source: https://pharen.de/docs/cli/overview

Docs

# Page Showcase

Ein Überblick über die Standard-Dokumentations-Features von Pharen.

Inhalt kopieren

# Feature Showcase

Dies ist eine normale Dokumentationsseite, die zeigt, wie du deine Inhalte mit MDC (Markdown Components) in Pharen Docs strukturieren kannst.

## Layout & Formatierung

Der Text wird standardmäßig in einem schönen, lesbaren Prose-Layout dargestellt. Du kannst Standard-Markdown verwenden wie **fett**, _kursiv_ oder [Links](https://pharen.de).

### [Komponenten-Showcase](https://pharen.de/#komponenten-showcase)

Wir haben einige spezialisierte Komponenten für die Dokumentation entwickelt.

**Pro-Tipp**: Nutze Callouts, um wichtige Informationen hervorzuheben. Sie können `info`, `warning` oder `danger` Typen haben.

Achtung: Überspringe niemals das `order` Property im Frontmatter, wenn du eine feste Sortierung in der Sidebar möchtest.

### [Feature Cards](https://pharen.de/#feature-cards)

Ideal für die Übersicht von Funktionalitäten oder Modulen.

### API Explorer

Interaktive API-Endpunkte direkt in der Dokumentation testen.

### GitHub Sync

Bearbeite Dokumente direkt im Browser und erstelle Pull Requests.

## Code-Beispiele

Wir unterstützen Syntax-Highlighting für alle gängigen Sprachen.

TYPESCRIPT

Kopieren

`// Ein Beispiel in TypeScript interface DocPage {   title: string;  body: any;  path: string; } const getPage = async (path: string): Promise<DocPage> => {   return await queryCollection('docs').path(path).first(); };`

Das war der kleine Rundgang durch die Pharen Docs Features!