Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyProduct')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CompanyProduct', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyProduct', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyProduct', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyProduct', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyProductDialog').show();
  });

  document.querySelector('#htmButton_postCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyProductDialog').show();
  });

  document.querySelector('#htmButton_deleteCompanyProduct')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyProduct(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyProductDialog').show();
  });

  document.querySelector('#htmButton_searchpageCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyProductDialog').show();
  });
});
