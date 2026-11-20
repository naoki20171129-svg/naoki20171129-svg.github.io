// 日本語 / English の切り替え。
// - 最初に開いたときは、ブラウザの言語が日本語なら日本語、それ以外は英語。
// - ボタンで選んだ言語はブラウザに覚えておき、次に開いたときもその言語で表示する。
(function () {
  var KEY = "pf-lang";
  function saved() {
    try {
      return window.localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }
  function initial() {
    var s = saved();
    if (s === "ja" || s === "en") return s;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return nav.toLowerCase().indexOf("ja") === 0 ? "ja" : "en";
  }
  function apply(lang) {
    var root = document.documentElement;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-set-lang") === lang ? "true" : "false");
    }
  }
  apply(initial());
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest ? ev.target.closest("[data-set-lang]") : null;
    if (!b) return;
    var lang = b.getAttribute("data-set-lang");
    try {
      window.localStorage.setItem(KEY, lang);
    } catch (e) {}
    apply(lang);
  });
  document.addEventListener("DOMContentLoaded", function () {
    apply(document.documentElement.getAttribute("data-lang") || initial());
  });
})();
