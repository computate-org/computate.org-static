Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyService')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyService', event.target.value);
  });

  document.querySelector('#pageFacetSortCompanyService_created')?.addEventListener('change', (event) => {
    sort('CompanyService', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_modified')?.addEventListener('change', (event) => {
    sort('CompanyService', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_archived')?.addEventListener('change', (event) => {
    sort('CompanyService', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_name')?.addEventListener('change', (event) => {
    sort('CompanyService', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_description')?.addEventListener('change', (event) => {
    sort('CompanyService', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_price')?.addEventListener('change', (event) => {
    sort('CompanyService', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_pageId')?.addEventListener('change', (event) => {
    sort('CompanyService', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyService', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyService', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyService', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyService', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_saves')?.addEventListener('change', (event) => {
    sort('CompanyService', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyService', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_editPage')?.addEventListener('change', (event) => {
    sort('CompanyService', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_userPage')?.addEventListener('change', (event) => {
    sort('CompanyService', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_download')?.addEventListener('change', (event) => {
    sort('CompanyService', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyService', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_objectText')?.addEventListener('change', (event) => {
    sort('CompanyService', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyService_solrId')?.addEventListener('change', (event) => {
    sort('CompanyService', 'solrId', event.currentTarget.value);
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
});
