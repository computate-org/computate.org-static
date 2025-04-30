Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyAbout')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyAbout', event.target.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_created')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_modified')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_archived')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_name')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_description')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_pageId')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_saves')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_editPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_userPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_download')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_objectText')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyAbout_solrId')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'solrId', event.currentTarget.value);
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
