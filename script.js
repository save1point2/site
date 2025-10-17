// Navbar toggle and active link highlighting
(function(){
  const toggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav-list');
  if(toggle && navList){
    toggle.addEventListener('click', (e)=>{
      e.stopPropagation();
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });

    document.addEventListener('click', (e)=>{
      if(!navList.contains(e.target) && !toggle.contains(e.target)){
        navList.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  // Active link based on pathname
  const links = document.querySelectorAll('.nav-link');
  const raw = window.location.pathname.split('/').pop();
  const path = raw || 'index.html';
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || href === './'+path || href === '/'+path) a.classList.add('active');
  });

  // Insert current year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Utility: abrir material PDF em nova aba
function openPdf(url){ window.open(url, '_blank'); }
