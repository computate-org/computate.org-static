Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeComputateDeveloper')?.addEventListener('change', (event) => {
    facetRangeChange('ComputateDeveloper', event.target.value);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_created')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'created', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'created', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_modified')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'modified', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'modified', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_archived')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'archived', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'archived', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_name')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'name', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'name', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_description')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'description', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'description', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_authorName')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'authorName', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'authorName', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_authorUrl')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'authorUrl', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_pageImageUri')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_pageId')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageId', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageId', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_displayPage')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'displayPage', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_classSimpleName')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_saves')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'saves', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'saves', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_objectTitle')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'objectTitle', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_editPage')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'editPage', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'editPage', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_userPage')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'userPage', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'userPage', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_download')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'download', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'download', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_objectSuggest')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_objectText')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'objectText', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'objectText', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_solrId')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'solrId', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'solrId', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_courseNum')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'courseNum', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_lessonNum')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'lessonNum', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_pageImageWidth')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_pageImageHeight')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_pageImageType')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageType', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_pageImageAlt')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_nextArticleIds')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_labelsString')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'labelsString', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_labels')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'labels', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'labels', false);
  });

  document.querySelector('#pageSelectSortComputateDeveloper_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('ComputateDeveloper', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsComputateDeveloper_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ComputateDeveloper', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsComputateDeveloper_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ComputateDeveloper', 'relatedArticleIds', false);
  });
          document.querySelector('#fqComputateDeveloper_created')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_created')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_created')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_name')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_name')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_name')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_description')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_description')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_description')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_authorName')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_authorUrl')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_pageId')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_displayPage')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_editPage')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_userPage')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_download')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_download')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_download')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_courseNum')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#fqComputateDeveloper_lessonNum')?.addEventListener('change', (event) => {
            fqChange('ComputateDeveloper', event.currentTarget, facetChangeComputateDeveloperSuccess, facetChangeComputateDeveloperError);
          });
          document.querySelector('#buttonFacetComputateDeveloper_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotComputateDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapComputateDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartComputateDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('ComputateDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndComputateDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('ComputateDeveloper', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteComputateDeveloper')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteComputateDeveloper(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterComputateDeveloper')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterComputateDeveloper(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
