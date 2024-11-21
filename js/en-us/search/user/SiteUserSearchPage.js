Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSiteUser')?.addEventListener('sl-change', (event) => {
    facetRangeChange('SiteUser', event.target.value);
  });

  document.querySelector('#htmDropdown_userFullName')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('SiteUser', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_userName')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('SiteUser', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('SiteUser', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#patchSiteUserDialog').show();
  });

  document.querySelector('#htmButton_postSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#postSiteUserDialog').show();
  });

  document.querySelector('#htmButton_searchpageSiteUser')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSiteUserDialog').show();
  });
});
