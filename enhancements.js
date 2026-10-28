// Search + QR enhancement without changing the original table data/layout.
const searchInput = document.getElementById('element-search');
const searchHint = document.getElementById('search-hint');
const vnNames = {1:'hidro',2:'heli',3:'liti',4:'beri',5:'bo',6:'cacbon',7:'nito',8:'oxi',9:'flo',10:'neon',11:'natri',12:'magie',13:'nhom',14:'silic',15:'photpho',16:'luu huynh',17:'clo',18:'argon',19:'kali',20:'canxi',21:'scandi',22:'titan',23:'vanadi',24:'crom',25:'mangan',26:'sat',27:'coban',28:'niken',29:'dong',30:'kem',35:'brom',47:'bac',50:'thiec',53:'iot',74:'vonfram',78:'platin',79:'vang',80:'thuy ngan',82:'chi',92:'urani'};
function norm(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase().trim()}
function allBoxes(){return [...document.querySelectorAll('.element')]}
function boxData(box){const n=Number(box.querySelector('.atomic-number')?.textContent.trim());return {n,s:box.querySelector('.symbol')?.textContent.trim()||'',name:box.querySelector('.name')?.textContent.trim()||'',vn:vnNames[n]||''}}
function applySearch(){const q=norm(searchInput.value);let count=0;allBoxes().forEach(box=>{const d=boxData(box);const hay=[String(d.n),d.s,d.name,d.vn].map(norm);const match=!q||hay.some(v=>v.includes(q));box.classList.toggle('search-dim',!!q&&!match);box.classList.toggle('search-match',!!q&&match);if(q&&match)count++});searchHint.textContent=q?(count?`${count} nguyên tố phù hợp — bấm vào ô để hiện QR`:'Không tìm thấy nguyên tố phù hợp'):'Nhập tên, ký hiệu hoặc số hiệu nguyên tử'}
searchInput?.addEventListener('input',applySearch);

function renderQRForBox(box){const d=boxData(box);if(!d.n)return;setTimeout(()=>{const qr=document.getElementById('qr-area');if(!qr)return;const target=`https://phthphuong2910-ux.github.io/bangtuanhoanhoahoc/element.html?id=${d.n}`;qr.innerHTML='';const img=document.createElement('img');img.src=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(target)}`;img.alt=`QR mở trang thông tin ${d.s}`;const link=document.createElement('a');link.className='qr-link';link.href=target;link.target='_blank';link.rel='noopener';link.textContent='Mở trang thông tin trực tiếp';qr.append(img,link)},0)}
document.addEventListener('click',e=>{const box=e.target.closest('.element');if(box)renderQRForBox(box)});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('.element'))renderQRForBox(e.target.closest('.element'))});
