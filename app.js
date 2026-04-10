// ============================================
// CBTI — 管理咨询顾问人格测试
// ============================================

// ============ 浮动金币背景 ============
(function initBubbles() {
  var canvas = document.getElementById('bubble-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var bubbles = [];
  var w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function spawn() {
    if (bubbles.length < 20 && Math.random() < 0.04) {
      bubbles.push({
        x: Math.random() * w,
        y: h + 10,
        r: 1.5 + Math.random() * 3,
        speed: 0.25 + Math.random() * 0.45,
        wobble: Math.random() * Math.PI * 2,
        ws: 0.01 + Math.random() * 0.015,
        opacity: 0.06 + Math.random() * 0.1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    spawn();
    for (var i = bubbles.length - 1; i >= 0; i--) {
      var b = bubbles[i];
      b.y -= b.speed;
      b.wobble += b.ws;
      b.x += Math.sin(b.wobble) * 0.25;

      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(196, 154, 42, ' + b.opacity + ')';
      ctx.lineWidth = 0.6;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(b.x - b.r * 0.25, b.y - b.r * 0.25, b.r * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, ' + (b.opacity * 0.8) + ')';
      ctx.fill();

      if (b.y < -10) bubbles.splice(i, 1);
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
})();

// ============ State ============
var currentQuestion = 0;
var scores = { depth: 0, action: 0, social: 0, exp: 0 };
var isTransitioning = false;

// ============ Rank labels ============
var depthLabels = [
  [0, '📋 实习生'], [5, '💼 分析师'], [10, '📊 高级分析师'],
  [15, '🎯 经理'], [20, '🏆 高级经理'],
  [25, '👔 总监'], [28, '💎 副合伙人'], [30, '👑 合伙人']
];

function getDepthLabel(n) {
  for (var i = depthLabels.length - 1; i >= 0; i--) {
    if (n >= depthLabels[i][0]) return depthLabels[i][1];
  }
  return depthLabels[0][1];
}

// ============ Screen ============
function showScreen(id) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) screens[i].classList.remove('active');
  document.getElementById(id).classList.add('active');
}

// ============ Start ============
function startQuiz() {
  currentQuestion = 0;
  scores = { depth: 0, action: 0, social: 0, exp: 0 };
  showScreen('screen-quiz');
  setTimeout(function() { renderQuestion(); }, 50);
}

// ============ Render Question ============
function renderQuestion() {
  if (typeof QUESTIONS === 'undefined') {
    console.error('QUESTIONS not loaded');
    return;
  }

  var q = QUESTIONS[currentQuestion];
  document.getElementById('question-text').textContent = q.text;
  document.getElementById('progress-fill').style.width = ((currentQuestion / QUESTIONS.length) * 100) + '%';
  document.getElementById('question-num').textContent = currentQuestion + 1;
  document.getElementById('depth-indicator').textContent = getDepthLabel(currentQuestion);

  var container = document.getElementById('options-container');
  container.className = 'options-container';
  container.innerHTML = '';

  for (var i = 0; i < q.options.length; i++) {
    (function(idx) {
      var btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = q.options[idx].text;
      btn.onclick = function() { selectOption(idx); };
      container.appendChild(btn);
    })(i);
  }
}

// ============ Select ============
function selectOption(index) {
  if (isTransitioning) return;
  isTransitioning = true;

  var q = QUESTIONS[currentQuestion];
  var opt = q.options[index];
  var btns = document.querySelectorAll('.option-btn');
  btns[index].classList.add('selected');

  var keys = Object.keys(opt.scores);
  for (var i = 0; i < keys.length; i++) {
    scores[keys[i]] += opt.scores[keys[i]];
  }

  setTimeout(function() {
    currentQuestion++;
    if (currentQuestion >= QUESTIONS.length) {
      showCalculating();
    } else {
      transitionQuestion();
    }
  }, 300);
}

// ============ Transition ============
function transitionQuestion() {
  var card = document.getElementById('question-card');
  var opts = document.getElementById('options-container');

  card.classList.add('slide-out');
  opts.classList.add('fade-out');

  setTimeout(function() {
    card.classList.remove('slide-out');
    card.classList.add('slide-in');
    renderQuestion();
    setTimeout(function() {
      card.classList.remove('slide-in');
      isTransitioning = false;
    }, 250);
  }, 250);
}

// ============ Calculating ============
function showCalculating() {
  showScreen('screen-calculating');

  var depthEl = document.querySelector('.depth-num');
  var textEl = document.getElementById('calc-text');
  var msgs = ['正在分析你的咨询灵魂...', '检测PPT产能...', '评估客户关系倾向...', '计算内卷指数...', '匹配咨询人格...'];
  var depth = 0, mi = 0;

  var di = setInterval(function() {
    depth += 3;
    depthEl.textContent = depth;
    if (depth >= 120) clearInterval(di);
  }, 55);

  var ti = setInterval(function() {
    mi++;
    if (mi < msgs.length) textEl.textContent = msgs[mi];
  }, 500);

  setTimeout(function() {
    clearInterval(di);
    clearInterval(ti);
    showResult();
  }, 2600);
}

// ============ Calculate ============
function calculateType() {
  return (scores.depth > 0 ? 'D' : 'S')
       + (scores.action > 0 ? 'A' : 'C')
       + (scores.social > 0 ? 'L' : 'G')
       + (scores.exp > 0 ? 'V' : 'N');
}

// ============ Result ============
function showResult() {
  var typeCode = calculateType();
  var type = CONSULTANT_TYPES[typeCode];
  if (!type) { console.error('Type not found:', typeCode); return; }

  var maxScore = 20;
  var dims = [
    { label: '输出偏好', left: 'PPT至上', right: '数据至上', lk: 'S', rk: 'D', val: scores.depth, color: '#c49a2a' },
    { label: '工作节奏', left: '佛系', right: '卷王', lk: 'C', rk: 'A', val: scores.action, color: '#b03a3a' },
    { label: '协作倾向', left: '群狼', right: '独狼', lk: 'G', rk: 'L', val: scores.social, color: '#2d7d9a' },
    { label: '江湖段位', left: '萌新', right: '老法师', lk: 'N', rk: 'V', val: scores.exp, color: '#6c5ce7' }
  ];

  var dimHtml = dims.map(function(d) {
    var pct = Math.min(100, Math.max(0, (d.val / maxScore + 0.5) * 100));
    var isR = d.val > 0;
    return '<div class="dim-card"><div class="dim-label">' + d.label + '</div>'
      + '<div class="dim-value" style="color:' + d.color + '">' + (isR ? d.rk : d.lk) + ' · ' + (isR ? d.right : d.left) + '</div>'
      + '<div class="dim-bar"><div class="dim-bar-fill" style="width:' + pct + '%;background:' + d.color + '"></div></div></div>';
  }).join('');

  var descHtml = type.description.map(function(p) { return '<p>' + p + '</p>'; }).join('');

  document.getElementById('result-content').innerHTML =
    '<div class="result-header">'
    + '<div class="result-type-badge">你的咨询人格</div>'
    + '<div class="result-emoji">' + type.emoji + '</div>'
    + '<div class="result-code" style="color:' + type.color + '">' + type.code + '</div>'
    + '<div class="result-name">' + type.name + '</div>'
    + '<div class="result-tagline">"' + type.tagline + '"</div>'
    + '</div>'
    + '<div class="result-dimensions">' + dimHtml + '</div>'
    + '<div class="result-description"><div class="result-desc-card">' + descHtml + '</div></div>'
    + '<div class="result-actions">'
    + '<button class="btn-share" onclick="saveResultImage()">'
    + '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
    + '保存结果图片</button>'
    + '<button class="btn-secondary" onclick="copyLink()">'
    + '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>'
    + '复制链接分享</button>'
    + '<button class="btn-secondary" onclick="retakeQuiz()">'
    + '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>'
    + '再测一次</button>'
    + '</div>'
    + '<div class="result-footer"><p>CBTI · Consultant Behavior Type Indicator</p><p>纯属娱乐，升职加薪请看 360 反馈</p></div>';

  showScreen('screen-result');

  var url = new URL(window.location);
  url.searchParams.set('r', typeCode);
  window.history.replaceState({}, '', url);
}

// ============ Save result image ============

function getTextLines(ctx, text, maxWidth) {
  var lines = [], line = '';
  for (var i = 0; i < text.length; i++) {
    var t = line + text[i];
    if (ctx.measureText(t).width > maxWidth && line) {
      lines.push(line);
      line = text[i];
    } else {
      line = t;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawTextLines(ctx, lines, x, y, lineHeight) {
  for (var i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x, y + i * lineHeight);
  }
  return y + lines.length * lineHeight;
}

function fillRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
  ctx.fill();
}

function drawQR(ctx, url, x, y, size) {
  var qr = qrcode(0, 'M');
  qr.addData(url);
  qr.make();
  var modules = qr.getModuleCount();
  var cellSize = size / modules;
  ctx.fillStyle = '#1a1f36';
  for (var row = 0; row < modules; row++) {
    for (var col = 0; col < modules; col++) {
      if (qr.isDark(row, col)) {
        ctx.fillRect(x + col * cellSize, y + row * cellSize, cellSize + 0.5, cellSize + 0.5);
      }
    }
  }
}

function saveResultImage() {
  var typeCode = calculateType();
  var type = CONSULTANT_TYPES[typeCode];
  var dpr = 2;
  var W = 540;
  var pad = 40;
  var contentW = W - pad * 2;
  var maxScore = 20;

  var dims = [
    { label: '输出偏好', left: 'PPT至上', right: '数据至上', lk: 'S', rk: 'D', val: scores.depth, color: '#c49a2a' },
    { label: '工作节奏', left: '佛系', right: '卷王', lk: 'C', rk: 'A', val: scores.action, color: '#b03a3a' },
    { label: '协作倾向', left: '群狼', right: '独狼', lk: 'G', rk: 'L', val: scores.social, color: '#2d7d9a' },
    { label: '江湖段位', left: '萌新', right: '老法师', lk: 'N', rk: 'V', val: scores.exp, color: '#6c5ce7' }
  ];

  var measure = document.createElement('canvas').getContext('2d');
  var descLineH = 20;
  var descFont = '13px sans-serif';
  measure.font = descFont;
  var totalDescLines = 0;
  var descLinesArr = [];
  for (var i = 0; i < type.description.length; i++) {
    var lines = getTextLines(measure, type.description[i], contentW);
    descLinesArr.push(lines);
    totalDescLines += lines.length;
  }
  var descGaps = (type.description.length - 1) * 10;

  var headerH = 260;
  var dimBlockH = dims.length * 52 + 16;
  var descBlockH = totalDescLines * descLineH + descGaps + 20;
  var qrBlockH = 120;
  var H = headerH + dimBlockH + descBlockH + qrBlockH;

  var canvas = document.createElement('canvas');
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  var bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#f8f6f2');
  bg.addColorStop(1, '#f0ebe0');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = type.color;
  ctx.globalAlpha = 0.12;
  ctx.fillRect(0, 0, W, 6);
  ctx.globalAlpha = 1;

  var y = 45;

  ctx.textAlign = 'center';
  ctx.fillStyle = '#8a8f9f';
  ctx.font = '13px sans-serif';
  ctx.fillText('CBTI · 管理咨询顾问人格测试', W/2, y);
  y += 65;

  ctx.font = '56px sans-serif';
  ctx.fillText(type.emoji, W/2, y);
  y += 55;

  ctx.fillStyle = type.color;
  ctx.font = 'bold 48px sans-serif';
  ctx.fillText(type.code, W/2, y);
  y += 40;

  ctx.fillStyle = '#1a1f36';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText(type.name, W/2, y);
  y += 30;

  ctx.fillStyle = '#8a8f9f';
  ctx.font = '14px sans-serif';
  ctx.fillText('"' + type.tagline + '"', W/2, y);
  y += 25;

  ctx.strokeStyle = 'rgba(26,31,54,0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, y);
  ctx.lineTo(W - pad, y);
  ctx.stroke();
  y += 24;

  for (var d = 0; d < dims.length; d++) {
    var dim = dims[d];
    var pct = Math.min(100, Math.max(0, (dim.val / maxScore + 0.5) * 100));
    var isR = dim.val > 0;
    var barX = pad;
    var barW = contentW;
    var barH = 8;

    ctx.textAlign = 'left';
    ctx.fillStyle = '#4a4f62';
    ctx.font = '12px sans-serif';
    ctx.fillText(dim.label, barX, y);

    ctx.textAlign = 'right';
    ctx.fillStyle = dim.color;
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText((isR ? dim.rk : dim.lk) + ' · ' + (isR ? dim.right : dim.left), W - pad, y);
    y += 10;

    ctx.fillStyle = 'rgba(26,31,54,0.06)';
    fillRoundRect(ctx, barX, y, barW, barH, 4);

    ctx.fillStyle = dim.color;
    ctx.globalAlpha = 0.8;
    fillRoundRect(ctx, barX, y, barW * pct / 100, barH, 4);
    ctx.globalAlpha = 1;

    ctx.font = '10px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#8a8f9f';
    ctx.fillText(dim.left, barX, y + barH + 14);
    ctx.textAlign = 'right';
    ctx.fillText(dim.right, W - pad, y + barH + 14);

    y += barH + 28;
  }

  y += 4;
  ctx.strokeStyle = 'rgba(26,31,54,0.08)';
  ctx.beginPath();
  ctx.moveTo(pad, y);
  ctx.lineTo(W - pad, y);
  ctx.stroke();
  y += 20;

  ctx.textAlign = 'left';
  ctx.fillStyle = '#4a4f62';
  ctx.font = descFont;
  for (var p = 0; p < descLinesArr.length; p++) {
    y = drawTextLines(ctx, descLinesArr[p], pad, y, descLineH);
    if (p < descLinesArr.length - 1) y += 10;
  }

  y += 24;
  ctx.strokeStyle = 'rgba(26,31,54,0.08)';
  ctx.beginPath();
  ctx.moveTo(pad, y);
  ctx.lineTo(W - pad, y);
  ctx.stroke();
  y += 20;

  var qrSize = 64;
  var qrX = (W - qrSize) / 2;
  drawQR(ctx, 'https://consultingmbti.ainovalife.com', qrX, y, qrSize);
  y += qrSize + 14;

  ctx.textAlign = 'center';
  ctx.fillStyle = '#8a8f9f';
  ctx.font = '11px sans-serif';
  ctx.fillText('扫码测试你的咨询人格', W/2, y);

  canvas.toBlob(function(blob) {
    if (!blob) return;
    if (navigator.share && navigator.canShare) {
      var file = new File([blob], 'CBTI-' + typeCode + '.png', {type:'image/png'});
      var data = {files:[file], title:'我的咨询人格：' + type.name};
      if (navigator.canShare(data)) {
        navigator.share(data).catch(function() { downloadBlob(blob, typeCode); });
        return;
      }
    }
    downloadBlob(blob, typeCode);
  }, 'image/png');
}

function downloadBlob(blob, code) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'CBTI-' + code + '.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('结果图片已保存');
}

// ============ Share ============
function copyLink() {
  var url = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function() {
      showToast('链接已复制，发给你的同事互相伤害吧');
    }).catch(function() { fallbackCopy(url); });
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(url) {
  var input = document.createElement('input');
  input.value = url;
  input.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  showToast('链接已复制，发给你的同事互相伤害吧');
}

function retakeQuiz() {
  var url = new URL(window.location);
  url.searchParams.delete('r');
  window.history.replaceState({}, '', url);
  showScreen('screen-landing');
}

// ============ Toast ============
function showToast(msg) {
  var t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2500);
}

// ============ URL result ============
(function() {
  if (typeof CONSULTANT_TYPES === 'undefined') return;
  var p = new URLSearchParams(window.location.search);
  var r = p.get('r');
  if (r && CONSULTANT_TYPES[r]) {
    scores = { depth: 0, action: 0, social: 0, exp: 0 };
    scores.depth = r[0] === 'D' ? 5 : -5;
    scores.action = r[1] === 'A' ? 5 : -5;
    scores.social = r[2] === 'L' ? 5 : -5;
    scores.exp = r[3] === 'V' ? 5 : -5;
    showResult();
  }
})();
