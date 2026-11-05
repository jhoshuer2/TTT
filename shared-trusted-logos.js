(() => {
  const companies = [
    ['Airbnb', 'f781f5276f566b2a.svg'], ['Adobe', '5d25cd393cc070e9.svg'],
    ['Cisco', '10d84681d99c223f.svg'], ['Dell', '5b10373a6f22003c.svg'],
    ['Deloitte', '9f3cbe1c539bf8c9.svg'], ['Ford', '6770c21807d7fd92.svg'],
    ['Google', '4c5d3fbf97b0a620.svg'], ['Goldman Sachs', '6927e4106a7de3f1.svg'],
    ['HCL', 'beaaf141017df2db.svg'], ['HP', 'b8282a0a40a6ceb4.svg'],
    ['IBM', 'f9ac01d743887cdc.svg'], ['Intel', 'ca6c3cc68740893f.svg'],
    ['Infosys', 'c60e30ca32801976.svg'], ['KPMG', 'c6a7750310193199.svg'],
    ['Mercedes-Benz', '060f7f86cc58cc6f.svg'], ['Microsoft', 'f8fa01fe3ada0c02.svg'],
    ['Mindtree', '71fdbe2df0827647.svg'], ['Nagarro', '8c217bc6b4a04d89.svg'],
    ['Oracle', '898e5fb3982376f8.svg'], ['Paytm', '4d0230e2f81ee265.svg'],
    ['Reliance Jio', '48232d1b7861a416.svg'], ['Samsung', 'f65ed9bb28fd11cb.svg'],
    ['SAP', '54b6a3cb693f067e.svg'], ['Capgemini', '25871916f8026e94.svg'],
    ['Flipkart', 'd31aff836e51336a.svg'], ['Cognizant', '16cecb5b644a1d6a.svg'],
    ['Thoughtworks', 'be8633098e078248.svg'], ['Tech Mahindra', 'f4b7060a2745c133.svg'],
    ['Uber', 'cf6749f426d2e8aa.svg'], ['Viacom', 'bdef5338d039d389.svg'],
    ['Wipro', '47363574c56adc47.svg'], ['BrowserStack', 'e2af342f129b6289.svg'],
    ['Zoho', 'd20da4ebe3f9c3fe.png'], ['Airmeet', 'e7b4cfeaf119c98d.svg'],
    ['MoEngage', 'd0a6b3b12f21ed4a.svg'], ['APAM', '518cebe8d6ca6ce7.svg']
  ];

  class TribeTrustedLogos extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      const logoList = (decorative = false) => companies.map(([name, file]) =>
        `<li class="trusted-logo"><img src="assets/partner-logos/${file}" alt="${decorative ? '' : name}"${decorative ? ' aria-hidden="true"' : ''} loading="lazy"></li>`
      ).join('');

      this.innerHTML = `
        <section class="shared-trusted" aria-labelledby="trusted-companies-title">
          <div class="wrap">
            <div class="section-heading">
              <div class="eyebrow">A global quality community</div>
              <h2 id="trusted-companies-title">Members from the world’s top companies.</h2>
            </div>
            <div class="trusted-marquee" aria-label="Company logos. Scroll horizontally to explore all logos.">
              <ul class="trusted-track" role="list">${logoList()}</ul>
              <ul class="trusted-track trusted-track-copy" role="presentation" aria-hidden="true">${logoList(true)}</ul>
            </div>
            <p class="trusted-note">Company logos are shown to reflect where community members work; their inclusion does not imply sponsorship or endorsement.</p>
          </div>
        </section>`;
    }
  }

  if (!customElements.get('tribe-trusted-logos')) {
    customElements.define('tribe-trusted-logos', TribeTrustedLogos);
  }
})();
