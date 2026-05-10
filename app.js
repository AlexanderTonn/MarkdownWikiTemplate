const STORAGE_KEYS = {
  pages: 'mwiki.pages.v2',
  legacyPages: 'mwiki.pages.v1',
  activeSlug: 'mwiki.activeSlug.v2',
  settings: 'mwiki.settings.v1',
  language: 'mwiki.language.v1',
  folderOpen: 'mwiki.folderOpen.v1',
  sidebarCollapsed: 'mwiki.sidebarCollapsed.v1'
};

const DEFAULT_SETTINGS = {
  appTitle: '',
  appSubtitle: '',
  bg: '#f4f4f0',
  bg2: '#fdf6e3',
  bgMode: 'gradient',
  panel: '#ffffff',
  text: '#1f2328',
  accent: '#0f766e',
  editorBg: '#fffdf8',
  fontFamily: 'Georgia, Times New Roman, serif',
  fontSize: 17,
  uiScale: 100
};

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

const I18N = {
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
    setBg: 'Hintergrund',
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
    promptPageTitle: 'Seitentitel:',
    promptPageDefault: 'Neue Seite',
    promptFolder: 'Ordner (optional, z.B. docs/api):',
    promptRename: 'Neuer Seitentitel:',
    confirmDelete: 'Seite wirklich loeschen?\n\n{title}'
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
    setBg: 'Background',
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
    promptPageTitle: 'Page title:',
    promptPageDefault: 'New Page',
    promptFolder: 'Folder (optional, e.g. docs/api):',
    promptRename: 'New page title:',
    confirmDelete: 'Delete this page?\n\n{title}'
  }
};

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
  sidebarToggleBtn: document.querySelector('#sidebarToggleBtn'),
  appTitleInput: document.querySelector('#appTitleInput'),
  appSubtitleInput: document.querySelector('#appSubtitleInput'),
  bgColorInput: document.querySelector('#bgColorInput'),
  bgModeInput: document.querySelector('#bgModeInput'),
  bgColor2Input: document.querySelector('#bgColor2Input'),
  bgColor2Wrap: document.querySelector('#bgColor2Wrap'),
  panelColorInput: document.querySelector('#panelColorInput'),
  textColorInput: document.querySelector('#textColorInput'),
  accentColorInput: document.querySelector('#accentColorInput'),
  editorBgInput: document.querySelector('#editorBgInput'),
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
  codeLangSelect: document.querySelector('#codeLangSelect'),
  wikiView: document.querySelector('.view-wiki')
};

const state = {
  pages: {},
  activeSlug: null,
  settings: { ...DEFAULT_SETTINGS },
  language: 'de',
  folderOpen: {},
  sidebarCollapsed: false,
  editor: null,
  fallbackRichEditor: null
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
  try {
    const manifestRes = await fetch('./pages/manifest.json', { cache: 'no-store' });
    if (!manifestRes.ok) return null;
    const manifest = await manifestRes.json();
    if (!Array.isArray(manifest)) return null;

    const entries = await Promise.all(
      manifest.map(async (item) => {
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

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.settings);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (error) {
    console.error(error);
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(state.settings));
}

function loadLanguage() {
  const lang = localStorage.getItem(STORAGE_KEYS.language);
  return lang === 'en' ? 'en' : 'de';
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

function applySettings() {
  const root = document.documentElement;
  root.style.setProperty('--bg', state.settings.bg);
  root.style.setProperty('--bg2', state.settings.bg2);
  root.style.setProperty('--panel', state.settings.panel);
  root.style.setProperty('--text', state.settings.text);
  root.style.setProperty('--accent', state.settings.accent);
  root.style.setProperty('--editor-bg', state.settings.editorBg);
  root.style.setProperty('--font-family', state.settings.fontFamily);
  root.style.setProperty('--font-size-base', `${state.settings.fontSize}px`);
  root.style.setProperty('--ui-scale', String(state.settings.uiScale / 100));

  const bodyBg =
    state.settings.bgMode === 'solid'
      ? state.settings.bg
      : `linear-gradient(135deg, ${state.settings.bg} 0%, ${state.settings.bg2} 100%)`;
  root.style.setProperty('--body-bg', bodyBg);
}

function syncSettingsInputs() {
  dom.appTitleInput.value = state.settings.appTitle;
  dom.appSubtitleInput.value = state.settings.appSubtitle;
  dom.bgColorInput.value = state.settings.bg;
  dom.bgModeInput.value = state.settings.bgMode;
  dom.bgColor2Input.value = state.settings.bg2;
  dom.panelColorInput.value = state.settings.panel;
  dom.textColorInput.value = state.settings.text;
  dom.accentColorInput.value = state.settings.accent;
  dom.editorBgInput.value = state.settings.editorBg;
  dom.fontFamilyInput.value = state.settings.fontFamily;
  dom.fontSizeInput.value = String(state.settings.fontSize);
  dom.fontSizeLabel.textContent = String(state.settings.fontSize);
  dom.uiScaleInput.value = String(state.settings.uiScale);
  dom.uiScaleLabel.textContent = String(state.settings.uiScale);
  dom.bgColor2Wrap.style.display = state.settings.bgMode === 'gradient' ? '' : 'none';
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

  dom.langSwitchBtn.textContent = state.language === 'de' ? '🇩🇪' : '🇺🇸';
  dom.langSwitchBtn.title = state.language === 'de' ? 'Sprache wechseln' : 'Switch language';
  dom.sidebarToggleBtn.title = state.sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
  applyBranding();

  if (state.activeSlug && state.pages[state.activeSlug]) {
    setStatus(str('statusLoadedPage', { title: state.pages[state.activeSlug].title }));
  }
}

function applySidebarState() {
  dom.wikiView.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
  dom.sidebarToggleBtn.textContent = state.sidebarCollapsed ? '⟩' : '⟨';
  dom.sidebarToggleBtn.title = state.sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
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

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
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
        const langClass = codeLang ? ` class="language-${escapeHtml(codeLang)}"` : '';
        html.push(`<pre><code${langClass}>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
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
    const langClass = codeLang ? ` class="language-${escapeHtml(codeLang)}"` : '';
    html.push(`<pre><code${langClass}>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
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
  const page = state.pages[state.activeSlug];
  if (!page) return;

  page.markdown = markdown;

  if (state.editor) {
    setEditorContentFromMarkdown(markdown, false);
  }

  if (state.fallbackRichEditor) {
    state.fallbackRichEditor.innerHTML = markdownToHtml(markdown);
  }

  if (emitStatus) {
    setStatus(str('statusChangedPage', { title: page.title }));
  }
}

function loadActivePageIntoEditor() {
  const page = state.pages[state.activeSlug];
  if (!page) return;

  if (state.editor) {
    setEditorContentFromMarkdown(page.markdown, false);
  }

  if (state.fallbackRichEditor) {
    state.fallbackRichEditor.innerHTML = markdownToHtml(page.markdown);
  }

  updateToolbarState();
  setStatus(str('statusLoadedPage', { title: page.title }));
}

function saveActivePage() {
  const page = state.pages[state.activeSlug];
  if (!page) return;

  page.markdown = editorMarkdown();
  savePages();
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
  if (!focusFallbackEditor()) return;
  document.execCommand('insertHTML', false, html);
}

function fallbackInsertText(text) {
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
    document.execCommand('insertHTML', false, `<pre><code class="language-${escapeHtml(lang)}"></code></pre><p></p>`);
  }
}

function insertCodeBlockByLanguage() {
  const language = dom.codeLangSelect.value || 'text';
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
    const codeHtml = `<pre><code class=\"language-${escapeHtml(language)}\"></code></pre><p></p>`;
    fallbackInsertHtml(codeHtml);
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
  const rows = promptNumber(state.language === 'de' ? 'Anzahl Zeilen:' : 'Number of rows:', 3, 2, 20);
  if (rows === null) return;
  const cols = promptNumber(state.language === 'de' ? 'Anzahl Spalten:' : 'Number of columns:', 3, 1, 12);
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
  if (action === 'savePage') return saveActivePage();
  if (action === 'insertCodeBlock') return insertCodeBlockByLanguage();
  if (action === 'insertTable') return insertTableWithDialog();
}

function updateToolbarState() {
  const buttons = dom.toolbar.querySelectorAll('button[data-cmd]');
  for (const button of buttons) {
    const cmd = button.dataset.cmd;

    if (!state.editor) {
      button.disabled = !state.fallbackRichEditor;
      button.classList.remove('is-active');
      continue;
    }

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
    button.disabled = false;

    if (cmd === 'undo') button.disabled = !state.editor.can().undo();
    if (cmd === 'redo') button.disabled = !state.editor.can().redo();
  }
}

function runFormatCommand(cmd) {
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
      setStatus(str('statusChangedPage', { title: page.title }));
    }
    updateToolbarState();
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
  const writeSettingsFromInputs = () => {
    state.settings.appTitle = dom.appTitleInput.value;
    state.settings.appSubtitle = dom.appSubtitleInput.value;
    state.settings.bg = dom.bgColorInput.value;
    state.settings.bgMode = dom.bgModeInput.value === 'solid' ? 'solid' : 'gradient';
    state.settings.bg2 = dom.bgColor2Input.value;
    state.settings.panel = dom.panelColorInput.value;
    state.settings.text = dom.textColorInput.value;
    state.settings.accent = dom.accentColorInput.value;
    state.settings.editorBg = dom.editorBgInput.value;
    state.settings.fontFamily = dom.fontFamilyInput.value.trim() || DEFAULT_SETTINGS.fontFamily;
    state.settings.fontSize = Number(dom.fontSizeInput.value);
    state.settings.uiScale = Number(dom.uiScaleInput.value);

    dom.fontSizeLabel.textContent = String(state.settings.fontSize);
    dom.uiScaleLabel.textContent = String(state.settings.uiScale);
    dom.bgColor2Wrap.style.display = state.settings.bgMode === 'gradient' ? '' : 'none';

    applySettings();
    applyBranding();
    saveSettings();
  };

  [
    dom.appTitleInput,
    dom.appSubtitleInput,
    dom.bgColorInput,
    dom.bgModeInput,
    dom.bgColor2Input,
    dom.panelColorInput,
    dom.textColorInput,
    dom.accentColorInput,
    dom.editorBgInput,
    dom.fontFamilyInput,
    dom.fontSizeInput,
    dom.uiScaleInput
  ].forEach((input) => {
    input.addEventListener('input', writeSettingsFromInputs);
    input.addEventListener('change', writeSettingsFromInputs);
  });

  dom.resetSettingsBtn.addEventListener('click', () => {
    state.settings = { ...DEFAULT_SETTINGS };
    applySettings();
    syncSettingsInputs();
    applyBranding();
    saveSettings();
    setStatus(str('statusSettingsReset'));
  });
}

function installUIHandlers() {
  dom.tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => switchView(btn.dataset.viewTarget));
  });

  dom.langSwitchBtn.addEventListener('click', () => {
    state.language = state.language === 'de' ? 'en' : 'de';
    saveLanguage();
    applyLanguage();
  });

  dom.sidebarToggleBtn.addEventListener('click', () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    applySidebarState();
    saveSidebarCollapsed();
  });

  dom.importFileInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    importMarkdownFile(file);
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
        setStatus(str('statusChangedPage', { title: page.title }));
        updateToolbarState();
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
  editor.contentEditable = 'true';
  editor.spellcheck = true;
  editor.style.minHeight = '56vh';
  editor.style.outline = 'none';
  editor.style.padding = '0.6rem';
  editor.style.lineHeight = '1.5';

  dom.editorHost.innerHTML = '';
  dom.editorHost.appendChild(editor);
  state.fallbackRichEditor = editor;

  editor.addEventListener('input', () => {
    const page = state.pages[state.activeSlug];
    if (!page) return;
    page.markdown = fallbackHtmlToMarkdown(editor);
    setStatus(str('statusChangedPage', { title: page.title }));
  });

  editor.addEventListener('keyup', (event) => {
    if (event.key === ' ') {
      applyFallbackMarkdownShortcut(editor);
      const page = state.pages[state.activeSlug];
      if (!page) return;
      page.markdown = fallbackHtmlToMarkdown(editor);
      setStatus(str('statusChangedPage', { title: page.title }));
    }
  });
}

async function initData() {
  state.settings = loadSettings();
  state.language = loadLanguage();
  state.folderOpen = loadFolderOpen();
  state.sidebarCollapsed = loadSidebarCollapsed();

  applySettings();
  syncSettingsInputs();
  applyLanguage();

  const localPages = loadLocalPages();
  if (localPages && Object.keys(localPages).length > 0) {
    state.pages = localPages;
  } else {
    const bundled = await loadBundledPages();
    state.pages = bundled || { ...FALLBACK_PAGES };
  }

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
  renderPageTree();

  setStatus(str('statusLoadingEditor'));
  const editorOk = await createEditor();
  loadActivePageIntoEditor();
  updateToolbarState();

  if (editorOk) {
    setStatus(str('statusEditorReady'));
  } else {
    setStatus(str('statusEditorFail'));
  }
}

start().catch((error) => {
  console.error(error);
  setStatus('Fatal startup error.');
});
