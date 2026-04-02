Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyAbout')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyAbout', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyAbout_created')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'created', true);
  });
  document.querySelector('#pageStatsCompanyAbout_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_modified')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyAbout_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_archived')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyAbout_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_name')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'name', true);
  });
  document.querySelector('#pageStatsCompanyAbout_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_description')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'description', true);
  });
  document.querySelector('#pageStatsCompanyAbout_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_authorName')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'authorName', true);
  });
  document.querySelector('#pageStatsCompanyAbout_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'authorName', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_authorUrl')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'authorUrl', true);
  });
  document.querySelector('#pageStatsCompanyAbout_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_pageImageUri')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsCompanyAbout_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_pageId')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyAbout_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyAbout_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyAbout_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyAbout_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyAbout_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_saves')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyAbout_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyAbout_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_editPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyAbout_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_userPage')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyAbout_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_download')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'download', true);
  });
  document.querySelector('#pageStatsCompanyAbout_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyAbout_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_objectText')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyAbout_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_solrId')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyAbout_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'solrId', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_courseNum')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'courseNum', true);
  });
  document.querySelector('#pageStatsCompanyAbout_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_pageVideoUrl')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageVideoUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_pageVideoUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'pageVideoUrl', true);
  });
  document.querySelector('#pageStatsCompanyAbout_pageVideoUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'pageVideoUrl', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_pageImageWidth')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsCompanyAbout_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_pageImageHeight')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsCompanyAbout_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_pageImageType')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageType', true);
  });
  document.querySelector('#pageStatsCompanyAbout_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_pageImageAlt')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsCompanyAbout_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsCompanyAbout_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_nextArticleIds')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsCompanyAbout_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_labelsString')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'labelsString', true);
  });
  document.querySelector('#pageStatsCompanyAbout_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_labels')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'labels', true);
  });
  document.querySelector('#pageStatsCompanyAbout_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'labels', false);
  });

  document.querySelector('#pageSelectSortCompanyAbout_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('CompanyAbout', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyAbout_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyAbout', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsCompanyAbout_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyAbout', 'relatedArticleIds', false);
  });
          document.querySelector('#fqCompanyAbout_created')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_name')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_description')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_authorName')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_authorUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_editPage')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_userPage')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_download')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_courseNum')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#fqCompanyAbout_pageVideoUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyAbout', event.currentTarget, facetChangeCompanyAboutSuccess, facetChangeCompanyAboutError);
          });
          document.querySelector('#buttonFacetCompanyAbout_pageVideoUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyAbout_pageVideoUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyAbout_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyAbout_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyAbout', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyAbout_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyAbout', event.currentTarget);
          });
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
