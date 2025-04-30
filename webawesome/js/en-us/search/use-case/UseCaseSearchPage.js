Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeUseCase')?.addEventListener('change', (event) => {
    facetRangeChange('UseCase', event.target.value);
  });

  document.querySelector('#pageFacetSortUseCase_created')?.addEventListener('change', (event) => {
    sort('UseCase', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_modified')?.addEventListener('change', (event) => {
    sort('UseCase', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_archived')?.addEventListener('change', (event) => {
    sort('UseCase', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_name')?.addEventListener('change', (event) => {
    sort('UseCase', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_authorName')?.addEventListener('change', (event) => {
    sort('UseCase', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_description')?.addEventListener('change', (event) => {
    sort('UseCase', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_pageId')?.addEventListener('change', (event) => {
    sort('UseCase', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_displayPage')?.addEventListener('change', (event) => {
    sort('UseCase', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_classCanonicalName')?.addEventListener('change', (event) => {
    sort('UseCase', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_classSimpleName')?.addEventListener('change', (event) => {
    sort('UseCase', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('UseCase', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_saves')?.addEventListener('change', (event) => {
    sort('UseCase', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_objectTitle')?.addEventListener('change', (event) => {
    sort('UseCase', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_editPage')?.addEventListener('change', (event) => {
    sort('UseCase', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_userPage')?.addEventListener('change', (event) => {
    sort('UseCase', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_download')?.addEventListener('change', (event) => {
    sort('UseCase', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_objectSuggest')?.addEventListener('change', (event) => {
    sort('UseCase', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_objectText')?.addEventListener('change', (event) => {
    sort('UseCase', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortUseCase_solrId')?.addEventListener('change', (event) => {
    sort('UseCase', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchUseCase')?.addEventListener('click', (event) => {
    document.querySelector('#patchUseCaseDialog').open = true;
  });

  document.querySelector('#htmButton_postUseCase')?.addEventListener('click', (event) => {
    document.querySelector('#postUseCaseDialog').open = true;
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

  document.querySelector('#htmButton_putimportUseCase')?.addEventListener('click', (event) => {
    document.querySelector('#putimportUseCaseDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageUseCase')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageUseCaseDialog').open = true;
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
          document.querySelector('#fqUseCase_created')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget);
          });
          document.querySelector('#buttonFacetUseCase_created')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_created')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_name')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget);
          });
          document.querySelector('#buttonFacetUseCase_name')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_name')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_authorName')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget);
          });
          document.querySelector('#buttonFacetUseCase_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_description')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget);
          });
          document.querySelector('#buttonFacetUseCase_description')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_description')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_pageId')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget);
          });
          document.querySelector('#buttonFacetUseCase_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
          document.querySelector('#fqUseCase_displayPage')?.addEventListener('change', (event) => {
            fqChange('UseCase', event.currentTarget);
          });
          document.querySelector('#buttonFacetUseCase_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('UseCase', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotUseCase_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('UseCase', event.currentTarget);
          });
});
