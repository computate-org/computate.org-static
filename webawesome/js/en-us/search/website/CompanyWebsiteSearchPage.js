Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyWebsite')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyWebsite', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_created')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'created', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_modified')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_archived')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_name')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'name', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_description')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'description', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_pageId')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_saves')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_editPage')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_userPage')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_download')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'download', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_objectText')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_solrId')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'solrId', false);
  });

  document.querySelector('#pageSelectSortCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
    sort('CompanyWebsite', 'websiteNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyWebsite_websiteNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyWebsite', 'websiteNum', true);
  });
  document.querySelector('#pageStatsCompanyWebsite_websiteNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyWebsite', 'websiteNum', false);
  });
          document.querySelector('#fqCompanyWebsite_created')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_name')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_description')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_editPage')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_userPage')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_download')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#fqCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
            fqChange('CompanyWebsite', event.currentTarget, facetChangeCompanyWebsiteSuccess, facetChangeCompanyWebsiteError);
          });
          document.querySelector('#buttonFacetCompanyWebsite_websiteNum')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyWebsite', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyWebsite_websiteNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyWebsite', event.currentTarget);
          });
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
