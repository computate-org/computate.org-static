Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyEvent')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CompanyEvent', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyEvent', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyEvent', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyEvent', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyEventDialog').show();
  });

  document.querySelector('#htmButton_postCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyEventDialog').show();
  });

  document.querySelector('#htmButton_deleteCompanyEvent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyEvent(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyEventDialog').show();
  });

  document.querySelector('#htmButton_searchpageCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyEventDialog').show();
  });
});
