Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyService')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyService', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyService_created')?.addEventListener('change', (event) => {
    sort('CompanyService', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'created', true);
  });
  document.querySelector('#pageStatsCompanyService_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyService_modified')?.addEventListener('change', (event) => {
    sort('CompanyService', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyService_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyService_archived')?.addEventListener('change', (event) => {
    sort('CompanyService', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyService_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyService_name')?.addEventListener('change', (event) => {
    sort('CompanyService', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'name', true);
  });
  document.querySelector('#pageStatsCompanyService_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyService_description')?.addEventListener('change', (event) => {
    sort('CompanyService', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'description', true);
  });
  document.querySelector('#pageStatsCompanyService_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyService_price')?.addEventListener('change', (event) => {
    sort('CompanyService', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_price')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'price', true);
  });
  document.querySelector('#pageStatsCompanyService_price')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'price', false);
  });

  document.querySelector('#pageSelectSortCompanyService_pageId')?.addEventListener('change', (event) => {
    sort('CompanyService', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyService_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyService_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyService', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyService_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyService_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyService', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyService_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyService_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyService', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyService_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyService_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyService', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyService_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyService_saves')?.addEventListener('change', (event) => {
    sort('CompanyService', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyService_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyService_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyService', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyService_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyService_editPage')?.addEventListener('change', (event) => {
    sort('CompanyService', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyService_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyService_userPage')?.addEventListener('change', (event) => {
    sort('CompanyService', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyService_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyService_download')?.addEventListener('change', (event) => {
    sort('CompanyService', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'download', true);
  });
  document.querySelector('#pageStatsCompanyService_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyService_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyService', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyService_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyService_objectText')?.addEventListener('change', (event) => {
    sort('CompanyService', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyService_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyService_solrId')?.addEventListener('change', (event) => {
    sort('CompanyService', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyService_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyService', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyService_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyService', 'solrId', false);
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
          document.querySelector('#pageFacetRangeGapCompanyService_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyService_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyService_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyService_price')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyService_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyService_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_editPage')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyService_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_userPage')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyService_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#fqCompanyService_download')?.addEventListener('change', (event) => {
            fqChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyService_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyService_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyService', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyService_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyService', event.currentTarget);
          });
});
