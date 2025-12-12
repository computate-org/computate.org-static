Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCompanyCourse')?.addEventListener('change', (event) => {
    facetRangeChange('CompanyCourse', event.target.value);
  });

  document.querySelector('#pageSelectSortCompanyCourse_created')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'created', true);
  });
  document.querySelector('#pageStatsCompanyCourse_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'created', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_modified')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'modified', true);
  });
  document.querySelector('#pageStatsCompanyCourse_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'modified', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_archived')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'archived', true);
  });
  document.querySelector('#pageStatsCompanyCourse_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'archived', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_name')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'name', true);
  });
  document.querySelector('#pageStatsCompanyCourse_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'name', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_description')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'description', true);
  });
  document.querySelector('#pageStatsCompanyCourse_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'description', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_price')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_price')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'price', true);
  });
  document.querySelector('#pageStatsCompanyCourse_price')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'price', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_pageImageUri')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsCompanyCourse_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_pageId')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'pageId', true);
  });
  document.querySelector('#pageStatsCompanyCourse_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'pageId', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_displayPage')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'displayPage', true);
  });
  document.querySelector('#pageStatsCompanyCourse_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_classCanonicalName')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCompanyCourse_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_classSimpleName')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCompanyCourse_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCompanyCourse_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_saves')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'saves', true);
  });
  document.querySelector('#pageStatsCompanyCourse_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'saves', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_objectTitle')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCompanyCourse_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_editPage')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'editPage', true);
  });
  document.querySelector('#pageStatsCompanyCourse_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_userPage')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'userPage', true);
  });
  document.querySelector('#pageStatsCompanyCourse_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_download')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'download', true);
  });
  document.querySelector('#pageStatsCompanyCourse_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'download', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_objectSuggest')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCompanyCourse_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_objectText')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'objectText', true);
  });
  document.querySelector('#pageStatsCompanyCourse_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_solrId')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'solrId', true);
  });
  document.querySelector('#pageStatsCompanyCourse_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'solrId', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'emailTemplate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_emailTemplate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'emailTemplate', true);
  });
  document.querySelector('#pageStatsCompanyCourse_emailTemplate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'emailTemplate', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'storeUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_storeUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'storeUrl', true);
  });
  document.querySelector('#pageStatsCompanyCourse_storeUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'storeUrl', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'downloadUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_downloadUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'downloadUri', true);
  });
  document.querySelector('#pageStatsCompanyCourse_downloadUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'downloadUri', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_pageImageWidth')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsCompanyCourse_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_pageImageType')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'pageImageType', true);
  });
  document.querySelector('#pageStatsCompanyCourse_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsCompanyCourse_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'relatedArticleIds', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_courseNum')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'courseNum', true);
  });
  document.querySelector('#pageStatsCompanyCourse_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortCompanyCourse_pageImageHeight')?.addEventListener('change', (event) => {
    sort('CompanyCourse', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCompanyCourse_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('CompanyCourse', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsCompanyCourse_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('CompanyCourse', 'pageImageHeight', false);
  });

  document.querySelector('#htmButton_patchCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#patchCompanyCourseDialog').open = true;
  });

  document.querySelector('#htmButton_postCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#postCompanyCourseDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCompanyCourse')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteCompanyCourse(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCompanyCourseDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCompanyCourse')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCompanyCourseDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCompanyCourse')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCompanyCourse(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCompanyCourse_created')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_created')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_name')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_name')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_description')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_description')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_price')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_price')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_price')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_price')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_price')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_price')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_pageId')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_displayPage')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_editPage')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_userPage')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_download')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_download')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_download')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_emailTemplate')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_storeUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_downloadUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_downloadUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#fqCompanyCourse_courseNum')?.addEventListener('change', (event) => {
            fqChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#buttonFacetCompanyCourse_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCompanyCourse_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCompanyCourse_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCompanyCourse_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('CompanyCourse', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCompanyCourse_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('CompanyCourse', event.currentTarget);
          });
});
