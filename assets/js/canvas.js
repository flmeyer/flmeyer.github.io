document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.net-canvas').forEach(initCanvas);
});

function initCanvas(canvas) {
  var ctx = canvas.getContext('2d');
  var w, h, dpr, nodes, raf;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function init() {
    var n = Math.max(28, Math.min(78, Math.round(w * h / 15000)));
    nodes = [];
    for (var i = 0; i < n; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22
      });
    }
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < nodes.length; i++) {
      var p = nodes[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    var max = 140;
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var a = nodes[i], b = nodes[j];
        var d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < max) {
          ctx.strokeStyle = 'rgba(125,210,235,' + ((1 - d / max) * 0.28) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (var i = 0; i < nodes.length; i++) {
      var p = nodes[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(160,225,245,0.85)';
      ctx.fill();
    }
    if (!reduced) raf = requestAnimationFrame(frame);
  }

  resize(); init(); frame();
  window.addEventListener('resize', function () { resize(); init(); if (reduced) frame(); });
}
