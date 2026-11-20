---
layout: about
title: about
permalink: /
subtitle: <span class="ja">八木原 直樹 ｜ 大阪公立大学大学院 情報学研究科 岩村研究室 博士後期課程 1 年</span><span class="en">Ph.D. student (1st year), Iwamura Laboratory, Graduate School of Informatics, Osaka Metropolitan University, Japan</span>

profile: false
selected_papers: false # 業績は「publications」のページに載せる
social: true # ページの下に GitHub などのアイコンを出す

announcements:
  enabled: false
latest_posts:
  enabled: false
---

<link rel="stylesheet" href="{{ '/assets/portfolio/portfolio.css' | relative_url }}">
<script src="{{ '/assets/portfolio/lang.js' | relative_url }}"></script>

<div class="pf-lang">
  <div class="pf-lang-group" role="group" aria-label="Language">
    <button type="button" data-set-lang="ja" aria-pressed="true">日本語</button>
    <button type="button" data-set-lang="en" aria-pressed="false">English</button>
  </div>
</div>

<!-- ============================================================ -->
<!-- 0. ひとことで -->
<!-- ============================================================ -->
<p class="pf-lead ja">
  <strong>植物を、細胞ひとつずつ、3 次元で測る。</strong><br>
  種子全体・全細胞を含む放射光 X 線 µCT 画像から、深層学習で細胞を 1 つずつ切り分け、器官や組織ごとに細胞の形を比べられるようにする研究をしています。
</p>
<p class="pf-lead en">
  <strong>Measuring plants cell by cell, in 3D.</strong><br>
  I develop deep-learning methods that separate every individual cell in synchrotron X-ray micro-CT images covering a whole seed and all of its cells, so that cell shapes can be compared across organs and tissues.
</p>

<!-- ============================================================ -->
<!-- 1. どのような研究を行っているか -->
<!-- ============================================================ -->
<section class="pf-section" id="research">
  <h2><span class="pf-num">1</span><span class="ja">どんな研究をしているか</span><span class="en">What I do</span></h2>

  <div class="pf-steps">
    <div class="pf-step">
      <img src="{{ '/assets/img/illust/step1_seed.svg' | relative_url }}" alt="seed">
      <div class="pf-step-title"><span class="ja">種子</span><span class="en">Seed</span></div>
      <div class="pf-step-text"><span class="ja">シロイヌナズナの種子。小さな 1 粒に、1個体の全器官・細胞がそろっている。</span><span class="en">An <i>Arabidopsis</i> seed. One tiny grain contains all the organs and cells of an individual plant.</span></div>
    </div>
    <div class="pf-step">
      <img src="{{ '/assets/img/illust/step2_xray.svg' | relative_url }}" alt="X-ray micro-CT">
      <div class="pf-step-title"><span class="ja">放射光 X 線 µCT</span><span class="en">Synchrotron X-ray µCT</span></div>
      <div class="pf-step-text"><span class="ja">種子を切らずに・染めずに、内部を丸ごと撮影。</span><span class="en">The seed is imaged inside, in its entirety, without cutting or staining.</span></div>
    </div>
    <div class="pf-step">
      <img src="{{ '/assets/img/illust/step3_volume.svg' | relative_url }}" alt="3D volume">
      <div class="pf-step-title"><span class="ja">3D 画像</span><span class="en">3D volume</span></div>
      <div class="pf-step-text"><span class="ja">細胞が見分けられる、0.2 µm の超高解像度の立体画像。</span><span class="en">An ultra-high-resolution 3D image (0.2 µm per voxel), fine enough to distinguish individual cells.</span></div>
    </div>
    <div class="pf-step">
      <img src="{{ '/assets/img/illust/step4_ai.svg' | relative_url }}" alt="deep learning">
      <div class="pf-step-title"><span class="ja">深層学習</span><span class="en">Deep learning</span></div>
      <div class="pf-step-text"><span class="ja">ぎっしり詰まった細胞を、1 つずつ自動で切り分ける。</span><span class="en">Densely packed cells are separated one by one, automatically.</span></div>
    </div>
    <div class="pf-step">
      <img src="{{ '/assets/img/illust/step5_cells.svg' | relative_url }}" alt="cell-level analysis">
      <div class="pf-step-title"><span class="ja">細胞ごとの解析</span><span class="en">Cell-level analysis</span></div>
      <div class="pf-step-text"><span class="ja">器官ごとに、細胞の数・形を比べる。さらに、変異体種子の解析も行い遺伝子のはたらきを研究。</span><span class="en">Cell number and shape are compared across organs. Mutant seeds are also analysed to study how genes work.</span></div>
    </div>
  </div>

  <p class="ja">
    植物の形は、器官 → 組織 → 細胞と階層的にできています。器官の形の違いが、どの細胞のどんな違いから生まれるのかを知るには、細胞を 1 つずつ 3 次元で測る必要があります。種子は小さく、全細胞を一度にそのままµCT 撮影できます。この種子を対象に、µCT 画像から全細胞を自動で切り分ける技術をつくっています。
  </p>
  <p class="en">
    Plants are built hierarchically, from organs to tissues to cells. To understand which differences between cells give rise to differences in organ shape, every cell has to be measured individually in 3D. Seeds are small, so all of their cells can be imaged at once by micro-CT, as they are. Using seeds, I am building technology that automatically separates every cell in micro-CT images.
  </p>
</section>

<!-- ============================================================ -->
<!-- 2. 経歴（生物学から情報学へ） -->
<!-- ============================================================ -->
<section class="pf-section" id="background">
  <h2><span class="pf-num">2</span><span class="ja">生物学から、情報学へ</span><span class="en">From biology to informatics</span></h2>

  <img class="pf-bridge" src="{{ '/assets/img/illust/bridge.svg' | relative_url }}" alt="bridging plant biology and informatics">

  <p class="ja">
    修士課程までは生物学の研究室で、コケ植物を X 線 µCT で撮影し、その形を 3 次元で解析し、重力影響を解析してきました。器官の形は測れるようになりましたが、その形が<strong>どのように生まれるのか</strong>を知るには、細胞単位の解析が欠かせません。ところが、µCT 画像の細胞を自動で切り分けた研究はほとんどありませんでした。そこで、植物の知識を持ったまま情報学の研究科に進み、植物と情報学の技術を橋渡しする研究に取り組んでいます。
  </p>
  <p class="en">
    Through my master's degree I worked in a biology laboratory, imaging mosses with X-ray micro-CT, analysing their shape in 3D and studying the effects of gravity. I could measure the shape of organs, but understanding <strong>how</strong> that shape arises requires cell-level analysis, and almost no study had automatically separated cells in micro-CT images. So I moved, with my plant-biology background, to a graduate school of informatics, where I work on bridging plant science and informatics.
  </p>

  <ul class="pf-timeline">
    <li>
      <div class="pf-when"><span class="ja">修士課程</span><span class="en">Master's course</span></div>
      <div class="pf-what"><span class="ja">富山大学大学院（唐原研究室）</span><span class="en">Graduate School, University of Toyama (Karahara Laboratory)</span></div>
      <div class="pf-detail">
        <span class="ja">3D の深層学習を取り入れて仮根のセグメンテーションを高精度にし、微小重力が仮根の 3 次元の形に与える影響を調べました。微小重力では仮根の伸長が抑えられ、伸びる向きが水平方向へずれていました。重力は仮根の形づくりを決める要因の 1 つだとわかりました。</span>
        <span class="en">I introduced 3D deep learning to segment the rhizoids more accurately and studied how microgravity affects their 3D morphology. Under microgravity, rhizoid elongation was suppressed and the growth direction shifted towards the horizontal. This showed that gravity is one of the factors that shape rhizoids.</span>
      </div>
    </li>
    <li>
      <div class="pf-when"><span class="ja">博士後期課程（現在）</span><span class="en">Ph.D. course (current)</span></div>
      <div class="pf-what"><span class="ja">大阪公立大学大学院 情報学研究科（岩村研究室）</span><span class="en">Graduate School of Informatics, Osaka Metropolitan University (Iwamura Laboratory)</span></div>
      <div class="pf-detail">
        <span class="ja">種子の µCT 画像で、細胞を 1 つずつ 3 次元に切り分ける研究をしています（下の 3〜5）。</span>
        <span class="en">I study 3D cell-by-cell segmentation of seed micro-CT images (sections 3–5 below).</span>
      </div>
    </li>
  </ul>

  <div class="pf-hflow" aria-label="Master's research: moss grown in space">
    <div class="pf-hstep">
      <img src="{{ '/assets/img/illust/moss_launch.svg' | relative_url }}" alt="moss launched to the space station">
      <div class="pf-hcap"><span class="ja">コケを宇宙へ打ち上げ、国際宇宙ステーションで育てる</span><span class="en">Moss is launched into space and grown on the International Space Station</span></div>
    </div>
    <div class="pf-harrow" aria-hidden="true">→</div>
    <div class="pf-hstep">
      <img src="{{ '/assets/img/illust/step2_xray.svg' | relative_url }}" alt="X-ray micro-CT">
      <div class="pf-hcap"><span class="ja">地上に持ち帰り、放射光 X 線 µCT で撮影</span><span class="en">Brought back to Earth and imaged with synchrotron X-ray micro-CT</span></div>
    </div>
    <div class="pf-harrow" aria-hidden="true">→</div>
    <div class="pf-hstep">
      <img src="{{ '/assets/img/illust/moss_analysis.svg' | relative_url }}" alt="segmentation and shape analysis">
      <div class="pf-hcap"><span class="ja">深層学習で画像から仮根を自動で取り出し（セグメンテーション）、長さや伸びる向きを測る</span><span class="en">Rhizoids are extracted from the images automatically with deep learning (segmentation), and their length and growth direction are measured</span></div>
    </div>
    <div class="pf-harrow" aria-hidden="true">→</div>
    <div class="pf-hresult">
      <figure>
        <img src="{{ '/assets/img/research/rhizoid_ground.png' | relative_url }}" alt="3D model of rhizoids grown on the ground" loading="lazy">
        <figcaption><span class="ja">地上で育てたコケ</span><span class="en">Grown on the ground</span></figcaption>
      </figure>
      <figure>
        <img src="{{ '/assets/img/research/rhizoid_space.png' | relative_url }}" alt="3D model of rhizoids grown in microgravity" loading="lazy">
        <figcaption><span class="ja">宇宙（ほぼ無重力）で育てたコケ</span><span class="en">Grown in space (near-weightlessness)</span></figcaption>
      </figure>
      <p class="pf-note pf-hnote">
        <span class="ja">深層学習で取り出した仮根の 3D モデル。宇宙で育てたものは、下へまっすぐ伸びる仮根が少ない。</span>
        <span class="en">3D models of the rhizoids extracted with deep learning. Those grown in space have fewer rhizoids growing straight down.</span>
      </p>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- 3. 植物学で求められている情報学技術 -->
<!-- ============================================================ -->
<section class="pf-section" id="needs">
  <h2><span class="pf-num">3</span><span class="ja">植物学が情報学に求めているもの</span><span class="en">What plant science needs from informatics</span></h2>

  <p class="ja">
    植物の µCT 画像は、医療用の CT とは大きく違います。小さな細胞がすき間なく詰まり、ノイズが多く、細胞と細胞の境界もはっきりしません。公開された µCT データや µCT 画像で学習済みのモデルもほとんどないです。そのため今は、植物の研究者が画像の中の細胞を 1 つずつ手でなぞって AI の「お手本」を大量に作り、自分の画像でしか使えない AI をそのつど育てています。試料や撮り方が変わると、お手本づくりからやり直しです。植物の分野では、次のような技術が求められています。
  </p>
  <p class="en">
    Plant micro-CT images are very different from medical CT. Small cells are packed without gaps, the images are noisy, and the boundaries between cells are unclear. There are almost no public micro-CT datasets or models trained on micro-CT images. So today, plant researchers trace the cells in their images one by one by hand to make a large set of “examples” for an AI, and each time they train an AI that works only on their own images. When the sample or the imaging method changes, they have to start over from making the examples. Plant science needs technologies such as the following.
  </p>

  <div class="pf-cards">
    <div class="pf-card">
      <img src="{{ '/assets/img/illust/need_3d.svg' | relative_url }}" alt="cell-level 3D measurement">
      <h3><span class="ja">細胞単位の 3D 計測</span><span class="en">Cell-resolved 3D measurement</span></h3>
      <p><span class="ja">形の違いがどの細胞から生まれるかを知るため、全細胞を 3D で 1 つずつ測る。</span><span class="en">Measure every cell individually in 3D, to find out which cells produce a difference in shape.</span></p>
    </div>
    <div class="pf-card">
      <img src="{{ '/assets/img/illust/need_label.svg' | relative_url }}" alt="learning from few annotations">
      <h3><span class="ja">少ない正解からの学習</span><span class="en">Learning from few annotations</span></h3>
      <p><span class="ja">3D の正解づくりには、植物の知識と膨大な時間が要る。少ない注釈で学べる方法や、注釈を手伝う仕組み。</span><span class="en">Making 3D ground truth takes plant expertise and a great deal of time. Methods that learn from a few annotations, and tools that assist annotation.</span></p>
    </div>
    <div class="pf-card">
      <img src="{{ '/assets/img/illust/need_tool.svg' | relative_url }}" alt="tools for plant scientists">
      <h3><span class="ja">植物学者が使える道具</span><span class="en">Tools plant scientists can use</span></h3>
      <p><span class="ja">プログラミングに詳しくなくても、自分の試料にそのまま使えるモデルと解析の流れ。</span><span class="en">Models and analysis pipelines that work on one's own samples without deep programming skills.</span></p>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- 4. 課題 -->
<!-- ============================================================ -->
<section class="pf-section" id="challenges">
  <h2><span class="pf-num">4</span><span class="ja">乗り越えるべき課題</span><span class="en">The challenges</span></h2>

  <p class="ja">種子 µCT の全細胞を自動で切り分けるには、次の 3 つの壁があります。</p>
  <p class="en">Automatically separating every cell in seed micro-CT images faces three obstacles.</p>

  <div class="pf-cards">
    <div class="pf-card">
      <img src="{{ '/assets/img/illust/chal_domain.svg' | relative_url }}" alt="models trained on microscopy fail on micro-CT">
      <h3><span class="ja">顕微鏡で学んだ AI が通用しない</span><span class="en">Microscopy-trained models do not transfer</span></h3>
      <p><span class="ja">既存の細胞セグメンテーションのモデルは、顕微鏡の画像で学習されている。µCT ではそのままでは細胞を分けられず、細胞の中の貯蔵物質を細胞と取り違えてしまう。</span><span class="en">Existing cell-segmentation models are trained on microscopy images. On micro-CT they fail to separate cells as they are, and mistake storage granules inside a cell for cells.</span></p>
    </div>
    <div class="pf-card">
      <img src="{{ '/assets/img/illust/chal_data.svg' | relative_url }}" alt="no public micro-CT cell dataset">
      <h3><span class="ja">µCT の細胞データがない</span><span class="en">No micro-CT cell dataset</span></h3>
      <p><span class="ja">学習や評価に使える µCT の細胞データセットが公開されておらず、モデルがどこまで使えるのかを測る手段がなかった。</span><span class="en">No micro-CT cell dataset was publicly available for training or evaluation, so there was no way to measure how far existing models can go.</span></p>
    </div>
    <div class="pf-card">
      <img src="{{ '/assets/img/illust/chal_boundary.svg' | relative_url }}" alt="ambiguous cell boundaries">
      <h3><span class="ja">境界があいまい</span><span class="en">Ambiguous boundaries</span></h3>
      <p><span class="ja">細胞壁が線としてはっきり写らないため、人どうしでも境界の引き方がずれる。正解そのものがあいまいで、「正しさ」を測ることも難しい。</span><span class="en">Cell walls do not appear as clear lines, so even two people draw boundaries slightly differently. The ground truth itself is ambiguous, which makes "accuracy" hard to measure.</span></p>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- 5. 今の進み具合 -->
<!-- ============================================================ -->
<section class="pf-section" id="progress">
  <h2><span class="pf-num">5</span><span class="ja">ここまでの進み具合</span><span class="en">Where I am now</span></h2>

  <div class="pf-cells">
    <figure>
      <img src="{{ '/assets/img/research/seed_slice.jpg' | relative_url }}" alt="micro-CT cross-section of an Arabidopsis seed" loading="lazy">
      <figcaption><span class="ja">種子の µCT 断面（赤枠を拡大）</span><span class="en">Micro-CT slice of a seed (red box enlarged)</span></figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/research/cells_ct.png' | relative_url }}" alt="enlarged micro-CT image" loading="lazy">
      <figcaption><span class="ja">拡大した µCT 画像</span><span class="en">Enlarged micro-CT image</span></figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/research/cells_annotation.png' | relative_url }}" alt="manual annotation" loading="lazy">
      <figcaption><span class="ja">手で作った正解（細胞ごとに色分け）</span><span class="en">Manual annotation (one colour per cell)</span></figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/research/cells_prediction.png' | relative_url }}" alt="model prediction" loading="lazy">
      <figcaption><span class="ja">学習したモデルの予測（対応する正解と同じ色）</span><span class="en">Prediction of the trained model (same colour as the matching cell)</span></figcaption>
    </figure>
  </div>

  <ul class="pf-progress">
    <li>
      <span class="pf-chip done"><span class="ja">済</span><span class="en">Done</span></span>
      <div>
        <div class="pf-p-title"><span class="ja">コケの仮根で、器官の形の変化をとらえる（修士）</span><span class="en">Capture changes in organ shape in moss rhizoids (master's)</span></div>
        <div class="pf-p-text"><span class="ja">修士課程では、深層学習で µCT 画像から仮根を取り出し、宇宙のほぼ無重力の環境で仮根の伸び方や向きが変わることをとらえました。ただし、器官全体の形を測るだけでは、どこの細胞がどのように変わったのかまではわかりません。これが、細胞を 1 つずつ測る今の研究につながりました。</span><span class="en">In my master's course I extracted rhizoids from micro-CT images with deep learning and showed that their elongation and growth direction change in near-weightlessness in space. Measuring the shape of the whole organ, however, could not reveal where and how the cells had changed. This led to my current research, which measures cells one by one.</span></div>
      </div>
    </li>
    <li>
      <span class="pf-chip done"><span class="ja">済</span><span class="en">Done</span></span>
      <div>
        <div class="pf-p-title"><span class="ja">種子 µCT の 3D 細胞データセットをつくる</span><span class="en">Build a 3D cell dataset of seed micro-CT</span></div>
        <div class="pf-p-text"><span class="ja">3 粒の種子から、胚のいろいろな器官を含む領域を選び、細胞 1 つずつに 3D の正解ラベルを付けました。2 人目の注釈も用意し、人どうしのずれを測れるようにしました。</span><span class="en">From three seeds I selected regions covering different organs of the embryo and labelled every cell in 3D. A second annotator also labelled part of the data, so that disagreement between people can be measured.</span></div>
      </div>
    </li>
    <li>
      <span class="pf-chip done"><span class="ja">済</span><span class="en">Done</span></span>
      <div>
        <div class="pf-p-title"><span class="ja">既存のモデルが µCT 画像でどこまで使えるかを測る</span><span class="en">Measure how far existing models go on micro-CT images</span></div>
        <div class="pf-p-text"><span class="ja">種子 µCT 画像で追加学習したモデルは、正解との境界のずれが人どうしのずれの範囲に収まるほど、細胞を正確に分けられました。一方、顕微鏡の画像だけで学習したモデルは、 µCT 画像で追加学習なしではほとんど分けられませんでした。</span><span class="en">A model fine-tuned on seed micro-CT images separated cells accurately: its boundary deviation from the ground truth was within the range of disagreement between two people. Models trained only on microscopy images could hardly separate the cells in micro-CT images without additional training.</span></div>
      </div>
    </li>
    <li>
      <span class="pf-chip now"><span class="ja">進行中</span><span class="en">Now</span></span>
      <div>
        <div class="pf-p-title"><span class="ja">正解なしで新しいデータに合わせる</span><span class="en">Adapt without ground truth</span></div>
        <div class="pf-p-text"><span class="ja">新しい試料や撮影条件のたびに正解をつくらなくても、モデルを合わせられる方法を研究しています。</span><span class="en">I am working on ways to adapt models to new samples and imaging conditions without creating new ground truth each time.</span></div>
      </div>
    </li>
    <li>
      <span class="pf-chip next"><span class="ja">これから</span><span class="en">Next</span></span>
      <div>
        <div class="pf-p-title"><span class="ja">データセットの公開と、種子全体の解析</span><span class="en">Release the dataset and analyse whole seeds</span></div>
        <div class="pf-p-text"><span class="ja">データセットをベンチマークとして公開し、種子全体の細胞を器官・組織ごとに比べる植物学的な解析へ進みます。</span><span class="en">I plan to release the dataset as a benchmark and move on to plant-biological analysis that compares cells across organs and tissues in whole seeds.</span></div>
      </div>
    </li>
  </ul>
</section>

<!-- ============================================================ -->
<!-- 6. プロフィール -->
<!-- ============================================================ -->
<section class="pf-section" id="profile">
  <h2><span class="pf-num">6</span><span class="ja">プロフィール</span><span class="en">Profile</span></h2>
  <dl class="pf-profile">
    <dt><span class="ja">名前</span><span class="en">Name</span></dt>
    <dd><span class="ja">八木原 直樹（やぎはら なおき）</span><span class="en">Naoki Yagihara</span></dd>

    <dt><span class="ja">所属</span><span class="en">Affiliation</span></dt>
    <dd><span class="ja">大阪公立大学大学院 情報学研究科 岩村研究室 博士後期課程 1 年</span><span class="en">First-year Ph.D. student, Iwamura Laboratory, Graduate School of Informatics, Osaka Metropolitan University, Japan</span></dd>

    <dt><span class="ja">経歴</span><span class="en">Education</span></dt>
    <dd>
      <span class="ja">富山大学 生物学科・富山大学大学院 修士課程（唐原研究室）→ 大阪公立大学大学院 情報学研究科 博士後期課程（岩村研究室）</span>
      <span class="en">B.Sc. (Department of Biology) and M.Sc., University of Toyama (Karahara Laboratory) → Ph.D. course, Graduate School of Informatics, Osaka Metropolitan University (Iwamura Laboratory)</span>
    </dd>

    <dt><span class="ja">キーワード</span><span class="en">Keywords</span></dt>
    <dd class="pf-tags">
      <span class="ja">植物の 3D 形態</span><span class="en">3D plant morphology</span>
      <span class="ja">放射光 X 線 µCT</span><span class="en">Synchrotron X-ray µCT</span>
      <span class="ja">細胞インスタンスセグメンテーション</span><span class="en">Cell instance segmentation</span>
      <span class="ja">深層学習</span><span class="en">Deep learning</span>
      <span class="ja">ドメイン適応</span><span class="en">Domain adaptation</span>
    </dd>

  </dl>
</section>
