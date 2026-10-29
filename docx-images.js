(async function(){
  const id=Math.max(1,Math.min(118,Number(new URLSearchParams(location.search).get('id'))||1));
  const prop=document.getElementById('propertyImage');
  const app=document.getElementById('applicationImage');
  if(!prop||!app||typeof JSZip==='undefined') return;
  const showError=()=>{prop.closest('.element-visual')?.classList.add('image-error');app.closest('.element-visual')?.classList.add('image-error');};
  try{
    const response=await fetch('Anh_minh_hoa_118_nguyen_to.docx');
    if(!response.ok) throw new Error('Không tải được file Word');
    const zip=await JSZip.loadAsync(await response.arrayBuffer());
    async function put(img,path){
      const entry=zip.file(path);
      if(!entry) throw new Error('Thiếu '+path);
      const blob=await entry.async('blob');
      img.src=URL.createObjectURL(blob);
      img.hidden=false;
      img.closest('.element-visual')?.classList.add('loaded');
    }
    await Promise.all([
      put(prop,`word/media/img_${id}P.jpeg`),
      put(app,`word/media/img_${id}A.jpeg`)
    ]);
  }catch(err){console.error(err);showError();}
})();