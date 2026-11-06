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

const pageFaqContent = {
  testers: [
    ['Who can join The Test Tribe?', 'Testers, QA professionals, automation engineers, SDETs and people moving into software testing are welcome.'],
    ['What can I access as a community member?', 'Explore community events, local chapters and ways to contribute. Courses and some structured programmes have their own enrolment details.'],
    ['What is the difference between the community and Finer Circle?', 'The wider community and its events are separate from Finer Circle, a paid membership with structured learning, mentorship and peer support. <a href="https://www.thetesttribe.com/finer-circle/">Review current Finer Circle details ↗</a>'],
    ['Where can I find courses and live workshops?', 'Browse self-paced courses and current live learning options on The Test Tribe’s learning sites. <a href="https://www.thetesttribe.com/thrive-edschool/">Explore courses ↗</a> <a href="https://www.thetesttribe.com/finer-circle/">Explore Finer Circle ↗</a>'],
    ['How do I find events near me?', 'Browse the current events calendar for upcoming online and in-person experiences. <a href="https://www.thetesttribe.com/events/">See upcoming events ↗</a>'],
    ['How can I contribute?', 'You can speak, write, volunteer, mentor or help bring a local chapter together.']
  ],
  leaders: [
    ['Who is the leadership community for?', 'Quality, engineering, product and AI leaders, including QA heads, directors, VPs, CTOs and senior practitioners shaping quality in their organisations.'],
    ['How do I join the leadership community?', 'Use The Test Tribe community page to find the current way to join and get involved. <a href="https://www.thetesttribe.com/community/">Explore the community ↗</a>'],
    ['How do QonfX invitations work?', 'QonfX is an invite-only leadership conference. Each city page has the current event date, audience information and invite request details. <a href="https://www.thetesttribe.com/qonfx/">Browse QonfX editions ↗</a>'],
    ['Is Finer Circle the same as the leadership community?', 'No. Finer Circle is a separate membership for testing professionals, with structured learning, courses, masterclasses, mentoring and peer community. Review its current details before enrolling. <a href="https://www.thetesttribe.com/finer-circle/">Explore Finer Circle ↗</a>'],
    ['Can I contribute as a mentor, speaker or advisor?', 'Yes. Use the community page to get involved and share how you would like to contribute. <a href="https://www.thetesttribe.com/community/">Get involved ↗</a>']
  ],
  partners: [
    ['Who can explore a partnership?', 'Software testing and QA tools, SaaS companies, technology brands, service providers and other organisations with something relevant to the quality community.'],
    ['What information is in the partnership deck?', 'It’s the best place to get current audience details, event dates, available partnership formats, newsletter specifications and next steps.'],
    ['Can we shape a custom programme?', 'Yes. Tell us what you want to share and who you hope to reach. We’ll explore a format that fits the community and your goals.'],
    ['How soon should we get in touch?', 'For conferences and co-branded programmes, earlier is better so there is time to plan the audience, format and approvals together.'],
    ['Can we use The Test Tribe’s logo or co-brand an event?', 'Logo use and co-branded materials need review and approval. We’ll share the right guidelines as part of the planning conversation.']
  ],
  events: [
    ['Are events online or in person?', 'Both. Each listing identifies the city or online format.'],
    ['Who can attend?', 'Events are designed for testers, quality professionals and people building technology. Some signature or leadership events may have specific registration details.'],
    ['Can I host or speak at an event?', 'Yes. The community welcomes speakers, hosts and event collaborators.'],
    ['Where can I find recordings and photographs?', 'Explore the community gallery and event recaps for available highlights.']
  ],
  teams: [
    ['Can the programme be customised for our team?', 'Yes. A discovery conversation helps clarify your goals, audience, delivery format and relevant programme options.'],
    ['What delivery formats are available?', 'Training can be delivered on-site, live online, in a hybrid format or as a customised programme.'],
    ['Who are the programmes for?', 'Technology teams across QA, engineering, product, data, support and leadership.'],
    ['Can our team continue learning after training?', 'Explore Finer Circle for Business as an ongoing learning, mentoring and community option.']
  ]
};

class TribePageFaq extends HTMLElement {
  connectedCallback() {
    const key = this.getAttribute('page') || 'testers';
    const questions = pageFaqContent[key] || pageFaqContent.testers;
    this.innerHTML = `<div class="faq">${questions.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join('')}</div>`;
  }
}
customElements.define('tribe-page-faq', TribePageFaq);

class TribeChapterCard extends HTMLElement {
  connectedCallback() {
    const compact = this.hasAttribute('compact');
    const card = document.createElement('article');
    card.className = 'card chapter-card';
    card.innerHTML = `<div class="icon-box" aria-hidden="true"><svg class="gateway-mark" viewBox="0 0 48 48"><g fill="none" stroke="#3B2520" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="11" r="5" fill="#F6B7A3"/><circle cx="11" cy="32" r="4" fill="#E9DAD1"/><circle cx="37" cy="32" r="4" fill="#E9DAD1"/><path d="M14 29 21 16m13 13-7-13M15 34h18" stroke="#E5482D"/></g></svg></div><h3>${compact ? 'Local chapters' : 'Find a local chapter'}</h3><p>Meet quality professionals nearby through local meetups, and find the next gathering in your city.</p><a class="card-link" href="https://www.thetesttribe.com/meetups/">Explore local meetups ↗</a>`;
    this.replaceChildren(card);
  }
}
customElements.define('tribe-chapter-card', TribeChapterCard);

const upcomingCommunityEvents = [
  { type: 'in-person', category: 'Community event', date: '22 Nov 2026', title: 'Testing AI features in production', summary: 'Join testers and quality practitioners in Pune to discuss the realities of testing AI in production.', place: 'Pune', format: 'In person' },
  { type: 'online', category: 'Online event', date: '29 Nov 2026', title: 'Contract testing for microservices', summary: 'Explore practical approaches to contract testing for services and distributed systems.', place: 'Online', format: 'Online' },
  { type: 'in-person', category: 'Community event', date: '4 Dec 2026', title: 'Measuring quality beyond bug counts', summary: 'Join the conversation in Bengaluru about meaningful signals for product and software quality.', place: 'Bengaluru', format: 'In person' },
  { type: 'in-person', category: 'Community event', date: '6 Dec 2026', title: 'Building a QA career in Africa’s tech scene', summary: 'Connect with testers and technology professionals in Lagos and share career perspectives.', place: 'Lagos', format: 'In person' },
  { type: 'in-person', category: 'Signature conference', date: '18–19 Feb 2027', title: 'TribeQonf 2027', summary: 'Two days of talks, workshops and hallway conversations with the people shaping software quality.', place: 'Bengaluru', format: 'In person' }
];

class TribeUpcomingEvents extends HTMLElement {
  connectedCallback() {
    const limit = Number(this.getAttribute('limit')) || upcomingCommunityEvents.length;
    const compact = this.hasAttribute('compact');
    const events = upcomingCommunityEvents.slice(0, limit);
    const filters = compact ? '' : `<div class="filters" role="group" aria-label="Filter events"><button class="filter" data-filter="all" aria-pressed="true">All events</button><button class="filter" data-filter="online" aria-pressed="false">Online</button><button class="filter" data-filter="in-person" aria-pressed="false">In person</button></div>`;
    this.innerHTML = `${filters}<div class="event-grid ${compact ? 'event-grid-compact' : ''}">${events.map(event => `<article class="event-card" data-event="${event.type}"><div class="event-meta"><span>${event.category}</span><span aria-hidden="true">·</span><span>${event.date}</span></div><h3>${event.title}</h3><p>${event.summary}</p><div class="pills"><span class="pill">${event.place}</span><span class="pill">${event.format}</span></div><a class="card-link" href="events.html#calendar">Event details →</a></article>`).join('')}</div>`;
  }
}
customElements.define('tribe-upcoming-events', TribeUpcomingEvents);

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
