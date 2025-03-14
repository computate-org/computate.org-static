Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyProduct')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyProduct', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyProduct-name').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyProduct', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyProduct_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyProduct_name')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyProduct-description').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyProduct', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyProduct_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyProduct_description')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CompanyProduct-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('CompanyProduct', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortCompanyProduct_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCompanyProduct_editPage')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyProductDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyProductDialog').open = true;
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
    document.querySelector('#putimportCompanyProductDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyProduct')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyProductDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyProduct')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyProduct(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyProduct_created')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_name')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_description')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_price')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_price')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_download')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_emailTemplate')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_emailTemplate')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_storeUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_storeUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_downloadUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_downloadUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_downloadUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#fqCompanyProduct_productNum')?.addEventListener('change', (event) => {
            fqChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyProduct_productNum')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyProduct', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyProduct_productNum')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyProduct', event.currentTarget);
          });
});
