Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyWebsite')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CompanyWebsite', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyWebsite', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyWebsite', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyWebsite', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchCompanyWebsite')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyWebsiteDialog').show();
  });

  document.querySelector('#htmButton_postCompanyWebsite')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyWebsiteDialog').show();
  });

  document.querySelector('#htmButton_putimportCompanyWebsite')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyWebsiteDialog').show();
  });

  document.querySelector('#htmButton_searchpageCompanyWebsite')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyWebsiteDialog').show();
  });
});
