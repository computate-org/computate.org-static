Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyService')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CompanyService', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyService', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyService', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyService', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchCompanyService')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyServiceDialog').show();
  });

  document.querySelector('#htmButton_postCompanyService')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyServiceDialog').show();
  });

  document.querySelector('#htmButton_putimportCompanyService')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyServiceDialog').show();
  });

  document.querySelector('#htmButton_searchpageCompanyService')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyServiceDialog').show();
  });
});
