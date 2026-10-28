(()=>{
  const id=Number(new URLSearchParams(location.search).get('id'))||1;
  const img=document.getElementById('applicationImage');
  if(!img) return;
  const images={
    1:'IMG_20261028_205319.png',
    2:'IMG_20261028_205319(1).png',
    3:'IMG_20261028_205319(2).png',
    4:'IMG_20261028_205320.png',
    5:'IMG_20261028_205320(1).png',
    6:'IMG_20261028_205322.png',
    7:'IMG_20261028_205322(1).png'
  };
  if(images[id]){
    img.src=encodeURI(images[id]);
    img.alt='Hình minh họa ứng dụng của nguyên tố';
    img.hidden=false;
  } else {
    img.removeAttribute('src');
    img.hidden=true;
  }
})();