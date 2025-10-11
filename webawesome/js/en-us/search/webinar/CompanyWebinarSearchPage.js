Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyWebinar')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyWebinar', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_pk')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'pk', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'pk', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_created')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'created', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_modified')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_archived')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_name')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'name', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_description')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'description', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_webinarUrlAmericas')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'webinarUrlAmericas', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_webinarUrlAmericas')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'webinarUrlAmericas', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_webinarUrlAmericas')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'webinarUrlAmericas', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_webinarUrlApac')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'webinarUrlApac', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_webinarUrlApac')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'webinarUrlApac', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_webinarUrlApac')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'webinarUrlApac', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_webinarUrlEmea')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'webinarUrlEmea', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_webinarUrlEmea')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'webinarUrlEmea', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_webinarUrlEmea')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'webinarUrlEmea', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_icalUrl')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'icalUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_icalUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'icalUrl', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_icalUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'icalUrl', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_nextWebinar')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'nextWebinar', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_nextWebinar')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'nextWebinar', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_nextWebinar')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'nextWebinar', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_pageId')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_sessionId')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'sessionId', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_userKey')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'userKey', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'userKey', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_saves')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_editPage')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_userPage')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_download')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'download', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_objectText')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_solrId')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'solrId', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_nextWebinarsBegin')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'nextWebinarsBegin', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_nextWebinarsBegin')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'nextWebinarsBegin', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_nextWebinarsBegin')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'nextWebinarsBegin', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_joinUrl')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'joinUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_joinUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'joinUrl', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_joinUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'joinUrl', false);
  });

  document.querySelector('#pageSelectSortCompanyWebinar_joinUri')?.addEventListener('change', (event) => {
    sort('CompanyWebinar', 'joinUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebinar_joinUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebinar', 'joinUri', true);
  });
  document.querySelector('#pageStatsCompanyWebinar_joinUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebinar', 'joinUri', false);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_webinarUrlAmericas')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_webinarUrlApac')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_webinarUrlEmea')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_icalUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_editPage')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebinar_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_userPage')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebinar_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebinar_download')?.addEventListener('change', (event) => {
            fqChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyWebinar_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebinar_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebinar', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebinar_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyWebinar_joinUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebinar', event.currentTarget);
          });
});
