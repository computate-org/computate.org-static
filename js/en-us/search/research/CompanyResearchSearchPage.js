Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyResearch')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyResearch', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyResearch-name').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyResearch', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyResearch_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyResearch_name')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyResearch-description').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyResearch', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyResearch_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyResearch_description')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyResearch-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyResearch', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyResearch_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyResearch_editPage')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyResearch')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyResearchDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyResearch')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyResearchDialog').open = true;
  });

  document.querySelector('#htmButton_putimportCompanyResearch')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyResearchDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyResearch')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyResearchDialog').open = true;
  });
          document.querySelector('#fqCompanyResearch_created')?.addEventListener('change', (event) => {
            fqChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyResearch_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyResearch_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#fqCompanyResearch_name')?.addEventListener('change', (event) => {
            fqChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyResearch_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyResearch_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#fqCompanyResearch_description')?.addEventListener('change', (event) => {
            fqChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyResearch_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyResearch_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#fqCompanyResearch_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyResearch_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyResearch_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#fqCompanyResearch_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyResearch_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyResearch_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyResearch', event.currentTarget);
          });
});
