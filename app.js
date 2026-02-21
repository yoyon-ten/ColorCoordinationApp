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
