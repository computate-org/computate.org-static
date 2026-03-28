Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSwitchToLinux')?.addEventListener('change', (event) => {
    facetRangeChange('SwitchToLinux', event.target.value);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_created')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'created', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'created', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_modified')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'modified', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'modified', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_archived')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'archived', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'archived', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_name')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'name', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'name', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_description')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'description', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'description', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_authorName')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'authorName', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'authorName', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_authorUrl')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'authorUrl', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_pageImageUri')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_pageId')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'pageId', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'pageId', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_displayPage')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'displayPage', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_classSimpleName')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_saves')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'saves', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'saves', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_objectTitle')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_editPage')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'editPage', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_userPage')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'userPage', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_download')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'download', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'download', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_objectSuggest')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_objectText')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'objectText', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'objectText', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_solrId')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'solrId', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'solrId', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_courseNum')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'courseNum', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_pageImageWidth')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_pageImageHeight')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_pageImageType')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageType', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_pageImageAlt')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_nextArticleIds')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_labelsString')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'labelsString', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_labels')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'labels', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'labels', false);
  });

  document.querySelector('#pageSelectSortSwitchToLinux_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('SwitchToLinux', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSwitchToLinux_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SwitchToLinux', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsSwitchToLinux_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SwitchToLinux', 'relatedArticleIds', false);
  });
          document.querySelector('#fqSwitchToLinux_created')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_created')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_created')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_name')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_name')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_name')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_description')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_description')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_description')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_authorName')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_authorUrl')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_pageId')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_displayPage')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_editPage')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_userPage')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_download')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_download')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_download')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#fqSwitchToLinux_courseNum')?.addEventListener('change', (event) => {
            fqChange('SwitchToLinux', event.currentTarget, facetChangeSwitchToLinuxSuccess, facetChangeSwitchToLinuxError);
          });
          document.querySelector('#buttonFacetSwitchToLinux_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSwitchToLinux_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSwitchToLinux_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSwitchToLinux_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SwitchToLinux', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSwitchToLinux_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SwitchToLinux', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteSwitchToLinux')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteSwitchToLinux(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterSwitchToLinux')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterSwitchToLinux(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
