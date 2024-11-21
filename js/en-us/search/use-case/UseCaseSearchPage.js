Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeUseCase')?.addEventListener('sl-change', (event) => {
    facetRangeChange('UseCase', event.target.value);
  });

  document.querySelector('#htmDropdown_name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('UseCase', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_authorName')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('UseCase', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('UseCase', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('UseCase', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchUseCase')?.addEventListener('click', (event) => {
    document.querySelector('#patchUseCaseDialog').show();
  });

  document.querySelector('#htmButton_postUseCase')?.addEventListener('click', (event) => {
    document.querySelector('#postUseCaseDialog').show();
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
    document.querySelector('#putimportUseCaseDialog').show();
  });

  document.querySelector('#htmButton_searchpageUseCase')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageUseCaseDialog').show();
  });
});
