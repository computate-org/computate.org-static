Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeUseCase')?.addEventListener('change', (event) => {
    facetRangeChange('UseCase', event.target.value);
  });

  document.querySelector('#pageSelectSortUseCase_created')?.addEventListener('change', (event) => {
    sort('UseCase', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'created', true);
  });
  document.querySelector('#pageStatsUseCase_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'created', false);
  });

  document.querySelector('#pageSelectSortUseCase_modified')?.addEventListener('change', (event) => {
    sort('UseCase', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'modified', true);
  });
  document.querySelector('#pageStatsUseCase_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'modified', false);
  });

  document.querySelector('#pageSelectSortUseCase_archived')?.addEventListener('change', (event) => {
    sort('UseCase', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'archived', true);
  });
  document.querySelector('#pageStatsUseCase_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'archived', false);
  });

  document.querySelector('#pageSelectSortUseCase_name')?.addEventListener('change', (event) => {
    sort('UseCase', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'name', true);
  });
  document.querySelector('#pageStatsUseCase_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'name', false);
  });

  document.querySelector('#pageSelectSortUseCase_authorName')?.addEventListener('change', (event) => {
    sort('UseCase', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'authorName', true);
  });
  document.querySelector('#pageStatsUseCase_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'authorName', false);
  });

  document.querySelector('#pageSelectSortUseCase_description')?.addEventListener('change', (event) => {
    sort('UseCase', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'description', true);
  });
  document.querySelector('#pageStatsUseCase_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'description', false);
  });

  document.querySelector('#pageSelectSortUseCase_pageId')?.addEventListener('change', (event) => {
    sort('UseCase', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'pageId', true);
  });
  document.querySelector('#pageStatsUseCase_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'pageId', false);
  });

  document.querySelector('#pageSelectSortUseCase_displayPage')?.addEventListener('change', (event) => {
    sort('UseCase', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'displayPage', true);
  });
  document.querySelector('#pageStatsUseCase_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortUseCase_classCanonicalName')?.addEventListener('change', (event) => {
    sort('UseCase', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsUseCase_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortUseCase_classSimpleName')?.addEventListener('change', (event) => {
    sort('UseCase', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsUseCase_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortUseCase_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('UseCase', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsUseCase_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortUseCase_saves')?.addEventListener('change', (event) => {
    sort('UseCase', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'saves', true);
  });
  document.querySelector('#pageStatsUseCase_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'saves', false);
  });

  document.querySelector('#pageSelectSortUseCase_objectTitle')?.addEventListener('change', (event) => {
    sort('UseCase', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'objectTitle', true);
  });
  document.querySelector('#pageStatsUseCase_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortUseCase_editPage')?.addEventListener('change', (event) => {
    sort('UseCase', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'editPage', true);
  });
  document.querySelector('#pageStatsUseCase_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'editPage', false);
  });

  document.querySelector('#pageSelectSortUseCase_userPage')?.addEventListener('change', (event) => {
    sort('UseCase', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'userPage', true);
  });
  document.querySelector('#pageStatsUseCase_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'userPage', false);
  });

  document.querySelector('#pageSelectSortUseCase_download')?.addEventListener('change', (event) => {
    sort('UseCase', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'download', true);
  });
  document.querySelector('#pageStatsUseCase_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'download', false);
  });

  document.querySelector('#pageSelectSortUseCase_objectSuggest')?.addEventListener('change', (event) => {
    sort('UseCase', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsUseCase_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortUseCase_objectText')?.addEventListener('change', (event) => {
    sort('UseCase', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'objectText', true);
  });
  document.querySelector('#pageStatsUseCase_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'objectText', false);
  });

  document.querySelector('#pageSelectSortUseCase_solrId')?.addEventListener('change', (event) => {
    sort('UseCase', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsUseCase_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('UseCase', 'solrId', true);
  });
  document.querySelector('#pageStatsUseCase_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('UseCase', 'solrId', false);
  });
          document.querySelector('#fqUseCase_created')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_created')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_created')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_name')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_name')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_name')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_authorName')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_description')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_description')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_description')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_pageId')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_displayPage')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_editPage')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_userPage')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_download')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget, facetChangeUseCaseSuccess, facetChangeUseCaseError);
          });
          document.querySelector('#buttonFacetUseCase_download')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_download')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapUseCase_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartUseCase_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndUseCase_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('UseCase', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteUseCase')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteUseCase(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterUseCase')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterUseCase(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
