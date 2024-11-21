Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyAbout')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CompanyAbout', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyAbout', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyAbout', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('CompanyAbout', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyAboutDialog').show();
  });

  document.querySelector('#htmButton_postCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyAboutDialog').show();
  });

  document.querySelector('#htmButton_deleteCompanyAbout')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyAbout(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyAboutDialog').show();
  });

  document.querySelector('#htmButton_searchpageCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyAboutDialog').show();
  });
});
