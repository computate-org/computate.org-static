Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyResearch')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyResearch', event.target.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_created')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_modified')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_archived')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_name')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_description')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_pageId')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_saves')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_editPage')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_userPage')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_download')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_objectText')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyResearch_solrId')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'solrId', event.currentTarget.value);
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
