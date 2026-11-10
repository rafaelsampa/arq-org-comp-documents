(function () {
  const PAGES = [
    { href: "index.html", num: "", name: "Início", desc: "Lista de todos os materiais" },
    { href: "mips-do-zero.html", num: "01", name: "MIPS do Zero ao 10", desc: "Registradores, formatos, C para MIPS, pilha" },
    { href: "caminho-de-dados.html", num: "02", name: "Caminho de Dados MIPS", desc: "Circuitos, sinais de controle, simulador e animação" },
    { href: "manual-mono-multi.html", num: "03", name: "Manual Mono + Multi", desc: "Conteúdo extra: monociclo, multiciclo, FSM e autoteste" }
  ];
  const KEY = "kbnav-open";
  const DESKTOP = window.matchMedia("(min-width: 1100px)");
  const ICON_MENU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
  const ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>';

  const css = `
:root{--kbn-bg:#fbfcfd;--kbn-ink:#18202e;--kbn-muted:#5d6878;--kbn-line:#d6dce4;--kbn-accent:#2b49c9;--kbn-hover:#eef1f6;--kbn-cur:#e4e9fb;--kbn-w:290px}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--kbn-bg:#141a23;--kbn-ink:#e6eaf0;--kbn-muted:#98a3b3;--kbn-line:#2a3340;--kbn-accent:#9aabff;--kbn-hover:#1d2531;--kbn-cur:#222f57}}
:root[data-theme="dark"]{--kbn-bg:#141a23;--kbn-ink:#e6eaf0;--kbn-muted:#98a3b3;--kbn-line:#2a3340;--kbn-accent:#9aabff;--kbn-hover:#1d2531;--kbn-cur:#222f57}
.kbn-iconbtn{width:38px;height:38px;border-radius:10px;border:1px solid var(--kbn-line);background:var(--kbn-bg);color:var(--kbn-ink);display:grid;place-items:center;cursor:pointer;padding:0}
.kbn-iconbtn svg{width:20px;height:20px}
.kbn-iconbtn:hover{background:var(--kbn-hover)}
#kbn-btn{position:fixed;top:calc(10px + env(safe-area-inset-top,0px));left:10px;z-index:1000;box-shadow:0 1px 3px rgba(0,0,0,.14)}
#kbn-panel{position:fixed;top:0;left:0;bottom:0;width:var(--kbn-w);max-width:86vw;z-index:1001;background:var(--kbn-bg);color:var(--kbn-ink);border-right:1px solid var(--kbn-line);display:flex;flex-direction:column;font:14px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif;transform:translateX(-102%);visibility:hidden;transition:transform .2s ease,visibility 0s linear .2s}
html.kbn-open #kbn-panel{transform:none;visibility:visible;transition:transform .2s ease,visibility 0s}
#kbn-back{position:fixed;inset:0;z-index:999;background:rgba(10,14,20,.45);opacity:0;pointer-events:none;transition:opacity .2s}
html.kbn-open #kbn-back{opacity:1;pointer-events:auto}
.kbn-head{display:flex;align-items:center;gap:8px;padding:calc(12px + env(safe-area-inset-top,0px)) 12px 12px 16px;border-bottom:1px solid var(--kbn-line)}
.kbn-sub{font-size:10.5px;color:var(--kbn-muted);letter-spacing:.1em;text-transform:uppercase}
.kbn-title{font-weight:700;font-size:15px;line-height:1.25}
#kbn-close{margin-left:auto;flex:none;width:34px;height:34px}
.kbn-body{overflow-y:auto;padding:6px 10px 16px;flex:1}
.kbn-h{font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--kbn-muted);margin:16px 10px 6px}
#kbn-panel a{display:block;padding:8px 10px;border-radius:8px;color:var(--kbn-ink);text-decoration:none}
#kbn-panel a:hover{background:var(--kbn-hover)}
#kbn-panel a[aria-current="page"]{background:var(--kbn-cur);color:var(--kbn-accent);font-weight:600}
.kbn-n{font:600 11px ui-monospace,Consolas,monospace;color:var(--kbn-muted);margin-right:8px}
.kbn-desc{display:block;font-size:12px;color:var(--kbn-muted);font-weight:400;margin-top:1px}
#kbn-panel .kbn-sec a{padding:5px 10px;font-size:13px;color:var(--kbn-muted)}
#kbn-panel .kbn-sec a:hover{color:var(--kbn-ink)}
.kbn-foot{border-top:1px solid var(--kbn-line);padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));font-size:11.5px;color:var(--kbn-muted)}
#kbn-btn:focus-visible,#kbn-close:focus-visible,#kbn-panel a:focus-visible{outline:2px solid var(--kbn-accent);outline-offset:2px}
@media (min-width:1100px){
  body{transition:margin-left .2s ease}
  html.kbn-open body{margin-left:var(--kbn-w)}
  html.kbn-open #kbn-back{display:none}
  html.kbn-open #kbn-btn{visibility:hidden}
}
@media (prefers-reduced-motion:reduce){#kbn-panel,#kbn-back,body{transition:none!important}}
html.kbn-instant #kbn-panel,html.kbn-instant body{transition:none!important}
@media (min-width:961px){nav.toc{padding-top:62px!important}}
@media (max-width:960px){nav.toc{padding-left:58px!important}}
@media (min-width:901px){.side{padding-top:62px!important}}
@media (max-width:900px){.topbar{padding-left:60px!important}.topbar #menuBtn{display:none!important}}
.page>header.top{padding-left:50px}
`;

  function el(tag, attrs, html) {
    const n = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) n.setAttribute(k, attrs[k]);
    }
    if (html !== undefined) n.innerHTML = html;
    return n;
  }

  function currentFile() {
    let f = location.pathname.split("/").pop();
    if (!f) f = "index.html";
    return decodeURIComponent(f);
  }

  function save(open) {
    try {
      if (open) localStorage.setItem(KEY, "1");
      else localStorage.setItem(KEY, "0");
    } catch (e) {}
  }

  function saved() {
    try {
      return localStorage.getItem(KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  const style = el("style");
  style.textContent = css;
  document.head.appendChild(style);

  const btn = el("button", { id: "kbn-btn", class: "kbn-iconbtn", type: "button", "aria-label": "Abrir menu de materiais", "aria-expanded": "false", "aria-controls": "kbn-panel" }, ICON_MENU);
  const back = el("div", { id: "kbn-back", "aria-hidden": "true" });
  const panel = el("aside", { id: "kbn-panel", "aria-label": "Materiais de estudo" });

  const head = el("div", { class: "kbn-head" });
  head.appendChild(el("div", null, '<div class="kbn-sub">Arquitetura · UNICAP</div><div class="kbn-title">O que estudar</div>'));
  const close = el("button", { id: "kbn-close", class: "kbn-iconbtn", type: "button", "aria-label": "Minimizar menu" }, ICON_CLOSE);
  head.appendChild(close);

  const body = el("div", { class: "kbn-body" });
  body.appendChild(el("div", { class: "kbn-h" }, "Materiais"));
  const here = currentFile();
  PAGES.forEach(p => {
    const a = el("a", { href: p.href });
    let num = "";
    if (p.num) num = '<span class="kbn-n">' + p.num + "</span>";
    a.innerHTML = num + p.name + '<span class="kbn-desc">' + p.desc + "</span>";
    if (p.href === here) a.setAttribute("aria-current", "page");
    body.appendChild(a);
  });
  const secTitle = el("div", { class: "kbn-h" }, "Nesta página");
  const secList = el("div", { class: "kbn-sec" });
  body.appendChild(secTitle);
  body.appendChild(secList);

  const foot = el("div", { class: "kbn-foot" }, "Pode conter erros. Baseado em provas antigas, no Patterson (2ª ed.), nos slides e nos materiais da disciplina.");

  panel.appendChild(head);
  panel.appendChild(body);
  panel.appendChild(foot);
  document.body.appendChild(back);
  document.body.appendChild(panel);
  document.body.appendChild(btn);

  function visible(n) {
    return n.getClientRects().length > 0;
  }

  function buildSections() {
    secList.innerHTML = "";
    let i = 0;
    document.querySelectorAll("h2").forEach(h => {
      if (panel.contains(h) || h.closest("dialog") || h.closest("nav") || !visible(h)) return;
      let text = (h.innerText || h.textContent).replace(/\s+/g, " ").trim();
      text = text.replace(/^\d+\s*/, "");
      if (!text) return;
      let target = h;
      const sec = h.closest("section[id]");
      if (sec && sec.querySelectorAll("h2").length === 1) target = sec;
      i += 1;
      const a = el("a", { href: "#" + (target.id || "") }, "");
      a.textContent = text;
      a.addEventListener("click", e => {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (!DESKTOP.matches) setOpen(false);
      });
      secList.appendChild(a);
    });
    if (i === 0) {
      secTitle.style.display = "none";
    } else {
      secTitle.style.display = "";
    }
  }

  function setOpen(open) {
    if (open) {
      buildSections();
      document.documentElement.classList.add("kbn-open");
      btn.setAttribute("aria-expanded", "true");
      close.focus({ preventScroll: true });
    } else {
      document.documentElement.classList.remove("kbn-open");
      btn.setAttribute("aria-expanded", "false");
    }
    if (DESKTOP.matches) save(open);
  }

  btn.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => { setOpen(false); btn.focus({ preventScroll: true }); });
  back.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && document.documentElement.classList.contains("kbn-open")) {
      setOpen(false);
      btn.focus({ preventScroll: true });
    }
  });

  if (DESKTOP.matches && saved()) {
    document.documentElement.classList.add("kbn-instant");
    buildSections();
    document.documentElement.classList.add("kbn-open");
    btn.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.remove("kbn-instant")));
  }
})();
