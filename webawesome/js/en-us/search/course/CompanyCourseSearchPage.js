Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyCourse')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyCourse', event.target.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_created')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_modified')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_archived')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_name')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_description')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_price')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_pageId')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_saves')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_editPage')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_userPage')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_download')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_objectText')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_solrId')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'emailTemplate', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'storeUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'downloadUri', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyCourseDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyCourseDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCompanyCourse')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyCourse(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyCourseDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyCourseDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyCourse')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyCourse(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyCourse_created')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_name')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_description')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_price')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_price')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_downloadUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
});
