Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeIotService')?.addEventListener('sl-change', (event) => {
    facetRangeChange('IotService', event.target.value);
  });

  document.querySelector('#htmDropdown_ngsildTenant')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('IotService', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_ngsildPath')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('IotService', item.value, item.checked);
    }
  });

  document.querySelector('#htmDropdown_editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    if (action === 'sort') {
      sort('IotService', item.value, item.checked);
    }
  });

  document.querySelector('#htmButton_patchIotService')?.addEventListener('click', (event) => {
    document.querySelector('#patchIotServiceDialog').show();
  });

  document.querySelector('#htmButton_postIotService')?.addEventListener('click', (event) => {
    document.querySelector('#postIotServiceDialog').show();
  });

  document.querySelector('#htmButton_deleteIotService')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteIotService(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportIotService')?.addEventListener('click', (event) => {
    document.querySelector('#putimportIotServiceDialog').show();
  });

  document.querySelector('#htmButton_searchpageIotService')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageIotServiceDialog').show();
  });
});
