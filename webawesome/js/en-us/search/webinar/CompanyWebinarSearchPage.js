Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyWebinar')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyWebinar', event.target.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_pk')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_created')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_modified')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_archived')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_name')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_description')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_webinarUrlAmericas')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'webinarUrlAmericas', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_webinarUrlApac')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'webinarUrlApac', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_webinarUrlEmea')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'webinarUrlEmea', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_icalUrl')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'icalUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_nextWebinar')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'nextWebinar', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_pageId')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_sessionId')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_userKey')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_saves')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_editPage')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_userPage')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_download')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_objectText')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_solrId')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_nextWebinarsBegin')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'nextWebinarsBegin', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_joinUrl')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'joinUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCompanyWebinar_joinUri')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'joinUri', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyWebinarDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyWebinarDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCompanyWebinar')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyWebinar(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyWebinarDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyWebinar')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyWebinarDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyWebinar')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyWebinar(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyWebinar_created')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_archived')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_archived')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_archived')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_name')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_description')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_webinarUrlAmericas')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlAmericas')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlAmericas')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_webinarUrlApac')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlApac')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlApac')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_webinarUrlEmea')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_webinarUrlEmea')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_webinarUrlEmea')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_icalUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_icalUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_icalUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_joinUri')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_joinUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_joinUri')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
});
