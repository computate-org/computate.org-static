Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyEvent')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyEvent', event.target.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_created')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_modified')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_archived')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_name')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_location')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_description')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'startDateTime', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'endDateTime', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_price')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_pageId')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_saves')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_editPage')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_userPage')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_download')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_objectText')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_solrId')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'emailTemplate', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'storeUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_locationColors')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_locationTitles')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyEvent_locationLinks')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyEventDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyEventDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCompanyEvent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyEvent(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyEventDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyEvent')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyEventDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyEvent')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyEvent(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyEvent_created')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_name')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_location')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_location')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_location')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_description')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_startDateTime')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_endDateTime')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_price')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_price')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyEvent_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
});
