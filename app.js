const STORAGE_KEYS = {
  pages: 'mwiki.pages.v2',
  legacyPages: 'mwiki.pages.v1',
  activeSlug: 'mwiki.activeSlug.v2',
  settings: 'mwiki.settings.v1',
  language: 'mwiki.language.v1',
  folderOpen: 'mwiki.folderOpen.v1',
  sidebarCollapsed: 'mwiki.sidebarCollapsed.v1',
  tocCollapsed: 'mwiki.tocCollapsed.v1'
};

const DEFAULT_LIGHT_PALETTE = {
  bg: '#f4f4f0',
  bg2: '#fdf6e3',
  bgMode: 'gradient',
  panel: '#ffffff',
  text: '#1f2328',
  muted: '#5b6470',
  border: '#cfd8e3',
  accent: '#0f766e',
  editorBg: '#fffdf8',
  controlBg: '#ffffff',
  controlText: '#1f2328',
  codeBg: '#0f172a',
  codePlain: '#e2e8f0',
  codeKw: '#22d3ee',
  codeType: '#c084fc',
  codeVar: '#f8fafc',
  codeFn: '#60a5fa',
  codeStr: '#f59e0b',
  codeNum: '#93c5fd',
  codeCom: '#94a3b8',
  codeOp: '#fda4af'
};

const DEFAULT_DARK_PALETTE = {
  bg: '#0b1220',
  bg2: '#162338',
  bgMode: 'gradient',
  panel: '#111b2f',
  text: '#f3f7ff',
  muted: '#b9c5dc',
  border: '#334766',
  accent: '#22d3ee',
  editorBg: '#0b1422',
  controlBg: '#1c2a42',
  controlText: '#f8fbff',
  codeBg: '#020617',
  codePlain: '#e2e8f0',
  codeKw: '#67e8f9',
  codeType: '#d8b4fe',
  codeVar: '#f8fafc',
  codeFn: '#93c5fd',
  codeStr: '#fbbf24',
  codeNum: '#7dd3fc',
  codeCom: '#94a3b8',
  codeOp: '#fda4af'
};

const DEFAULT_SETTINGS = {
  appTitle: '',
  appSubtitle: '',
  themeMode: 'light',
  paletteTarget: 'light',
  palettes: {
    light: { ...DEFAULT_LIGHT_PALETTE },
    dark: { ...DEFAULT_DARK_PALETTE }
  },
  autoSaveEnabled: true,
  autoSaveMinutes: 2,
  fontFamily: 'Georgia, Times New Roman, serif',
  fontSize: 17,
  uiScale: 100
};

const CODE_LANGUAGES = [
  { value: 'text', label: 'text' },
  { value: 'bash', label: 'bash' },
  { value: 'shell', label: 'shell' },
  { value: 'javascript', label: 'js' },
  { value: 'typescript', label: 'ts' },
  { value: 'python', label: 'py' },
  { value: 'cpp', label: 'cpp' },
  { value: 'json', label: 'json' },
  { value: 'html', label: 'html' },
  { value: 'css', label: 'css' }
];

function makeDefaultSettings() {
  return {
    ...DEFAULT_SETTINGS,
    palettes: {
      light: { ...DEFAULT_LIGHT_PALETTE },
      dark: { ...DEFAULT_DARK_PALETTE }
    }
  };
}

const FALLBACK_PAGES = {
  start: {
    title: 'Start',
    filePath: 'start.md',
    markdown:
      '# Start\n\nDieses Wiki speichert Inhalte als Markdown.\n\n- Schreibe direkt im Editor\n- Nutze Toolbar-Buttons\n- Nutze Markdown-Shortcuts wie `# `, `## `, `- `, `1. `, `> `\n'
  },
  syntax: {
    title: 'Syntax Tipps',
    filePath: 'guides/syntax-tipps.md',
    markdown:
      '# Syntax Tipps\n\n## Headings\n\nTippe `# ` fuer H1, `## ` fuer H2.\n\n## Listen\n\n- Mit `- ` startet Liste\n1. Mit `1. ` startet nummerierte Liste\n\n## Formatierung\n\n`**fett**`, `*kursiv*`, `` `code` ``\n'
  }
};

const FALLBACK_I18N = {
  de: {
    appTitle: 'Markdown Wiki Tool',
    appSubtitle: 'WYSIWYG Editor mit Markdown als Speicherformat',
    tabWiki: 'Wiki',
    tabSettings: 'Einstellungen',
    sidebarPages: 'Seiten',
    fmtList: 'Liste',
    fmtQuote: 'Zitat',
    fmtCodeBlock: 'Codeblock',
    fmtLine: 'Linie',
    actNew: 'Neu',
    actRename: 'Umbenennen',
    actDelete: 'Loeschen',
    actMarkdown: 'Markdown',
    actImport: 'Import',
    actExport: 'Export',
    actSave: 'Speichern',
    setThemeMode: 'Theme Modus',
    setPaletteTarget: 'Farbset bearbeiten',
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    setAutoSaveEnabled: 'Auto Save aktiv',
    setAutoSaveMin: 'Auto Save Intervall (Minuten)',
    setBg: 'Hintergrund',
    setMuted: 'Sekundaer Text',
    setBorder: 'Rahmenfarbe',
    setControlBg: 'Button Hintergrund',
    setControlText: 'Button Text',
    setCodeBg: 'Code Hintergrund',
    setCodePlain: 'Code Text',
    setCodeKw: 'Code Keywords',
    setCodeType: 'Code Typen',
    setCodeVar: 'Code Variablen',
    setCodeFn: 'Code Funktionen',
    setCodeStr: 'Code Strings',
    setCodeNum: 'Code Zahlen',
    setCodeCom: 'Code Kommentare',
    setCodeOp: 'Code Operatoren',
    setAppTitle: 'App Titel',
    setAppSubtitle: 'App Untertitel',
    setBgMode: 'Hintergrundmodus',
    setBg2: 'Gradient Farbe 2',
    setPanel: 'Panel',
    setText: 'Textfarbe',
    setAccent: 'Akzentfarbe',
    setEditorBg: 'Editor-Hintergrund',
    setFontFamily: 'Schriftart',
    setFontSize: 'Schriftgroesse',
    setScale: 'Skalierung',
    setReset: 'Standard wiederherstellen',
    settingsNote:
      'Hinweis: GitHub Pages kann Markdown-Dateien lesen, aber nicht direkt zurueckschreiben. Aenderungen bleiben lokal im Browser und koennen als .md exportiert werden.',
    mdEditorTitle: 'Markdown bearbeiten',
    cancel: 'Abbrechen',
    apply: 'Uebernehmen',
    langBtn: 'Language: DE',
    statusReady: 'Bereit',
    statusLoadingEditor: 'Lade Editor...',
    statusEditorReady: 'Editor bereit',
    statusEditorFail: 'Editor-Library nicht geladen. Fallback aktiv.',
    statusLoadedPage: 'Seite geladen: {title}',
    statusChangedPage: 'Aenderungen in "{title}"',
    statusSavedPage: 'Gespeichert ({title})',
    statusImported: 'Importiert: {name}',
    statusExported: 'Exportiert: {name}',
    statusDeleted: 'Geloescht: {title}',
    statusRenamed: 'Umbenannt: {title}',
    statusNeedEditor: 'Editor noch nicht bereit.',
    statusMinOne: 'Mindestens eine Seite muss bleiben.',
    statusSettingsReset: 'Einstellungen zurueckgesetzt.',
    statusThemeSwitched: 'Theme gewechselt: {mode}',
    statusAutoSaved: 'Automatisch gespeichert',
    statusOfflineEditor: 'Offline-Editor aktiv',
    statusPrintBlocked: 'Druckfenster blockiert. Popups erlauben.',
    statusPrinting: 'Druckansicht geoeffnet',
    promptPageTitle: 'Seitentitel:',
    promptPageDefault: 'Neue Seite',
    promptFolder: 'Ordner (optional, z.B. docs/api):',
    promptRename: 'Neuer Seitentitel:',
    confirmDelete: 'Seite wirklich loeschen?\n\n{title}',
    sidebarToc: 'Inhalt',
    tocEmpty: 'Keine Ueberschriften',
    tocEmptyPrint: 'Keine Ueberschriften vorhanden.',
    codeLanguageLabel: 'Sprache',
    promptRows: 'Anzahl Zeilen:',
    promptCols: 'Anzahl Spalten:',
    actEnableEdit: 'Bearbeiten',
    statusReadOnly: 'Nur Ansicht. Klicke auf "Bearbeiten", um Aenderungen zu erlauben.',
    statusEditUnlocked: 'Bearbeitungsmodus aktiviert',
    statusI18nLoadFail: 'Sprachdateien nicht vollstaendig geladen. Fallback aktiv.'
  },
  en: {
    appTitle: 'Markdown Wiki Tool',
    appSubtitle: 'WYSIWYG editor with Markdown storage',
    tabWiki: 'Wiki',
    tabSettings: 'Settings',
    sidebarPages: 'Pages',
    fmtList: 'List',
    fmtQuote: 'Quote',
    fmtCodeBlock: 'Code block',
    fmtLine: 'Rule',
    actNew: 'New',
    actRename: 'Rename',
    actDelete: 'Delete',
    actMarkdown: 'Markdown',
    actImport: 'Import',
    actExport: 'Export',
    actSave: 'Save',
    setThemeMode: 'Theme mode',
    setPaletteTarget: 'Edit palette',
    themeLight: 'Light',
    themeDark: 'Dark',
    setAutoSaveEnabled: 'Auto save enabled',
    setAutoSaveMin: 'Auto save interval (minutes)',
    setBg: 'Background',
    setMuted: 'Secondary text',
    setBorder: 'Border color',
    setControlBg: 'Button background',
    setControlText: 'Button text',
    setCodeBg: 'Code background',
    setCodePlain: 'Code text',
    setCodeKw: 'Code keywords',
    setCodeType: 'Code types',
    setCodeVar: 'Code variables',
    setCodeFn: 'Code functions',
    setCodeStr: 'Code strings',
    setCodeNum: 'Code numbers',
    setCodeCom: 'Code comments',
    setCodeOp: 'Code operators',
    setAppTitle: 'App title',
    setAppSubtitle: 'App subtitle',
    setBgMode: 'Background mode',
    setBg2: 'Gradient color 2',
    setPanel: 'Panel',
    setText: 'Text color',
    setAccent: 'Accent color',
    setEditorBg: 'Editor background',
    setFontFamily: 'Font family',
    setFontSize: 'Font size',
    setScale: 'Scale',
    setReset: 'Reset defaults',
    settingsNote:
      'Note: GitHub Pages can read Markdown files, but cannot write back to repository directly. Changes stay local in browser and can be exported as .md.',
    mdEditorTitle: 'Edit Markdown',
    cancel: 'Cancel',
    apply: 'Apply',
    langBtn: 'Language: EN',
    statusReady: 'Ready',
    statusLoadingEditor: 'Loading editor...',
    statusEditorReady: 'Editor ready',
    statusEditorFail: 'Editor library failed to load. Fallback active.',
    statusLoadedPage: 'Page loaded: {title}',
    statusChangedPage: 'Changes in "{title}"',
    statusSavedPage: 'Saved ({title})',
    statusImported: 'Imported: {name}',
    statusExported: 'Exported: {name}',
    statusDeleted: 'Deleted: {title}',
    statusRenamed: 'Renamed: {title}',
    statusNeedEditor: 'Editor not ready yet.',
    statusMinOne: 'At least one page must remain.',
    statusSettingsReset: 'Settings reset.',
    statusThemeSwitched: 'Theme switched: {mode}',
    statusAutoSaved: 'Auto saved',
    statusOfflineEditor: 'Offline editor active',
    statusPrintBlocked: 'Print window blocked. Allow popups.',
    statusPrinting: 'Print preview opened',
    promptPageTitle: 'Page title:',
    promptPageDefault: 'New Page',
    promptFolder: 'Folder (optional, e.g. docs/api):',
    promptRename: 'New page title:',
    confirmDelete: 'Delete this page?\n\n{title}',
    sidebarToc: 'Contents',
    tocEmpty: 'No headings',
    tocEmptyPrint: 'No headings available.',
    codeLanguageLabel: 'Language',
    promptRows: 'Number of rows:',
    promptCols: 'Number of columns:',
    actEnableEdit: 'Edit',
    statusReadOnly: 'Read-only view. Click "Edit" to allow changes.',
    statusEditUnlocked: 'Edit mode enabled',
    statusI18nLoadFail: 'Language files could not be fully loaded. Fallback active.'
  }
};

let I18N = JSON.parse(JSON.stringify(FALLBACK_I18N));

const dom = {
  appTitleText: document.querySelector('[data-i18n=\"appTitle\"]'),
  appSubtitleText: document.querySelector('[data-i18n=\"appSubtitle\"]'),
  pageTree: document.querySelector('#pageTree'),
  importFileInput: document.querySelector('#importFileInput'),
  statusText: document.querySelector('#statusText'),
  toolbar: document.querySelector('#toolbar'),
  tabButtons: Array.from(document.querySelectorAll('[data-view-target]')),
  views: Array.from(document.querySelectorAll('[data-view]')),
  i18nNodes: Array.from(document.querySelectorAll('[data-i18n]')),
  langSwitchBtn: document.querySelector('#langSwitchBtn'),
  themeToggleBtn: document.querySelector('#themeToggleBtn'),
  sidebarToggleBtn: document.querySelector('#sidebarToggleBtn'),
  appTitleInput: document.querySelector('#appTitleInput'),
  appSubtitleInput: document.querySelector('#appSubtitleInput'),
  themeModeInput: document.querySelector('#themeModeInput'),
  paletteTargetInput: document.querySelector('#paletteTargetInput'),
  autoSaveEnabledInput: document.querySelector('#autoSaveEnabledInput'),
  autoSaveMinutesInput: document.querySelector('#autoSaveMinutesInput'),
  bgColorInput: document.querySelector('#bgColorInput'),
  mutedColorInput: document.querySelector('#mutedColorInput'),
  borderColorInput: document.querySelector('#borderColorInput'),
  controlBgInput: document.querySelector('#controlBgInput'),
  controlTextInput: document.querySelector('#controlTextInput'),
  bgModeInput: document.querySelector('#bgModeInput'),
  bgColor2Input: document.querySelector('#bgColor2Input'),
  bgColor2Wrap: document.querySelector('#bgColor2Wrap'),
  panelColorInput: document.querySelector('#panelColorInput'),
  textColorInput: document.querySelector('#textColorInput'),
  accentColorInput: document.querySelector('#accentColorInput'),
  editorBgInput: document.querySelector('#editorBgInput'),
  codeBgInput: document.querySelector('#codeBgInput'),
  codePlainInput: document.querySelector('#codePlainInput'),
  codeKwInput: document.querySelector('#codeKwInput'),
  codeTypeInput: document.querySelector('#codeTypeInput'),
  codeVarInput: document.querySelector('#codeVarInput'),
  codeFnInput: document.querySelector('#codeFnInput'),
  codeStrInput: document.querySelector('#codeStrInput'),
  codeNumInput: document.querySelector('#codeNumInput'),
  codeComInput: document.querySelector('#codeComInput'),
  codeOpInput: document.querySelector('#codeOpInput'),
  fontFamilyInput: document.querySelector('#fontFamilyInput'),
  fontSizeInput: document.querySelector('#fontSizeInput'),
  fontSizeLabel: document.querySelector('#fontSizeLabel'),
  uiScaleInput: document.querySelector('#uiScaleInput'),
  uiScaleLabel: document.querySelector('#uiScaleLabel'),
  resetSettingsBtn: document.querySelector('#resetSettingsBtn'),
  editorHost: document.querySelector('#editor'),
  markdownModal: document.querySelector('#markdownModal'),
  markdownTextarea: document.querySelector('#markdownTextarea'),
  mdApplyBtn: document.querySelector('#mdApplyBtn'),
  mdCancelBtn: document.querySelector('#mdCancelBtn'),
  wikiView: document.querySelector('.view-wiki'),
  tocToggleBtn: document.querySelector('#tocToggleBtn'),
  tocList: document.querySelector('#tocList')
};

const state = {
  pages: {},
  activeSlug: null,
  settings: makeDefaultSettings(),
  language: 'de',
  languageOrder: ['de', 'en'],
  languageMeta: {
    de: { name: 'Deutsch', flag: '🇩🇪' },
    en: { name: 'English', flag: '🇺🇸' }
  },
  folderOpen: {},
  sidebarCollapsed: false,
  tocCollapsed: false,
  editor: null,
  fallbackRichEditor: null,
  autoSaveTimer: null,
  hasUnsavedChanges: false,
  editUnlocked: false
};

function str(key, vars = {}) {
  const lang = I18N[state.language] || I18N.de;
  let text = lang[key] || I18N.de[key] || key;
  for (const [name, value] of Object.entries(vars)) {
    text = text.replace(`{${name}}`, String(value));
  }
  return text;
}

function setStatus(text) {
  dom.statusText.textContent = text;
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-_]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function sanitizeFolderPath(input) {
  if (!input) return '';
  return String(input)
    .split(/[\\/]+/)
    .map((segment) => slugify(segment))
    .filter(Boolean)
    .join('/');
}

function dirname(path) {
  const clean = String(path || '').replace(/^\/+|\/+$/g, '');
  if (!clean.includes('/')) return '';
  return clean.split('/').slice(0, -1).join('/');
}

function makeUniqueSlug(baseSlug, existingPages = state.pages) {
  const seed = baseSlug || 'page';
  let slug = seed;
  let counter = 2;
  while (existingPages[slug]) {
    slug = `${seed}-${counter}`;
    counter += 1;
  }
  return slug;
}

function listAllFilePaths(ignoreSlug = null) {
  const used = new Set();
  for (const [slug, page] of Object.entries(state.pages)) {
    if (slug === ignoreSlug) continue;
    used.add(page.filePath);
  }
  return used;
}

function makeUniqueFilePath(basePath, ignoreSlug = null) {
  const used = listAllFilePaths(ignoreSlug);
  const cleanBase = String(basePath || 'page.md').replace(/^\/+/, '');
  if (!used.has(cleanBase)) return cleanBase;

  const folder = dirname(cleanBase);
  const fileName = cleanBase.split('/').pop() || 'page.md';
  const baseName = fileName.replace(/\.md$/i, '') || 'page';
  let counter = 2;

  while (true) {
    const candidateName = `${baseName}-${counter}.md`;
    const candidate = folder ? `${folder}/${candidateName}` : candidateName;
    if (!used.has(candidate)) return candidate;
    counter += 1;
  }
}

function buildFilePath(folderPath, title) {
  const folder = sanitizeFolderPath(folderPath);
  const fileBase = slugify(title) || 'page';
  const rawPath = folder ? `${folder}/${fileBase}.md` : `${fileBase}.md`;
  return makeUniqueFilePath(rawPath);
}

function normalizePageRecord(slug, page) {
  const safeSlug = slug || makeUniqueSlug('page');
  const title = page?.title || safeSlug;
  const markdown = typeof page?.markdown === 'string' ? page.markdown : `# ${title}\n\n`;
  const rawFile = page?.filePath || `${safeSlug}.md`;
  const normalizedFile = makeUniqueFilePath(rawFile, safeSlug);
  return {
    title,
    markdown,
    filePath: normalizedFile
  };
}

function savePages() {
  localStorage.setItem(STORAGE_KEYS.pages, JSON.stringify(state.pages));
  localStorage.setItem(STORAGE_KEYS.activeSlug, state.activeSlug || '');
}

function markUnsavedChanges() {
  state.hasUnsavedChanges = true;
}

function clearAutoSaveTimer() {
  if (state.autoSaveTimer) {
    clearInterval(state.autoSaveTimer);
    state.autoSaveTimer = null;
  }
}

function restartAutoSave() {
  clearAutoSaveTimer();
  if (!state.settings.autoSaveEnabled) return;
  const minutes = Math.max(0.25, Number(state.settings.autoSaveMinutes) || 2);
  const intervalMs = Math.round(minutes * 60 * 1000);

  state.autoSaveTimer = setInterval(() => {
    if (!state.hasUnsavedChanges) return;
    savePages();
    state.hasUnsavedChanges = false;
    setStatus(str('statusAutoSaved'));
  }, intervalMs);
}

function loadLocalPages() {
  const readRaw = () => {
    const current = localStorage.getItem(STORAGE_KEYS.pages);
    if (current) return current;
    return localStorage.getItem(STORAGE_KEYS.legacyPages);
  };

  try {
    const raw = readRaw();
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;

    const normalized = {};
    for (const [slug, page] of Object.entries(parsed)) {
      const safeSlug = makeUniqueSlug(slugify(slug) || 'page', normalized);
      normalized[safeSlug] = normalizePageRecord(safeSlug, page);
    }
    return Object.keys(normalized).length > 0 ? normalized : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function loadBundledPages() {
  const collectManifestEntries = (node, prefix = '') => {
    const out = [];
    if (!node) return out;

    if (typeof node === 'string') {
      out.push({ file: `${prefix}${node}` });
      return out;
    }

    if (Array.isArray(node)) {
      for (const item of node) out.push(...collectManifestEntries(item, prefix));
      return out;
    }

    if (typeof node === 'object') {
      const folderPrefix = node.folder ? `${prefix}${String(node.folder).replace(/^\/+|\/+$/g, '')}/` : prefix;
      if (node.file) {
        out.push({
          slug: node.slug,
          title: node.title,
          file: `${folderPrefix}${String(node.file)}`
        });
      }
      if (node.entries) out.push(...collectManifestEntries(node.entries, folderPrefix));
      if (node.children) out.push(...collectManifestEntries(node.children, folderPrefix));
      if (node.pages) out.push(...collectManifestEntries(node.pages, folderPrefix));
      if (!node.file && !node.entries && !node.children && !node.pages) {
        for (const [key, value] of Object.entries(node)) {
          if (['slug', 'title', 'folder'].includes(key)) continue;
          out.push(...collectManifestEntries(value, folderPrefix));
        }
      }
    }

    return out;
  };

  try {
    const manifestRes = await fetch('./pages/manifest.json', { cache: 'no-store' });
    if (!manifestRes.ok) return null;
    const manifest = await manifestRes.json();
    const manifestItems = collectManifestEntries(manifest).filter((item) => item && item.file);
    if (manifestItems.length === 0) return null;

    const entries = await Promise.all(
      manifestItems.map(async (item) => {
        const filePath = String(item.file || '').replace(/^\/+/, '');
        if (!filePath) return null;
        const res = await fetch(`./pages/${filePath}`, { cache: 'no-store' });
        if (!res.ok) return null;
        const markdown = await res.text();
        const titleFromPath = filePath.split('/').pop()?.replace(/\.md$/i, '') || 'page';
        return {
          slug: slugify(item.slug || item.title || titleFromPath),
          title: item.title || titleFromPath,
          markdown,
          filePath
        };
      })
    );

    const pages = {};
    for (const entry of entries) {
      if (!entry || !entry.slug) continue;
      const slug = makeUniqueSlug(entry.slug, pages);
      pages[slug] = normalizePageRecord(slug, entry);
    }

    return Object.keys(pages).length > 0 ? pages : null;
  } catch (error) {
    console.warn('Bundled pages not loaded:', error);
    return null;
  }
}

function mergePagesByFilePath(bundledPages, localPages) {
  const byFile = new Map();

  const upsert = (slug, page, source) => {
    if (!page || typeof page !== 'object') return;
    const safeFile = String(page.filePath || `${slug || 'page'}.md`).replace(/^\/+/, '');
    const title = String(page.title || slug || 'page');
    const markdown = typeof page.markdown === 'string' ? page.markdown : `# ${title}\n\n`;
    const safeSlug = slugify(slug || title || safeFile) || 'page';
    byFile.set(safeFile, {
      slug: safeSlug,
      filePath: safeFile,
      title,
      markdown,
      source
    });
  };

  for (const [slug, page] of Object.entries(bundledPages || {})) upsert(slug, page, 'bundled');
  for (const [slug, page] of Object.entries(localPages || {})) upsert(slug, page, 'local');

  const merged = {};
  for (const item of byFile.values()) {
    const nextSlug = makeUniqueSlug(item.slug || slugify(item.title) || 'page', merged);
    merged[nextSlug] = normalizePageRecord(nextSlug, item);
  }
  return merged;
}

function loadSettings() {
  const normalize = (raw) => {
    const base = makeDefaultSettings();

    if (!raw || typeof raw !== 'object') return base;

    // Migration from old flat format
    const hasLegacyPalette =
      typeof raw.bg === 'string' ||
      typeof raw.panel === 'string' ||
      typeof raw.text === 'string' ||
      typeof raw.accent === 'string' ||
      typeof raw.editorBg === 'string';

    if (hasLegacyPalette) {
      base.palettes.light = {
        ...base.palettes.light,
        bg: raw.bg || DEFAULT_LIGHT_PALETTE.bg,
        bg2: raw.bg2 || DEFAULT_LIGHT_PALETTE.bg2,
        bgMode: raw.bgMode === 'solid' ? 'solid' : 'gradient',
        panel: raw.panel || DEFAULT_LIGHT_PALETTE.panel,
        text: raw.text || DEFAULT_LIGHT_PALETTE.text,
        accent: raw.accent || DEFAULT_LIGHT_PALETTE.accent,
        editorBg: raw.editorBg || DEFAULT_LIGHT_PALETTE.editorBg
      };
    }

    if (raw.palettes && typeof raw.palettes === 'object') {
      const light = raw.palettes.light || {};
      const dark = raw.palettes.dark || {};
      base.palettes.light = { ...base.palettes.light, ...light };
      base.palettes.dark = { ...base.palettes.dark, ...dark };
    }

    base.appTitle = typeof raw.appTitle === 'string' ? raw.appTitle : base.appTitle;
    base.appSubtitle = typeof raw.appSubtitle === 'string' ? raw.appSubtitle : base.appSubtitle;
    base.themeMode = raw.themeMode === 'dark' ? 'dark' : 'light';
    base.paletteTarget = raw.paletteTarget === 'dark' ? 'dark' : 'light';
    base.autoSaveEnabled = raw.autoSaveEnabled !== false;
    base.autoSaveMinutes = Math.max(0.25, Math.min(30, Number(raw.autoSaveMinutes) || 2));
    base.fontFamily = typeof raw.fontFamily === 'string' ? raw.fontFamily : base.fontFamily;
    base.fontSize = Number(raw.fontSize) || base.fontSize;
    base.uiScale = Number(raw.uiScale) || base.uiScale;
    return base;
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEYS.settings);
    if (!raw) return normalize(null);
    const parsed = JSON.parse(raw);
    return normalize(parsed);
  } catch (error) {
    console.error(error);
    return normalize(null);
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(state.settings));
}

function loadLanguage() {
  const lang = (localStorage.getItem(STORAGE_KEYS.language) || '').trim();
  return lang || 'de';
}

function defaultLanguageManifest() {
  return [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', file: 'de.json' },
    { code: 'en', name: 'English', flag: '🇺🇸', file: 'en.json' }
  ];
}

function normalizeLangManifestEntry(entry) {
  if (!entry || typeof entry !== 'object') return null;
  const code = String(entry.code || '').trim().toLowerCase();
  const file = String(entry.file || '').trim();
  if (!code || !file) return null;
  return {
    code,
    file,
    name: String(entry.name || code),
    flag: String(entry.flag || '🌐')
  };
}

async function loadLanguageResources() {
  let manifest = defaultLanguageManifest();
  let hadFailure = false;

  try {
    const res = await fetch('./i18n/manifest.json', { cache: 'no-store' });
    if (res.ok) {
      const parsed = await res.json();
      if (Array.isArray(parsed)) {
        const normalized = parsed.map(normalizeLangManifestEntry).filter(Boolean);
        if (normalized.length > 0) manifest = normalized;
      }
    }
  } catch (error) {
    hadFailure = true;
    console.warn('Language manifest load failed:', error);
  }

  const loaded = {};
  const meta = {};

  for (const item of manifest) {
    try {
      const res = await fetch(`./i18n/${item.file}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const parsed = await res.json();
      if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON format');

      const translations = parsed.translations && typeof parsed.translations === 'object' ? parsed.translations : parsed;
      loaded[item.code] = translations;
      meta[item.code] = {
        name: String(parsed.name || item.name || item.code),
        flag: String(parsed.flag || item.flag || '🌐')
      };
    } catch (error) {
      hadFailure = true;
      console.warn(`Language file failed: ${item.code}`, error);
    }
  }

  for (const [code, texts] of Object.entries(FALLBACK_I18N)) {
    if (!loaded[code]) loaded[code] = { ...texts };
    else loaded[code] = { ...texts, ...loaded[code] };
    if (!meta[code]) {
      const d = defaultLanguageManifest().find((m) => m.code === code);
      meta[code] = { name: d?.name || code, flag: d?.flag || '🌐' };
    }
  }

  I18N = loaded;
  state.languageMeta = meta;
  state.languageOrder = Object.keys(loaded).sort((a, b) => a.localeCompare(b));
  if (!state.languageOrder.includes('de') && loaded.de) state.languageOrder.unshift('de');
  if (!state.languageOrder.includes('en') && loaded.en) state.languageOrder.push('en');
  return { hadFailure };
}

function saveLanguage() {
  localStorage.setItem(STORAGE_KEYS.language, state.language);
}

function loadFolderOpen() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.folderOpen);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    console.error(error);
    return {};
  }
}

function saveFolderOpen() {
  localStorage.setItem(STORAGE_KEYS.folderOpen, JSON.stringify(state.folderOpen));
}

function loadSidebarCollapsed() {
  return localStorage.getItem(STORAGE_KEYS.sidebarCollapsed) === '1';
}

function saveSidebarCollapsed() {
  localStorage.setItem(STORAGE_KEYS.sidebarCollapsed, state.sidebarCollapsed ? '1' : '0');
}

function loadTocCollapsed() {
  return localStorage.getItem(STORAGE_KEYS.tocCollapsed) === '1';
}

function saveTocCollapsed() {
  localStorage.setItem(STORAGE_KEYS.tocCollapsed, state.tocCollapsed ? '1' : '0');
}

function getPalette(mode = state.settings.themeMode) {
  return mode === 'dark' ? state.settings.palettes.dark : state.settings.palettes.light;
}

function applySettings() {
  const root = document.documentElement;
  const palette = getPalette();
  root.style.setProperty('--bg', palette.bg);
  root.style.setProperty('--bg2', palette.bg2);
  root.style.setProperty('--panel', palette.panel);
  root.style.setProperty('--text', palette.text);
  root.style.setProperty('--muted', palette.muted);
  root.style.setProperty('--border', palette.border);
  root.style.setProperty('--accent', palette.accent);
  root.style.setProperty('--editor-bg', palette.editorBg);
  root.style.setProperty('--control-bg', palette.controlBg);
  root.style.setProperty('--control-text', palette.controlText);
  root.style.setProperty('--code-bg', palette.codeBg);
  root.style.setProperty('--code-plain', palette.codePlain);
  root.style.setProperty('--code-kw', palette.codeKw);
  root.style.setProperty('--code-type', palette.codeType);
  root.style.setProperty('--code-var', palette.codeVar);
  root.style.setProperty('--code-fn', palette.codeFn);
  root.style.setProperty('--code-str', palette.codeStr);
  root.style.setProperty('--code-num', palette.codeNum);
  root.style.setProperty('--code-com', palette.codeCom);
  root.style.setProperty('--code-op', palette.codeOp);
  root.style.setProperty('--font-family', state.settings.fontFamily);
  root.style.setProperty('--font-size-base', `${state.settings.fontSize}px`);
  root.style.setProperty('--ui-scale', String(state.settings.uiScale / 100));

  const bodyBg =
    palette.bgMode === 'solid'
      ? palette.bg
      : `linear-gradient(135deg, ${palette.bg} 0%, ${palette.bg2} 100%)`;
  root.style.setProperty('--body-bg', bodyBg);
}

function syncSettingsInputs() {
  const editPalette = getPalette(state.settings.paletteTarget);
  dom.appTitleInput.value = state.settings.appTitle;
  dom.appSubtitleInput.value = state.settings.appSubtitle;
  dom.themeModeInput.value = state.settings.themeMode;
  dom.paletteTargetInput.value = state.settings.paletteTarget;
  dom.autoSaveEnabledInput.checked = Boolean(state.settings.autoSaveEnabled);
  dom.autoSaveMinutesInput.value = String(state.settings.autoSaveMinutes);
  dom.bgColorInput.value = editPalette.bg;
  dom.mutedColorInput.value = editPalette.muted;
  dom.borderColorInput.value = editPalette.border;
  dom.controlBgInput.value = editPalette.controlBg;
  dom.controlTextInput.value = editPalette.controlText;
  dom.bgModeInput.value = editPalette.bgMode;
  dom.bgColor2Input.value = editPalette.bg2;
  dom.panelColorInput.value = editPalette.panel;
  dom.textColorInput.value = editPalette.text;
  dom.accentColorInput.value = editPalette.accent;
  dom.editorBgInput.value = editPalette.editorBg;
  dom.codeBgInput.value = editPalette.codeBg;
  dom.codePlainInput.value = editPalette.codePlain;
  dom.codeKwInput.value = editPalette.codeKw;
  dom.codeTypeInput.value = editPalette.codeType;
  dom.codeVarInput.value = editPalette.codeVar;
  dom.codeFnInput.value = editPalette.codeFn;
  dom.codeStrInput.value = editPalette.codeStr;
  dom.codeNumInput.value = editPalette.codeNum;
  dom.codeComInput.value = editPalette.codeCom;
  dom.codeOpInput.value = editPalette.codeOp;
  dom.fontFamilyInput.value = state.settings.fontFamily;
  dom.fontSizeInput.value = String(state.settings.fontSize);
  dom.fontSizeLabel.textContent = String(state.settings.fontSize);
  dom.uiScaleInput.value = String(state.settings.uiScale);
  dom.uiScaleLabel.textContent = String(state.settings.uiScale);
  dom.bgColor2Wrap.style.display = editPalette.bgMode === 'gradient' ? '' : 'none';
}

function applyBranding() {
  const title = state.settings.appTitle.trim() || str('appTitle');
  const subtitle = state.settings.appSubtitle.trim() || str('appSubtitle');
  dom.appTitleText.textContent = title;
  dom.appSubtitleText.textContent = subtitle;
}

function applyLanguage() {
  document.documentElement.lang = state.language;

  for (const node of dom.i18nNodes) {
    const key = node.dataset.i18n;
    node.textContent = str(key);
  }

  const currentLangMeta = state.languageMeta[state.language] || { flag: '🌐', name: state.language };
  dom.langSwitchBtn.textContent = currentLangMeta.flag;
  dom.langSwitchBtn.title = currentLangMeta.name;
  dom.themeToggleBtn.textContent = state.settings.themeMode === 'dark' ? '☀' : '🌙';
  dom.themeToggleBtn.title = state.settings.themeMode === 'dark' ? 'Light mode' : 'Dark mode';
  dom.sidebarToggleBtn.title = state.sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
  dom.themeModeInput.options[0].textContent = str('themeLight');
  dom.themeModeInput.options[1].textContent = str('themeDark');
  dom.paletteTargetInput.options[0].textContent = str('themeLight');
  dom.paletteTargetInput.options[1].textContent = str('themeDark');
  applyBranding();

  if (state.activeSlug && state.pages[state.activeSlug]) {
    setStatus(str('statusLoadedPage', { title: state.pages[state.activeSlug].title }));
  }
  updateToolbarState();
  renderToc();
}

function applySidebarState() {
  dom.wikiView.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
  dom.sidebarToggleBtn.textContent = state.sidebarCollapsed ? '⟩' : '⟨';
  dom.sidebarToggleBtn.title = state.sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
}

function applyTocState() {
  dom.wikiView.classList.toggle('toc-collapsed', state.tocCollapsed);
  dom.tocToggleBtn.textContent = state.tocCollapsed ? '⟨' : '⟩';
  dom.tocToggleBtn.title = state.tocCollapsed ? 'Expand TOC' : 'Collapse TOC';
}

function setEditorEditable(editable) {
  if (state.editor && typeof state.editor.setEditable === 'function') {
    state.editor.setEditable(Boolean(editable));
  }
  if (state.fallbackRichEditor) {
    state.fallbackRichEditor.contentEditable = editable ? 'true' : 'false';
    state.fallbackRichEditor.spellcheck = Boolean(editable);
    state.fallbackRichEditor.querySelectorAll('.code-widget-input').forEach((el) => {
      el.readOnly = !editable;
    });
    state.fallbackRichEditor.querySelectorAll('.code-lang-picker').forEach((el) => {
      el.disabled = !editable;
    });
  }
  document.body.classList.toggle('editor-locked', !editable);
}

function applyEditingLockState() {
  setEditorEditable(state.editUnlocked);
  updateToolbarState();
}

function lockPageEditing() {
  state.editUnlocked = false;
  applyEditingLockState();
}

function unlockPageEditing() {
  state.editUnlocked = true;
  applyEditingLockState();
  setStatus(str('statusEditUnlocked'));
}

function ensureEditMode() {
  if (state.editUnlocked) return true;
  setStatus(str('statusReadOnly'));
  return false;
}

function switchView(targetView) {
  for (const btn of dom.tabButtons) {
    btn.classList.toggle('is-active', btn.dataset.viewTarget === targetView);
  }
  for (const view of dom.views) {
    view.classList.toggle('is-active', view.dataset.view === targetView);
  }
}

function buildTree() {
  const root = {
    folders: {},
    pages: []
  };

  for (const [slug, page] of Object.entries(state.pages)) {
    const parts = String(page.filePath || `${slug}.md`).split('/').filter(Boolean);
    const fileName = parts.pop() || `${slug}.md`;
    let node = root;
    let folderPath = '';

    for (const rawPart of parts) {
      const part = rawPart || 'folder';
      folderPath = folderPath ? `${folderPath}/${part}` : part;
      if (!node.folders[part]) {
        node.folders[part] = {
          key: folderPath,
          name: part,
          folders: {},
          pages: []
        };
      }
      node = node.folders[part];
    }

    node.pages.push({
      slug,
      title: page.title,
      fileName
    });
  }

  return root;
}

function renderFolder(node, isRoot = false) {
  const list = document.createElement('ul');
  list.className = isRoot ? 'tree-list is-root' : 'tree-list';

  const folderNames = Object.keys(node.folders).sort((a, b) => a.localeCompare(b));
  const pages = [...node.pages].sort((a, b) => a.title.localeCompare(b.title));

  for (const folderName of folderNames) {
    const folder = node.folders[folderName];
    const item = document.createElement('li');
    item.className = 'tree-folder';

    const details = document.createElement('details');
    const openDefault = state.folderOpen[folder.key];
    details.open = openDefault === undefined ? true : Boolean(openDefault);

    const summary = document.createElement('summary');
    summary.textContent = folder.name;
    details.appendChild(summary);

    details.appendChild(renderFolder(folder));
    details.addEventListener('toggle', () => {
      state.folderOpen[folder.key] = details.open;
      saveFolderOpen();
    });

    item.appendChild(details);
    list.appendChild(item);
  }

  for (const page of pages) {
    const item = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tree-page-btn';
    btn.classList.toggle('is-active', page.slug === state.activeSlug);
    btn.textContent = page.title;
    btn.addEventListener('click', () => {
      state.activeSlug = page.slug;
      loadActivePageIntoEditor();
      renderPageTree();
      savePages();
    });
    item.appendChild(btn);
    list.appendChild(item);
  }

  return list;
}

function renderPageTree() {
  dom.pageTree.innerHTML = '';
  dom.pageTree.appendChild(renderFolder(buildTree(), true));
}

function getRenderedEditorRoot() {
  if (state.editor) {
    return dom.editorHost.querySelector('.ProseMirror');
  }
  return state.fallbackRichEditor;
}

function collectTocEntries() {
  const root = getRenderedEditorRoot();
  if (!root) return [];

  const headings = Array.from(root.querySelectorAll('h1, h2, h3, h4'));
  const usedIds = new Set();
  const entries = [];

  for (const heading of headings) {
    const rawText = (heading.textContent || '').trim();
    if (!rawText) continue;
    const level = Number(heading.tagName.slice(1)) || 1;
    let base = slugify(rawText) || 'section';
    let id = base;
    let idx = 2;
    while (usedIds.has(id)) {
      id = `${base}-${idx}`;
      idx += 1;
    }
    usedIds.add(id);
    heading.id = id;
    entries.push({ id, level, text: rawText });
  }

  return entries;
}

function renderToc() {
  const entries = collectTocEntries();
  dom.tocList.innerHTML = '';

  if (entries.length === 0) {
    const empty = document.createElement('div');
    empty.textContent = str('tocEmpty');
    empty.style.color = 'var(--muted)';
    dom.tocList.appendChild(empty);
    return;
  }

  for (const entry of entries) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `toc-item level-${Math.min(4, Math.max(1, entry.level))}`;
    btn.textContent = entry.text;
    btn.addEventListener('click', () => {
      const target = document.getElementById(entry.id);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      dom.tocList.querySelectorAll('.toc-item').forEach((el) => el.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
    dom.tocList.appendChild(btn);
  }
}

function languageLabel(value) {
  const found = CODE_LANGUAGES.find((item) => item.value === value);
  return found ? found.label : value;
}

function buildPrintTocHtml(entries) {
  if (!entries || entries.length === 0) {
    return `<p>${escapeHtml(str('tocEmptyPrint'))}</p>`;
  }

  const rows = entries
    .map((entry) => {
      const level = Math.max(1, Math.min(6, entry.level));
      const indent = (level - 1) * 18;
      return `<li style="margin-left:${indent}px"><a href="#${entry.id}">${escapeHtml(entry.text)}</a></li>`;
    })
    .join('');
  return `<ul class="print-toc-list">${rows}</ul>`;
}

function convertCodeWidgetsForPrint(root) {
  root.querySelectorAll('.code-block-widget').forEach((widget) => {
    const lang = normalizeCodeLanguage(widget.querySelector('.code-lang-picker')?.value || widget.dataset.lang || 'text');
    const previewCode = widget.querySelector('.code-widget-preview code');
    const rawText = widget.querySelector('.code-widget-input')?.value || '';
    const rendered = previewCode?.innerHTML || highlightEscapedCode(escapeHtml(rawText), lang);

    const container = document.createElement('figure');
    container.className = 'print-code-figure';

    const caption = document.createElement('figcaption');
    caption.className = 'print-code-caption';
    caption.textContent = `${str('codeLanguageLabel')}: ${languageLabel(lang)}`;

    const pre = document.createElement('pre');
    pre.className = 'print-code';
    const code = document.createElement('code');
    code.className = `language-${lang}`;
    code.innerHTML = rendered;
    pre.appendChild(code);

    container.appendChild(caption);
    container.appendChild(pre);
    widget.replaceWith(container);
  });
}

function printCurrentPage() {
  const root = getRenderedEditorRoot();
  const page = state.pages[state.activeSlug];
  if (!root || !page) return;

  const entries = collectTocEntries();
  const contentClone = root.cloneNode(true);
  convertCodeWidgetsForPrint(contentClone);

  const tocTitle = str('sidebarToc');
  const docTitle = page.title;
  const printHtml = `<!doctype html>
<html lang="${state.language}">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(docTitle)}</title>
  <style>
    @page { margin: 14mm 16mm 18mm 16mm; }
    body {
      font-family: ${JSON.stringify(state.settings.fontFamily)};
      color: ${getPalette().text};
      background: #fff;
      line-height: 1.45;
      font-size: ${state.settings.fontSize}px;
      margin: 0;
      counter-reset: page;
    }
    .print-footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 4mm;
      text-align: center;
      font-size: 11px;
      color: #475569;
    }
    .print-footer::after { content: counter(page); }
    h1,h2,h3,h4 { break-after: avoid-page; }
    p,li,blockquote,pre,table,figure { break-inside: avoid; }
    .print-toc-page { break-after: page; }
    .print-toc-list { list-style: none; padding: 0; margin: 0; }
    .print-toc-list li { margin: 0.2rem 0; }
    .print-toc-list a { color: #0b57d0; text-decoration: none; }
    .print-content a { color: #0b57d0; }
    .print-code-figure { margin: 1rem 0; }
    .print-code-caption { color: #475569; font-size: 0.9em; margin-bottom: 0.25rem; }
    .print-code {
      background: ${getPalette().codeBg};
      color: ${getPalette().codePlain};
      border-radius: 8px;
      padding: 0.75rem;
      overflow: auto;
      border: 1px solid #cbd5e1;
      white-space: pre-wrap;
    }
    .tok-com,.tok-comment { color: ${getPalette().codeCom}; }
    .tok-str,.tok-string { color: ${getPalette().codeStr}; }
    .tok-num,.tok-number { color: ${getPalette().codeNum}; }
    .tok-kw { color: ${getPalette().codeKw}; font-weight: 600; }
    .tok-type { color: ${getPalette().codeType}; font-weight: 600; }
    .tok-var { color: ${getPalette().codeVar}; }
    .tok-fn { color: ${getPalette().codeFn}; }
    .tok-op { color: ${getPalette().codeOp}; font-weight: 600; }
    table { border-collapse: collapse; width: 100%; }
    td,th { border: 1px solid #cbd5e1; padding: 0.35rem 0.45rem; }
    blockquote { border-left: 3px solid #94a3b8; padding-left: 0.8rem; color: #334155; margin-left: 0; }
  </style>
</head>
<body>
  <section class="print-toc-page">
    <h1>${escapeHtml(tocTitle)}</h1>
    ${buildPrintTocHtml(entries)}
  </section>
  <article class="print-content">
    <h1>${escapeHtml(docTitle)}</h1>
    ${contentClone.innerHTML}
  </article>
  <div class="print-footer"></div>
</body>
</html>`;

  const frame = document.createElement('iframe');
  frame.setAttribute('aria-hidden', 'true');
  frame.style.position = 'fixed';
  frame.style.right = '0';
  frame.style.bottom = '0';
  frame.style.width = '0';
  frame.style.height = '0';
  frame.style.border = '0';
  frame.style.visibility = 'hidden';
  document.body.appendChild(frame);

  const cleanup = () => {
    setTimeout(() => frame.remove(), 200);
  };

  try {
    const printWin = frame.contentWindow;
    if (!printWin) throw new Error('No print window');
    let printed = false;

    printWin.document.open();
    printWin.document.write(printHtml);
    printWin.document.close();

    const runPrint = () => {
      if (printed) return;
      printed = true;
      try {
        printWin.focus();
        printWin.print();
        setStatus(str('statusPrinting'));
      } catch (error) {
        console.error(error);
        setStatus(str('statusPrintBlocked'));
      }
    };

    frame.onload = () => {
      runPrint();
    };
    setTimeout(runPrint, 220);
    printWin.addEventListener('afterprint', cleanup, { once: true });
    setTimeout(cleanup, 60000);
  } catch (error) {
    console.error(error);
    cleanup();
    setStatus(str('statusPrintBlocked'));
  }
}

function normalizeCodeLanguage(language) {
  const raw = String(language || 'text').toLowerCase();
  return CODE_LANGUAGES.some((item) => item.value === raw) ? raw : 'text';
}

function codeLanguageOptionsHtml(selected) {
  const active = normalizeCodeLanguage(selected);
  return CODE_LANGUAGES.map((item) => `<option value="${item.value}"${item.value === active ? ' selected' : ''}>${item.label}</option>`).join('');
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function highlightEscapedCode(escapedCode, language) {
  const lang = normalizeCodeLanguage(language);
  let html = String(escapedCode || '');
  const chunks = [];
  const markerBase = 0xe000;
  const markerLimit = 0xf8ff;
  const rawFallback = [];
  const stashToken = (content) => {
    if (markerBase + chunks.length <= markerLimit) {
      const idx = chunks.push(content) - 1;
      return String.fromCharCode(markerBase + idx);
    }
    const idx = rawFallback.push(content) - 1;
    return `@@TOK${idx}@@`;
  };
  const stash = (content, cls) => stashToken(`<span class="tok-${cls}">${content}</span>`);
  const stashRaw = (content) => stashToken(content);

  const tokenReplace = (regex, cls) => {
    html = html.replace(regex, (full) => stash(full, cls));
  };

  const tokenReplaceGroup = (regex, cls, group = 1) => {
    html = html.replace(regex, (...args) => {
      const full = args[0];
      const match = args[group];
      if (!match) return full;
      return full.replace(match, stash(match, cls));
    });
  };

  const tokenReplaceWordList = (words, cls) => {
    if (!words || words.length === 0) return;
    const safe = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    html = html.replace(new RegExp(`\\b(${safe})\\b`, 'g'), (full) => stash(full, cls));
  };

  // Protect escaped entities like &amp; / &lt; / &gt; before operator highlighting.
  html = html.replace(/&(?:#\d+|#x[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);/g, (full) => stashRaw(full));

  if (lang === 'json') {
    html = html.replace(/"(?:\\.|[^"\\])*"(?=\s*:)/g, (full) => stash(full, 'var'));
  }

  if (lang === 'shell' || lang === 'bash' || lang === 'python') {
    html = html.replace(/(^|[\n\r])([ \t]*#.*$)/gm, (full, p1, p2) => `${p1}${stash(p2, 'comment')}`);
  } else if (lang === 'html') {
    tokenReplace(/&lt;!--[\s\S]*?--&gt;/g, 'comment');
  } else if (lang === 'css') {
    tokenReplace(/\/\*[\s\S]*?\*\//g, 'comment');
  } else {
    tokenReplace(/\/\/[^\n\r]*/g, 'comment');
    tokenReplace(/\/\*[\s\S]*?\*\//g, 'comment');
  }

  tokenReplace(/`(?:\\.|[^`\\])*`/g, 'string');
  tokenReplace(/"(?:\\.|[^"\\])*"/g, 'string');
  tokenReplace(/'(?:\\.|[^'\\])*'/g, 'string');

  const keywordMap = {
    javascript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'new', 'async', 'await', 'import', 'from', 'export', 'try', 'catch', 'switch', 'case', 'break', 'continue', 'throw'],
    typescript: ['type', 'interface', 'implements', 'extends', 'public', 'private', 'protected', 'readonly', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'class', 'new', 'async', 'await', 'import', 'from', 'export', 'try', 'catch', 'enum'],
    python: ['def', 'class', 'return', 'if', 'elif', 'else', 'for', 'while', 'import', 'from', 'as', 'try', 'except', 'with', 'lambda', 'pass', 'None', 'True', 'False', 'yield', 'raise'],
    cpp: ['class', 'struct', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'namespace', 'using', 'public', 'private', 'protected', 'include', 'template', 'typename', 'constexpr', 'auto'],
    shell: ['if', 'then', 'else', 'fi', 'for', 'do', 'done', 'case', 'esac', 'function', 'export', 'in'],
    bash: ['if', 'then', 'else', 'fi', 'for', 'do', 'done', 'case', 'esac', 'function', 'export', 'in'],
    json: ['true', 'false', 'null'],
    html: ['doctype'],
    css: ['@media', '@keyframes', '@supports']
  };

  const typeMap = {
    javascript: ['Array', 'Object', 'Map', 'Set', 'Promise', 'Date', 'RegExp', 'Error'],
    typescript: ['string', 'number', 'boolean', 'unknown', 'never', 'void', 'any', 'Record', 'Partial', 'Readonly', 'Pick', 'Omit'],
    python: ['int', 'float', 'str', 'bool', 'list', 'dict', 'tuple', 'set'],
    cpp: ['int', 'double', 'float', 'bool', 'void', 'char', 'long', 'short', 'unsigned', 'size_t', 'std', 'string'],
    shell: [],
    bash: [],
    json: [],
    html: [],
    css: []
  };

  tokenReplaceWordList(keywordMap[lang] || [], 'kw');
  tokenReplaceWordList(typeMap[lang] || [], 'type');

  if (lang === 'html') {
    html = html.replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9:-]*)/g, (full, p1, p2) => `${p1}${stash(p2, 'kw')}`);
    html = html.replace(/\b([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?==)/g, (full) => stash(full, 'type'));
  }

  if (lang === 'css') {
    tokenReplaceGroup(/(^|[{};\n\r]\s*)([.#]?[a-zA-Z_-][a-zA-Z0-9_:-]*)(?=\s*\{)/gm, 'var', 2);
    tokenReplaceGroup(/(^|[;\n\r]\s*)([a-z-]+)(?=\s*:)/gm, 'type', 2);
  }

  if (lang === 'javascript' || lang === 'typescript' || lang === 'cpp') {
    tokenReplaceGroup(/\b(?:const|let|var|auto|int|double|float|bool|char|long|short|unsigned|string)\s+([A-Za-z_][\w$]*)/g, 'var', 1);
  }

  if (lang === 'python') {
    tokenReplaceGroup(/\bdef\s+([A-Za-z_]\w*)/g, 'fn', 1);
    tokenReplaceGroup(/\b([A-Za-z_]\w*)(?=\s*=)/g, 'var', 1);
  }

  if (lang === 'shell' || lang === 'bash') {
    tokenReplace(/\$[A-Za-z_]\w*/g, 'var');
    tokenReplaceGroup(/(^|[\n\r]\s*)([A-Za-z_][\w-]*)(?=[ \t])/g, 'fn', 2);
    tokenReplaceGroup(/\b([A-Za-z_]\w*)(?==)/g, 'var', 1);
  }

  if (lang === 'json') {
    tokenReplaceGroup(/(^|[{\[,]\s*)([A-Za-z_][\w-]*)(?=\s*:)/g, 'var', 2);
  }

  if (lang !== 'python' && lang !== 'shell' && lang !== 'bash') {
    tokenReplaceGroup(/\b(?:function|def|fn)\s+([A-Za-z_][\w$]*)/g, 'fn', 1);
  }

  tokenReplaceGroup(/\b([A-Za-z_][\w$]*)(?=\s*\()/g, 'fn', 1);
  tokenReplace(/\b(0x[0-9a-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/g, 'number');
  tokenReplace(/(\+\+|--|=>|===|!==|==|!=|<=|>=|&&|\|\||[=+\-*/%<>!&|^~?:])/g, 'op');

  html = Array.from(html)
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= markerBase && code < markerBase + chunks.length) {
        return chunks[code - markerBase];
      }
      return ch;
    })
    .join('');

  return html.replace(/@@TOK(\d+)@@/g, (full, idx) => rawFallback[Number(idx)] || '');
}

function renderCodeWidgetPreview(widget) {
  const select = widget.querySelector('.code-lang-picker');
  const input = widget.querySelector('.code-widget-input');
  const code = widget.querySelector('.code-widget-preview code');
  if (!select || !input || !code) return;

  const lang = normalizeCodeLanguage(select.value);
  widget.dataset.lang = lang;
  select.value = lang;
  code.className = `language-${lang}`;
  code.innerHTML = highlightEscapedCode(escapeHtml(input.value || ''), lang);
}

function createCodeWidgetHtml(text, language = 'text') {
  const lang = normalizeCodeLanguage(language);
  const encoded = encodeURIComponent(text || '');
  return [
    `<div class="code-block-widget" contenteditable="false" data-lang="${lang}" data-code="${encoded}">`,
    `<div class="code-widget-head">`,
    `<span class="code-widget-label">Lang</span>`,
    `<select class="code-lang-picker">${codeLanguageOptionsHtml(lang)}</select>`,
    `</div>`,
    `<div class="code-widget-editor-wrap">`,
    `<pre class="code-widget-preview"><code class="language-${lang}"></code></pre>`,
    `<textarea class="code-widget-input" spellcheck="false"></textarea>`,
    `</div>`,
    `</div>`
  ].join('');
}

function bindCodeWidgets(root) {
  if (!root) return;
  const widgets = root.querySelectorAll('.code-block-widget');
  widgets.forEach((widget) => {
    const select = widget.querySelector('.code-lang-picker');
    const input = widget.querySelector('.code-widget-input');
    if (!select || !input) return;
    if (!input.value && widget.dataset.code) {
      try {
        input.value = decodeURIComponent(widget.dataset.code);
      } catch (error) {
        input.value = widget.dataset.code;
      }
    }
    renderCodeWidgetPreview(widget);
    if (widget.dataset.bound === '1') return;
    widget.dataset.bound = '1';

    select.addEventListener('change', () => {
      if (!state.editUnlocked) {
        applyEditingLockState();
        return;
      }
      renderCodeWidgetPreview(widget);
      const page = state.pages[state.activeSlug];
      if (!page || !state.fallbackRichEditor) return;
      page.markdown = fallbackHtmlToMarkdown(state.fallbackRichEditor);
      markUnsavedChanges();
      setStatus(str('statusChangedPage', { title: page.title }));
    });

    input.addEventListener('input', () => {
      if (!state.editUnlocked) return;
      renderCodeWidgetPreview(widget);
      const page = state.pages[state.activeSlug];
      if (!page || !state.fallbackRichEditor) return;
      page.markdown = fallbackHtmlToMarkdown(state.fallbackRichEditor);
      markUnsavedChanges();
      setStatus(str('statusChangedPage', { title: page.title }));
    });

    input.addEventListener('scroll', () => {
      const preview = widget.querySelector('.code-widget-preview');
      if (!preview) return;
      preview.scrollTop = input.scrollTop;
      preview.scrollLeft = input.scrollLeft;
    });
  });
  applyEditingLockState();
}

function parseInlineMarkdown(text) {
  let result = escapeHtml(text);
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>');
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  result = result.replace(/~~([^~]+)~~/g, '<s>$1</s>');
  return result;
}

function markdownToHtml(markdown) {
  const lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let i = 0;
  let listType = null;
  let inCode = false;
  let codeLang = '';
  let codeLines = [];

  const closeList = () => {
    if (listType) {
      html.push(listType === 'ul' ? '</ul>' : '</ol>');
      listType = null;
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    const fenceMatch = line.match(/^```([a-zA-Z0-9_-]+)?\s*$/);
    if (fenceMatch) {
      if (!inCode) {
        closeList();
        inCode = true;
        codeLang = fenceMatch[1] || '';
        codeLines = [];
      } else {
        html.push(createCodeWidgetHtml(codeLines.join('\n'), codeLang || 'text'));
        inCode = false;
        codeLang = '';
        codeLines = [];
      }
      i += 1;
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      i += 1;
      continue;
    }

    if (/^\s*$/.test(line)) {
      closeList();
      i += 1;
      continue;
    }

    if (/^\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\|?[\s:-|]+\|?\s*$/.test(lines[i + 1])) {
      closeList();
      const tableLines = [line, lines[i + 1]];
      i += 2;
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) {
        tableLines.push(lines[i]);
        i += 1;
      }

      const splitRow = (row) =>
        row
          .trim()
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((cell) => cell.trim());

      const headerCells = splitRow(tableLines[0]);
      const bodyRows = tableLines.slice(2).map(splitRow);

      let tableHtml = '<table><thead><tr>';
      for (const cell of headerCells) tableHtml += `<th>${parseInlineMarkdown(cell)}</th>`;
      tableHtml += '</tr></thead><tbody>';
      for (const row of bodyRows) {
        tableHtml += '<tr>';
        for (let c = 0; c < headerCells.length; c += 1) {
          tableHtml += `<td>${parseInlineMarkdown(row[c] || '')}</td>`;
        }
        tableHtml += '</tr>';
      }
      tableHtml += '</tbody></table>';
      html.push(tableHtml);
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      closeList();
      const level = headingMatch[1].length;
      html.push(`<h${level}>${parseInlineMarkdown(headingMatch[2])}</h${level}>`);
      i += 1;
      continue;
    }

    const quoteMatch = line.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      closeList();
      html.push(`<blockquote><p>${parseInlineMarkdown(quoteMatch[1])}</p></blockquote>`);
      i += 1;
      continue;
    }

    const ulMatch = line.match(/^[-*]\s+(.+)$/);
    if (ulMatch) {
      if (listType !== 'ul') {
        closeList();
        html.push('<ul>');
        listType = 'ul';
      }
      html.push(`<li>${parseInlineMarkdown(ulMatch[1])}</li>`);
      i += 1;
      continue;
    }

    const olMatch = line.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      if (listType !== 'ol') {
        closeList();
        html.push('<ol>');
        listType = 'ol';
      }
      html.push(`<li>${parseInlineMarkdown(olMatch[1])}</li>`);
      i += 1;
      continue;
    }

    closeList();
    if (/^---+$/.test(line.trim())) {
      html.push('<hr>');
    } else {
      html.push(`<p>${parseInlineMarkdown(line)}</p>`);
    }
    i += 1;
  }

  closeList();
  if (inCode) {
    html.push(createCodeWidgetHtml(codeLines.join('\n'), codeLang || 'text'));
  }
  return html.join('');
}

function inlineNodeToMarkdown(node) {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent || '';
  if (node.nodeType !== Node.ELEMENT_NODE) return '';

  const tag = node.tagName.toLowerCase();
  const inner = Array.from(node.childNodes).map(inlineNodeToMarkdown).join('');
  if (tag === 'strong' || tag === 'b') return `**${inner}**`;
  if (tag === 'em' || tag === 'i') return `*${inner}*`;
  if (tag === 's' || tag === 'del') return `~~${inner}~~`;
  if (tag === 'code') return `\`${inner}\``;
  if (tag === 'br') return '\n';
  return inner;
}

function blockNodeToMarkdown(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = (node.textContent || '').trim();
    return text ? `${text}\n\n` : '';
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return '';

  const tag = node.tagName.toLowerCase();
  if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4' || tag === 'h5' || tag === 'h6') {
    const level = Number(tag.slice(1));
    const content = Array.from(node.childNodes).map(inlineNodeToMarkdown).join('').trim();
    return `${'#'.repeat(level)} ${content}\n\n`;
  }

  if (tag === 'p') {
    const content = Array.from(node.childNodes).map(inlineNodeToMarkdown).join('').trim();
    return content ? `${content}\n\n` : '\n';
  }

  if (tag === 'blockquote') {
    const content = Array.from(node.childNodes).map((child) => blockNodeToMarkdown(child)).join('').trim();
    const lines = content.split('\n').filter(Boolean).map((line) => `> ${line}`);
    return `${lines.join('\n')}\n\n`;
  }

  if (tag === 'ul' || tag === 'ol') {
    const ordered = tag === 'ol';
    const items = Array.from(node.children).filter((child) => child.tagName.toLowerCase() === 'li');
    const lines = items.map((li, index) => {
      const content = Array.from(li.childNodes).map(inlineNodeToMarkdown).join('').trim();
      return ordered ? `${index + 1}. ${content}` : `- ${content}`;
    });
    return `${lines.join('\n')}\n\n`;
  }

  if (tag === 'pre') {
    const code = node.querySelector('code');
    const cls = code?.getAttribute('class') || '';
    const language = (cls.match(/language-([a-zA-Z0-9_-]+)/) || [])[1] || '';
    const text = code ? code.textContent || '' : node.textContent || '';
    return `\`\`\`${language}\n${text}\n\`\`\`\n\n`;
  }

  if (tag === 'div' && node.classList.contains('code-block-widget')) {
    const select = node.querySelector('.code-lang-picker');
    const input = node.querySelector('.code-widget-input');
    const language = normalizeCodeLanguage(select?.value || node.dataset.lang || 'text');
    const text = input?.value || '';
    return `\`\`\`${language}\n${text}\n\`\`\`\n\n`;
  }

  if (tag === 'hr') return '---\n\n';

  if (tag === 'table') {
    const headerRow = node.querySelector('thead tr') || node.querySelector('tr');
    const bodyRows = Array.from(node.querySelectorAll('tbody tr'));
    if (!headerRow) return '';
    const headers = Array.from(headerRow.children).map((cell) => Array.from(cell.childNodes).map(inlineNodeToMarkdown).join('').trim());
    const lines = [];
    lines.push(`| ${headers.join(' | ')} |`);
    lines.push(`| ${headers.map(() => '---').join(' | ')} |`);
    for (const row of bodyRows) {
      const cells = Array.from(row.children).map((cell) => Array.from(cell.childNodes).map(inlineNodeToMarkdown).join('').trim());
      while (cells.length < headers.length) cells.push('');
      lines.push(`| ${cells.slice(0, headers.length).join(' | ')} |`);
    }
    return `${lines.join('\n')}\n\n`;
  }

  return Array.from(node.childNodes).map((child) => blockNodeToMarkdown(child)).join('');
}

function fallbackHtmlToMarkdown(root) {
  if (!root) return '';
  const markdown = Array.from(root.childNodes).map((node) => blockNodeToMarkdown(node)).join('');
  return markdown.replace(/\n{3,}/g, '\n\n').trimEnd();
}

function editorMarkdown() {
  if (state.editor && typeof state.editor.getMarkdown === 'function') {
    return state.editor.getMarkdown();
  }
  if (state.fallbackRichEditor) {
    return fallbackHtmlToMarkdown(state.fallbackRichEditor);
  }
  const page = state.pages[state.activeSlug];
  return page?.markdown || '';
}

function setEditorContentFromMarkdown(markdown, emitUpdate = false) {
  if (!state.editor) return;

  const ok = state.editor.commands.setContent(markdown, {
    contentType: 'markdown',
    emitUpdate
  });

  if (!ok && state.editor.markdown && typeof state.editor.markdown.parse === 'function') {
    const json = state.editor.markdown.parse(markdown);
    state.editor.commands.setContent(json, { emitUpdate });
  }
}

function setPageMarkdown(markdown, emitStatus = false) {
  if (!state.editUnlocked) return;
  const page = state.pages[state.activeSlug];
  if (!page) return;

  page.markdown = markdown;
  markUnsavedChanges();

  if (state.editor) {
    setEditorContentFromMarkdown(markdown, false);
  }

  if (state.fallbackRichEditor) {
    state.fallbackRichEditor.innerHTML = markdownToHtml(markdown);
    bindCodeWidgets(state.fallbackRichEditor);
  }

  if (emitStatus) {
    setStatus(str('statusChangedPage', { title: page.title }));
  }
  renderToc();
}

function loadActivePageIntoEditor() {
  const page = state.pages[state.activeSlug];
  if (!page) return;

  if (state.editor) {
    setEditorContentFromMarkdown(page.markdown, false);
  }

  if (state.fallbackRichEditor) {
    state.fallbackRichEditor.innerHTML = markdownToHtml(page.markdown);
    bindCodeWidgets(state.fallbackRichEditor);
  }

  lockPageEditing();
  updateToolbarState();
  setStatus(`${str('statusLoadedPage', { title: page.title })} · ${str('statusReadOnly')}`);
  renderToc();
}

function saveActivePage() {
  if (!state.editUnlocked) {
    setStatus(str('statusReadOnly'));
    return;
  }
  const page = state.pages[state.activeSlug];
  if (!page) return;

  page.markdown = editorMarkdown();
  savePages();
  state.hasUnsavedChanges = false;
  setStatus(str('statusSavedPage', { title: page.title }));
}

function exportCurrentPage() {
  const page = state.pages[state.activeSlug];
  if (!page) return;

  const content = editorMarkdown();
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const fileName = page.filePath.split('/').pop() || `${state.activeSlug}.md`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  setStatus(str('statusExported', { name: fileName }));
}

function createPage(title, markdown = null, folderPath = null) {
  const cleanTitle = String(title || '').trim();
  if (!cleanTitle) return;

  const seedSlug = slugify(cleanTitle) || 'page';
  const slug = makeUniqueSlug(seedSlug);
  const parentFolder = folderPath === null ? dirname(state.pages[state.activeSlug]?.filePath || '') : sanitizeFolderPath(folderPath);
  const filePath = buildFilePath(parentFolder, cleanTitle);

  state.pages[slug] = {
    title: cleanTitle,
    filePath,
    markdown: markdown ?? `# ${cleanTitle}\n\n`
  };

  state.activeSlug = slug;
  savePages();
  renderPageTree();
  loadActivePageIntoEditor();
}

function renameCurrentPage() {
  const page = state.pages[state.activeSlug];
  if (!page) return;

  const nextTitle = window.prompt(str('promptRename'), page.title);
  if (!nextTitle) return;
  const cleanTitle = nextTitle.trim();
  if (!cleanTitle) return;

  const oldSlug = state.activeSlug;
  const targetSlug = slugify(cleanTitle) || oldSlug;
  const nextSlug = targetSlug === oldSlug ? oldSlug : makeUniqueSlug(targetSlug);

  const folder = dirname(page.filePath);
  const newFileBase = folder ? `${folder}/${slugify(cleanTitle) || 'page'}.md` : `${slugify(cleanTitle) || 'page'}.md`;

  const updated = {
    title: cleanTitle,
    markdown: editorMarkdown(),
    filePath: makeUniqueFilePath(newFileBase, oldSlug)
  };

  delete state.pages[oldSlug];
  state.pages[nextSlug] = updated;
  state.activeSlug = nextSlug;

  savePages();
  renderPageTree();
  setStatus(str('statusRenamed', { title: cleanTitle }));
}

function deleteCurrentPage() {
  if (!state.activeSlug || !state.pages[state.activeSlug]) return;
  if (Object.keys(state.pages).length <= 1) {
    setStatus(str('statusMinOne'));
    return;
  }

  const page = state.pages[state.activeSlug];
  const ok = window.confirm(str('confirmDelete', { title: page.title }));
  if (!ok) return;

  delete state.pages[state.activeSlug];
  state.activeSlug = Object.keys(state.pages)[0] || null;
  savePages();
  renderPageTree();
  loadActivePageIntoEditor();
  setStatus(str('statusDeleted', { title: page.title }));
}

function openMarkdownModal() {
  if (!ensureEditMode()) return;
  const page = state.pages[state.activeSlug];
  if (!page) return;
  dom.markdownTextarea.value = editorMarkdown();
  dom.markdownModal.hidden = false;
  dom.markdownTextarea.focus();
}

function closeMarkdownModal() {
  dom.markdownModal.hidden = true;
}

function importMarkdownFile(file) {
  file
    .text()
    .then((markdown) => {
      const fileTitle = file.name.replace(/\.md$/i, '') || 'Import';
      createPage(fileTitle, markdown, dirname(state.pages[state.activeSlug]?.filePath || ''));
      setStatus(str('statusImported', { name: file.name }));
    })
    .catch((error) => {
      console.error(error);
    });
}

function focusFallbackEditor() {
  if (!state.fallbackRichEditor) return false;
  state.fallbackRichEditor.focus();
  return true;
}

function fallbackInsertHtml(html) {
  if (!state.editUnlocked) return;
  if (!focusFallbackEditor()) return;
  document.execCommand('insertHTML', false, html);
}

function fallbackInsertText(text) {
  if (!state.editUnlocked) return;
  if (!focusFallbackEditor()) return;
  document.execCommand('insertText', false, text);
}

function placeCursorAtEnd(el) {
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const sel = window.getSelection();
  if (!sel) return;
  sel.removeAllRanges();
  sel.addRange(range);
}

function closestFallbackBlock(editor, node) {
  let current = node;
  while (current && current !== editor) {
    if (current.nodeType === Node.ELEMENT_NODE) {
      const tag = current.tagName.toLowerCase();
      if (['p', 'div', 'li', 'blockquote', 'h1', 'h2', 'h3', 'h4'].includes(tag)) return current;
    }
    current = current.parentNode;
  }
  return null;
}

function applyFallbackMarkdownShortcut(editor) {
  if (!state.editUnlocked) return;
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;
  const block = closestFallbackBlock(editor, sel.anchorNode);
  if (!block) return;

  const text = (block.textContent || '').trimEnd();
  if (!text) return;

  if (/^#\s+/.test(text)) {
    block.textContent = text.replace(/^#\s+/, '');
    placeCursorAtEnd(block);
    document.execCommand('formatBlock', false, 'h1');
    return;
  }
  if (/^##\s+/.test(text)) {
    block.textContent = text.replace(/^##\s+/, '');
    placeCursorAtEnd(block);
    document.execCommand('formatBlock', false, 'h2');
    return;
  }
  if (/^-\s+/.test(text)) {
    block.textContent = text.replace(/^-\s+/, '');
    placeCursorAtEnd(block);
    document.execCommand('insertUnorderedList');
    return;
  }
  if (/^1\.\s+/.test(text)) {
    block.textContent = text.replace(/^1\.\s+/, '');
    placeCursorAtEnd(block);
    document.execCommand('insertOrderedList');
    return;
  }
  if (/^>\s+/.test(text)) {
    block.textContent = text.replace(/^>\s+/, '');
    placeCursorAtEnd(block);
    document.execCommand('formatBlock', false, 'blockquote');
    return;
  }
  const codeMatch = text.match(/^```([a-zA-Z0-9_-]+)?$/);
  if (codeMatch) {
    block.textContent = '';
    placeCursorAtEnd(block);
    const lang = codeMatch[1] || 'text';
    document.execCommand('insertHTML', false, `${createCodeWidgetHtml('', lang)}<p></p>`);
  }
}

function insertCodeBlockByLanguage() {
  const language = 'text';
  const fence = language === 'text' ? '```' : `\`\`\`${language}`;
  const markdown = `${fence}\n\n\`\`\`\n`;

  if (state.editor) {
    const ok = state.editor
      .chain()
      .focus()
      .setCodeBlock({ language })
      .run();
    if (!ok) {
      state.editor.commands.insertContent(markdown, { contentType: 'markdown' });
    }
    return;
  }

  if (state.fallbackRichEditor) {
    const codeHtml = `${createCodeWidgetHtml('', language)}<p></p>`;
    fallbackInsertHtml(codeHtml);
    bindCodeWidgets(state.fallbackRichEditor);
    const page = state.pages[state.activeSlug];
    if (page) {
      page.markdown = fallbackHtmlToMarkdown(state.fallbackRichEditor);
      markUnsavedChanges();
      setStatus(str('statusChangedPage', { title: page.title }));
    }
  }
}

function promptNumber(question, fallback, min = 1, max = 30) {
  const raw = window.prompt(question, String(fallback));
  if (raw === null) return null;
  const value = Number(raw);
  if (!Number.isFinite(value)) return null;
  return Math.max(min, Math.min(max, Math.floor(value)));
}

function buildMarkdownTable(rows, cols) {
  const headerCells = Array.from({ length: cols }, (_, idx) => `H${idx + 1}`);
  const header = `| ${headerCells.join(' | ')} |`;
  const divider = `| ${Array.from({ length: cols }, () => '---').join(' | ')} |`;
  const body = Array.from({ length: rows - 1 }, () => `| ${Array.from({ length: cols }, () => ' ').join(' | ')} |`);
  return [header, divider, ...body, ''].join('\n');
}

function insertTableWithDialog() {
  const rows = promptNumber(str('promptRows'), 3, 2, 20);
  if (rows === null) return;
  const cols = promptNumber(str('promptCols'), 3, 1, 12);
  if (cols === null) return;

  if (state.editor && typeof state.editor.commands.insertTable === 'function') {
    state.editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
    return;
  }

  const markdownTable = buildMarkdownTable(rows, cols);
  if (state.editor) {
    state.editor.commands.insertContent(markdownTable, { contentType: 'markdown' });
    return;
  }
  if (state.fallbackRichEditor) {
    let html = '<table><thead><tr>';
    for (let c = 0; c < cols; c += 1) html += `<th>H${c + 1}</th>`;
    html += '</tr></thead><tbody>';
    for (let r = 1; r < rows; r += 1) {
      html += '<tr>';
      for (let c = 0; c < cols; c += 1) html += '<td></td>';
      html += '</tr>';
    }
    html += '</tbody></table><p></p>';
    fallbackInsertHtml(html);
  }
}

function runAppAction(action) {
  if (action === 'enableEditing') return unlockPageEditing();

  const allowedWhenLocked = new Set(['printPage', 'exportMarkdown']);
  if (!state.editUnlocked && !allowedWhenLocked.has(action)) {
    setStatus(str('statusReadOnly'));
    return;
  }

  if (action === 'newPage') {
    const title = window.prompt(str('promptPageTitle'), str('promptPageDefault'));
    if (!title) return;
    const folderInput = window.prompt(str('promptFolder'), dirname(state.pages[state.activeSlug]?.filePath || ''));
    createPage(title, null, folderInput || '');
    return;
  }
  if (action === 'renamePage') return renameCurrentPage();
  if (action === 'deletePage') return deleteCurrentPage();
  if (action === 'editMarkdown') return openMarkdownModal();
  if (action === 'importMarkdown') {
    dom.importFileInput.value = '';
    dom.importFileInput.click();
    return;
  }
  if (action === 'exportMarkdown') return exportCurrentPage();
  if (action === 'printPage') return printCurrentPage();
  if (action === 'savePage') return saveActivePage();
  if (action === 'insertCodeBlock') return insertCodeBlockByLanguage();
  if (action === 'insertTable') return insertTableWithDialog();
}

function updateToolbarState() {
  const allButtons = dom.toolbar.querySelectorAll('button');
  const canEditSurface = Boolean(state.editor || state.fallbackRichEditor);

  for (const button of allButtons) {
    button.classList.remove('is-active');
    const action = button.dataset.action;
    const cmd = button.dataset.cmd;

    if (!canEditSurface) {
      button.disabled = action !== 'enableEditing';
      continue;
    }

    if (!state.editUnlocked) {
      button.disabled = !['enableEditing', 'printPage', 'exportMarkdown'].includes(action);
      continue;
    }

    if (action === 'enableEditing') {
      button.disabled = true;
      continue;
    }

    button.disabled = false;
    if (!state.editor || !cmd) continue;

    let active = false;
    if (cmd === 'h1') active = state.editor.isActive('heading', { level: 1 });
    if (cmd === 'h2') active = state.editor.isActive('heading', { level: 2 });
    if (cmd === 'bold') active = state.editor.isActive('bold');
    if (cmd === 'italic') active = state.editor.isActive('italic');
    if (cmd === 'strike') active = state.editor.isActive('strike');
    if (cmd === 'code') active = state.editor.isActive('code');
    if (cmd === 'bulletList') active = state.editor.isActive('bulletList');
    if (cmd === 'orderedList') active = state.editor.isActive('orderedList');
    if (cmd === 'blockquote') active = state.editor.isActive('blockquote');
    if (cmd === 'codeBlock') active = state.editor.isActive('codeBlock');

    button.classList.toggle('is-active', active);
    if (cmd === 'undo') button.disabled = !state.editor.can().undo();
    if (cmd === 'redo') button.disabled = !state.editor.can().redo();
  }
}

function runFormatCommand(cmd) {
  if (!ensureEditMode()) return;

  if (!state.editor && state.fallbackRichEditor) {
    focusFallbackEditor();
    if (cmd === 'h1') document.execCommand('formatBlock', false, 'h1');
    if (cmd === 'h2') document.execCommand('formatBlock', false, 'h2');
    if (cmd === 'bold') document.execCommand('bold');
    if (cmd === 'italic') document.execCommand('italic');
    if (cmd === 'strike') document.execCommand('strikeThrough');
    if (cmd === 'code') document.execCommand('insertHTML', false, '<code>code</code>');
    if (cmd === 'bulletList') document.execCommand('insertUnorderedList');
    if (cmd === 'orderedList') document.execCommand('insertOrderedList');
    if (cmd === 'blockquote') document.execCommand('formatBlock', false, 'blockquote');
    if (cmd === 'hr') document.execCommand('insertHorizontalRule');
    if (cmd === 'undo') document.execCommand('undo');
    if (cmd === 'redo') document.execCommand('redo');
    const page = state.pages[state.activeSlug];
    if (page) {
      page.markdown = editorMarkdown();
      markUnsavedChanges();
      setStatus(str('statusChangedPage', { title: page.title }));
    }
    updateToolbarState();
    renderToc();
    return;
  }

  if (!state.editor) {
    setStatus(str('statusNeedEditor'));
    return;
  }

  const chain = state.editor.chain().focus();

  if (cmd === 'h1') chain.toggleHeading({ level: 1 }).run();
  if (cmd === 'h2') chain.toggleHeading({ level: 2 }).run();
  if (cmd === 'bold') chain.toggleBold().run();
  if (cmd === 'italic') chain.toggleItalic().run();
  if (cmd === 'strike') chain.toggleStrike().run();
  if (cmd === 'code') chain.toggleCode().run();
  if (cmd === 'bulletList') chain.toggleBulletList().run();
  if (cmd === 'orderedList') chain.toggleOrderedList().run();
  if (cmd === 'blockquote') chain.toggleBlockquote().run();
  if (cmd === 'codeBlock') chain.toggleCodeBlock().run();
  if (cmd === 'hr') chain.setHorizontalRule().run();
  if (cmd === 'undo') state.editor.chain().focus().undo().run();
  if (cmd === 'redo') state.editor.chain().focus().redo().run();

  updateToolbarState();
}

function installToolbarHandlers() {
  dom.toolbar.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    if (button.dataset.action) {
      runAppAction(button.dataset.action);
      return;
    }

    if (button.dataset.cmd) {
      runFormatCommand(button.dataset.cmd);
    }
  });
}

function installSettingsHandlers() {
  const writeSettingsFromInputs = (event) => {
    const source = event?.target || null;
    state.settings.themeMode = dom.themeModeInput.value === 'dark' ? 'dark' : 'light';
    state.settings.paletteTarget = dom.paletteTargetInput.value === 'dark' ? 'dark' : 'light';
    state.settings.autoSaveEnabled = Boolean(dom.autoSaveEnabledInput.checked);
    state.settings.autoSaveMinutes = Math.max(0.25, Math.min(30, Number(dom.autoSaveMinutesInput.value) || 2));

    if (source === dom.paletteTargetInput) {
      syncSettingsInputs();
      applySettings();
      applyLanguage();
      saveSettings();
      restartAutoSave();
      return;
    }

    const editPalette = getPalette(state.settings.paletteTarget);

    state.settings.appTitle = dom.appTitleInput.value;
    state.settings.appSubtitle = dom.appSubtitleInput.value;
    editPalette.bg = dom.bgColorInput.value;
    editPalette.muted = dom.mutedColorInput.value;
    editPalette.border = dom.borderColorInput.value;
    editPalette.controlBg = dom.controlBgInput.value;
    editPalette.controlText = dom.controlTextInput.value;
    editPalette.bgMode = dom.bgModeInput.value === 'solid' ? 'solid' : 'gradient';
    editPalette.bg2 = dom.bgColor2Input.value;
    editPalette.panel = dom.panelColorInput.value;
    editPalette.text = dom.textColorInput.value;
    editPalette.accent = dom.accentColorInput.value;
    editPalette.editorBg = dom.editorBgInput.value;
    editPalette.codeBg = dom.codeBgInput.value;
    editPalette.codePlain = dom.codePlainInput.value;
    editPalette.codeKw = dom.codeKwInput.value;
    editPalette.codeType = dom.codeTypeInput.value;
    editPalette.codeVar = dom.codeVarInput.value;
    editPalette.codeFn = dom.codeFnInput.value;
    editPalette.codeStr = dom.codeStrInput.value;
    editPalette.codeNum = dom.codeNumInput.value;
    editPalette.codeCom = dom.codeComInput.value;
    editPalette.codeOp = dom.codeOpInput.value;
    state.settings.fontFamily = dom.fontFamilyInput.value.trim() || DEFAULT_SETTINGS.fontFamily;
    state.settings.fontSize = Number(dom.fontSizeInput.value);
    state.settings.uiScale = Number(dom.uiScaleInput.value);

    dom.fontSizeLabel.textContent = String(state.settings.fontSize);
    dom.uiScaleLabel.textContent = String(state.settings.uiScale);
    dom.bgColor2Wrap.style.display = editPalette.bgMode === 'gradient' ? '' : 'none';

    applySettings();
    applyLanguage();
    applyBranding();
    saveSettings();
    restartAutoSave();
  };

  [
    dom.appTitleInput,
    dom.appSubtitleInput,
    dom.themeModeInput,
    dom.paletteTargetInput,
    dom.autoSaveEnabledInput,
    dom.autoSaveMinutesInput,
    dom.bgColorInput,
    dom.mutedColorInput,
    dom.borderColorInput,
    dom.controlBgInput,
    dom.controlTextInput,
    dom.bgModeInput,
    dom.bgColor2Input,
    dom.panelColorInput,
    dom.textColorInput,
    dom.accentColorInput,
    dom.editorBgInput,
    dom.codeBgInput,
    dom.codePlainInput,
    dom.codeKwInput,
    dom.codeTypeInput,
    dom.codeVarInput,
    dom.codeFnInput,
    dom.codeStrInput,
    dom.codeNumInput,
    dom.codeComInput,
    dom.codeOpInput,
    dom.fontFamilyInput,
    dom.fontSizeInput,
    dom.uiScaleInput
  ].forEach((input) => {
    input.addEventListener('input', writeSettingsFromInputs);
    input.addEventListener('change', writeSettingsFromInputs);
  });

  dom.resetSettingsBtn.addEventListener('click', () => {
    state.settings = makeDefaultSettings();
    applySettings();
    syncSettingsInputs();
    applyLanguage();
    applyBranding();
    saveSettings();
    restartAutoSave();
    setStatus(str('statusSettingsReset'));
  });
}

function installUIHandlers() {
  dom.tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => switchView(btn.dataset.viewTarget));
  });

  dom.langSwitchBtn.addEventListener('click', () => {
    const order = state.languageOrder.length > 0 ? state.languageOrder : ['de', 'en'];
    const currentIdx = Math.max(0, order.indexOf(state.language));
    const nextIdx = (currentIdx + 1) % order.length;
    state.language = order[nextIdx];
    saveLanguage();
    applyLanguage();
  });

  dom.themeToggleBtn.addEventListener('click', () => {
    state.settings.themeMode = state.settings.themeMode === 'dark' ? 'light' : 'dark';
    dom.themeModeInput.value = state.settings.themeMode;
    applySettings();
    applyLanguage();
    saveSettings();
    setStatus(
      str('statusThemeSwitched', {
        mode: state.settings.themeMode === 'dark' ? str('themeDark') : str('themeLight')
      })
    );
  });

  dom.sidebarToggleBtn.addEventListener('click', () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    applySidebarState();
    saveSidebarCollapsed();
  });

  dom.tocToggleBtn.addEventListener('click', () => {
    state.tocCollapsed = !state.tocCollapsed;
    applyTocState();
    saveTocCollapsed();
  });

  dom.importFileInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    importMarkdownFile(file);
  });

  window.addEventListener('beforeunload', () => {
    if (!state.hasUnsavedChanges) return;
    savePages();
    state.hasUnsavedChanges = false;
  });
}

function installMarkdownModalHandlers() {
  dom.mdCancelBtn.addEventListener('click', closeMarkdownModal);
  dom.mdApplyBtn.addEventListener('click', () => {
    setPageMarkdown(dom.markdownTextarea.value, true);
    closeMarkdownModal();
  });

  dom.markdownModal.addEventListener('click', (event) => {
    if (event.target === dom.markdownModal) closeMarkdownModal();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !dom.markdownModal.hidden) {
      closeMarkdownModal();
    }
  });
}

async function createEditor() {
  try {
    const core = await import('https://esm.sh/@tiptap/core?bundle');
    const starterKitModule = await import('https://esm.sh/@tiptap/starter-kit?bundle');
    const codeBlockModule = await import('https://esm.sh/@tiptap/extension-code-block?bundle');
    const tableModule = await import('https://esm.sh/@tiptap/extension-table?bundle');
    const markdownModule = await import('https://esm.sh/@tiptap/markdown?bundle');

    const Editor = core.Editor;
    const StarterKit = starterKitModule.default || starterKitModule.StarterKit;
    const CodeBlock = codeBlockModule.default || codeBlockModule.CodeBlock;
    const TableKit = tableModule.TableKit || tableModule.default;
    const Markdown = markdownModule.Markdown || markdownModule.default;

    if (!Editor || !StarterKit || !Markdown || !CodeBlock || !TableKit) {
      throw new Error('Editor modules not available.');
    }

    const initialPage = state.activeSlug ? state.pages[state.activeSlug] : null;
    const initialMarkdown = initialPage?.markdown || '# Ready\n';

    state.editor = new Editor({
      element: dom.editorHost,
      contentAsMarkdown: true,
      extensions: [
        StarterKit.configure({
          heading: { levels: [1, 2, 3, 4] },
          codeBlock: false
        }),
        CodeBlock.configure({
          languageClassPrefix: 'language-',
          defaultLanguage: 'text'
        }),
        TableKit.configure({
          table: {
            HTMLAttributes: { class: 'editor-table' }
          }
        }),
        Markdown.configure({
          markedOptions: {
            gfm: true,
            breaks: false
          }
        })
      ],
      content: initialMarkdown,
      contentType: 'markdown',
      autofocus: false,
      onUpdate: () => {
        const page = state.pages[state.activeSlug];
        if (!page) return;
        page.markdown = editorMarkdown();
        markUnsavedChanges();
        setStatus(str('statusChangedPage', { title: page.title }));
        updateToolbarState();
        renderToc();
      },
      onSelectionUpdate: () => updateToolbarState(),
      onFocus: () => updateToolbarState()
    });

    return true;
  } catch (error) {
    console.error(error);
    createFallbackEditor();
    return false;
  }
}

function createFallbackEditor() {
  const editor = document.createElement('div');
  editor.id = 'fallbackRichEditor';
  editor.contentEditable = 'false';
  editor.spellcheck = true;
  editor.style.minHeight = '56vh';
  editor.style.outline = 'none';
  editor.style.padding = '0.6rem';
  editor.style.lineHeight = '1.5';

  dom.editorHost.innerHTML = '';
  dom.editorHost.appendChild(editor);
  state.fallbackRichEditor = editor;

  editor.addEventListener('input', () => {
    if (!state.editUnlocked) return;
    const page = state.pages[state.activeSlug];
    if (!page) return;
    page.markdown = fallbackHtmlToMarkdown(editor);
    markUnsavedChanges();
    setStatus(str('statusChangedPage', { title: page.title }));
    renderToc();
  });

  editor.addEventListener('keyup', (event) => {
    if (!state.editUnlocked) return;
    if (event.key === ' ') {
      applyFallbackMarkdownShortcut(editor);
      bindCodeWidgets(editor);
      const page = state.pages[state.activeSlug];
      if (!page) return;
      page.markdown = fallbackHtmlToMarkdown(editor);
      markUnsavedChanges();
      setStatus(str('statusChangedPage', { title: page.title }));
      renderToc();
    }
  });
}

async function initData() {
  state.settings = loadSettings();
  const savedLanguage = loadLanguage();
  const i18nResult = await loadLanguageResources();
  state.language = savedLanguage;
  if (!I18N[state.language]) {
    state.language = state.languageOrder.includes('de') ? 'de' : state.languageOrder[0] || 'de';
  }
  state.folderOpen = loadFolderOpen();
  state.sidebarCollapsed = loadSidebarCollapsed();
  state.tocCollapsed = loadTocCollapsed();

  applySettings();
  syncSettingsInputs();
  applyLanguage();
  if (i18nResult.hadFailure) {
    setStatus(str('statusI18nLoadFail'));
  }

  const bundled = (await loadBundledPages()) || {};
  const localPages = loadLocalPages() || {};
  const mergedPages = mergePagesByFilePath(bundled, localPages);
  state.pages = Object.keys(mergedPages).length > 0 ? mergedPages : { ...FALLBACK_PAGES };

  const savedSlug = localStorage.getItem(STORAGE_KEYS.activeSlug);
  if (savedSlug && state.pages[savedSlug]) {
    state.activeSlug = savedSlug;
  } else {
    state.activeSlug = Object.keys(state.pages)[0] || null;
  }
}

async function start() {
  installUIHandlers();
  installToolbarHandlers();
  installSettingsHandlers();
  installMarkdownModalHandlers();

  await initData();
  applySidebarState();
  applyTocState();
  renderPageTree();
  restartAutoSave();

  let editorOk = false;
  const isFileProtocol = window.location.protocol === 'file:';
  if (isFileProtocol) {
    createFallbackEditor();
    setStatus(str('statusOfflineEditor'));
  } else {
    setStatus(str('statusLoadingEditor'));
    editorOk = await createEditor();
  }
  loadActivePageIntoEditor();
  updateToolbarState();
  renderToc();

  if (editorOk) {
    setStatus(str('statusEditorReady'));
  } else if (!isFileProtocol) {
    setStatus(str('statusEditorFail'));
  }

  const activePage = state.pages[state.activeSlug];
  if (activePage) {
    setStatus(`${str('statusLoadedPage', { title: activePage.title })} · ${str('statusReadOnly')}`);
  }
}

start().catch((error) => {
  console.error(error);
  setStatus('Fatal startup error.');
});
