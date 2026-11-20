---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<link rel="stylesheet" href="{{ '/assets/portfolio/portfolio.css' | relative_url }}">
<script src="{{ '/assets/portfolio/lang.js' | relative_url }}"></script>

<div class="pf-lang">
  <div class="pf-lang-group" role="group" aria-label="Language">
    <button type="button" data-set-lang="ja" aria-pressed="true">日本語</button>
    <button type="button" data-set-lang="en" aria-pressed="false">English</button>
  </div>
</div>

<p class="ja">論文・プレプリントの一覧です（新しい順）。</p>
<p class="en">Papers and preprints, newest first.</p>

<div class="publications">

{% bibliography %}

</div>
