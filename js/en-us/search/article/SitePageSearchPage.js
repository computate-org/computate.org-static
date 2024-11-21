Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSitePage')?.addEventListener('sl-change', (event) => {
    facetRangeChange('SitePage', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('SitePage', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('SitePage', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#patchSitePageDialog').show();
  });

  document.querySelector('#htmButton_postSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#postSitePageDialog').show();
  });

  document.querySelector('#htmButton_putimportSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#putimportSitePageDialog').show();
  });

  document.querySelector('#htmButton_searchpageSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSitePageDialog').show();
  });
});
