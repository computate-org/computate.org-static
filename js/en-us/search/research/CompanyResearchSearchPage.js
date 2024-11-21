Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyResearch')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CompanyResearch', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyResearch', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyResearch', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyResearch', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchCompanyResearch')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyResearchDialog').show();
  });

  document.querySelector('#htmButton_postCompanyResearch')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyResearchDialog').show();
  });

  document.querySelector('#htmButton_putimportCompanyResearch')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyResearchDialog').show();
  });

  document.querySelector('#htmButton_searchpageCompanyResearch')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyResearchDialog').show();
  });
});
