Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyCourse')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CompanyCourse', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyCourse', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyCourse', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyCourse', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyCourseDialog').show();
  });

  document.querySelector('#htmButton_postCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyCourseDialog').show();
  });

  document.querySelector('#htmButton_putimportCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyCourseDialog').show();
  });

  document.querySelector('#htmButton_searchpageCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyCourseDialog').show();
  });
});
