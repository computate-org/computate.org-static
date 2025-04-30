Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyWebsite')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyWebsite', event.target.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_created')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_modified')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_archived')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_name')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_description')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_pageId')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_saves')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_editPage')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_userPage')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_download')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_objectText')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_solrId')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'websiteNum', event.currentTarget.value);
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
