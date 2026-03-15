Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeDeveloperComputerMinion')?.addEventListener('change', (event) => {
    facetRangeChange('DeveloperComputerMinion', event.target.value);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_created')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'created', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'created', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_modified')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'modified', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'modified', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_archived')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'archived', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'archived', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_name')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'name', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'name', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_description')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'description', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'description', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_authorName')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'authorName', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'authorName', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_authorUrl')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'authorUrl', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_pageImageUri')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_pageId')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageId', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageId', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_displayPage')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'displayPage', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_classCanonicalName')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_classSimpleName')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_saves')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'saves', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'saves', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_objectTitle')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'objectTitle', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_editPage')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'editPage', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'editPage', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_userPage')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'userPage', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'userPage', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_download')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'download', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'download', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_objectSuggest')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_objectText')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'objectText', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'objectText', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_solrId')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'solrId', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'solrId', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_courseNum')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'courseNum', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_lessonNum')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'lessonNum', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_pageImageWidth')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_pageImageHeight')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_pageImageType')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageType', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_pageImageAlt')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_nextArticleIds')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_labelsString')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'labelsString', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_labels')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'labels', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'labels', false);
  });

  document.querySelector('#pageSelectSortDeveloperComputerMinion_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('DeveloperComputerMinion', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeveloperComputerMinion_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsDeveloperComputerMinion_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeveloperComputerMinion', 'relatedArticleIds', false);
  });
          document.querySelector('#fqDeveloperComputerMinion_created')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_created')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_created')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_name')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_name')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_name')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_description')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_description')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_description')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_authorName')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_authorUrl')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_pageId')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_displayPage')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_editPage')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_userPage')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_download')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_download')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_download')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_courseNum')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#fqDeveloperComputerMinion_lessonNum')?.addEventListener('change', (event) => {
            fqChange('DeveloperComputerMinion', event.currentTarget, facetChangeDeveloperComputerMinionSuccess, facetChangeDeveloperComputerMinionError);
          });
          document.querySelector('#buttonFacetDeveloperComputerMinion_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeveloperComputerMinion_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeveloperComputerMinion_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeveloperComputerMinion_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeveloperComputerMinion', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeveloperComputerMinion_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeveloperComputerMinion', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteDeveloperComputerMinion')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteDeveloperComputerMinion(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterDeveloperComputerMinion')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterDeveloperComputerMinion(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
