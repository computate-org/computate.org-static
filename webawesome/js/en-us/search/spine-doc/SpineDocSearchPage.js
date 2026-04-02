Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSpineDoc')?.addEventListener('change', (event) => {
    facetRangeChange('SpineDoc', event.target.value);
  });

  document.querySelector('#pageSelectSortSpineDoc_created')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'created', true);
  });
  document.querySelector('#pageStatsSpineDoc_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'created', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_modified')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'modified', true);
  });
  document.querySelector('#pageStatsSpineDoc_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'modified', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_archived')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'archived', true);
  });
  document.querySelector('#pageStatsSpineDoc_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'archived', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_authorName')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'authorName', true);
  });
  document.querySelector('#pageStatsSpineDoc_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'authorName', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_authorUrl')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'authorUrl', true);
  });
  document.querySelector('#pageStatsSpineDoc_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_pageImageUri')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsSpineDoc_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_pageId')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'pageId', true);
  });
  document.querySelector('#pageStatsSpineDoc_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'pageId', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_displayPage')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'displayPage', true);
  });
  document.querySelector('#pageStatsSpineDoc_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSpineDoc_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_classSimpleName')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSpineDoc_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSpineDoc_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_saves')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'saves', true);
  });
  document.querySelector('#pageStatsSpineDoc_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'saves', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_objectTitle')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSpineDoc_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_editPage')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'editPage', true);
  });
  document.querySelector('#pageStatsSpineDoc_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_userPage')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'userPage', true);
  });
  document.querySelector('#pageStatsSpineDoc_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_download')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'download', true);
  });
  document.querySelector('#pageStatsSpineDoc_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'download', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_objectSuggest')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSpineDoc_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_objectText')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'objectText', true);
  });
  document.querySelector('#pageStatsSpineDoc_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'objectText', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_solrId')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'solrId', true);
  });
  document.querySelector('#pageStatsSpineDoc_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'solrId', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_importance')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'importance', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_importance')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'importance', true);
  });
  document.querySelector('#pageStatsSpineDoc_importance')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'importance', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_courseNum')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'courseNum', true);
  });
  document.querySelector('#pageStatsSpineDoc_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_lessonNum')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'lessonNum', true);
  });
  document.querySelector('#pageStatsSpineDoc_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_name')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'name', true);
  });
  document.querySelector('#pageStatsSpineDoc_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'name', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_description')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'description', true);
  });
  document.querySelector('#pageStatsSpineDoc_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'description', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_pageVideoUrl')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'pageVideoUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_pageVideoUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'pageVideoUrl', true);
  });
  document.querySelector('#pageStatsSpineDoc_pageVideoUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'pageVideoUrl', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_pageImageWidth')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsSpineDoc_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_pageImageHeight')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsSpineDoc_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_pageImageType')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'pageImageType', true);
  });
  document.querySelector('#pageStatsSpineDoc_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_pageImageAlt')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsSpineDoc_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsSpineDoc_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_nextArticleIds')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsSpineDoc_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_labelsString')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'labelsString', true);
  });
  document.querySelector('#pageStatsSpineDoc_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_labels')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'labels', true);
  });
  document.querySelector('#pageStatsSpineDoc_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'labels', false);
  });

  document.querySelector('#pageSelectSortSpineDoc_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('SpineDoc', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSpineDoc_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SpineDoc', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsSpineDoc_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SpineDoc', 'relatedArticleIds', false);
  });
          document.querySelector('#fqSpineDoc_created')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_created')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_created')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_authorName')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_authorUrl')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_pageId')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_displayPage')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_editPage')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_userPage')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_download')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_download')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_download')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_importance')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_importance')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_importance')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_importance')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_importance')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_importance')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_courseNum')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_lessonNum')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#fqSpineDoc_pageVideoUrl')?.addEventListener('change', (event) => {
            fqChange('SpineDoc', event.currentTarget, facetChangeSpineDocSuccess, facetChangeSpineDocError);
          });
          document.querySelector('#buttonFacetSpineDoc_pageVideoUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSpineDoc_pageVideoUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSpineDoc_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSpineDoc_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('SpineDoc', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSpineDoc_pageVideoUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('SpineDoc', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteSpineDoc')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteSpineDoc(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterSpineDoc')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterSpineDoc(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
