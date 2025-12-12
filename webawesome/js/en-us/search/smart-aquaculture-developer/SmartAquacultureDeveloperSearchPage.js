Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSmartAquacultureDeveloper')?.addEventListener('change', (event) => {
    facetRangeChange('SmartAquacultureDeveloper', event.target.value);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_created')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'created', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'created', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_modified')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'modified', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'modified', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_archived')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'archived', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'archived', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_name')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'name', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'name', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_description')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'description', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'description', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_authorName')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'authorName', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'authorName', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'authorUrl', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_pageId')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageId', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageId', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_displayPage')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'displayPage', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_classSimpleName')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_saves')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'saves', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'saves', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_objectTitle')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_editPage')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'editPage', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_userPage')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'userPage', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_download')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'download', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'download', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_objectSuggest')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_objectText')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'objectText', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'objectText', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_solrId')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'solrId', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'solrId', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_courseNum')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'courseNum', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'lessonNum', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_pageImageWidth')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_pageImageHeight')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_pageImageType')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageType', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_pageImageAlt')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_nextArticleIds')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_labelsString')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'labelsString', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_labels')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'labels', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'labels', false);
  });

  document.querySelector('#pageSelectSortSmartAquacultureDeveloper_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('SmartAquacultureDeveloper', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSmartAquacultureDeveloper_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsSmartAquacultureDeveloper_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SmartAquacultureDeveloper', 'relatedArticleIds', false);
  });

  document.querySelector('#htmButton_patchSmartAquacultureDeveloper')?.addEventListener('click', (event) => {
    document.querySelector('#patchSmartAquacultureDeveloperDialog').open = true;
  });

  document.querySelector('#htmButton_postSmartAquacultureDeveloper')?.addEventListener('click', (event) => {
    document.querySelector('#postSmartAquacultureDeveloperDialog').open = true;
  });

  document.querySelector('#htmButton_deleteSmartAquacultureDeveloper')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteSmartAquacultureDeveloper(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportSmartAquacultureDeveloper')?.addEventListener('click', (event) => {
    document.querySelector('#putimportSmartAquacultureDeveloperDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageSmartAquacultureDeveloper')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSmartAquacultureDeveloperDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterSmartAquacultureDeveloper')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterSmartAquacultureDeveloper(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqSmartAquacultureDeveloper_created')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_created')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_created')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_name')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_name')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_name')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_description')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_description')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_description')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_authorName')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_pageId')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_editPage')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_userPage')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_download')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_download')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_download')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#fqSmartAquacultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            fqChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetSmartAquacultureDeveloper_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSmartAquacultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSmartAquacultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSmartAquacultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('SmartAquacultureDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSmartAquacultureDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('SmartAquacultureDeveloper', event.currentTarget);
          });
});
