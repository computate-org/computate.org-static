Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyAbout')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyAbout', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyAbout-name').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyAbout', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyAbout_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyAbout_name')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyAbout-description').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyAbout', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyAbout_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyAbout_description')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyAbout-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyAbout', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyAbout_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyAbout_editPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyAboutDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyAboutDialog').open = true;
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
    document.querySelector('#putimportCompanyAboutDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyAbout')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyAboutDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyAbout')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyAbout(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyAbout_created')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_name')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_description')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyAbout_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
});
