// ============================================================
// STATE
// ============================================================
let currentGrade = "";
let questions = [];
let currentIdx = 0;
let score = 0;
let answered = false;
let selectedIdx = null;
let currentTab = "基本色名";

// ============================================================
// SVG ICONS
// ============================================================
const SVG_ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
const SVG_CHECK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
const SVG_X = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

// ============================================================
// UTILITIES
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 200;
}

// ============================================================
// SCREEN NAVIGATION
// ============================================================
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.getElementById('quiz-footer').classList.remove('show');
  window.scrollTo(0, 0);

  if (name === 'grade') {
    document.getElementById('count-3').textContent = quizData["3級"].length + "問";
    document.getElementById('count-2').textContent = quizData["2級"].length + "問";
  }
  if (name === 'colorList') {
    initColorList();
  }
}

// ============================================================
// QUIZ
// ============================================================
function startQuiz(grade) {
  currentGrade = grade;
  questions = shuffle(quizData[grade]);
  currentIdx = 0;
  score = 0;
  document.getElementById('quiz-header-title').textContent = grade + ' 問題演習';
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  selectedIdx = null;
  const q = questions[currentIdx];
  const total = questions.length;

  document.getElementById('progress-fill').style.width = ((currentIdx + 1) / total * 100) + '%';
  document.getElementById('quiz-counter').textContent = 'Q' + (currentIdx + 1) + ' / ' + total;
  document.getElementById('quiz-category').textContent = q.category;
  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('explanation-container').innerHTML = '';
  document.getElementById('quiz-footer').classList.remove('show');

  const labels = ['A', 'B', 'C', 'D'];
  let html = '';
  q.choices.forEach((c, i) => {
    html += '<button class="choice-btn" onclick="selectChoice(' + i + ')" id="choice-' + i + '">';
    html += '<span class="choice-label" id="label-' + i + '">' + labels[i] + '</span>';
    html += '<span>' + c + '</span>';
    html += '</button>';
  });
  document.getElementById('choices-container').innerHTML = html;
  window.scrollTo(0, 0);
}

function selectChoice(idx) {
  if (answered) return;
  answered = true;
  selectedIdx = idx;
  const q = questions[currentIdx];
  if (idx === q.answer) score++;

  const labels = ['A', 'B', 'C', 'D'];
  for (let i = 0; i < q.choices.length; i++) {
    const btn = document.getElementById('choice-' + i);
    const lbl = document.getElementById('label-' + i);
    btn.classList.add('disabled');
    if (i === q.answer) {
      btn.classList.add('correct');
      lbl.innerHTML = SVG_CHECK;
    } else if (i === idx) {
      btn.classList.add('wrong');
      lbl.innerHTML = SVG_X;
    }
  }

  document.getElementById('explanation-container').innerHTML =
    '<div class="explanation"><div class="explanation-title">💡 解説</div><p>' + q.explanation + '</p></div>';

  const isLast = currentIdx === questions.length - 1;
  document.getElementById('next-btn').innerHTML = (isLast ? '結果を見る' : '次の問題') + ' ' + SVG_ARROW;
  document.getElementById('quiz-footer').classList.add('show');
}

function nextQuestion() {
  if (currentIdx >= questions.length - 1) {
    showResult();
    return;
  }
  currentIdx++;
  renderQuestion();
}

function showResult() {
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  let title, sub;
  if (pct >= 90)      { title = "素晴らしい！🎉"; sub = "合格圏内です！この調子で頑張りましょう"; }
  else if (pct >= 70) { title = "よくできました！👏"; sub = "もう少しで合格ラインです"; }
  else if (pct >= 50) { title = "あと少し！💪"; sub = "苦手分野を復習しましょう"; }
  else                { title = "頑張りましょう！📖"; sub = "テキストを見直して再チャレンジ"; }

  document.getElementById('result-header-title').textContent = currentGrade + ' 結果';
  document.getElementById('result-pct').textContent = pct + '%';
  document.getElementById('result-total').textContent = score + ' / ' + total + '問正解';
  document.getElementById('result-message').textContent = title;
  document.getElementById('result-sub').textContent = currentGrade + ' ─ ' + sub;
  showScreen('result');
}

// ============================================================
// COLOR LIST
// ============================================================
function initColorList() {
  const tabs = Object.keys(colorListData);
  currentTab = tabs[0];
  let html = '';
  tabs.forEach(t => {
    html += '<button class="tab' + (t === currentTab ? ' active' : '') + '" onclick="switchTab(this, \'' + t + '\')">' + t + '</button>';
  });
  document.getElementById('tab-bar').innerHTML = html;
  renderColors();
}

function switchTab(el, tab) {
  currentTab = tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderColors();
}

function renderColors() {
  const colors = colorListData[currentTab];
  let html = '';
  colors.forEach(c => {
    html += '<div class="color-card">';
    html += '<div class="color-swatch' + (isLightColor(c.hex) ? ' light-color' : '') + '" style="background:' + c.hex + '">';
    html += '<span class="color-hex">' + c.hex + '</span>';
    html += '</div>';
    html += '<div class="color-info">';
    html += '<div class="color-name">' + c.name + '</div>';
    html += '<div class="color-name-en">' + c.nameEn + '</div>';
    if (c.desc) html += '<div class="color-desc">' + c.desc + '</div>';
    html += '</div></div>';
  });
  document.getElementById('color-grid').innerHTML = html;
}

// ============================================================
// SERVICE WORKER
// ============================================================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ============================================================
// COLOR TRAINING
// ============================================================
const TRAINING_COUNT = 10; // 1セットの出題数
let trainingQuestions = [];
let trainingIdx = 0;
let trainingScore = 0;
let trainingAnswered = false;

function startTraining() {
  trainingQuestions = generateTrainingQuestions(TRAINING_COUNT);
  trainingIdx = 0;
  trainingScore = 0;
  showScreen('training');
  renderTraining();
}

function generateTrainingQuestions(count) {
  const pool = shuffle([...pccsTrainingData]);
  const selected = pool.slice(0, count);

  return selected.map(correctColor => {
    // 不正解の選択肢を生成（同トーン別色相、同色相別トーン、完全ランダムを混ぜる）
    const distractors = generateDistractors(correctColor, pool);
    const choices = shuffle([correctColor, ...distractors]);
    const answerIdx = choices.indexOf(correctColor);
    return { color: correctColor, choices, answer: answerIdx };
  });
}

function generateDistractors(correct, pool) {
  const candidates = pool.filter(c => c !== correct);
  const result = [];

  // 同トーン・別色相の色を1つ
  const sameTone = shuffle(candidates.filter(c => c.tone === correct.tone && c.hue !== correct.hue));
  if (sameTone.length > 0) result.push(sameTone[0]);

  // 同色相・別トーンの色を1つ
  const sameHue = shuffle(candidates.filter(c => c.hue === correct.hue && c.tone !== correct.tone));
  if (sameHue.length > 0 && result.length < 3) result.push(sameHue[0]);

  // 残りをランダムで埋める（既出を除く）
  const used = new Set([correct, ...result]);
  const others = shuffle(candidates.filter(c => !used.has(c)));
  while (result.length < 3 && others.length > 0) {
    result.push(others.shift());
  }

  return result.slice(0, 3);
}

function formatCode(color) {
  return color.tone + color.hue;
}

function formatDescription(color) {
  return toneNames[color.tone] + '・' + color.hueName;
}

function renderTraining() {
  trainingAnswered = false;
  const q = trainingQuestions[trainingIdx];
  const total = trainingQuestions.length;

  document.getElementById('training-progress-fill').style.width = ((trainingIdx + 1) / total * 100) + '%';
  document.getElementById('training-counter').textContent = 'Q' + (trainingIdx + 1) + ' / ' + total;

  // Color swatch
  const swatch = document.getElementById('training-swatch');
  swatch.style.background = q.color.hex;
  swatch.className = 'training-swatch' + (isLightColor(q.color.hex) ? ' light-swatch' : '');

  // Hide hint initially
  const hint = document.getElementById('training-hint');
  hint.textContent = q.color.hueName;
  hint.classList.remove('show');

  // Choices
  const labels = ['A', 'B', 'C', 'D'];
  let html = '';
  q.choices.forEach((c, i) => {
    html += '<button class="training-choice-btn" onclick="selectTraining(' + i + ')" id="tc-' + i + '">';
    html += '<span class="choice-label" id="tl-' + i + '">' + labels[i] + '</span>';
    html += '<span class="choice-detail">';
    html += '<span class="choice-code">' + formatCode(c) + '</span>';
    html += '<span class="choice-sub">' + formatDescription(c) + '</span>';
    html += '</span>';
    html += '</button>';
  });
  document.getElementById('training-choices').innerHTML = html;
  document.getElementById('training-explanation').innerHTML = '';
  document.getElementById('training-footer').classList.remove('show');

  window.scrollTo(0, 0);
}

function selectTraining(idx) {
  if (trainingAnswered) return;
  trainingAnswered = true;
  const q = trainingQuestions[trainingIdx];
  if (idx === q.answer) trainingScore++;

  // Record stats
  recordAttempt(q.color, idx === q.answer);

  // Show hint
  document.getElementById('training-hint').classList.add('show');

  // Style buttons
  for (let i = 0; i < q.choices.length; i++) {
    const btn = document.getElementById('tc-' + i);
    const lbl = document.getElementById('tl-' + i);
    btn.classList.add('disabled');
    if (i === q.answer) {
      btn.classList.add('correct');
      lbl.innerHTML = SVG_CHECK;
    } else if (i === idx) {
      btn.classList.add('wrong');
      lbl.innerHTML = SVG_X;
    }
  }

  // Explanation
  const correct = q.color;
  const expHtml = '<div class="explanation">' +
    '<div class="explanation-title">💡 正解</div>' +
    '<p><strong>' + formatCode(correct) + '</strong>（' + toneNames[correct.tone] + '・' + correct.hueName + '）<br>' +
    'トーン：' + correct.tone + '（' + toneNames[correct.tone] + '）<br>' +
    '色相番号：' + correct.hue + '（' + correct.hueName + '）</p>' +
    '</div>';
  document.getElementById('training-explanation').innerHTML = expHtml;

  // Next button
  const isLast = trainingIdx === trainingQuestions.length - 1;
  document.getElementById('training-next-btn').innerHTML = (isLast ? '結果を見る' : '次の問題') + ' ' + SVG_ARROW;
  document.getElementById('training-footer').classList.add('show');
}

function nextTraining() {
  if (trainingIdx >= trainingQuestions.length - 1) {
    showTrainingResult();
    return;
  }
  trainingIdx++;
  renderTraining();
}

function showTrainingResult() {
  const total = trainingQuestions.length;
  const pct = Math.round((trainingScore / total) * 100);
  let title, sub;
  if (pct >= 90)      { title = "素晴らしい色感覚！🎨"; sub = "色の見分けがしっかりできています"; }
  else if (pct >= 70) { title = "なかなかの目利き！👁️"; sub = "よく見極められています"; }
  else if (pct >= 50) { title = "あと少し！💪"; sub = "トーンと色相の組み合わせを復習しましょう"; }
  else                { title = "練習あるのみ！📖"; sub = "色見本を見ながら感覚を鍛えましょう"; }

  document.getElementById('training-result-pct').textContent = pct + '%';
  document.getElementById('training-result-total').textContent = trainingScore + ' / ' + total + '問正解';
  document.getElementById('training-result-message').textContent = title;
  document.getElementById('training-result-sub').textContent = '色感覚トレーニング ─ ' + sub;
  showScreen('trainingResult');
}

// ============================================================
// STATISTICS (localStorage)
// ============================================================
const STATS_KEY = 'colorTrainingStats';

function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    return raw ? JSON.parse(raw) : { attempts: [] };
  } catch(e) {
    return { attempts: [] };
  }
}

function saveStats(stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch(e) {}
}

function recordAttempt(color, isCorrect) {
  const stats = loadStats();
  stats.attempts.push({
    tone: color.tone,
    hue: color.hue,
    correct: isCorrect,
    date: new Date().toISOString()
  });
  saveStats(stats);
}

function clearStats() {
  if (confirm('学習履歴をすべて削除しますか？')) {
    localStorage.removeItem(STATS_KEY);
    renderStats();
  }
}

function showStats() {
  showScreen('stats');
  renderStats();
}

function renderStats() {
  const stats = loadStats();
  const attempts = stats.attempts;

  // Total summary
  const total = attempts.length;
  const correct = attempts.filter(a => a.correct).length;
  const wrong = total - correct;

  document.getElementById('stats-total').textContent = total;
  document.getElementById('stats-correct').textContent = correct;
  document.getElementById('stats-wrong').textContent = wrong;
  document.getElementById('stats-rate').textContent = total > 0 ? Math.round(correct / total * 100) + '%' : '—';

  if (total === 0) {
    document.getElementById('stats-detail').innerHTML = '<p class="stats-empty">まだ学習履歴がありません。<br>色感覚トレーニングを始めましょう！</p>';
    return;
  }

  // Aggregate by tone
  const toneOrder = ['v','b','s','dp','lt','sf','d','dk','p','ltg','g','dkg'];
  const byTone = {};
  toneOrder.forEach(t => byTone[t] = { total: 0, wrong: 0 });
  attempts.forEach(a => {
    if (byTone[a.tone]) {
      byTone[a.tone].total++;
      if (!a.correct) byTone[a.tone].wrong++;
    }
  });

  // Aggregate by hue
  const byHue = {};
  for (let h = 1; h <= 24; h++) byHue[h] = { total: 0, wrong: 0 };
  attempts.forEach(a => {
    if (byHue[a.hue]) {
      byHue[a.hue].total++;
      if (!a.correct) byHue[a.hue].wrong++;
    }
  });

  // Hue names
  const hueNameMap = {};
  pccsTrainingData.forEach(c => { hueNameMap[c.hue] = c.hueName; });

  // Build HTML
  let html = '';

  // ── Tone section ──
  html += '<h3 class="stats-section-title">トーン別の苦手度</h3>';
  html += '<div class="stats-bar-list">';
  const toneItems = toneOrder
    .filter(t => byTone[t].total > 0)
    .map(t => ({ key: t, label: t + '（' + toneNames[t] + '）', ...byTone[t] }))
    .sort((a, b) => (b.wrong / b.total) - (a.wrong / a.total));

  toneItems.forEach(item => {
    const wrongRate = Math.round(item.wrong / item.total * 100);
    const barClass = wrongRate >= 50 ? 'bar-danger' : wrongRate >= 25 ? 'bar-warn' : 'bar-ok';
    html += '<div class="stats-bar-item">';
    html += '<div class="stats-bar-label"><span class="stats-bar-name">' + item.label + '</span><span class="stats-bar-nums">' + item.wrong + '/' + item.total + '問ミス</span></div>';
    html += '<div class="stats-bar-track"><div class="stats-bar-fill ' + barClass + '" style="width:' + wrongRate + '%"></div></div>';
    html += '</div>';
  });
  html += '</div>';

  // ── Hue section ──
  html += '<h3 class="stats-section-title" style="margin-top:28px">色相別の苦手度</h3>';
  html += '<div class="stats-bar-list">';
  const hueItems = Object.keys(byHue)
    .filter(h => byHue[h].total > 0)
    .map(h => ({ key: h, label: h + '：' + (hueNameMap[h] || ''), ...byHue[h] }))
    .sort((a, b) => (b.wrong / b.total) - (a.wrong / a.total));

  hueItems.forEach(item => {
    const wrongRate = Math.round(item.wrong / item.total * 100);
    const barClass = wrongRate >= 50 ? 'bar-danger' : wrongRate >= 25 ? 'bar-warn' : 'bar-ok';
    html += '<div class="stats-bar-item">';
    html += '<div class="stats-bar-label"><span class="stats-bar-name">' + item.label + '</span><span class="stats-bar-nums">' + item.wrong + '/' + item.total + '問ミス</span></div>';
    html += '<div class="stats-bar-track"><div class="stats-bar-fill ' + barClass + '" style="width:' + wrongRate + '%"></div></div>';
    html += '</div>';
  });
  html += '</div>';

  // ── Worst combos ──
  const byCombo = {};
  attempts.forEach(a => {
    const key = a.tone + a.hue;
    if (!byCombo[key]) byCombo[key] = { tone: a.tone, hue: a.hue, total: 0, wrong: 0 };
    byCombo[key].total++;
    if (!a.correct) byCombo[key].wrong++;
  });

  const worstCombos = Object.values(byCombo)
    .filter(c => c.wrong > 0)
    .sort((a, b) => b.wrong - a.wrong || (b.wrong/b.total) - (a.wrong/a.total))
    .slice(0, 8);

  if (worstCombos.length > 0) {
    html += '<h3 class="stats-section-title" style="margin-top:28px">特に苦手な色（トーン×色相）</h3>';
    html += '<div class="stats-combo-list">';
    worstCombos.forEach(c => {
      const color = pccsTrainingData.find(d => d.tone === c.tone && d.hue === c.hue);
      const hexColor = color ? color.hex : '#888';
      html += '<div class="stats-combo-item">';
      html += '<span class="stats-combo-chip" style="background:' + hexColor + ';' + (isLightColor(hexColor) ? 'box-shadow:inset 0 0 0 1px rgba(0,0,0,0.1)' : '') + '"></span>';
      html += '<span class="stats-combo-code">' + c.tone + c.hue + '</span>';
      html += '<span class="stats-combo-name">' + toneNames[c.tone] + '・' + (hueNameMap[c.hue] || '') + '</span>';
      html += '<span class="stats-combo-count">' + c.wrong + '回ミス</span>';
      html += '</div>';
    });
    html += '</div>';
  }

  document.getElementById('stats-detail').innerHTML = html;
}
