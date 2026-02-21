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
    // ── マンセル表色系 ──
    { id:1, category:"マンセル表色系", question:"マンセル表色系の色相は何色相に分けられるか？", choices:["10色相","20色相","40色相","100色相"], answer:3, explanation:"マンセル表色系では、5つの基本色相（R, Y, G, B, P）と5つの中間色相を、さらに各10段階に分け、合計100色相で表します。" },
    { id:2, category:"マンセル表色系", question:"マンセル表色系で「5R 4/14」の「4」は何を表すか？", choices:["色相","明度","彩度","トーン"], answer:1, explanation:"マンセルの表記法は「色相 明度/彩度」の順です。5R 4/14 は色相5R、明度4、彩度14を意味します。" },
    { id:3, category:"マンセル表色系", question:"マンセル表色系で明度の範囲はどれか？", choices:["0〜10","0〜100","1〜9","1〜14"], answer:0, explanation:"マンセルの明度（バリュー）は理想的な黒を0、理想的な白を10とした11段階で表されます。" },
    { id:4, category:"マンセル表色系", question:"マンセル表色系の5つの基本色相はどれか？", choices:["R, O, Y, G, B","R, Y, G, B, P","R, Y, G, B, V","C, M, Y, K, W"], answer:1, explanation:"マンセルの5つの基本色相は R（赤）、Y（黄）、G（緑）、B（青）、P（紫）です。" },
    { id:5, category:"マンセル表色系", question:"マンセル表色系における無彩色の表記はどれか？", choices:["N5","0Y 5/0","W5","G5"], answer:0, explanation:"マンセルでは無彩色はN（Neutral）で表します。N5は明度5の灰色を意味します。" },
    { id:6, category:"マンセル表色系", question:"マンセル色相環で「5R」の補色にあたるのはどれか？", choices:["5Y","5G","5BG","5B"], answer:2, explanation:"マンセル色相環は10色相(R,YR,Y,GY,G,BG,B,PB,P,RP)で構成され、5Rの正反対は5BGです。" },
    { id:7, category:"マンセル表色系", question:"マンセル表色系の彩度（クロマ）の特徴として正しいものはどれか？", choices:["すべての色相で最大値が同じ","色相によって最大値が異なる","最大値は常に14","最大値は常に10"], answer:1, explanation:"マンセルの彩度は色相や明度によって最大値が異なります。赤（R）は最大彩度が14程度ですが、他の色相では異なります。" },
    { id:8, category:"マンセル表色系", question:"マンセル色立体の形状の特徴はどれか？", choices:["完全な球体","完全な円柱","左右非対称の不規則な形","正三角形を回転させた形"], answer:2, explanation:"マンセル色立体は、色相ごとに最大彩度が異なるため、左右非対称の不規則な（いびつな）形をしています。" },

    // ── PCCS ──
    { id:9, category:"PCCS", question:"PCCSでトーンを表す記号「lt」はどのようなトーンか？", choices:["ライトグレイッシュ","ライト","ソフト","ペール"], answer:1, explanation:"ltはライト（Light）トーンの記号です。明るく穏やかな印象のトーンです。ltgがライトグレイッシュです。" },
    { id:10, category:"PCCS", question:"PCCSのトーン概念図で縦軸は何を表すか？", choices:["色相","彩度","明度","トーン"], answer:2, explanation:"PCCSのトーン概念図では、縦軸が明度、横軸が彩度を表します。" },
    { id:11, category:"PCCS", question:"PCCSの色相番号2番はどの色か？", choices:["赤","橙","黄","紫みの赤"], answer:0, explanation:"PCCSの色相番号2は赤（R）です。1が紫みの赤、3が黄みの赤になります。" },
    { id:12, category:"PCCS", question:"PCCSにおいて最も明度が高いトーンはどれか？", choices:["ビビッド","ペール","ホワイト","ライト"], answer:2, explanation:"PCCSの有彩色トーンではペールが最も明度が高いですが、全体ではホワイト（無彩色）が最高明度です。有彩色ではp（ペール）が最も高明度です。" },
    { id:13, category:"PCCS", question:"PCCSの色相環で色相番号8は何色か？", choices:["黄緑","黄","橙","緑"], answer:1, explanation:"PCCSの色相番号8は黄（Y）です。色相番号は1（紫みの赤）から始まり、8で黄に到達します。" },

    // ── 光と色 ──
    { id:14, category:"光と色", question:"分光反射率曲線が平坦な物体はどのように見えるか？", choices:["赤く見える","無彩色に見える","青く見える","透明に見える"], answer:1, explanation:"分光反射率曲線がすべての波長域で均一（平坦）な場合、特定の色味を持たず無彩色（白・灰・黒）に見えます。" },
    { id:15, category:"光と色", question:"メタメリズム（条件等色）とは何か？", choices:["同じ光源下で常に同じ色に見えること","異なる光源下で同じ色に見えたり異なる色に見えたりすること","分光分布が同じ色のこと","補色の組み合わせのこと"], answer:1, explanation:"メタメリズムとは、分光分布が異なる2色がある光源下では同じ色に見えるが、別の光源下では異なる色に見える現象です。" },
    { id:16, category:"光と色", question:"演色性とは何か？", choices:["光源の明るさのこと","光源が物体の色の見え方に与える影響","光の波長の長さ","光源の寿命"], answer:1, explanation:"演色性とは、光源によって物体の色の見え方がどの程度変わるかを示す性質です。演色評価数（Ra）で数値化されます。" },
    { id:17, category:"光と色", question:"演色評価数（Ra）が100に近い光源はどれか？", choices:["ナトリウムランプ","蛍光灯","白熱電球","水銀灯"], answer:2, explanation:"白熱電球は連続スペクトルを持ち、太陽光に近い分光分布のため演色評価数が高く（Ra≒100）なります。" },
    { id:18, category:"光と色", question:"可視光線の波長範囲として正しいものはどれか？", choices:["約280〜580nm","約380〜780nm","約480〜880nm","約180〜680nm"], answer:1, explanation:"人間の目に見える可視光線の波長範囲は約380nm〜780nmです。" },
    { id:19, category:"光と色", question:"色温度が高い光源の色はどのように見えるか？", choices:["赤みを帯びる","黄みを帯びる","青みを帯びる","緑みを帯びる"], answer:2, explanation:"色温度が高いほど光は青白く見え、低いほど赤みを帯びて見えます。例：ロウソク(約2000K)は赤み、晴天の空(約10000K)は青みです。" },
    { id:20, category:"光と色", question:"分光分布とは何か？", choices:["光の強さの分布","光に含まれる各波長の相対的なエネルギー分布","色相の分布図","照度の分布"], answer:1, explanation:"分光分布は、光に含まれる各波長ごとのエネルギーの相対的な強さを表したものです。光源の色を決定する重要な特性です。" },
    { id:21, category:"光と色", question:"色順応とは何か？", choices:["色に対して鈍感になること","異なる照明条件に目が慣れて色の見え方が安定すること","補色が見えること","残像が見えること"], answer:1, explanation:"色順応とは、光源の色が変わっても時間が経つと目が順応し、物体の色がほぼ同じに見えるようになる現象です。" },

    // ── 色の見え・対比・同化 ──
    { id:22, category:"色の見え", question:"色の面積効果の説明として正しいものはどれか？", choices:["面積が大きいほど暗く見える","面積が大きいほど明るく鮮やかに見える","面積は色の見えに影響しない","面積が小さいほど鮮やかに見える"], answer:1, explanation:"色の面積効果とは、同じ色でも面積が大きくなると明度・彩度ともに高く（明るく鮮やかに）感じられる現象です。" },
    { id:23, category:"色の見え", question:"ハレーションとは何か？", choices:["明度差が大きい配色でちらつく現象","彩度の高い色同士が境界でちらつく現象","補色同士で色が暗く見える現象","遠くの色がかすんで見える現象"], answer:1, explanation:"ハレーションは、高彩度の色同士（特に補色）を隣接させた際に、境界部分がちらついて見づらくなる現象です。" },
    { id:24, category:"色の見え", question:"色相対比とはどのような現象か？", choices:["周囲の色の影響で色相がずれて見える現象","面積によって色が変わる現象","明るさの対比","彩度が高く見える現象"], answer:0, explanation:"色相対比は、隣接する色の影響を受けて実際とは異なる色相に見える現象です。例えば、黄の隣に置かれた橙は赤みが増して見えます。" },
    { id:25, category:"色の見え", question:"明度対比の説明として正しいものはどれか？", choices:["暗い背景の上の色は実際より明るく見える","明るい背景の上の色は実際より明るく見える","背景の明度は色の見えに影響しない","常に同じ明度に見える"], answer:0, explanation:"明度対比では、暗い背景上の色は実際より明るく見え、明るい背景上の色は実際より暗く見えます。" },
    { id:26, category:"色の見え", question:"彩度対比とはどのような現象か？", choices:["鮮やかな色の隣の色は彩度が下がって見える","くすんだ色の隣の色も彩度が下がって見える","彩度は対比の影響を受けない","面積が変わると彩度が変わる現象"], answer:0, explanation:"彩度対比では、鮮やかな色の隣に置かれた色は彩度が低く（くすんで）見え、くすんだ色の隣では彩度が高く見えます。" },
    { id:27, category:"色の見え", question:"補色対比とはどのような現象か？", choices:["補色を並べると互いの彩度が高く見える","補色を並べると暗く見える","補色を並べると明度が下がる","補色を混ぜると白になる"], answer:0, explanation:"補色対比は、補色関係にある色を隣接させると、互いの彩度が高く（鮮やかに）見える現象です。" },
    { id:28, category:"色の見え", question:"同化現象（色の同化）の説明として正しいものはどれか？", choices:["隣接する色と反対方向にずれて見える","挿入された色に近づいて見える","面積が大きいほど色が濃くなる","色が消えて見える"], answer:1, explanation:"同化は対比の逆で、細い線や小さいパターンが挿入されると、隣の色がその色に近づいて見える現象です。スーパーの青いネットに入ったみかんが新鮮に見えるのも同化の例です。" },
    { id:29, category:"色の見え", question:"縁辺対比とはどのような現象か？", choices:["色の境界付近で対比が強調される現象","離れた場所で対比が起こる現象","同じ色でも場所によって見えが変わる現象","時間が経つと色が変化する現象"], answer:0, explanation:"縁辺対比は、異なる色が接する境界付近で、明度差や色相差が強調されて見える現象です。マッハバンドとも関連します。" },
    { id:30, category:"色の見え", question:"色の恒常性（色の恒常現象）とは何か？", choices:["色が永遠に変わらないこと","照明条件が変わっても物体の色がほぼ同じに知覚される現象","同じ色がいつも同じに見えること","色を記憶するとより鮮やかになること"], answer:1, explanation:"色の恒常性とは、照明の色や明るさが変わっても、記憶や経験によって物体の色をほぼ一定に知覚する現象です。" },
    { id:31, category:"色の見え", question:"記憶色の特徴として正しいものはどれか？", choices:["実際の色より彩度が低く記憶される","実際の色とほぼ同じに記憶される","実際の色より彩度が高く鮮やかに記憶される","色は記憶できない"], answer:2, explanation:"記憶色とは記憶の中で再現される色で、一般に実際の色よりも彩度が高く（鮮やかに）、典型的な色味に寄って記憶される傾向があります。" },
    { id:32, category:"色の見え", question:"継時対比とは何か？", choices:["2色を同時に見たときの対比","色を見た後に別の色を見ると影響を受ける対比","面積による対比","距離による対比"], answer:1, explanation:"継時対比は、ある色をしばらく見た後に別の色を見ると、前に見た色の補色の影響を受けて色が変わって見える現象です。" },

    // ── 色彩調和 ──
    { id:33, category:"色彩調和", question:"ジャッドの色彩調和論で挙げられている原理でないものはどれか？", choices:["秩序の原理","なじみの原理","対比の原理","類似の原理"], answer:3, explanation:"ジャッドの色彩調和の4つの原理は「秩序」「なじみ」「類似性（共通性）」「明瞭性（対比）」です。「類似の原理」という名称の原理はありません。" },
    { id:34, category:"色彩調和", question:"ジャッドの「なじみの原理」の説明として正しいものはどれか？", choices:["規則的に並んだ色は調和する","見慣れた配色は調和する","対照的な色は調和する","類似した色は調和する"], answer:1, explanation:"なじみの原理は、日常で見慣れた色の組み合わせ（自然界の色合いなど）は調和して感じられるという原理です。" },
    { id:35, category:"色彩調和", question:"オストワルトの色彩調和論の基本的な考え方はどれか？", choices:["対比する色が調和する","秩序のある配色が調和する","自然の色が調和する","面積が等しいと調和する"], answer:1, explanation:"オストワルトは「調和＝秩序」と考え、白量・黒量・純色量が等しい色（等白系列、等黒系列、等純系列）は調和するとしました。" },
    { id:36, category:"色彩調和", question:"ムーン＆スペンサーの色彩調和論でいう「あいまいな関係」とはどれか？", choices:["調和する色の関係","不調和な色の関係","白と黒の関係","補色の関係"], answer:1, explanation:"ムーン＆スペンサーは色相差が中途半端な「あいまいな関係」は不調和になりやすいと理論化しました。「同一」「類似」「対比」の関係は調和するとしました。" },
    { id:37, category:"色彩調和", question:"配色における「アクセントカラー」の役割はどれか？", choices:["全体の基調をつくる","変化やポイントを与える","面積の大部分を占める","背景として使う"], answer:1, explanation:"アクセントカラーは少ない面積で使用し、配色に変化やポイント、視線を引く効果を与える色です。" },

    // ── 配色技法 ──
    { id:38, category:"配色技法", question:"トーンオントーン配色の特徴はどれか？", choices:["同じトーンで異なる色相を組み合わせる","同じ色相でトーンに差をつける","反対色相を組み合わせる","無彩色のみで構成する"], answer:1, explanation:"トーンオントーン配色は、同一色相（または類似色相）内でトーン（明度・彩度）に変化をつけた配色です。" },
    { id:39, category:"配色技法", question:"トーンイントーン配色の特徴はどれか？", choices:["同一トーンで色相に変化をつける","同一色相でトーンに変化をつける","補色でまとめる","明暗のコントラストを強調する"], answer:0, explanation:"トーンイントーン配色は、同一トーン（または類似トーン）内で色相に変化をつけた配色で、全体のトーンが統一されます。" },
    { id:40, category:"配色技法", question:"ドミナントトーン配色の説明として正しいものはどれか？", choices:["色相を統一した配色","トーンを統一した配色","明度を統一した配色","彩度を統一した配色"], answer:1, explanation:"ドミナントトーンは同一トーンの色でまとめる配色で、色相が異なっても統一感のある印象になります。" },
    { id:41, category:"配色技法", question:"カマイユ配色の特徴はどれか？", choices:["色相もトーンもほぼ同一のきわめて微妙な配色","補色同士の対比的な配色","高彩度のみの配色","無彩色のみの配色"], answer:0, explanation:"カマイユ配色は、色相もトーンもほぼ同一で、きわめて微妙な差しかない単調な配色です。フォ・カマイユは少しだけ差をつけたものです。" },
    { id:42, category:"配色技法", question:"セパレーションの効果として正しいものはどれか？", choices:["色を大きく見せる","配色にまとまりや区切りを与える","色を鮮やかにする","色を暗くする"], answer:1, explanation:"セパレーションとは、色と色の間に無彩色や低彩度の色を挟むことで、配色を見やすく整理する技法です。" },
    { id:43, category:"配色技法", question:"グラデーション配色の説明として正しいものはどれか？", choices:["色相・明度・彩度を段階的に変化させる配色","急激な色の変化をつける配色","2色だけの配色","無彩色だけの配色"], answer:0, explanation:"グラデーション配色は、色相・明度・彩度のいずれか（または複数）を規則的に段階変化させる配色です。リズム感のある調和が生まれます。" },
    { id:44, category:"配色技法", question:"ビコロールとはどのような配色か？", choices:["3色配色","2色配色","5色配色","多色配色"], answer:1, explanation:"ビコロール（bicolore）は明快な2色配色のことです。コントラストがはっきりした組み合わせが多く用いられます。" },
    { id:45, category:"配色技法", question:"トリコロールとはどのような配色か？", choices:["2色配色","3色配色","4色配色","単色配色"], answer:1, explanation:"トリコロール（tricolore）は3色配色のことです。フランス国旗の青・白・赤がトリコロールの代表例です。" },
    { id:46, category:"配色技法", question:"レピテーション（繰り返し）配色とは何か？", choices:["同じ配色パターンを繰り返す技法","色をランダムに配置する技法","1色だけを使う技法","対比を強調する技法"], answer:0, explanation:"レピテーション配色は、同じ色や配色パターンを繰り返し用いることで、リズム感や統一感を出す技法です。" },

    // ── ファッション ──
    { id:47, category:"ファッション", question:"ナチュラル配色とは何か？", choices:["自然界に見られる色の明暗関係に従った配色","緑色だけを使った配色","無彩色のみの配色","ビビッドトーンの配色"], answer:0, explanation:"ナチュラル配色は、自然界の色の見え方（黄は明るく、青は暗い等）に沿った配色で、違和感のない自然な印象を与えます。" },
    { id:48, category:"ファッション", question:"コンプレックス配色とは何か？", choices:["複雑な多色配色のこと","自然界の明暗関係とは逆の配色","3色以上の配色","高彩度の配色"], answer:1, explanation:"コンプレックス配色は、ナチュラル配色とは逆に自然の明暗関係に反する配色（黄を暗く、青を明るく等）です。新鮮で都会的な印象を与えます。" },
    { id:49, category:"ファッション", question:"フォカマイユ配色の説明として正しいものはどれか？", choices:["カマイユよりやや色相やトーンに差をつけた配色","補色を使った配色","強い対比の配色","無彩色のみの配色"], answer:0, explanation:"フォカマイユ（faux camaïeu）は「偽りのカマイユ」の意味で、カマイユ配色より少しだけ色相やトーンに差をつけた配色です。" },
    { id:50, category:"ファッション", question:"トーナル配色とはどのような配色か？", choices:["中間色（sf, d, ltg, g）のトーンでまとめた配色","ビビッドトーンだけの配色","明るいトーンだけの配色","暗いトーンだけの配色"], answer:0, explanation:"トーナル配色は、sf（ソフト）、d（ダル）、ltg（ライトグレイッシュ）、g（グレイッシュ）などの中間色トーンでまとめた、落ち着いた雰囲気の配色です。" },

    // ── インテリア ──
    { id:51, category:"インテリア", question:"インテリアにおけるアクセントカラーの面積比として適切なのはどれか？", choices:["約70%","約25%","約5%","約50%"], answer:2, explanation:"インテリアの配色比率は一般に、ベースカラー約70%、アソートカラー約25%、アクセントカラー約5%とされています。" },
    { id:52, category:"インテリア", question:"インテリアにおけるベースカラーはどこに使われるか？", choices:["小物やクッション","壁・天井・床など大面積の部分","カーテンのみ","家具のみ"], answer:1, explanation:"ベースカラーは壁・天井・床など、空間の大部分を占める場所に使われる色で、全体の約70%を占めます。" },
    { id:53, category:"インテリア", question:"暖色系の照明が与える印象として正しいものはどれか？", choices:["クールで活動的","温かみがありくつろぎ感がある","無機質で清潔","広々とした印象"], answer:1, explanation:"暖色系（低色温度）の照明は温かみやくつろぎの印象を与えます。住宅のリビングや寝室に適しています。" },
    { id:54, category:"インテリア", question:"天井を暗い色にした場合の効果はどれか？", choices:["天井が高く見える","天井が低く落ち着いた印象になる","部屋が広く見える","壁が明るく見える"], answer:1, explanation:"暗い色は収縮・後退の効果があり、天井が低く感じられ、落ち着いた空間を作れます。逆に明るい色は天井を高く感じさせます。" },

    // ── 環境・エクステリア ──
    { id:55, category:"環境色彩", question:"景観における色彩の「マンセルバリュー」の一般的な基準として、建物の外壁に推奨される彩度は？", choices:["高彩度（8以上）","中彩度（4〜6）","低彩度（3以下）","制限なし"], answer:2, explanation:"多くの景観条例では建物外壁の彩度を低く（マンセル彩度3以下程度に）抑えることを推奨し、街並みとの調和を図っています。" },
    { id:56, category:"環境色彩", question:"視認性を高めるために最も効果的な色の組み合わせはどれか？", choices:["赤と橙","黄と白","黒と黄","青と緑"], answer:2, explanation:"黒と黄の組み合わせは明度差が大きく、視認性が最も高くなります。踏切や警告標識などに用いられています。" },
    { id:57, category:"環境色彩", question:"高齢者が見分けにくくなる色の組み合わせはどれか？", choices:["赤と白","青と黒","黄と黒","赤と緑"], answer:1, explanation:"加齢により水晶体が黄変し、短波長（青系）の色が暗く見えるため、青と黒のような暗い色同士の区別が困難になります。" },

    // ── 表色系・測色 ──
    { id:58, category:"表色系", question:"XYZ表色系の特徴として正しいものはどれか？", choices:["人の感覚に基づいた表色系","混色の計算を容易にするために作られた表色系","トーンの概念を用いた表色系","色を言葉で表す表色系"], answer:1, explanation:"CIE XYZ表色系は、混色の計算を容易にするために作られた表色系で、三刺激値X, Y, Zで色を数値的に表します。" },
    { id:59, category:"表色系", question:"L*a*b*表色系のL*は何を表すか？", choices:["色相","彩度","明度","純度"], answer:2, explanation:"L*a*b*表色系ではL*が明度、a*が赤-緑方向、b*が黄-青方向を表します。" },
    { id:60, category:"表色系", question:"顕色系の表色系はどれか？", choices:["XYZ表色系","RGB表色系","マンセル表色系","CMYK"], answer:2, explanation:"顕色系は色票（実際の色サンプル）をもとに色を体系化した表色系です。マンセル表色系やPCCSが代表的です。混色系にはXYZ表色系などがあります。" },
    { id:61, category:"表色系", question:"混色系の表色系はどれか？", choices:["マンセル表色系","PCCS","CIE XYZ表色系","NCS"], answer:2, explanation:"混色系は光の三原色の混色理論に基づき、色を数値で表す表色系です。CIE XYZ表色系が代表的です。" },

    // ── 色彩心理 ──
    { id:62, category:"色彩心理", question:"進出色と後退色の関係として正しいものはどれか？", choices:["暖色は後退色、寒色は進出色","暖色は進出色、寒色は後退色","色相は進出・後退に関係しない","彩度だけで決まる"], answer:1, explanation:"暖色系（赤・橙・黄）は手前に飛び出して見える進出色、寒色系（青・青緑）は奥に引っ込んで見える後退色です。" },
    { id:63, category:"色彩心理", question:"色の軽重感に最も影響する属性はどれか？", choices:["色相","明度","彩度","トーン"], answer:1, explanation:"色の軽重感は主に明度に左右されます。明度が高い色は軽く、明度が低い色は重く感じられます。" },
    { id:64, category:"色彩心理", question:"色の硬軟感に影響する属性はどれか？", choices:["色相のみ","明度と彩度","明度のみ","彩度のみ"], answer:1, explanation:"色の硬軟感は明度と彩度の両方に影響されます。高明度・低彩度の色は柔らかく、低明度・高彩度の色は硬く感じられます。" },

    // ── 視覚・安全 ──
    { id:65, category:"視覚", question:"色覚の仕組みで錐体細胞が感知するものはどれか？", choices:["明暗のみ","色と形","色（色相・彩度）","動き"], answer:2, explanation:"網膜の錐体細胞は色を感知する役割を持ち、L錐体（赤）、M錐体（緑）、S錐体（青）の3種類があります。桿体細胞は主に明暗を感知します。" },
    { id:66, category:"視覚", question:"プルキンエ現象の説明として正しいものはどれか？", choices:["暗くなると青系が相対的に明るく見える","明るくなると赤系が暗く見える","色温度が上がると色が変わる","補色残像が見える現象"], answer:0, explanation:"プルキンエ現象は、暗い場所では明所視に比べて短波長（青系）の色が相対的に明るく見え、長波長（赤系）が暗く見える現象です。" },
    { id:67, category:"安全色彩", question:"JISの安全色で「赤」が意味するものはどれか？", choices:["注意","防火・禁止・停止","安全・進行","指示・誘導"], answer:1, explanation:"JISの安全色彩では、赤は防火・禁止・停止を意味します。黄は注意、緑は安全・進行・避難、青は指示・誘導です。" },
    { id:68, category:"安全色彩", question:"JISの安全色で「緑」が意味するものはどれか？", choices:["注意","禁止","安全・進行・避難","指示"], answer:2, explanation:"JISの安全色彩では、緑は安全・進行・避難を意味します。非常口のサインが緑色なのはこのためです。" },
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
  // ── vivid（v）── 全24色相
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

  // ── bright（b）── 拡張
  { tone:"b", hue:1,  hex:"#E87CA8", hueName:"紫みの赤" },
  { tone:"b", hue:2,  hex:"#F09199", hueName:"赤" },
  { tone:"b", hue:3,  hex:"#F09878", hueName:"黄みの赤" },
  { tone:"b", hue:4,  hex:"#F2A67E", hueName:"赤みの橙" },
  { tone:"b", hue:5,  hex:"#F2BE6E", hueName:"橙" },
  { tone:"b", hue:6,  hex:"#F5D46E", hueName:"黄みの橙" },
  { tone:"b", hue:7,  hex:"#F0E06E", hueName:"赤みの黄" },
  { tone:"b", hue:8,  hex:"#EEED6B", hueName:"黄" },
  { tone:"b", hue:9,  hex:"#D4E478", hueName:"緑みの黄" },
  { tone:"b", hue:10, hex:"#B3D880", hueName:"黄緑" },
  { tone:"b", hue:11, hex:"#80CC88", hueName:"黄みの緑" },
  { tone:"b", hue:12, hex:"#5EC28A", hueName:"緑" },
  { tone:"b", hue:13, hex:"#50BC9A", hueName:"青みの緑" },
  { tone:"b", hue:14, hex:"#4BB8A0", hueName:"青緑" },
  { tone:"b", hue:15, hex:"#4CB4B8", hueName:"青緑(緑みの青)" },
  { tone:"b", hue:16, hex:"#4AADCA", hueName:"緑みの青" },
  { tone:"b", hue:17, hex:"#52A0D0", hueName:"青" },
  { tone:"b", hue:18, hex:"#5A96D0", hueName:"青" },
  { tone:"b", hue:19, hex:"#728CC8", hueName:"紫みの青" },
  { tone:"b", hue:20, hex:"#8E82C4", hueName:"青紫" },
  { tone:"b", hue:21, hex:"#A880BE", hueName:"青みの紫" },
  { tone:"b", hue:22, hex:"#C27DB8", hueName:"紫" },
  { tone:"b", hue:23, hex:"#D87CA8", hueName:"赤みの紫" },
  { tone:"b", hue:24, hex:"#E680A0", hueName:"赤紫" },

  // ── strong（s）── 拡張
  { tone:"s", hue:1,  hex:"#C03060", hueName:"紫みの赤" },
  { tone:"s", hue:2,  hex:"#D03C3C", hueName:"赤" },
  { tone:"s", hue:3,  hex:"#D05828", hueName:"黄みの赤" },
  { tone:"s", hue:4,  hex:"#D07020", hueName:"赤みの橙" },
  { tone:"s", hue:5,  hex:"#D09018", hueName:"橙" },
  { tone:"s", hue:6,  hex:"#D4A622", hueName:"黄みの橙" },
  { tone:"s", hue:7,  hex:"#C8B820", hueName:"赤みの黄" },
  { tone:"s", hue:8,  hex:"#C8C428", hueName:"黄" },
  { tone:"s", hue:9,  hex:"#A4B830", hueName:"緑みの黄" },
  { tone:"s", hue:10, hex:"#72A83E", hueName:"黄緑" },
  { tone:"s", hue:11, hex:"#409A48", hueName:"黄みの緑" },
  { tone:"s", hue:12, hex:"#0A8A55", hueName:"緑" },
  { tone:"s", hue:13, hex:"#0A8468", hueName:"青みの緑" },
  { tone:"s", hue:14, hex:"#087E78", hueName:"青緑" },
  { tone:"s", hue:15, hex:"#087888", hueName:"青緑(緑みの青)" },
  { tone:"s", hue:16, hex:"#0072A0", hueName:"緑みの青" },
  { tone:"s", hue:17, hex:"#0A62A0", hueName:"青" },
  { tone:"s", hue:18, hex:"#1A5598", hueName:"青" },
  { tone:"s", hue:19, hex:"#2A4488", hueName:"紫みの青" },
  { tone:"s", hue:20, hex:"#4A3580", hueName:"青紫" },
  { tone:"s", hue:21, hex:"#683078", hueName:"青みの紫" },
  { tone:"s", hue:22, hex:"#882878", hueName:"紫" },
  { tone:"s", hue:23, hex:"#A82868", hueName:"赤みの紫" },
  { tone:"s", hue:24, hex:"#B82860", hueName:"赤紫" },

  // ── deep（dp）── 拡張
  { tone:"dp", hue:1,  hex:"#882048", hueName:"紫みの赤" },
  { tone:"dp", hue:2,  hex:"#96282F", hueName:"赤" },
  { tone:"dp", hue:3,  hex:"#983820", hueName:"黄みの赤" },
  { tone:"dp", hue:4,  hex:"#A04A1E", hueName:"赤みの橙" },
  { tone:"dp", hue:5,  hex:"#A06818", hueName:"橙" },
  { tone:"dp", hue:6,  hex:"#A88018", hueName:"黄みの橙" },
  { tone:"dp", hue:7,  hex:"#98881A", hueName:"赤みの黄" },
  { tone:"dp", hue:8,  hex:"#94901A", hueName:"黄" },
  { tone:"dp", hue:9,  hex:"#708420", hueName:"緑みの黄" },
  { tone:"dp", hue:10, hex:"#4D7828", hueName:"黄緑" },
  { tone:"dp", hue:11, hex:"#286C30", hueName:"黄みの緑" },
  { tone:"dp", hue:12, hex:"#006840", hueName:"緑" },
  { tone:"dp", hue:13, hex:"#006250", hueName:"青みの緑" },
  { tone:"dp", hue:14, hex:"#005E5E", hueName:"青緑" },
  { tone:"dp", hue:16, hex:"#005880", hueName:"緑みの青" },
  { tone:"dp", hue:18, hex:"#0A3E78", hueName:"青" },
  { tone:"dp", hue:20, hex:"#352868", hueName:"青紫" },
  { tone:"dp", hue:22, hex:"#681E62", hueName:"紫" },
  { tone:"dp", hue:24, hex:"#8A1E48", hueName:"赤紫" },

  // ── light（lt）── 拡張
  { tone:"lt", hue:1,  hex:"#F5B0C4", hueName:"紫みの赤" },
  { tone:"lt", hue:2,  hex:"#F5B3B8", hueName:"赤" },
  { tone:"lt", hue:3,  hex:"#F5BAA2", hueName:"黄みの赤" },
  { tone:"lt", hue:4,  hex:"#F5C2A0", hueName:"赤みの橙" },
  { tone:"lt", hue:5,  hex:"#F5D0A0", hueName:"橙" },
  { tone:"lt", hue:6,  hex:"#F5DEA0", hueName:"黄みの橙" },
  { tone:"lt", hue:8,  hex:"#F2F0A0", hueName:"黄" },
  { tone:"lt", hue:10, hex:"#C8E4A0", hueName:"黄緑" },
  { tone:"lt", hue:12, hex:"#88D4A4", hueName:"緑" },
  { tone:"lt", hue:14, hex:"#80CCC0", hueName:"青緑" },
  { tone:"lt", hue:16, hex:"#82C4D8", hueName:"緑みの青" },
  { tone:"lt", hue:18, hex:"#8CB2E0", hueName:"青" },
  { tone:"lt", hue:20, hex:"#AEA2D4", hueName:"青紫" },
  { tone:"lt", hue:22, hex:"#D4A0CC", hueName:"紫" },
  { tone:"lt", hue:24, hex:"#F0A2B8", hueName:"赤紫" },

  // ── soft（sf）── 拡張
  { tone:"sf", hue:1,  hex:"#C0808E", hueName:"紫みの赤" },
  { tone:"sf", hue:2,  hex:"#C98A8E", hueName:"赤" },
  { tone:"sf", hue:4,  hex:"#C89880", hueName:"赤みの橙" },
  { tone:"sf", hue:6,  hex:"#C4AE78", hueName:"黄みの橙" },
  { tone:"sf", hue:8,  hex:"#C4C27E", hueName:"黄" },
  { tone:"sf", hue:10, hex:"#98B480", hueName:"黄緑" },
  { tone:"sf", hue:12, hex:"#6AA882", hueName:"緑" },
  { tone:"sf", hue:14, hex:"#68A098", hueName:"青緑" },
  { tone:"sf", hue:16, hex:"#6898AC", hueName:"緑みの青" },
  { tone:"sf", hue:18, hex:"#7088B0", hueName:"青" },
  { tone:"sf", hue:20, hex:"#8E80A8", hueName:"青紫" },
  { tone:"sf", hue:22, hex:"#A47EA0", hueName:"紫" },
  { tone:"sf", hue:24, hex:"#B8809A", hueName:"赤紫" },

  // ── dull（d）── 拡張
  { tone:"d", hue:1,  hex:"#985868", hueName:"紫みの赤" },
  { tone:"d", hue:2,  hex:"#A06064", hueName:"赤" },
  { tone:"d", hue:4,  hex:"#9E7058", hueName:"赤みの橙" },
  { tone:"d", hue:6,  hex:"#9A8850", hueName:"黄みの橙" },
  { tone:"d", hue:8,  hex:"#9A9858", hueName:"黄" },
  { tone:"d", hue:10, hex:"#748E58", hueName:"黄緑" },
  { tone:"d", hue:12, hex:"#488868", hueName:"緑" },
  { tone:"d", hue:14, hex:"#487E78", hueName:"青緑" },
  { tone:"d", hue:16, hex:"#487888", hueName:"緑みの青" },
  { tone:"d", hue:18, hex:"#4E6888", hueName:"青" },
  { tone:"d", hue:20, hex:"#685E82", hueName:"青紫" },
  { tone:"d", hue:22, hex:"#805E7C", hueName:"紫" },
  { tone:"d", hue:24, hex:"#905C70", hueName:"赤紫" },

  // ── dark（dk）── 拡張
  { tone:"dk", hue:1,  hex:"#601E38", hueName:"紫みの赤" },
  { tone:"dk", hue:2,  hex:"#6E2B30", hueName:"赤" },
  { tone:"dk", hue:4,  hex:"#703818", hueName:"赤みの橙" },
  { tone:"dk", hue:6,  hex:"#785818", hueName:"黄みの橙" },
  { tone:"dk", hue:8,  hex:"#686418", hueName:"黄" },
  { tone:"dk", hue:10, hex:"#406020", hueName:"黄緑" },
  { tone:"dk", hue:12, hex:"#1A5E38", hueName:"緑" },
  { tone:"dk", hue:14, hex:"#185650", hueName:"青緑" },
  { tone:"dk", hue:16, hex:"#18485E", hueName:"緑みの青" },
  { tone:"dk", hue:18, hex:"#1A3858", hueName:"青" },
  { tone:"dk", hue:20, hex:"#302850", hueName:"青紫" },
  { tone:"dk", hue:22, hex:"#501E4A", hueName:"紫" },
  { tone:"dk", hue:24, hex:"#5E1E3A", hueName:"赤紫" },

  // ── pale（p）── 拡張
  { tone:"p", hue:1,  hex:"#F5C8D8", hueName:"紫みの赤" },
  { tone:"p", hue:2,  hex:"#F8D1D4", hueName:"赤" },
  { tone:"p", hue:4,  hex:"#F8DCC4", hueName:"赤みの橙" },
  { tone:"p", hue:6,  hex:"#F5E8C0", hueName:"黄みの橙" },
  { tone:"p", hue:8,  hex:"#F5F2C8", hueName:"黄" },
  { tone:"p", hue:10, hex:"#D8ECC0", hueName:"黄緑" },
  { tone:"p", hue:12, hex:"#B8E4C4", hueName:"緑" },
  { tone:"p", hue:14, hex:"#B0E0D8", hueName:"青緑" },
  { tone:"p", hue:16, hex:"#B0D8E4", hueName:"緑みの青" },
  { tone:"p", hue:18, hex:"#B8CEE8", hueName:"青" },
  { tone:"p", hue:20, hex:"#CCC4E0", hueName:"青紫" },
  { tone:"p", hue:22, hex:"#E0C4DC", hueName:"紫" },
  { tone:"p", hue:24, hex:"#F0C4D0", hueName:"赤紫" },

  // ── light grayish（ltg）── 拡張
  { tone:"ltg", hue:1,  hex:"#BCA0A8", hueName:"紫みの赤" },
  { tone:"ltg", hue:2,  hex:"#C4A0A3", hueName:"赤" },
  { tone:"ltg", hue:4,  hex:"#C0A898", hueName:"赤みの橙" },
  { tone:"ltg", hue:6,  hex:"#BCB090", hueName:"黄みの橙" },
  { tone:"ltg", hue:8,  hex:"#BCBA94", hueName:"黄" },
  { tone:"ltg", hue:10, hex:"#A0B498", hueName:"黄緑" },
  { tone:"ltg", hue:12, hex:"#8CB098", hueName:"緑" },
  { tone:"ltg", hue:14, hex:"#88A8A4", hueName:"青緑" },
  { tone:"ltg", hue:16, hex:"#88A4AE", hueName:"緑みの青" },
  { tone:"ltg", hue:18, hex:"#8A9CB4", hueName:"青" },
  { tone:"ltg", hue:20, hex:"#9C98B0", hueName:"青紫" },
  { tone:"ltg", hue:22, hex:"#B098AE", hueName:"紫" },
  { tone:"ltg", hue:24, hex:"#B89CA8", hueName:"赤紫" },

  // ── grayish（g）── 拡張
  { tone:"g", hue:1,  hex:"#886068", hueName:"紫みの赤" },
  { tone:"g", hue:2,  hex:"#8E6064", hueName:"赤" },
  { tone:"g", hue:4,  hex:"#8C6C58", hueName:"赤みの橙" },
  { tone:"g", hue:6,  hex:"#887A54", hueName:"黄みの橙" },
  { tone:"g", hue:8,  hex:"#888462", hueName:"黄" },
  { tone:"g", hue:10, hex:"#6C7E5E", hueName:"黄緑" },
  { tone:"g", hue:12, hex:"#587868", hueName:"緑" },
  { tone:"g", hue:14, hex:"#587474", hueName:"青緑" },
  { tone:"g", hue:16, hex:"#58707C", hueName:"緑みの青" },
  { tone:"g", hue:18, hex:"#586878", hueName:"青" },
  { tone:"g", hue:20, hex:"#686278", hueName:"青紫" },
  { tone:"g", hue:22, hex:"#7E5E78", hueName:"紫" },
  { tone:"g", hue:24, hex:"#885E6E", hueName:"赤紫" },

  // ── dark grayish（dkg）── 拡張
  { tone:"dkg", hue:1,  hex:"#4C3038", hueName:"紫みの赤" },
  { tone:"dkg", hue:2,  hex:"#53363A", hueName:"赤" },
  { tone:"dkg", hue:4,  hex:"#503C30", hueName:"赤みの橙" },
  { tone:"dkg", hue:6,  hex:"#4E4630", hueName:"黄みの橙" },
  { tone:"dkg", hue:8,  hex:"#4E4C30", hueName:"黄" },
  { tone:"dkg", hue:10, hex:"#3C4830", hueName:"黄緑" },
  { tone:"dkg", hue:12, hex:"#2E4E3A", hueName:"緑" },
  { tone:"dkg", hue:14, hex:"#2E4A44", hueName:"青緑" },
  { tone:"dkg", hue:16, hex:"#2E444C", hueName:"緑みの青" },
  { tone:"dkg", hue:18, hex:"#2E3E50", hueName:"青" },
  { tone:"dkg", hue:20, hex:"#383650", hueName:"青紫" },
  { tone:"dkg", hue:22, hex:"#483248", hueName:"紫" },
  { tone:"dkg", hue:24, hex:"#4E3240", hueName:"赤紫" },
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

// ============================================================
// 慣用色名トレーニングデータ
// ============================================================
// 色を見て正しい慣用色名を当てる問題用。
// category: "赤系","橙系","黄系","緑系","青系","紫系","茶系","無彩色系" でグルーピング
// 不正解選択肢は同カテゴリ内から選ばれるため、より実践的な判別力が鍛えられます。

const kanyoushokuData = [
  // ── 赤系 ──
  { name:"紅色", reading:"べにいろ", hex:"#D7003A", category:"赤系" },
  { name:"朱色", reading:"しゅいろ", hex:"#E34234", category:"赤系" },
  { name:"茜色", reading:"あかねいろ", hex:"#B7282E", category:"赤系" },
  { name:"臙脂", reading:"えんじ", hex:"#9B111E", category:"赤系" },
  { name:"赤銅色", reading:"しゃくどういろ", hex:"#752100", category:"赤系" },
  { name:"珊瑚色", reading:"さんごいろ", hex:"#F88379", category:"赤系" },
  { name:"薔薇色", reading:"ばらいろ", hex:"#E73275", category:"赤系" },
  { name:"桃色", reading:"ももいろ", hex:"#F09199", category:"赤系" },
  { name:"撫子色", reading:"なでしこいろ", hex:"#E597B2", category:"赤系" },
  { name:"紅梅色", reading:"こうばいいろ", hex:"#E86B79", category:"赤系" },
  { name:"桜色", reading:"さくらいろ", hex:"#FEEEED", category:"赤系" },
  { name:"韓紅", reading:"からくれない", hex:"#E2041B", category:"赤系" },
  { name:"蘇芳", reading:"すおう", hex:"#8E354A", category:"赤系" },
  { name:"真紅", reading:"しんく", hex:"#A22041", category:"赤系" },
  { name:"鴇色", reading:"ときいろ", hex:"#F4B3C2", category:"赤系" },
  { name:"小豆色", reading:"あずきいろ", hex:"#96514D", category:"赤系" },
  { name:"一斤染", reading:"いっこんぞめ", hex:"#F5C9C6", category:"赤系" },
  { name:"退紅", reading:"たいこう", hex:"#D69090", category:"赤系" },

  // ── 橙系 ──
  { name:"橙色", reading:"だいだいいろ", hex:"#F08300", category:"橙系" },
  { name:"蜜柑色", reading:"みかんいろ", hex:"#F08300", category:"橙系" },
  { name:"杏色", reading:"あんずいろ", hex:"#F7B977", category:"橙系" },
  { name:"柿色", reading:"かきいろ", hex:"#ED6D3D", category:"橙系" },
  { name:"照柿", reading:"てりがき", hex:"#C34A2C", category:"橙系" },
  { name:"肌色", reading:"はだいろ", hex:"#F1BF99", category:"橙系" },
  { name:"洗朱", reading:"あらいしゅ", hex:"#D0826C", category:"橙系" },
  { name:"赤橙", reading:"あかだいだい", hex:"#E95C4B", category:"橙系" },
  { name:"黄丹", reading:"おうに", hex:"#EE7948", category:"橙系" },
  { name:"丹色", reading:"にいろ", hex:"#E45E32", category:"橙系" },
  { name:"人参色", reading:"にんじんいろ", hex:"#EC6D51", category:"橙系" },
  { name:"鉛丹色", reading:"えんたんいろ", hex:"#E45E00", category:"橙系" },

  // ── 黄系 ──
  { name:"山吹色", reading:"やまぶきいろ", hex:"#F8B400", category:"黄系" },
  { name:"鬱金色", reading:"うこんいろ", hex:"#E6B422", category:"黄系" },
  { name:"卵色", reading:"たまごいろ", hex:"#FFD54F", category:"黄系" },
  { name:"黄檗色", reading:"きはだいろ", hex:"#FEF263", category:"黄系" },
  { name:"刈安色", reading:"かりやすいろ", hex:"#F5E56B", category:"黄系" },
  { name:"菜の花色", reading:"なのはないろ", hex:"#FFEC47", category:"黄系" },
  { name:"向日葵色", reading:"ひまわりいろ", hex:"#FFC20E", category:"黄系" },
  { name:"蒲公英色", reading:"たんぽぽいろ", hex:"#FFD900", category:"黄系" },
  { name:"黄土色", reading:"おうどいろ", hex:"#C39143", category:"黄系" },
  { name:"芥子色", reading:"からしいろ", hex:"#C8A65D", category:"黄系" },
  { name:"飴色", reading:"あめいろ", hex:"#CA8269", category:"黄系" },
  { name:"金色", reading:"きんいろ", hex:"#CFB53B", category:"黄系" },
  { name:"クリーム色", reading:"くりーむいろ", hex:"#FFF3B8", category:"黄系" },
  { name:"象牙色", reading:"ぞうげいろ", hex:"#F8F4E6", category:"黄系" },
  { name:"亜麻色", reading:"あまいろ", hex:"#D6C6AF", category:"黄系" },
  { name:"生成色", reading:"きなりいろ", hex:"#F5F0E7", category:"黄系" },

  // ── 緑系 ──
  { name:"萌黄", reading:"もえぎ", hex:"#AACF53", category:"緑系" },
  { name:"若草色", reading:"わかくさいろ", hex:"#B9D08B", category:"緑系" },
  { name:"若葉色", reading:"わかばいろ", hex:"#98D98E", category:"緑系" },
  { name:"草色", reading:"くさいろ", hex:"#7B8D42", category:"緑系" },
  { name:"苔色", reading:"こけいろ", hex:"#69821B", category:"緑系" },
  { name:"松葉色", reading:"まつばいろ", hex:"#3C6754", category:"緑系" },
  { name:"千歳緑", reading:"ちとせみどり", hex:"#316745", category:"緑系" },
  { name:"翡翠色", reading:"ひすいいろ", hex:"#38B48B", category:"緑系" },
  { name:"青磁色", reading:"せいじいろ", hex:"#7EBEA5", category:"緑系" },
  { name:"鶯色", reading:"うぐいすいろ", hex:"#928C36", category:"緑系" },
  { name:"抹茶色", reading:"まっちゃいろ", hex:"#B5C4A1", category:"緑系" },
  { name:"深緑", reading:"ふかみどり", hex:"#005731", category:"緑系" },
  { name:"常盤色", reading:"ときわいろ", hex:"#007B43", category:"緑系" },
  { name:"白緑", reading:"びゃくろく", hex:"#D6E9CA", category:"緑系" },
  { name:"柳色", reading:"やなぎいろ", hex:"#A8C97F", category:"緑系" },
  { name:"若竹色", reading:"わかたけいろ", hex:"#68BE8D", category:"緑系" },
  { name:"利休鼠", reading:"りきゅうねずみ", hex:"#7E8E77", category:"緑系" },
  { name:"鉄色", reading:"てついろ", hex:"#005243", category:"緑系" },
  { name:"錆青磁", reading:"さびせいじ", hex:"#6C848D", category:"緑系" },
  { name:"ビリジアン", reading:"びりじあん", hex:"#009976", category:"緑系" },

  // ── 青系 ──
  { name:"浅葱色", reading:"あさぎいろ", hex:"#00A3AF", category:"青系" },
  { name:"水色", reading:"みずいろ", hex:"#BCE2E8", category:"青系" },
  { name:"空色", reading:"そらいろ", hex:"#75C2E0", category:"青系" },
  { name:"群青色", reading:"ぐんじょういろ", hex:"#4753A2", category:"青系" },
  { name:"紺色", reading:"こんいろ", hex:"#1B294B", category:"青系" },
  { name:"藍色", reading:"あいいろ", hex:"#165E83", category:"青系" },
  { name:"納戸色", reading:"なんどいろ", hex:"#008899", category:"青系" },
  { name:"露草色", reading:"つゆくさいろ", hex:"#38A1DB", category:"青系" },
  { name:"瑠璃色", reading:"るりいろ", hex:"#1E50A2", category:"青系" },
  { name:"紺碧", reading:"こんぺき", hex:"#007BBB", category:"青系" },
  { name:"縹色", reading:"はなだいろ", hex:"#2792C3", category:"青系" },
  { name:"勿忘草色", reading:"わすれなぐさいろ", hex:"#89C3EB", category:"青系" },
  { name:"白群", reading:"びゃくぐん", hex:"#83C5EB", category:"青系" },
  { name:"花色", reading:"はないろ", hex:"#4D84A0", category:"青系" },
  { name:"甕覗", reading:"かめのぞき", hex:"#C6E3E1", category:"青系" },
  { name:"新橋色", reading:"しんばしいろ", hex:"#59B9C6", category:"青系" },
  { name:"鉄紺", reading:"てつこん", hex:"#17184B", category:"青系" },
  { name:"紺青", reading:"こんじょう", hex:"#003171", category:"青系" },
  { name:"ターコイズ", reading:"たーこいず", hex:"#00AFCC", category:"青系" },
  { name:"セルリアンブルー", reading:"せるりあんぶるー", hex:"#2A83A2", category:"青系" },

  // ── 紫系 ──
  { name:"藤色", reading:"ふじいろ", hex:"#BAA8D3", category:"紫系" },
  { name:"牡丹色", reading:"ぼたんいろ", hex:"#E44D93", category:"紫系" },
  { name:"菫色", reading:"すみれいろ", hex:"#7058A3", category:"紫系" },
  { name:"藤紫", reading:"ふじむらさき", hex:"#8F77B5", category:"紫系" },
  { name:"江戸紫", reading:"えどむらさき", hex:"#6B3F7E", category:"紫系" },
  { name:"古代紫", reading:"こだいむらさき", hex:"#7D4B8D", category:"紫系" },
  { name:"紅紫", reading:"こうし", hex:"#C73E8C", category:"紫系" },
  { name:"紫苑色", reading:"しおんいろ", hex:"#9B7EB5", category:"紫系" },
  { name:"桔梗色", reading:"ききょういろ", hex:"#5654A2", category:"紫系" },
  { name:"杜若色", reading:"かきつばたいろ", hex:"#523F6D", category:"紫系" },
  { name:"菖蒲色", reading:"あやめいろ", hex:"#674598", category:"紫系" },
  { name:"茄子紺", reading:"なすこん", hex:"#45166B", category:"紫系" },
  { name:"滅紫", reading:"けしむらさき", hex:"#5A4171", category:"紫系" },
  { name:"薄紫", reading:"うすむらさき", hex:"#C4A3D4", category:"紫系" },
  { name:"ラベンダー", reading:"らべんだー", hex:"#B9A8D6", category:"紫系" },

  // ── 茶系 ──
  { name:"栗色", reading:"くりいろ", hex:"#762F07", category:"茶系" },
  { name:"鳶色", reading:"とびいろ", hex:"#8B4C39", category:"茶系" },
  { name:"煉瓦色", reading:"れんがいろ", hex:"#B55233", category:"茶系" },
  { name:"茶色", reading:"ちゃいろ", hex:"#965042", category:"茶系" },
  { name:"焦茶", reading:"こげちゃ", hex:"#462F12", category:"茶系" },
  { name:"狐色", reading:"きつねいろ", hex:"#C38743", category:"茶系" },
  { name:"琥珀色", reading:"こはくいろ", hex:"#C49A6A", category:"茶系" },
  { name:"駱駝色", reading:"らくだいろ", hex:"#BF794E", category:"茶系" },
  { name:"赤茶", reading:"あかちゃ", hex:"#8C4736", category:"茶系" },
  { name:"弁柄色", reading:"べんがらいろ", hex:"#8B2500", category:"茶系" },
  { name:"海老茶", reading:"えびちゃ", hex:"#6C3524", category:"茶系" },
  { name:"胡桃色", reading:"くるみいろ", hex:"#A47149", category:"茶系" },
  { name:"代赭", reading:"たいしゃ", hex:"#BB5535", category:"茶系" },
  { name:"肉桂色", reading:"にっけいいろ", hex:"#BE7F51", category:"茶系" },
  { name:"土色", reading:"つちいろ", hex:"#BC8F50", category:"茶系" },
  { name:"柿渋色", reading:"かきしぶいろ", hex:"#9F6131", category:"茶系" },
  { name:"路考茶", reading:"ろこうちゃ", hex:"#8C7042", category:"茶系" },
  { name:"丁子色", reading:"ちょうじいろ", hex:"#C49E5F", category:"茶系" },
  { name:"ベージュ", reading:"べーじゅ", hex:"#CAAC71", category:"茶系" },
  { name:"生壁色", reading:"なまかべいろ", hex:"#94846A", category:"茶系" },

  // ── 無彩色・その他 ──
  { name:"銀鼠", reading:"ぎんねず", hex:"#ABA9A4", category:"無彩色系" },
  { name:"鉛色", reading:"なまりいろ", hex:"#7B7C7D", category:"無彩色系" },
  { name:"利休色", reading:"りきゅういろ", hex:"#8C8861", category:"無彩色系" },
  { name:"墨色", reading:"すみいろ", hex:"#343434", category:"無彩色系" },
  { name:"灰白色", reading:"かいはくしょく", hex:"#E0E0DA", category:"無彩色系" },
  { name:"素鼠", reading:"すねずみ", hex:"#9EA1A3", category:"無彩色系" },
  { name:"消炭色", reading:"けしずみいろ", hex:"#524E4D", category:"無彩色系" },
  { name:"藍墨茶", reading:"あいすみちゃ", hex:"#474A4D", category:"無彩色系" },
];
