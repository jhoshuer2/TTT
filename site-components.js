class TribeSiteNav extends HTMLElement {
  connectedCallback() {
    const isHome = this.hasAttribute('home');
    const homeFile = 'the-test-tribe-home-5-illustrated.html';
    const href = (section) => isHome ? `#${section}` : `${homeFile}#${section}`;
    const links = [
      ['Community', 'gates'], ['Experiences', 'events'], ['For teams', 'teams'],
      ['Learning', 'research'], ['About', 'top']
    ];
    this.innerHTML = `
      <header class="nav" id="nav">
        <div class="wrap nav-in">
          <a class="logo" href="${href('top')}" aria-label="The Test Tribe home"><img class="brand" src="tribe-brand.png" width="84" height="40" alt="The Test Tribe"></a>
          <nav class="links" aria-label="Main">${links.map(([label, section]) => `<a href="${section === 'teams' ? 'corporate-training.html' : href(section)}">${label}</a>`).join('')}</nav>
          <div class="act"><a class="login" href="#">Login</a><a class="btn btn-v btn-s nav-join" href="${href('join')}">Join Tribe</a><button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer"><svg class="i-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg><svg class="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>
        </div>
      </header>
      <div class="scrim" id="scrim" hidden></div>
      <aside class="drawer" id="drawer" aria-label="Mobile navigation" aria-hidden="true" hidden>
        <nav class="d-links">${links.map(([label, section]) => `<a href="${section === 'teams' ? 'corporate-training.html' : href(section)}">${label}</a>`).join('')}</nav>
        <div class="d-act"><a class="btn btn-o" href="#">Login</a><a class="btn btn-primary" href="${href('join')}">Join Tribe</a></div>
      </aside>`;

    const nav = this.querySelector('.nav');
    const updateStickyState = () => nav.classList.toggle('sc', window.scrollY > 24);
    updateStickyState();
    window.addEventListener('scroll', updateStickyState, { passive: true });
  }
}
customElements.define('tribe-site-nav', TribeSiteNav);

class TribeCommunityStats extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="stats" aria-label="The Test Tribe community"><div><b>180,000+</b><span>Members</span></div><div><b>130+</b><span>Countries</span></div><div><b>43</b><span>City chapters</span></div><div><b>1,200+</b><span>Events run</span></div></div>`;
  }
}
customElements.define('tribe-community-stats', TribeCommunityStats);

class TribeSiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="foot"><div class="wrap">
        <div class="news"><div><h3>The Tribe Newsletter</h3><p>The latest from your tribe, delivered straight to your inbox every two weeks.</p></div>
          <form class="nform" novalidate><label class="sr" for="nl">Email address</label><input id="nl" type="email" placeholder="you@company.com" required><button class="btn btn-v btn-s" type="submit">Subscribe</button><p class="nok" role="status"></p></form></div>
        <div class="ftop"><div class="fabout"><a class="footer-logo" href="${home}"><img class="brand" src="tribe-brand-white.svg" alt="The Test Tribe" width="81" height="44"></a><p>A global community for everyone who builds software quality.</p><div class="soc"><a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10.5V16M8 7.6v.1M11.5 16v-5.5M11.5 13c0-1.6 1-2.6 2.3-2.6S16 11.3 16 13v3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></a><a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10.5 9.5v5l4.2-2.5z" fill="currentColor"/></svg></a><a href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></a><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg></a></div></div><div><h4>Community</h4><ul><li><a href="testers.html">Testers</a></li><li><a href="leaders.html">Leaders</a></li><li><a href="partners.html">Partners</a></li><li><a href="research.html">Researchers</a></li></ul></div><div><h4>Experiences</h4><ul><li><a href="events.html">TribeQonf</a></li><li><a href="events.html">Meetups</a></li><li><a href="events.html">Workshops</a></li></ul></div><div><h4>Learning</h4><ul><li><a href="#">Courses</a></li><li><a href="#">Live Cohorts</a></li><li><a href="leaders.html#join">Finer Circle</a></li><li><a href="corporate-training.html">Corporate Training</a></li></ul></div><div><h4>About</h4><ul><li><a href="${home}#top">Our Story</a></li><li><a href="#">Careers</a></li><li><a href="#">Press Release</a></li><li><a href="#">Contact</a></li></ul></div></div>
        <div class="wm" aria-hidden="true">the test tribe</div>
        <div class="fbase"><span>© 2026 The Test Tribe. All rights reserved.</span><nav aria-label="Policies"><a href="#">Privacy Policy</a><a href="#">Terms of use</a><a href="#">Code of conduct</a></nav></div>
      </div></footer>`;
    const form=this.querySelector('.nform');
    form.addEventListener('submit',event=>{
      event.preventDefault();
      const input=form.querySelector('input'), status=form.querySelector('.nok');
      if(!input.checkValidity()){status.textContent='Enter a valid email address, like you@company.com.';return;}
      status.textContent='Subscribed. The next issue lands in your inbox in two weeks.';
      form.querySelector('button').textContent='Subscribed';
    });
  }
}
const home = 'the-test-tribe-home-5-illustrated.html';
customElements.define('tribe-site-footer', TribeSiteFooter);


document.addEventListener('DOMContentLoaded', () => {
  const map = document.querySelector('.hmap');
  const wrap = document.querySelector('.map-wrap');
  const tooltip = document.getElementById('chapter-tooltip');
  if (!map || !wrap || !tooltip) return;

  let activeMarker = null;
  const positionTooltip = marker => {
    if (!marker) return;
    const label = marker.getAttribute('aria-label') || '';
    const city = label.replace(/\s+chapter$/i, '');
    tooltip.innerHTML = `<strong></strong><span>chapter</span>`;
    tooltip.querySelector('strong').textContent = city;
    tooltip.hidden = false;
    const dot = marker.querySelector('.c');
    const point = map.createSVGPoint();
    point.x = Number(dot.getAttribute('cx'));
    point.y = Number(dot.getAttribute('cy'));
    const screenPoint = point.matrixTransform(map.getScreenCTM());
    const bounds = wrap.getBoundingClientRect();
    const x = screenPoint.x - bounds.left;
    const y = screenPoint.y - bounds.top;
    const width = tooltip.offsetWidth;
    const height = tooltip.offsetHeight;
    let left = x + 18;
    if (left + width > bounds.width - 8) left = x - width - 18;
    left = Math.max(8, Math.min(left, bounds.width - width - 8));
    const top = Math.max(8, Math.min(y - height / 2, bounds.height - height - 8));
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.setAttribute('aria-label', label);
  };
  const show = marker => { activeMarker = marker; positionTooltip(marker); };
  const hide = marker => {
    if (activeMarker !== marker) return;
    activeMarker = null;
    tooltip.hidden = true;
  };

  map.querySelectorAll('.ret[aria-label]').forEach(marker => {
    marker.setAttribute('aria-describedby', 'chapter-tooltip');
    marker.addEventListener('pointerenter', () => show(marker));
    marker.addEventListener('pointerleave', () => hide(marker));
    marker.addEventListener('focus', () => show(marker));
    marker.addEventListener('blur', () => hide(marker));
  });
  window.addEventListener('resize', () => positionTooltip(activeMarker));
});


class TribeReportCover extends HTMLElement {
  connectedCallback() {
    const variants = ['survey', 'ai', 'community'];
    const variant = variants.includes(this.getAttribute('variant')) ? this.getAttribute('variant') : 'survey';
    const title = this.getAttribute('title') || 'Research and insights';
    const label = this.getAttribute('label') || 'The Test Tribe · Research';
    const meta = this.getAttribute('meta') || 'Field notes · 2026';
    this.classList.add(`report-cover-${variant}`);
    this.setAttribute('role', 'img');
    this.setAttribute('aria-label', `${title}. ${label}. ${meta}.`);
    this.innerHTML = `
      <div class="report-cover-paper">
        <div class="report-cover-mast"><span class="report-cover-brand"><i></i>THE TEST TRIBE</span><span class="report-cover-label"></span></div>
        <div class="report-cover-art" aria-hidden="true">
          <svg viewBox="0 0 400 210" preserveAspectRatio="xMidYMid meet">
            <path class="report-land land-one" d="M40 66 64 40l33 7 17 16 30-3 21 17-13 15-27 3-14 16-28-8-23 9-18-17-20-2 7-20z"/>
            <path class="report-land land-two" d="m185 51 24-15 31 5 12 15 35 2 25 18-3 18-22 9-11 27-23 13-10-16-22-1-13-22-21-7-15-25z"/>
            <path class="report-land land-three" d="m150 127 22-8 25 8 10 22-12 19-13 30-14-8-12-28-16-11z"/>
            <path class="report-route" d="M57 77 104 58 226 74 301 97 249 148 170 155 104 58"/>
            <path class="report-orbit" d="M32 114C68 12 279 5 352 98M48 164C129 207 268 200 346 135"/>
            <circle class="report-node" cx="57" cy="77" r="6"/><circle class="report-node" cx="104" cy="58" r="5"/>
            <circle class="report-node report-node-highlight" cx="226" cy="74" r="7"/><circle class="report-node" cx="301" cy="97" r="5"/>
            <circle class="report-node" cx="249" cy="148" r="5"/><circle class="report-node" cx="170" cy="155" r="6"/>
          </svg>
          <div class="report-paper-fragment"></div>
        </div>
        <div class="report-cover-title"></div>
        <div class="report-cover-meta"></div>
      </div>`;
    this.querySelector('.report-cover-label').textContent = label;
    this.querySelector('.report-cover-title').textContent = title;
    this.querySelector('.report-cover-meta').textContent = meta;
  }
}
customElements.define('tribe-report-cover', TribeReportCover);
