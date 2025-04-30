Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyProduct')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyProduct', event.target.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_created')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_modified')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_archived')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_name')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_description')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_price')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_pageId')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_saves')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_editPage')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_userPage')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_download')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_objectText')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_solrId')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_emailTemplate')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'emailTemplate', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_storeUrl')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'storeUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_downloadUrl')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'downloadUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyProduct_productNum')?.addEventListener('change', (event) => {
    sort('CompanyProduct', 'productNum', event.currentTarget.value);
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
