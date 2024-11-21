Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyWebinar')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CompanyWebinar', event.target.value);
  });

  document.querySelector('#htmDropdown_joinUrl')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyWebinar', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyWebinar', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyWebinar', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyWebinar', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyWebinarDialog').show();
  });

  document.querySelector('#htmButton_postCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyWebinarDialog').show();
  });

  document.querySelector('#htmButton_putimportCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyWebinarDialog').show();
  });

  document.querySelector('#htmButton_searchpageCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyWebinarDialog').show();
  });
});
