const products=(window.COOKIE_PRODUCTS||[]).filter(p=>p.visible!==false);
const grid=document.querySelector('#product-grid');
const dialog=document.querySelector('#product-dialog');
let activeProduct=null,lastTrigger=null;
const categoryLabels={bag:'DAILY CARRY / 飲料提袋',wallet:'LITTLE BLOOMS / 手作錢包',makeup:'DAILY BEAUTY / 化妝包'};
const categoryLabel=p=>categoryLabels[p.category]||'HANDMADE / 手作小物';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeImage=s=>/^(assets\/[^<>"']+|data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/=]+)$/.test(s)?s:'assets/favicon.png';
function render(filter='all'){
 const shown=products.filter(p=>filter==='all'||p.category===filter);
 grid.innerHTML=shown.map((p,i)=>`<article class="product-card"><button class="product-photo" data-product="${esc(p.id)}" aria-label="查看${esc(p.name)}・${esc(p.variant)}"><img src="${esc(safeImage(p.image))}" alt="${esc(p.name)}・${esc(p.variant)}" loading="lazy"><span class="product-tag">${esc(p.tag||'手作小物')}</span><span class="view-product">查看細節 ↗</span></button><div class="product-meta"><div><p class="product-type">${categoryLabel(p)}</p><h3><button data-product="${esc(p.id)}">${esc(p.name)}</button></h3><p class="variant"><span class="swatch" style="background:${/^#[0-9a-f]{3,6}$/i.test(p.color)?p.color:'#b88c64'}"></span>${esc(p.variant)}</p></div><button class="product-arrow" data-product="${esc(p.id)}" aria-label="查看${esc(p.variant)}詳情">↗</button></div></article>`).join('');
 document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b.dataset.filter===filter;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',selected);const count=products.filter(p=>b.dataset.filter==='all'||p.category===b.dataset.filter).length;b.querySelector('span').textContent=String(count).padStart(2,'0');});
}
function openProduct(id,trigger){
 activeProduct=products.find(p=>p.id===id);if(!activeProduct)return;lastTrigger=trigger;
 const p=activeProduct;document.querySelector('#dialog-title').textContent=p.name+'・'+p.variant;document.querySelector('#dialog-category').textContent=categoryLabel(p);document.querySelector('#dialog-description').textContent=p.description;document.querySelector('#copy-status').textContent='先複製商品資訊，再貼到 IG 私訊即可。';
 const imgs=[...new Set([p.image,...(p.images||[])])];const main=document.querySelector('#dialog-image');main.src=safeImage(p.image);main.alt=p.name+'・'+p.variant;
 document.querySelector('#thumbnails').innerHTML=imgs.map((src,i)=>`<button data-src="${esc(safeImage(src))}" aria-label="查看第 ${i+1} 張商品照片" aria-pressed="${i===0}"><img src="${esc(safeImage(src))}" alt="商品照片 ${i+1}"></button>`).join('');
 dialog.showModal();document.body.classList.add('dialog-open');
}
grid.addEventListener('click',e=>{const b=e.target.closest('[data-product]');if(b)openProduct(b.dataset.product,b);});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.filter)));
document.querySelector('#thumbnails').addEventListener('click',e=>{const b=e.target.closest('[data-src]');if(!b)return;document.querySelector('#dialog-image').src=b.dataset.src;document.querySelectorAll('[data-src]').forEach(x=>x.setAttribute('aria-pressed',x===b));});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');lastTrigger?.focus();});
document.querySelector('#copy-product').addEventListener('click',async()=>{const p=activeProduct;const text=`你好～我想詢問「${p.name}・${p.variant}」的價格、庫存與購買方式，謝謝！`;try{await navigator.clipboard.writeText(text);document.querySelector('#copy-status').textContent='已複製！前往 IG 私訊貼上即可。';}catch{document.querySelector('#copy-status').textContent=text;}});
document.querySelector('#year').textContent=new Date().getFullYear();render();
