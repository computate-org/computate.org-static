Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeUseCase')?.addEventListener('change', (event) => {
    facetRangeChange('UseCase', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-UseCase-name').innerText == undefined);
    if (action === 'sort') {
      sort('UseCase', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortUseCase_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortUseCase_name')?.addEventListener('change', (event) => {
    sort('UseCase', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-authorName')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-UseCase-authorName').innerText == undefined);
    if (action === 'sort') {
      sort('UseCase', 'authorName', checked ? order : '');
      document.querySelector('#pageFacetSortUseCase_authorName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortUseCase_authorName')?.addEventListener('change', (event) => {
    sort('UseCase', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-UseCase-description').innerText == undefined);
    if (action === 'sort') {
      sort('UseCase', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortUseCase_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortUseCase_description')?.addEventListener('change', (event) => {
    sort('UseCase', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-UseCase-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('UseCase', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortUseCase_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortUseCase_editPage')?.addEventListener('change', (event) => {
    sort('UseCase', 'editPage', event.currentTarget.value);
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
