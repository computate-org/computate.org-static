Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyWebsite')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyWebsite', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyWebsite-name').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyWebsite', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyWebsite_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyWebsite_name')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyWebsite-description').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyWebsite', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyWebsite_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyWebsite_description')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyWebsite-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyWebsite', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyWebsite_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyWebsite_editPage')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyWebsite')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyWebsiteDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyWebsite')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyWebsiteDialog').open = true;
  });

  document.querySelector('#htmButton_putimportCompanyWebsite')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyWebsiteDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyWebsite')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyWebsiteDialog').open = true;
  });
          document.querySelector('#fqCompanyWebsite_created')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebsite_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_name')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebsite_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_description')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebsite_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebsite_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebsite_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebsite_websiteNum')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
});
