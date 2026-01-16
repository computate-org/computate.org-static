Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSpineProgramming')?.addEventListener('change', (event) => {
    facetRangeChange('SpineProgramming', event.target.value);
  });

  document.querySelector('#pageSelectSortSpineProgramming_created')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'created', true);
  });
  document.querySelector('#pageStatsSpineProgramming_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'created', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_modified')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'modified', true);
  });
  document.querySelector('#pageStatsSpineProgramming_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'modified', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_archived')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'archived', true);
  });
  document.querySelector('#pageStatsSpineProgramming_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'archived', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_authorName')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'authorName', true);
  });
  document.querySelector('#pageStatsSpineProgramming_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'authorName', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_authorUrl')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'authorUrl', true);
  });
  document.querySelector('#pageStatsSpineProgramming_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_pageImageUri')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsSpineProgramming_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_pageId')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'pageId', true);
  });
  document.querySelector('#pageStatsSpineProgramming_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'pageId', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_displayPage')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'displayPage', true);
  });
  document.querySelector('#pageStatsSpineProgramming_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSpineProgramming_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_classSimpleName')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSpineProgramming_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSpineProgramming_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_saves')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'saves', true);
  });
  document.querySelector('#pageStatsSpineProgramming_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'saves', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_objectTitle')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSpineProgramming_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_editPage')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'editPage', true);
  });
  document.querySelector('#pageStatsSpineProgramming_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_userPage')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'userPage', true);
  });
  document.querySelector('#pageStatsSpineProgramming_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_download')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'download', true);
  });
  document.querySelector('#pageStatsSpineProgramming_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'download', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_objectSuggest')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSpineProgramming_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_objectText')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'objectText', true);
  });
  document.querySelector('#pageStatsSpineProgramming_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'objectText', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_solrId')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'solrId', true);
  });
  document.querySelector('#pageStatsSpineProgramming_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'solrId', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_importance')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'importance', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_importance')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'importance', true);
  });
  document.querySelector('#pageStatsSpineProgramming_importance')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'importance', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_courseNum')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'courseNum', true);
  });
  document.querySelector('#pageStatsSpineProgramming_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_lessonNum')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'lessonNum', true);
  });
  document.querySelector('#pageStatsSpineProgramming_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_name')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'name', true);
  });
  document.querySelector('#pageStatsSpineProgramming_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'name', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_description')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'description', true);
  });
  document.querySelector('#pageStatsSpineProgramming_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'description', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_pageImageWidth')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsSpineProgramming_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_pageImageHeight')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsSpineProgramming_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_pageImageType')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageType', true);
  });
  document.querySelector('#pageStatsSpineProgramming_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_pageImageAlt')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsSpineProgramming_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsSpineProgramming_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_nextArticleIds')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsSpineProgramming_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_labelsString')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'labelsString', true);
  });
  document.querySelector('#pageStatsSpineProgramming_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_labels')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'labels', true);
  });
  document.querySelector('#pageStatsSpineProgramming_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'labels', false);
  });

  document.querySelector('#pageSelectSortSpineProgramming_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('SpineProgramming', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineProgramming_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineProgramming', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsSpineProgramming_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineProgramming', 'relatedArticleIds', false);
  });
          document.querySelector('#fqSpineProgramming_created')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_created')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_created')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_authorName')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_authorUrl')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_pageId')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_displayPage')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_editPage')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_userPage')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_download')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_download')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_download')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_importance')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_importance')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_importance')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_importance')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_importance')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_importance')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_courseNum')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#fqSpineProgramming_lessonNum')?.addEventListener('change', (event) => {
            fqChange('SpineProgramming', event.currentTarget, facetChangeSpineProgrammingSuccess, facetChangeSpineProgrammingError);
          });
          document.querySelector('#buttonFacetSpineProgramming_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineProgramming_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineProgramming_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineProgramming_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineProgramming', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineProgramming_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineProgramming', event.currentTarget);
          });
});

  document.querySelector('#htmButton_patchSpineProgramming')?.addEventListener('click', (event) => {
    document.querySelector('#patchSpineProgrammingDialog').open = true;
  });

  document.querySelector('#htmButton_postSpineProgramming')?.addEventListener('click', (event) => {
    document.querySelector('#postSpineProgrammingDialog').open = true;
  });

  document.querySelector('#htmButton_putimportSpineProgramming')?.addEventListener('click', (event) => {
    document.querySelector('#putimportSpineProgrammingDialog').open = true;
  });

  document.querySelector('#htmButton_deleteSpineProgramming')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteSpineProgramming(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_searchpageSpineProgramming')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSpineProgrammingDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterSpineProgramming')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterSpineProgramming(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
