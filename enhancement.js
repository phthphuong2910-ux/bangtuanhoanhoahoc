(() => {
  const allInfo = window.ELEMENTS || [];
  const normalize = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().trim();
  const byZ = new Map(allInfo.map(e => [Number(e.z), e]));
  const header = document.querySelector('.title-area');
  const main = document.querySelector('main');
  if (header && main) {
    const wrap = document.createElement('div');
    wrap.className = 'element-search-wrap';
    wrap.innerHTML = `<div class="element-search-box"><input id="element-search" type="search" autocomplete="off" placeholder="Tìm nguyên tố: Fe, Sắt, Iron, 26..."><span class="element-search-icon">⌕</span></div><div id="element-search-results" class="element-search-results"></div>`;
    header.insertAdjacentElement('afterend', wrap);
  }
  const input = document.getElementById('element-search');
  const results = document.getElementById('element-search-results');
  const tiles = [...document.querySelectorAll('.element')];
  const tileNumber = tile => Number(tile.querySelector('.atomic-number')?.textContent || 0);
  const resetTiles = () => tiles.forEach(t => t.classList.remove('search-dim','search-hit'));
  const matches = q => {
    q = normalize(q); if (!q) return [];
    return allInfo.filter(e => String(e.z) === q || normalize(e.symbol).startsWith(q) || normalize(e.name).includes(q) || normalize(e.english || '').includes(q)).slice(0,8);
  };
  const highlight = list => {
    resetTiles(); if (!list.length) return;
    const ids = new Set(list.map(e => Number(e.z)));
    tiles.forEach(t => t.classList.add(ids.has(tileNumber(t)) ? 'search-hit' : 'search-dim'));
  };
  const choose = e => {
    input.value = `${e.symbol} — ${e.name}`; results.classList.remove('show'); highlight([e]);
    const tile = tiles.find(t => tileNumber(t) === Number(e.z));
    tile?.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
  };
  if (input && results) {
    input.addEventListener('input', () => {
      const q = input.value.trim();
      if (!q) { results.innerHTML=''; results.classList.remove('show'); resetTiles(); return; }
      const hits = matches(q); highlight(hits);
      results.innerHTML = hits.map(e => `<div class="element-search-result" data-z="${e.z}"><b>${e.symbol}</b><span>${e.name}${e.english ? ` · ${e.english}` : ''}</span><small>Z = ${e.z}</small></div>`).join('');
      results.classList.toggle('show', hits.length > 0);
    });
    results.addEventListener('click', ev => { const row = ev.target.closest('.element-search-result'); if (!row) return; const e = byZ.get(Number(row.dataset.z)); if (e) choose(e); });
    input.addEventListener('keydown', ev => { if (ev.key === 'Enter') { const e = matches(input.value)[0]; if (e) choose(e); } if (ev.key === 'Escape') { input.value=''; results.classList.remove('show'); resetTiles(); } });
    document.addEventListener('click', ev => { if (!ev.target.closest('.element-search-wrap')) results.classList.remove('show'); });
  }
  const qrArea = document.getElementById('qr-area');
  document.addEventListener('click', ev => {
    const tile = ev.target.closest('.element'); if (!tile || !qrArea) return;
    const z = tileNumber(tile); if (!z) return;
    const e = byZ.get(z) || {z, symbol: tile.querySelector('.symbol')?.textContent || '', name: tile.querySelector('.name')?.textContent || ''};
    const target = new URL(`element.html?id=${z}`, location.href).href;
    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=${encodeURIComponent(target)}`;
    setTimeout(() => { qrArea.innerHTML = `<img class="generated-qr" src="${qr}" alt="QR ${e.symbol}"><div class="qr-caption"><strong>Quét mã để khám phá ${e.symbol} — ${e.name}</strong>Dùng điện thoại quét mã QR để mở trang thông tin.<br><a class="qr-open-link" href="${target}" target="_blank" rel="noopener">Mở thử trang thông tin</a></div>`; }, 0);
  }, true);
})();
