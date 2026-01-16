Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyEvent')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyEvent', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyEvent_created')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'created', true);
  });
  document.querySelector('#pageStatsCompanyEvent_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_modified')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyEvent_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_archived')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyEvent_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_name')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'name', true);
  });
  document.querySelector('#pageStatsCompanyEvent_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_location')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'location', true);
  });
  document.querySelector('#pageStatsCompanyEvent_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'location', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_description')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'description', true);
  });
  document.querySelector('#pageStatsCompanyEvent_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'startDateTime', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_startDateTime')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'startDateTime', true);
  });
  document.querySelector('#pageStatsCompanyEvent_startDateTime')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'startDateTime', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'endDateTime', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_endDateTime')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'endDateTime', true);
  });
  document.querySelector('#pageStatsCompanyEvent_endDateTime')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'endDateTime', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_price')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_price')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'price', true);
  });
  document.querySelector('#pageStatsCompanyEvent_price')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'price', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_pageId')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyEvent_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyEvent_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyEvent_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyEvent_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyEvent_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_saves')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyEvent_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyEvent_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_editPage')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyEvent_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_userPage')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyEvent_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_download')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'download', true);
  });
  document.querySelector('#pageStatsCompanyEvent_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyEvent_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_objectText')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyEvent_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_solrId')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyEvent_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'solrId', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'emailTemplate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_emailTemplate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'emailTemplate', true);
  });
  document.querySelector('#pageStatsCompanyEvent_emailTemplate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'emailTemplate', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'storeUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_storeUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'storeUrl', true);
  });
  document.querySelector('#pageStatsCompanyEvent_storeUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'storeUrl', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_locationColors')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_locationColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'locationColors', true);
  });
  document.querySelector('#pageStatsCompanyEvent_locationColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'locationColors', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_locationTitles')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_locationTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'locationTitles', true);
  });
  document.querySelector('#pageStatsCompanyEvent_locationTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'locationTitles', false);
  });

  document.querySelector('#pageSelectSortCompanyEvent_locationLinks')?.addEventListener('change', (event) => {
    sort('CompanyEvent', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyEvent_locationLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyEvent', 'locationLinks', true);
  });
  document.querySelector('#pageStatsCompanyEvent_locationLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyEvent', 'locationLinks', false);
  });
          document.querySelector('#fqCompanyEvent_created')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_name')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_location')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_location')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_location')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_description')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_startDateTime')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_startDateTime')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_endDateTime')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_endDateTime')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_price')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_price')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_price')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_price')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_price')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_editPage')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_userPage')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_download')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_emailTemplate')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#fqCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyEvent', event.currentTarget, facetChangeCompanyEventSuccess, facetChangeCompanyEventError);
          });
          document.querySelector('#buttonFacetCompanyEvent_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyEvent', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyEvent_storeUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyEvent', event.currentTarget);
          });
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
