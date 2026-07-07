(function () {
  'use strict';

  /** Replace ⭐️ N/10 with a colored badge in h2, h3, and li elements */
  function processScoreBadges() {
    var scoreRe = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var m = el.innerHTML.match(scoreRe);
      if (!m) return;
      var score = parseFloat(m[1]);
      var tier;
      if (score >= 9) tier = 'high';
      else if (score >= 7) tier = 'good';
      else if (score >= 5) tier = 'mid';
      else tier = 'low';
      el.innerHTML = el.innerHTML.replace(
        scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + m[1] + '</span>'
      );
    });
  }

  /** Add semantic classes to tag lines, source lines, and background paragraphs */
  function markSemanticElements() {
    var paragraphs = document.querySelectorAll('.main-content p');
    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();

      // Tag line: starts with Tags or 标签 (bold prefix rendered by Markdown)
      if (/^(Tags|标签)\s*:/.test(text)) {
        p.classList.add('tag-line');
        return;
      }

      // Source line: pattern like "source · site · date"
      if (/^(rss|reddit|github|hackernews|hn|telegram)\s*·/i.test(text)) {
        p.classList.add('source-line');
        return;
      }
    });
  }

  /** Set up EN/中文 language toggle as a page-level control */
  function setupLanguageToggle() {
    // Create toggle buttons
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';

    var btnEn = document.createElement('button');
    btnEn.textContent = 'EN';
    btnEn.type = 'button';

    var btnZh = document.createElement('button');
    btnZh.textContent = '中文';
    btnZh.type = 'button';

    toggle.appendChild(btnEn);
    toggle.appendChild(btnZh);

    // Insert at top of body
    document.body.insertBefore(toggle, document.body.firstChild);

    // Read saved preference, default to zh
    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) { /* noop */ }
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) {
      if (lang === 'en') {
        btnEn.classList.add('active');
        btnZh.classList.remove('active');
      } else {
        btnZh.classList.add('active');
        btnEn.classList.remove('active');
      }
    }

    // Index page: toggle lang-section visibility
    var zhSection = document.getElementById('lang-zh');
    var enSection = document.getElementById('lang-en');

    function showSection(lang) {
      if (!zhSection || !enSection) return;
      if (lang === 'en') {
        enSection.classList.remove('hidden');
        zhSection.classList.add('hidden');
      } else {
        zhSection.classList.remove('hidden');
        enSection.classList.add('hidden');
      }
    }

    // Article page: redirect to the other language version
    function switchArticleLang(lang) {
      var path = window.location.pathname;
      var target = null;
      if (lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-zh(\.html)?$/, '-en$1').replace(/-zh\/$/, '-en/');
      } else if (lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-en(\.html)?$/, '-zh$1').replace(/-en\/$/, '-zh/');
      }
      if (target) window.location.href = target;
    }

    function setLang(lang) {
      currentLang = lang;
      updateButtons(lang);
      try { localStorage.setItem('horizon-lang', lang); } catch (e) { /* noop */ }
      if (zhSection && enSection) {
        showSection(lang);
      } else {
        switchArticleLang(lang);
      }
    }

    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });

    // Initialize
    updateButtons(currentLang);
    if (zhSection && enSection) {
      showSection(currentLang);
    }
  }


  function siteBasePath() {
    var base = document.querySelector('meta[name="horizon-baseurl"]');
    return base ? base.getAttribute('content') || '' : '';
  }

  function digestUrl(path) {
    var base = siteBasePath().replace(/\/$/, '');
    var cleanPath = String(path || '').replace(/^\//, '');
    return base ? base + '/' + cleanPath : cleanPath;
  }

  function formatGeneratedAt(value, lang) {
    if (!value) return lang === 'zh' ? '未知时间' : 'unknown time';
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function setupLiveDigest() {
    var panels = document.querySelectorAll('[data-live-digest]');
    if (!panels.length) return;

    function renderPanel(panel, data) {
      var lang = panel.getAttribute('data-lang') || 'zh';
      var status = panel.querySelector('[data-live-status]');
      var meta = panel.querySelector('[data-live-meta]');
      var link = panel.querySelector('[data-live-link]');
      var list = panel.querySelector('[data-live-items]');
      var summary = data.summaries && data.summaries[lang];
      var generated = formatGeneratedAt(data.generated_at, lang);
      var items = Array.isArray(data.items) ? data.items : [];

      if (status) {
        status.textContent = lang === 'zh'
          ? '已连接最新日报数据'
          : 'Latest digest data is connected';
      }
      if (meta) {
        meta.hidden = false;
        meta.textContent = lang === 'zh'
          ? data.date + ' · 抓取 ' + data.total_fetched + ' 条 · 入选 ' + data.important_count + ' 条 · 更新于 ' + generated
          : data.date + ' · fetched ' + data.total_fetched + ' · selected ' + data.important_count + ' · updated ' + generated;
      }
      if (link) {
        if (summary && summary.url) {
          link.hidden = false;
          link.href = digestUrl(summary.url);
        } else {
          link.hidden = true;
          link.removeAttribute('href');
        }
      }
      if (!list) return;
      list.innerHTML = '';
      items.slice(0, 8).forEach(function (item) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var title = item['title_' + lang] || item.title || item.url;
        a.href = item.url;
        a.textContent = title;
        li.appendChild(a);
        if (item.score !== null && item.score !== undefined) {
          var score = document.createElement('span');
          score.className = 'daily-live__score';
          score.textContent = Number(item.score).toFixed(1);
          li.appendChild(score);
        }
        list.appendChild(li);
      });
    }

    function setError(messageZh, messageEn) {
      panels.forEach(function (panel) {
        var lang = panel.getAttribute('data-lang') || 'zh';
        var status = panel.querySelector('[data-live-status]');
        if (status) status.textContent = lang === 'zh' ? messageZh : messageEn;
      });
    }

    async function refresh() {
      try {
        var response = await fetch(digestUrl('latest.json'), { cache: 'no-store' });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        var data = await response.json();
        panels.forEach(function (panel) { renderPanel(panel, data); });
      } catch (err) {
        setError('暂时无法读取最新日报，请稍后刷新。', 'Could not load the latest digest yet.');
      }
    }

    panels.forEach(function (panel) {
      var button = panel.querySelector('[data-live-refresh]');
      if (button) button.addEventListener('click', refresh);
    });

    refresh();
    window.setInterval(refresh, 60000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    processScoreBadges();
    markSemanticElements();
    setupLanguageToggle();
    setupLiveDigest();
  });
})();
