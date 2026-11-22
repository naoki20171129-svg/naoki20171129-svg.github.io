// デモの動画の再生位置に合わせて、横の手順を光らせ、動画の上のラベル（野生型・変異体）を出す。手順を押すと、その場面へ飛ぶ。
// 動きを減らす設定（prefers-reduced-motion）の人には自動再生せず、再生ボタンを出す。
(function () {
  function init() {
    var v = document.querySelector(".pf-demo video");
    if (!v) return;
    var items = Array.prototype.slice.call(document.querySelectorAll(".pf-demo-steps li"));
    var timed = items.concat(Array.prototype.slice.call(document.querySelectorAll(".pf-demo-lab")));
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.removeAttribute("autoplay");
      v.pause();
      v.controls = true;
    }
    function update() {
      var t = v.currentTime;
      timed.forEach(function (li) {
        var a = +li.getAttribute("data-t0"),
          b = +li.getAttribute("data-t1");
        li.classList.toggle("on", t >= a && t < b);
      });
      if (!v.paused) window.requestAnimationFrame(update);
    }
    v.addEventListener("play", update);
    v.addEventListener("seeked", update);
    items.forEach(function (li) {
      li.addEventListener("click", function () {
        v.currentTime = +li.getAttribute("data-t0") + 0.01;
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      });
    });
    update();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
