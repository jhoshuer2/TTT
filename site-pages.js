(()=>{
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const nav=document.getElementById('nav');
 if(nav){addEventListener('scroll',()=>nav.classList.toggle('sc',scrollY>8),{passive:true})}
 const btn=document.getElementById('burger'),drawer=document.getElementById('drawer'),scrim=document.getElementById('scrim');
 if(btn&&drawer&&scrim){
  let open=false;
  const focusables=()=>[btn,...drawer.querySelectorAll('a')];
  function setMenu(value){
   if(value===open)return;
   open=value;
   btn.setAttribute('aria-expanded',String(open));
   btn.setAttribute('aria-label',open?'Close menu':'Open menu');
   document.body.classList.toggle('menu-open',open);
   if(open){
    drawer.hidden=false;scrim.hidden=false;
    requestAnimationFrame(()=>{drawer.classList.add('on');scrim.classList.add('on')});
    setTimeout(()=>drawer.querySelector('a')?.focus({preventScroll:true}),reduce?0:200);
   }else{
    drawer.classList.remove('on');scrim.classList.remove('on');
    setTimeout(()=>{if(!open){drawer.hidden=true;scrim.hidden=true}},reduce?0:350);
    btn.focus({preventScroll:true});
   }
  }
  btn.addEventListener('click',()=>setMenu(!open));
  scrim.addEventListener('click',()=>setMenu(false));
  drawer.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',event=>{
   if(!open)return;
   if(event.key==='Escape'){setMenu(false);return}
   if(event.key==='Tab'){
    const items=focusables(),index=items.indexOf(document.activeElement);
    if(event.shiftKey&&index<=0){event.preventDefault();items[items.length-1].focus()}
    else if(!event.shiftKey&&index===items.length-1){event.preventDefault();items[0].focus()}
   }
  });
  matchMedia('(min-width: 901px)').addEventListener('change',event=>{if(event.matches)setMenu(false)});
 }
 document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  const value=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  document.querySelectorAll('[data-event]').forEach(card=>{card.hidden=value!=='all'&&card.dataset.event!==value});
 }));
})();
