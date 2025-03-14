Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyService')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyService', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyService-name').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyService', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyService_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyService_name')?.addEventListener('change', (event) => {
    sort('CompanyService', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyService-description').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyService', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyService_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyService_description')?.addEventListener('change', (event) => {
    sort('CompanyService', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyService-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyService', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyService_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyService_editPage')?.addEventListener('change', (event) => {
    sort('CompanyService', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyService')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyServiceDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyService')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyServiceDialog').open = true;
  });

  document.querySelector('#htmButton_putimportCompanyService')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyServiceDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyService')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyServiceDialog').open = true;
  });
          document.querySelector('#fqCompanyService_created')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_name')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_description')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_price')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_price')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_download')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
});
