Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSmartAgricultureDeveloper')?.addEventListener('change', (event) => {
    facetRangeChange('SmartAgricultureDeveloper', event.target.value);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_created')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'created', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'created', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_modified')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'modified', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'modified', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_archived')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'archived', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'archived', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_name')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'name', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'name', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_description')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'description', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'description', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_authorName')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'authorName', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'authorName', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'authorUrl', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_pageId')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageId', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageId', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_displayPage')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'displayPage', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_classSimpleName')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_saves')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'saves', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'saves', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_objectTitle')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_editPage')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'editPage', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_userPage')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'userPage', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_download')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'download', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'download', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_objectSuggest')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_objectText')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'objectText', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'objectText', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_solrId')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'solrId', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'solrId', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_courseNum')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'courseNum', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'lessonNum', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'pageVideoUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageVideoUrl', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageVideoUrl', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_pageImageWidth')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_pageImageHeight')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_pageImageType')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageType', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_pageImageAlt')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_nextArticleIds')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_labelsString')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'labelsString', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_labels')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'labels', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'labels', false);
  });

  document.querySelector('#pageSelectSortSmartAgricultureDeveloper_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('SmartAgricultureDeveloper', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAgricultureDeveloper_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsSmartAgricultureDeveloper_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAgricultureDeveloper', 'relatedArticleIds', false);
  });
          document.querySelector('#fqSmartAgricultureDeveloper_created')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_created')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_created')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_name')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_name')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_name')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_description')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_description')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_description')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_authorName')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_pageId')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_editPage')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_userPage')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_download')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_download')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_download')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('change', (event) => {
            fqChange('SmartAgricultureDeveloper', event.currentTarget, facetChangeSmartAgricultureDeveloperSuccess, facetChangeSmartAgricultureDeveloperError);
          });
          document.querySelector('#buttonFacetSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAgricultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAgricultureDeveloper_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAgricultureDeveloper', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteSmartAgricultureDeveloper')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteSmartAgricultureDeveloper(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterSmartAgricultureDeveloper')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterSmartAgricultureDeveloper(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
