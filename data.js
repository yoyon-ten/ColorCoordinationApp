// ============================================================
// 問題データ
// ============================================================
// 問題を追加するには、対象の級の配列に以下の形式でオブジェクトを追加してください：
// {
//   id: 番号,
//   category: "カテゴリ名",
//   question: "問題文",
//   choices: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
//   answer: 正解のインデックス（0〜3）,
//   explanation: "解説文"
// }

const quizData = {
  "3級": [
    { id:1, category:"色の三属性", question:"色の三属性に含まれないものはどれか？", choices:["色相","明度","彩度","濃度"], answer:3, explanation:"色の三属性は「色相（Hue）」「明度（Value/Lightness）」「彩度（Chroma/Saturation）」の3つです。「濃度」は色の三属性には含まれません。" },
    { id:2, category:"色の三属性", question:"明度が最も高い色はどれか？", choices:["白","黄","赤","青"], answer:0, explanation:"明度とは色の明るさの度合いです。無彩色では白が最も明度が高く、黒が最も明度が低くなります。" },
    { id:3, category:"色の三属性", question:"純色とは何か？", choices:["白が混ざった色","黒が混ざった色","各色相で最も彩度が高い色","明度が最も高い色"], answer:2, explanation:"純色とは、各色相において最も彩度が高い色（最も鮮やかな色）のことです。" },
    { id:4, category:"PCCS", question:"PCCSのトーン分類で「vivid（ビビッド）」はどのような印象の色か？", choices:["くすんだ","鮮やかな","暗い","淡い"], answer:1, explanation:"vividトーンは最も彩度が高く、鮮やかで力強い印象を与えるトーンです。" },
    { id:5, category:"PCCS", question:"PCCSの色相環は何色相で構成されているか？", choices:["12色相","20色相","24色相","36色相"], answer:2, explanation:"PCCS（日本色研配色体系）の色相環は24色相で構成されています。" },
    { id:6, category:"色彩心理", question:"暖色に分類される色はどれか？", choices:["青","緑","赤","紫"], answer:2, explanation:"暖色は赤・橙・黄など暖かさを感じさせる色です。青は寒色、緑と紫は中性色に分類されます。" },
    { id:7, category:"色彩心理", question:"膨張色とは一般にどのような色か？", choices:["明度が高い色","明度が低い色","彩度が低い色","寒色系の色"], answer:0, explanation:"膨張色は明度が高い色（明るい色）で、実際より大きく見える効果があります。逆に明度が低い色は収縮色です。" },
    { id:8, category:"光と色", question:"光の三原色の組み合わせとして正しいものはどれか？", choices:["赤・青・黄","赤・緑・青","赤・緑・黄","黄・緑・青"], answer:1, explanation:"光の三原色はR（赤）・G（緑）・B（青）です。色料の三原色（C・M・Y）と混同しないよう注意しましょう。" },
    { id:9, category:"光と色", question:"光の三原色をすべて等量で混ぜると何色になるか？", choices:["黒","白","灰色","黄"], answer:1, explanation:"光の三原色（加法混色）をすべて等量で混ぜると白になります。色料の三原色（減法混色）の場合は理論上黒になります。" },
    { id:10, category:"配色", question:"補色とはどのような関係の色か？", choices:["隣り合う色相の色","色相環で正反対に位置する色","同じ色相で明度が異なる色","同じトーンの色"], answer:1, explanation:"補色とは色相環上で正反対（180度の位置）にある色同士の関係です。並べると互いを引き立て合う効果があります。" },
    { id:11, category:"配色", question:"ドミナントカラー配色の説明として正しいものはどれか？", choices:["同じトーンでまとめた配色","同じ色相でまとめた配色","補色を使った配色","無彩色だけの配色"], answer:1, explanation:"ドミナントカラー配色は、同一または類似の色相でまとめることで統一感を出す配色技法です。ドミナントトーンは同じトーンでまとめる配色です。" },
    { id:12, category:"色彩心理", question:"色の誘目性が最も高いのはどれか？", choices:["赤","青","緑","紫"], answer:0, explanation:"誘目性（注意を引く力）は一般に暖色系で高く、特に赤が最も誘目性が高い色とされています。" },
  ],

  "2級": [
    { id:1, category:"マンセル表色系", question:"マンセル表色系の色相は何色相に分けられるか？", choices:["10色相","20色相","40色相","100色相"], answer:3, explanation:"マンセル表色系では、5つの基本色相（R, Y, G, B, P）と5つの中間色相を、さらに各10段階に分け、合計100色相で表します。" },
    { id:2, category:"マンセル表色系", question:"マンセル表色系で「5R 4/14」の「4」は何を表すか？", choices:["色相","明度","彩度","トーン"], answer:1, explanation:"マンセルの表記法は「色相 明度/彩度」の順です。5R 4/14 は色相5R、明度4、彩度14を意味します。" },
    { id:3, category:"マンセル表色系", question:"マンセル表色系で明度の範囲はどれか？", choices:["0〜10","0〜100","1〜9","1〜14"], answer:0, explanation:"マンセルの明度（バリュー）は理想的な黒を0、理想的な白を10とした11段階で表されます。" },
    { id:4, category:"色彩調和", question:"ジャッドの色彩調和論で挙げられている原理でないものはどれか？", choices:["秩序の原理","なじみの原理","対比の原理","類似の原理"], answer:3, explanation:"ジャッドの色彩調和の4つの原理は「秩序」「なじみ」「類似性（共通性）」「明瞭性（対比）」です。「類似の原理」という名称の原理はありません。" },
    { id:5, category:"光と色", question:"分光反射率曲線が平坦な物体はどのように見えるか？", choices:["赤く見える","無彩色に見える","青く見える","透明に見える"], answer:1, explanation:"分光反射率曲線がすべての波長域で均一（平坦）な場合、特定の色味を持たず無彩色（白・灰・黒）に見えます。" },
    { id:6, category:"光と色", question:"メタメリズム（条件等色）とは何か？", choices:["同じ光源下で常に同じ色に見えること","異なる光源下で同じ色に見えたり異なる色に見えたりすること","分光分布が同じ色のこと","補色の組み合わせのこと"], answer:1, explanation:"メタメリズムとは、分光分布が異なる2色がある光源下では同じ色に見えるが、別の光源下では異なる色に見える現象です。" },
    { id:7, category:"色の見え", question:"色の面積効果の説明として正しいものはどれか？", choices:["面積が大きいほど暗く見える","面積が大きいほど明るく鮮やかに見える","面積は色の見えに影響しない","面積が小さいほど鮮やかに見える"], answer:1, explanation:"色の面積効果とは、同じ色でも面積が大きくなると明度・彩度ともに高く（明るく鮮やかに）感じられる現象です。" },
    { id:8, category:"色の見え", question:"ハレーションとは何か？", choices:["明度差が大きい配色でちらつく現象","彩度の高い色同士が境界でちらつく現象","補色同士で色が暗く見える現象","遠くの色がかすんで見える現象"], answer:1, explanation:"ハレーションは、高彩度の色同士（特に補色）を隣接させた際に、境界部分がちらついて見づらくなる現象です。" },
    { id:9, category:"配色技法", question:"セパレーションの効果として正しいものはどれか？", choices:["色を大きく見せる","配色にまとまりや区切りを与える","色を鮮やかにする","色を暗くする"], answer:1, explanation:"セパレーションとは、色と色の間に無彩色や低彩度の色を挟むことで、配色を見やすく整理する技法です。" },
    { id:10, category:"配色技法", question:"トーンオントーン配色の特徴はどれか？", choices:["同じトーンで異なる色相を組み合わせる","同じ色相でトーンに差をつける","反対色相を組み合わせる","無彩色のみで構成する"], answer:1, explanation:"トーンオントーン配色は、同一色相（または類似色相）内でトーン（明度・彩度）に変化をつけた配色です。" },
    { id:11, category:"ファッション", question:"ナチュラル配色とは何か？", choices:["自然界に見られる色の明暗関係に従った配色","緑色だけを使った配色","無彩色のみの配色","ビビッドトーンの配色"], answer:0, explanation:"ナチュラル配色は、自然界の色の見え方（黄は明るく、青は暗い等）に沿った配色で、違和感のない自然な印象を与えます。" },
    { id:12, category:"インテリア", question:"インテリアにおけるアクセントカラーの面積比として適切なのはどれか？", choices:["約70%","約25%","約5%","約50%"], answer:2, explanation:"インテリアの配色比率は一般に、ベースカラー約70%、アソートカラー約25%、アクセントカラー約5%とされています。" },
  ],
};

// ============================================================
// 色見本データ
// ============================================================
// 色を追加するには、対象カテゴリの配列にオブジェクトを追加してください：
// { name: "日本語名", nameEn: "English Name", hex: "#RRGGBB" }
// PCCSトーンの場合は desc（印象語）も追加可：
// { name: "トーン名", nameEn: "Tone Name", hex: "#RRGGBB", desc: "印象語" }

const colorListData = {
  "基本色名": [
    { name:"赤", nameEn:"Red", hex:"#DC143C" },
    { name:"橙", nameEn:"Orange", hex:"#F28C28" },
    { name:"黄", nameEn:"Yellow", hex:"#F5D623" },
    { name:"黄緑", nameEn:"Yellow Green", hex:"#9ACD32" },
    { name:"緑", nameEn:"Green", hex:"#2E8B57" },
    { name:"青緑", nameEn:"Blue Green", hex:"#00897B" },
    { name:"青", nameEn:"Blue", hex:"#2563EB" },
    { name:"青紫", nameEn:"Blue Purple", hex:"#5B21B6" },
    { name:"紫", nameEn:"Purple", hex:"#7C3AED" },
    { name:"赤紫", nameEn:"Red Purple", hex:"#C026D3" },
    { name:"白", nameEn:"White", hex:"#FFFFFF" },
    { name:"灰", nameEn:"Gray", hex:"#9CA3AF" },
    { name:"黒", nameEn:"Black", hex:"#1F2937" },
  ],

  "PCCSトーン": [
    { name:"v (ビビッド)", nameEn:"Vivid", hex:"#E8383D", desc:"鮮やかな" },
    { name:"b (ブライト)", nameEn:"Bright", hex:"#F09199", desc:"明るい" },
    { name:"s (ストロング)", nameEn:"Strong", hex:"#D03C3C", desc:"強い" },
    { name:"dp (ディープ)", nameEn:"Deep", hex:"#96282F", desc:"深い" },
    { name:"lt (ライト)", nameEn:"Light", hex:"#F5B3B8", desc:"浅い" },
    { name:"sf (ソフト)", nameEn:"Soft", hex:"#C98A8E", desc:"柔らかい" },
    { name:"d (ダル)", nameEn:"Dull", hex:"#A06064", desc:"鈍い" },
    { name:"dk (ダーク)", nameEn:"Dark", hex:"#6E2B30", desc:"暗い" },
    { name:"p (ペール)", nameEn:"Pale", hex:"#F8D1D4", desc:"ごく薄い" },
    { name:"ltg (ライトグレイッシュ)", nameEn:"Light Grayish", hex:"#C4A0A3", desc:"明るい灰みの" },
    { name:"g (グレイッシュ)", nameEn:"Grayish", hex:"#8E6064", desc:"灰みの" },
    { name:"dkg (ダークグレイッシュ)", nameEn:"Dark Grayish", hex:"#53363A", desc:"暗い灰みの" },
  ],

  "慣用色名": [
    { name:"朱色", nameEn:"Vermilion", hex:"#E34234" },
    { name:"珊瑚色", nameEn:"Coral", hex:"#F88379" },
    { name:"山吹色", nameEn:"Bright Yellow", hex:"#F8B400" },
    { name:"萌黄", nameEn:"Fresh Green", hex:"#AACF53" },
    { name:"若草色", nameEn:"Young Grass", hex:"#B9D08B" },
    { name:"翡翠色", nameEn:"Jade", hex:"#38B48B" },
    { name:"浅葱色", nameEn:"Light Blue", hex:"#00A3AF" },
    { name:"群青色", nameEn:"Ultramarine", hex:"#4753A2" },
    { name:"藤色", nameEn:"Wisteria", hex:"#BAA8D3" },
    { name:"牡丹色", nameEn:"Peony", hex:"#E44D93" },
    { name:"鳶色", nameEn:"Reddish Brown", hex:"#8B4C39" },
    { name:"利休鼠", nameEn:"Grayish Olive", hex:"#7E8E77" },
  ],
};

// ============================================================
// 色感覚トレーニングデータ（PCCS トーン×色相番号）
// ============================================================
// 各色は { tone: "トーン記号", hue: 色相番号(1-24), hex: "#色コード", hueName: "色相名" }
// トーン記号: v, b, s, dp, lt, sf, d, dk, p, ltg, g, dkg
// 色相番号: 1-24（PCCSの24色相環に対応）
//
// 色を追加・修正する場合はこの配列を編集してください。
// hexの値はPCCSの近似値です。公式カラーチップと若干異なる場合があります。

const pccsTrainingData = [
  // ── vivid（v）──
  { tone:"v", hue:1,  hex:"#D83473", hueName:"紫みの赤" },
  { tone:"v", hue:2,  hex:"#E8383D", hueName:"赤" },
  { tone:"v", hue:3,  hex:"#E95A2E", hueName:"黄みの赤" },
  { tone:"v", hue:4,  hex:"#ED6D1E", hueName:"赤みの橙" },
  { tone:"v", hue:5,  hex:"#F09B18", hueName:"橙" },
  { tone:"v", hue:6,  hex:"#F5C31C", hueName:"黄みの橙" },
  { tone:"v", hue:7,  hex:"#F0D816", hueName:"赤みの黄" },
  { tone:"v", hue:8,  hex:"#E5E017", hueName:"黄" },
  { tone:"v", hue:9,  hex:"#C3D825", hueName:"緑みの黄" },
  { tone:"v", hue:10, hex:"#88C43F", hueName:"黄緑" },
  { tone:"v", hue:11, hex:"#47B352", hueName:"黄みの緑" },
  { tone:"v", hue:12, hex:"#00A45E", hueName:"緑" },
  { tone:"v", hue:13, hex:"#009B74", hueName:"青みの緑" },
  { tone:"v", hue:14, hex:"#00937E", hueName:"青緑" },
  { tone:"v", hue:15, hex:"#008E94", hueName:"青緑(緑みの青)" },
  { tone:"v", hue:16, hex:"#0082AE", hueName:"緑みの青" },
  { tone:"v", hue:17, hex:"#0070B8", hueName:"青" },
  { tone:"v", hue:18, hex:"#0060B0", hueName:"青" },
  { tone:"v", hue:19, hex:"#284D9E", hueName:"紫みの青" },
  { tone:"v", hue:20, hex:"#5A3B99", hueName:"青紫" },
  { tone:"v", hue:21, hex:"#7D3A90", hueName:"青みの紫" },
  { tone:"v", hue:22, hex:"#9B2D8B", hueName:"紫" },
  { tone:"v", hue:23, hex:"#C22878", hueName:"赤みの紫" },
  { tone:"v", hue:24, hex:"#D42E6B", hueName:"赤紫" },

  // ── bright（b）──
  { tone:"b", hue:2,  hex:"#F09199", hueName:"赤" },
  { tone:"b", hue:4,  hex:"#F2A67E", hueName:"赤みの橙" },
  { tone:"b", hue:6,  hex:"#F5D46E", hueName:"黄みの橙" },
  { tone:"b", hue:8,  hex:"#EEED6B", hueName:"黄" },
  { tone:"b", hue:10, hex:"#B3D880", hueName:"黄緑" },
  { tone:"b", hue:12, hex:"#5EC28A", hueName:"緑" },
  { tone:"b", hue:14, hex:"#4BB8A0", hueName:"青緑" },
  { tone:"b", hue:16, hex:"#4AADCA", hueName:"緑みの青" },
  { tone:"b", hue:18, hex:"#5A96D0", hueName:"青" },
  { tone:"b", hue:20, hex:"#8E82C4", hueName:"青紫" },
  { tone:"b", hue:22, hex:"#C27DB8", hueName:"紫" },
  { tone:"b", hue:24, hex:"#E680A0", hueName:"赤紫" },

  // ── strong（s）──
  { tone:"s", hue:2,  hex:"#D03C3C", hueName:"赤" },
  { tone:"s", hue:6,  hex:"#D4A622", hueName:"黄みの橙" },
  { tone:"s", hue:8,  hex:"#C8C428", hueName:"黄" },
  { tone:"s", hue:10, hex:"#72A83E", hueName:"黄緑" },
  { tone:"s", hue:12, hex:"#0A8A55", hueName:"緑" },
  { tone:"s", hue:16, hex:"#0072A0", hueName:"緑みの青" },
  { tone:"s", hue:18, hex:"#1A5598", hueName:"青" },
  { tone:"s", hue:20, hex:"#4A3580", hueName:"青紫" },
  { tone:"s", hue:22, hex:"#882878", hueName:"紫" },
  { tone:"s", hue:24, hex:"#B82860", hueName:"赤紫" },

  // ── deep（dp）──
  { tone:"dp", hue:2,  hex:"#96282F", hueName:"赤" },
  { tone:"dp", hue:4,  hex:"#A04A1E", hueName:"赤みの橙" },
  { tone:"dp", hue:6,  hex:"#A88018", hueName:"黄みの橙" },
  { tone:"dp", hue:8,  hex:"#94901A", hueName:"黄" },
  { tone:"dp", hue:10, hex:"#4D7828", hueName:"黄緑" },
  { tone:"dp", hue:12, hex:"#006840", hueName:"緑" },
  { tone:"dp", hue:16, hex:"#005880", hueName:"緑みの青" },
  { tone:"dp", hue:18, hex:"#0A3E78", hueName:"青" },
  { tone:"dp", hue:20, hex:"#352868", hueName:"青紫" },
  { tone:"dp", hue:22, hex:"#681E62", hueName:"紫" },
  { tone:"dp", hue:24, hex:"#8A1E48", hueName:"赤紫" },

  // ── light（lt）──
  { tone:"lt", hue:2,  hex:"#F5B3B8", hueName:"赤" },
  { tone:"lt", hue:4,  hex:"#F5C2A0", hueName:"赤みの橙" },
  { tone:"lt", hue:8,  hex:"#F2F0A0", hueName:"黄" },
  { tone:"lt", hue:10, hex:"#C8E4A0", hueName:"黄緑" },
  { tone:"lt", hue:12, hex:"#88D4A4", hueName:"緑" },
  { tone:"lt", hue:16, hex:"#82C4D8", hueName:"緑みの青" },
  { tone:"lt", hue:18, hex:"#8CB2E0", hueName:"青" },
  { tone:"lt", hue:20, hex:"#AEA2D4", hueName:"青紫" },
  { tone:"lt", hue:22, hex:"#D4A0CC", hueName:"紫" },
  { tone:"lt", hue:24, hex:"#F0A2B8", hueName:"赤紫" },

  // ── soft（sf）──
  { tone:"sf", hue:2,  hex:"#C98A8E", hueName:"赤" },
  { tone:"sf", hue:8,  hex:"#C4C27E", hueName:"黄" },
  { tone:"sf", hue:12, hex:"#6AA882", hueName:"緑" },
  { tone:"sf", hue:16, hex:"#6898AC", hueName:"緑みの青" },
  { tone:"sf", hue:18, hex:"#7088B0", hueName:"青" },
  { tone:"sf", hue:22, hex:"#A47EA0", hueName:"紫" },

  // ── dull（d）──
  { tone:"d", hue:2,  hex:"#A06064", hueName:"赤" },
  { tone:"d", hue:8,  hex:"#9A9858", hueName:"黄" },
  { tone:"d", hue:12, hex:"#488868", hueName:"緑" },
  { tone:"d", hue:16, hex:"#487888", hueName:"緑みの青" },
  { tone:"d", hue:18, hex:"#4E6888", hueName:"青" },
  { tone:"d", hue:22, hex:"#805E7C", hueName:"紫" },

  // ── dark（dk）──
  { tone:"dk", hue:2,  hex:"#6E2B30", hueName:"赤" },
  { tone:"dk", hue:6,  hex:"#785818", hueName:"黄みの橙" },
  { tone:"dk", hue:8,  hex:"#686418", hueName:"黄" },
  { tone:"dk", hue:12, hex:"#1A5E38", hueName:"緑" },
  { tone:"dk", hue:16, hex:"#18485E", hueName:"緑みの青" },
  { tone:"dk", hue:18, hex:"#1A3858", hueName:"青" },
  { tone:"dk", hue:22, hex:"#501E4A", hueName:"紫" },

  // ── pale（p）──
  { tone:"p", hue:2,  hex:"#F8D1D4", hueName:"赤" },
  { tone:"p", hue:8,  hex:"#F5F2C8", hueName:"黄" },
  { tone:"p", hue:12, hex:"#B8E4C4", hueName:"緑" },
  { tone:"p", hue:16, hex:"#B0D8E4", hueName:"緑みの青" },
  { tone:"p", hue:18, hex:"#B8CEE8", hueName:"青" },
  { tone:"p", hue:22, hex:"#E0C4DC", hueName:"紫" },
  { tone:"p", hue:24, hex:"#F0C4D0", hueName:"赤紫" },

  // ── light grayish（ltg）──
  { tone:"ltg", hue:2,  hex:"#C4A0A3", hueName:"赤" },
  { tone:"ltg", hue:8,  hex:"#BCBA94", hueName:"黄" },
  { tone:"ltg", hue:12, hex:"#8CB098", hueName:"緑" },
  { tone:"ltg", hue:18, hex:"#8A9CB4", hueName:"青" },
  { tone:"ltg", hue:22, hex:"#B098AE", hueName:"紫" },

  // ── grayish（g）──
  { tone:"g", hue:2,  hex:"#8E6064", hueName:"赤" },
  { tone:"g", hue:8,  hex:"#888462", hueName:"黄" },
  { tone:"g", hue:12, hex:"#587868", hueName:"緑" },
  { tone:"g", hue:18, hex:"#586878", hueName:"青" },
  { tone:"g", hue:22, hex:"#7E5E78", hueName:"紫" },

  // ── dark grayish（dkg）──
  { tone:"dkg", hue:2,  hex:"#53363A", hueName:"赤" },
  { tone:"dkg", hue:8,  hex:"#4E4C30", hueName:"黄" },
  { tone:"dkg", hue:12, hex:"#2E4E3A", hueName:"緑" },
  { tone:"dkg", hue:18, hex:"#2E3E50", hueName:"青" },
  { tone:"dkg", hue:22, hex:"#483248", hueName:"紫" },
];

// トーン名の日本語対応表
const toneNames = {
  "v": "ビビッド",
  "b": "ブライト",
  "s": "ストロング",
  "dp": "ディープ",
  "lt": "ライト",
  "sf": "ソフト",
  "d": "ダル",
  "dk": "ダーク",
  "p": "ペール",
  "ltg": "ライトグレイッシュ",
  "g": "グレイッシュ",
  "dkg": "ダークグレイッシュ",
};
