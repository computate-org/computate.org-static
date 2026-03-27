Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeDeploySpine')?.addEventListener('change', (event) => {
    facetRangeChange('DeploySpine', event.target.value);
  });

  document.querySelector('#pageSelectSortDeploySpine_created')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'created', true);
  });
  document.querySelector('#pageStatsDeploySpine_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'created', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_modified')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'modified', true);
  });
  document.querySelector('#pageStatsDeploySpine_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'modified', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_archived')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'archived', true);
  });
  document.querySelector('#pageStatsDeploySpine_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'archived', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_name')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'name', true);
  });
  document.querySelector('#pageStatsDeploySpine_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'name', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_description')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'description', true);
  });
  document.querySelector('#pageStatsDeploySpine_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'description', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_authorName')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'authorName', true);
  });
  document.querySelector('#pageStatsDeploySpine_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'authorName', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_authorUrl')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'authorUrl', true);
  });
  document.querySelector('#pageStatsDeploySpine_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_pageImageUri')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsDeploySpine_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_pageId')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'pageId', true);
  });
  document.querySelector('#pageStatsDeploySpine_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'pageId', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_displayPage')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'displayPage', true);
  });
  document.querySelector('#pageStatsDeploySpine_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_classCanonicalName')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsDeploySpine_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_classSimpleName')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsDeploySpine_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsDeploySpine_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_saves')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'saves', true);
  });
  document.querySelector('#pageStatsDeploySpine_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'saves', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_objectTitle')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'objectTitle', true);
  });
  document.querySelector('#pageStatsDeploySpine_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_editPage')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'editPage', true);
  });
  document.querySelector('#pageStatsDeploySpine_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'editPage', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_userPage')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'userPage', true);
  });
  document.querySelector('#pageStatsDeploySpine_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'userPage', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_download')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'download', true);
  });
  document.querySelector('#pageStatsDeploySpine_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'download', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_objectSuggest')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsDeploySpine_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_objectText')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'objectText', true);
  });
  document.querySelector('#pageStatsDeploySpine_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'objectText', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_solrId')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'solrId', true);
  });
  document.querySelector('#pageStatsDeploySpine_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'solrId', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_courseNum')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'courseNum', true);
  });
  document.querySelector('#pageStatsDeploySpine_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_pageImageWidth')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsDeploySpine_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_pageImageHeight')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsDeploySpine_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_pageImageType')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'pageImageType', true);
  });
  document.querySelector('#pageStatsDeploySpine_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_pageImageAlt')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsDeploySpine_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsDeploySpine_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_nextArticleIds')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsDeploySpine_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_labelsString')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'labelsString', true);
  });
  document.querySelector('#pageStatsDeploySpine_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_labels')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'labels', true);
  });
  document.querySelector('#pageStatsDeploySpine_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'labels', false);
  });

  document.querySelector('#pageSelectSortDeploySpine_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('DeploySpine', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDeploySpine_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('DeploySpine', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsDeploySpine_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('DeploySpine', 'relatedArticleIds', false);
  });
          document.querySelector('#fqDeploySpine_created')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_created')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_created')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_name')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_name')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_name')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_description')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_description')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_description')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_authorName')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_authorUrl')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_pageId')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_displayPage')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_editPage')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_userPage')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_download')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_download')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_download')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#fqDeploySpine_courseNum')?.addEventListener('change', (event) => {
            fqChange('DeploySpine', event.currentTarget, facetChangeDeploySpineSuccess, facetChangeDeploySpineError);
          });
          document.querySelector('#buttonFacetDeploySpine_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDeploySpine_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDeploySpine_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartDeploySpine_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('DeploySpine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndDeploySpine_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('DeploySpine', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteDeploySpine')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteDeploySpine(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterDeploySpine')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterDeploySpine(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
