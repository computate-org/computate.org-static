Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyResearch')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyResearch', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyResearch_created')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'created', true);
  });
  document.querySelector('#pageStatsCompanyResearch_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_modified')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyResearch_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_archived')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyResearch_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_name')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'name', true);
  });
  document.querySelector('#pageStatsCompanyResearch_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_description')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'description', true);
  });
  document.querySelector('#pageStatsCompanyResearch_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_pageId')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyResearch_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyResearch_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyResearch_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyResearch_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyResearch_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_saves')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyResearch_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyResearch_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_editPage')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyResearch_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_userPage')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyResearch_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_download')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'download', true);
  });
  document.querySelector('#pageStatsCompanyResearch_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyResearch_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_objectText')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyResearch_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyResearch_solrId')?.addEventListener('change', (event) => {
    sort('CompanyResearch', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyResearch_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyResearch', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyResearch_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyResearch', 'solrId', false);
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
          document.querySelector('#pageFacetRangeGapCompanyResearch_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyResearch_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyResearch_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyResearch', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyResearch_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyResearch_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyResearch_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyResearch', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyResearch_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyResearch_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyResearch_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyResearch', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyResearch_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyResearch_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyResearch_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyResearch', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapCompanyResearch_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyResearch_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyResearch_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#fqCompanyResearch_editPage')?.addEventListener('change', (event) => {
            fqChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyResearch_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyResearch_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyResearch_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyResearch_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyResearch_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#fqCompanyResearch_userPage')?.addEventListener('change', (event) => {
            fqChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyResearch_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyResearch_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyResearch_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyResearch_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyResearch_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#fqCompanyResearch_download')?.addEventListener('change', (event) => {
            fqChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyResearch_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyResearch_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyResearch_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyResearch_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyResearch', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyResearch_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyResearch', event.currentTarget);
          });
});
